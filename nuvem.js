/* Nuvem do Atlas público (Firebase): login com Google, progresso de cada aluno e contador de quem está online.
   Só a administradora lê os nomes de quem está online; os outros veem apenas o número. As regras do Firestore garantem isso no servidor. */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signInAnonymously, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, deleteDoc, collection, query, where, getDocs, serverTimestamp, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const app = initializeApp({
  apiKey: "AIzaSyAVh4qo9fhmnKB0ezwzVuozlZ8nLDEAUfI",
  authDomain: "uces-medicina.firebaseapp.com",
  projectId: "uces-medicina",
  storageBucket: "uces-medicina.firebasestorage.app",
  messagingSenderId: "559569120135",
  appId: "1:559569120135:web:8cfb4e290a2b5043da0122"
});
const auth = getAuth(app), db = getFirestore(app);
/* quem é administrador fica só nas regras do Firestore (não é público): o site descobre tentando ler os nomes */
const JANELA = 150000, PULSO = 60000;
let souAdmin = false, parado = false;
let user = null, onde = "inicio", ouvintes = [], aoOnline = null, timer = null;

function google(u) { return (u.providerData || []).find(p => p.providerId === "google.com") || {}; }
function info(u) {
  if (!u) return null;
  const g = google(u), email = u.email || g.email || "";
  return { uid: u.uid, anon: u.isAnonymous, nome: ((u.displayName || g.displayName || "").split(" ")[0] || "").slice(0, 40), email,
    admin: !u.isAnonymous && souAdmin };
}
function avisa() { const i = info(user); ouvintes.forEach(f => { try { f(i); } catch (e) {} }); }

async function contar() {
  if (!user || !aoOnline) return;
  try {
    const desde = Timestamp.fromMillis(Date.now() - JANELA);
    const n = (await getDocs(query(collection(db, "online"), where("ts", ">", desde)))).size;
    let nomes = null, era = souAdmin;
    if (!user.isAnonymous) { try { nomes = (await getDocs(query(collection(db, "online_nomes"), where("ts", ">", desde)))).docs.map(d => ({ uid: d.id, ...d.data(), eu: d.id === user.uid })); souAdmin = true; } catch (e) { souAdmin = false; } }
    else souAdmin = false;
    if (era !== souAdmin) avisa();
    aoOnline({ n: Math.max(1, n), nomes });
  } catch (e) { aoOnline(null); }
}
async function pulso() {
  if (!user || document.hidden || parado) return;
  try {
    await setDoc(doc(db, "online", user.uid), { ts: serverTimestamp() });
    await setDoc(doc(db, "online_nomes", user.uid), { nome: info(user).nome || "Visitante", onde: String(onde).slice(0, 60), ts: serverTimestamp() });
  } catch (e) {}
  contar();
}
function sai() { if (!user) return; deleteDoc(doc(db, "online", user.uid)).catch(() => {}); deleteDoc(doc(db, "online_nomes", user.uid)).catch(() => {}); }

onAuthStateChanged(auth, u => {
  user = u; souAdmin = false; avisa();
  if (!u) { if (!parado) signInAnonymously(auth).catch(() => { aoOnline && aoOnline(null); }); return; }
  if (parado) return;
  clearInterval(timer); timer = setInterval(pulso, PULSO); pulso();
});
document.addEventListener("visibilitychange", () => { if (document.hidden) sai(); else pulso(); });
addEventListener("pagehide", sai);

window.NUVEM = {
  onUser(f) { ouvintes.push(f); if (user) f(info(user)); },
  async entrar() {
    const p = new GoogleAuthProvider(); p.setCustomParameters({ prompt: "select_account" });
    /* tira a presença do visitante anônimo antes de trocar de conta: depois da troca as regras não deixam mais apagar */
    if (user && user.isAnonymous) await Promise.all([deleteDoc(doc(db, "online", user.uid)), deleteDoc(doc(db, "online_nomes", user.uid))]).catch(() => {});
    try { await signInWithPopup(auth, p); }
    catch (e) { if (e && (e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment")) return signInWithRedirect(auth, p); pulso(); throw e; }
  },
  async sair() { sai(); await signOut(auth); },
  async ler() { if (!user || user.isAnonymous) return null; const s = await getDoc(doc(db, "usuarios", user.uid)); return s.exists() ? s.data() : null; },
  async gravar(json, ts) { if (!user || user.isAnonymous) return false; await setDoc(doc(db, "usuarios", user.uid), { json, ts }); return true; },
  presenca(o) { onde = o || "inicio"; },
  /* perfil compartilhado: só com aceite expresso; null apaga */
  async perfil(d) { if (!user || user.isAnonymous) return false; const r = doc(db, "perfis", user.uid); if (!d) { await deleteDoc(r); return true; }
    await setDoc(r, { nome: String(d.nome || "").slice(0, 40), tel: String(d.tel || "").slice(0, 20), inicio: d.inicio || null, interesse: String(d.interesse || "").slice(0, 40), destino: String(d.destino || "").slice(0, 10), seq: d.seq || 0, sem: d.sem || 0, media: d.media == null ? null : d.media, ts: serverTimestamp() }); return true; },
  async perfis() { return (await getDocs(collection(db, "perfis"))).docs.map(x => ({ uid: x.id, ...x.data() })); },
  /* a pessoa retirou o aceite: para de enviar presença e sai da conta */
  async desligar() { parado = true; clearInterval(timer); sai(); aoOnline && aoOnline(null); try { await signOut(auth); } catch (e) {} },
  religar() { if (!parado) return; parado = false; if (!user) signInAnonymously(auth).catch(() => {}); else { timer = setInterval(pulso, PULSO); pulso(); } },
  /* apagar meus dados: progresso, presença e a conta do Firebase */
  async apagar() {
    if (!user) return true; const uid = user.uid;
    await Promise.all(["usuarios", "perfis", "online", "online_nomes"].map(c => deleteDoc(doc(db, c, uid)).catch(() => {})));
    parado = true; clearInterval(timer);
    try { await user.delete(); return true; } catch (e) { try { await signOut(auth); } catch (x) {} return e && e.code === "auth/requires-recent-login" ? "relogin" : true; }
  },
  onOnline(f) { aoOnline = f; contar(); }
};
dispatchEvent(new Event("nuvem"));
