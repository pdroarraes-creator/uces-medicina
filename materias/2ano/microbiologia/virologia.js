window.registrarUnidade("microbiologia", "virologia", 6, (T, U, H) => {
  /* ===== figuras: ilustração própria em SVG (padrão atlas-ux, seção 6). Tudo bilíngue. ===== */
  const f = n => (Math.round(n * 10) / 10).toString();
  const mk = s => () => { s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const CAP = T("Ilustração própria e simplificada, com formas aproximadas. Confira com o material da aula.", "Ilustración propia y simplificada, con formas aproximadas. Verificá con el material de la clase.");
  const tx = (x, y, s, o) => `<text x="${x}" y="${y}"${o && o.a ? ` text-anchor="${o.a}"` : ""}${o && o.c ? ` class="${o.c}"` : ""}>${s}</text>`;
  /* rótulo com linha de chamada: ponto (px,py) na figura, texto em (x,y); linhas extras descem 14 */
  const lab = (px, py, x, y, linhas) => `<path d="M${px} ${py}L${x - 5} ${y - 4}" stroke="var(--muted)" stroke-width=".9" fill="none"/><circle cx="${px}" cy="${py}" r="2" fill="var(--ink)" stroke="var(--surface)" stroke-width=".8"/>` + linhas.map((s, i) => tx(x, y + i * 14, s, i ? { c: "mut" } : null)).join("");
  /* corpo humano de frente e de costas (coordenadas locais 0..200 x 0..400): silhueta em meia-figura espelhada,
     volume por sombra interna desfocada, detalhes de superfície e máscara para recortar o exantema na pele */
  const S = .78, OY = 6, FX = 4 - 38 * S, BX = 356 - 162 * S;
  const F = (x, y) => [FX + x * S, OY + y * S], B = (x, y) => [BX + x * S, OY + y * S];
  const corpo = id => {
    const MEIA = "M99.5 58L108 58C108 66 110 72 118 76C128 79 138 80 143 88C148 95 149 110 149 124C149 136 151 144 152 154C154 170 157 188 158 204C160 212 163 222 162 232C161 240 155 244 152 238C150 232 149 222 148 212L147 206C145 190 142 172 140 156C139 144 137 130 134 114C133 110 132 108 131 110C130 128 126 146 125 162C124 176 128 190 131 202C134 216 133 240 130 262C128 278 126 288 126 298C127 312 126 330 122 348C120 358 118 364 118 370C120 376 127 380 128 386C128 391 118 392 110 391C105 390 104 384 105 376C106 366 106 356 106 346C107 330 108 312 107 298C106 284 105 262 103 238C102 226 101 218 99.5 214";
    const CAB = "M100 8C113 8 122 19 122 35C122 48 114 62 100 64C86 62 78 48 78 35C78 19 87 8 100 8Z";
    const esp = s => s + `<g transform="translate(200 0) scale(-1 1)">${s}</g>`;
    const forma = (fill, st, sw) => esp(`<path d="${MEIA}" fill="${fill}" stroke="${st}" stroke-width="${sw}" stroke-linejoin="round"/>`) + `<ellipse cx="77" cy="38" rx="3.6" ry="7" fill="${fill}" stroke="${st}" stroke-width="${sw}"/><ellipse cx="123" cy="38" rx="3.6" ry="7" fill="${fill}" stroke="${st}" stroke-width="${sw}"/><path d="${CAB}" fill="${fill}" stroke="${st}" stroke-width="${sw}"/>`;
    const m = `url(#${id}M)`, bl = `url(#${id}B)`;
    const pele = forma("#eac6ab", "none", 0) +
      `<g mask="${m}"><g filter="${bl}">${esp(`<path d="${MEIA}" fill="none" stroke="#a9704f" stroke-width="11" opacity=".75"/>`)}<path d="${CAB}" fill="none" stroke="#a9704f" stroke-width="9" opacity=".6"/>
        <ellipse cx="100" cy="68" rx="13" ry="6" fill="#a9704f" opacity=".6"/><ellipse cx="100" cy="216" rx="5" ry="16" fill="#a9704f" opacity=".5"/>`;
    const luzF = `<ellipse cx="100" cy="112" rx="20" ry="16" fill="#fbeadc" opacity=".8"/><ellipse cx="100" cy="166" rx="14" ry="22" fill="#fbeadc" opacity=".6"/><ellipse cx="116" cy="250" rx="6" ry="30" fill="#fbeadc" opacity=".7"/><ellipse cx="84" cy="250" rx="6" ry="30" fill="#fbeadc" opacity=".7"/><ellipse cx="115" cy="326" rx="4" ry="22" fill="#fbeadc" opacity=".6"/><ellipse cx="85" cy="326" rx="4" ry="22" fill="#fbeadc" opacity=".6"/><ellipse cx="100" cy="28" rx="11" ry="9" fill="#fbeadc" opacity=".7"/></g></g>`;
    const luzB = `<ellipse cx="114" cy="110" rx="10" ry="14" fill="#fbeadc" opacity=".7"/><ellipse cx="86" cy="110" rx="10" ry="14" fill="#fbeadc" opacity=".7"/><ellipse cx="113" cy="200" rx="9" ry="11" fill="#fbeadc" opacity=".7"/><ellipse cx="87" cy="200" rx="9" ry="11" fill="#fbeadc" opacity=".7"/><ellipse cx="115" cy="322" rx="5" ry="18" fill="#fbeadc" opacity=".6"/><ellipse cx="85" cy="322" rx="5" ry="18" fill="#fbeadc" opacity=".6"/><ellipse cx="100" cy="140" rx="3" ry="50" fill="#a9704f" opacity=".45"/></g></g>`;
    const cont = esp(`<path d="${MEIA}" fill="none" stroke="#8f5f45" stroke-width="1.3" stroke-linejoin="round"/>`) + `<path d="${CAB}" fill="none" stroke="#8f5f45" stroke-width="1.3"/>`;
    const tr = (d, o) => `<path d="${d}" fill="none" stroke="#9a6447" stroke-width="1.1" stroke-linecap="round" opacity="${o || .55}"/>`;
    const detF = esp(tr("M104 80Q116 80 130 85") + tr("M107 118Q118 124 128 116", .35) + tr("M103 211Q114 207 124 196", .4) + tr("M109 293Q116 298 123 293", .5) + tr("M150 236L151 228M155 238L156 229", .4)) + tr("M100 124L100 168", .25) + `<ellipse cx="100" cy="179" rx="1.5" ry="2.6" fill="#9a6447" opacity=".7"/>
      <path d="M79 36C76 14 90 5 100 5C110 5 124 14 121 36C118 25 112 19 104 19C94 18 84 22 79 36Z" fill="#4b3527"/><path d="M84 22C90 14 100 12 108 15" fill="none" stroke="#6b4c39" stroke-width="1.2"/>
      <path d="M88 36Q92 33.4 96 36Q92 38.2 88 36Z" fill="#fff" stroke="#6b4a3e" stroke-width=".6"/><path d="M104 36Q108 33.4 112 36Q108 38.2 104 36Z" fill="#fff" stroke="#6b4a3e" stroke-width=".6"/><circle cx="92" cy="36" r="1.5" fill="#3d2c25"/><circle cx="108" cy="36" r="1.5" fill="#3d2c25"/>
      ${tr("M87 31.5Q92 29.5 96 31.5", .6)}${tr("M104 31.5Q108 29.5 113 31.5", .6)}${tr("M100 40Q98 46 101 48", .5)}<path d="M94 54Q100 57.5 106 54" fill="none" stroke="#a5564c" stroke-width="1.4" stroke-linecap="round"/>`;
    const detB = esp(tr("M108 94Q124 96 124 114Q118 122 109 118", .45) + tr("M102 220Q116 227 128 217", .55) + tr("M109 291L123 291", .4) + tr("M108 372Q112 380 116 372", .35)) + tr("M100 192L100 216", .6) +
      `<path d="M78 40C75 14 90 5 100 5C110 5 125 14 122 40C122 51 113 59 100 60C87 59 78 51 78 40Z" fill="#4b3527"/><path d="M88 16C92 30 90 44 92 56M100 12C101 28 99 44 100 58M112 16C108 30 110 44 108 56" fill="none" stroke="#6b4c39" stroke-width="1.1" opacity=".8"/>`;
    return { defs: `<mask id="${id}M" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="400">${forma("#fff", "none", 0)}</mask><filter id="${id}B" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4.5"/></filter>`,
      m, frente: sobre => `<g transform="translate(${f(FX)} ${OY}) scale(${S})">${pele}${luzF}${sobre || ""}${detF}${cont}</g>`, costas: sobre => `<g transform="translate(${f(BX)} ${OY}) scale(${S})">${pele}${luzB}${sobre || ""}${detB}${cont}</g>` };
  };
  /* pontos espalhados por região do corpo (a máscara corta o que cair fora da pele) */
  const REG = { cab: [80, 120, 22, 62], pes: [91, 109, 60, 76], tro: [70, 130, 80, 212], bra: [132, 162, 92, 208], brb: [38, 68, 92, 208], pea: [101, 132, 214, 368], peb: [68, 99, 214, 368] };
  const espalha = (rnd, qtd, fn) => Object.keys(qtd).map(k => { const [x0, x1, y0, y1] = REG[k]; let s = ""; for (let i = 0; i < qtd[k]; i++) s += fn(x0 + rnd() * (x1 - x0), y0 + rnd() * (y1 - y0), rnd, k); return s; }).join("");
  /* rótulo central (entre as duas vistas) com chamadas para um ou mais pontos */
  const labC = (y, linhas, pts) => { const w = Math.max(...linhas.map((s, i) => s.length * (i ? 6 : 6.9)));
    return (pts || []).map(p => { const ex = p[0] < 180 ? 180 - w / 2 - 4 : 180 + w / 2 + 4; return `<path d="M${f(p[0])} ${f(p[1])}L${f(ex)} ${y - 4}" stroke="var(--muted)" stroke-width=".9" fill="none"/><circle cx="${f(p[0])}" cy="${f(p[1])}" r="2.1" fill="var(--ink)" stroke="var(--surface)" stroke-width=".8"/>`; }).join("") + linhas.map((s, i) => tx(180, y + i * 14, s, i ? { a: "middle", c: "mut" } : { a: "middle" })).join(""); };
  const vistas = () => tx(f(FX + 100 * S), 334, T("frente", "frente"), { a: "middle", c: "mut" }) + tx(f(BX + 100 * S), 334, T("costas", "espalda"), { a: "middle", c: "mut" });
  const seta = (id, cor) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${cor}"/></marker>`;

  const exantemas = primeiro => {
    const C = corpo("ex"), mm = s => `<g mask="${C.m}">${s}</g>`;
    const mancha = (x, y, r, k) => { const s = k === "tro" ? 3.4 + r() * 3.4 : k === "cab" || k === "pes" ? 1.8 + r() * 1.6 : 2.4 + r() * 2.2; return `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(s)}" ry="${f(s * .78)}" transform="rotate(${f(r() * 180)} ${f(x)} ${f(y)})" fill="#c22f28" opacity=".7"/>`; };
    const rosa = (x, y, r) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(1.8 + r() * 1.9)}" fill="#e05f86" opacity=".8"/>`;
    const sarF = espalha(mk(11), { cab: 20, pes: 6, tro: 150, bra: 30, brb: 30, pea: 26, peb: 26 }, mancha), sarB = espalha(mk(12), { pes: 6, tro: 160, bra: 30, brb: 30, pea: 26, peb: 26 }, mancha);
    const rubF = espalha(mk(23), { cab: 16, pes: 4, tro: 84, bra: 18, brb: 18, pea: 18, peb: 18 }, rosa), rubB = espalha(mk(24), { pes: 4, tro: 90, bra: 18, brb: 18, pea: 18, peb: 18 }, rosa);
    const nodo = (x, y, a) => `<ellipse cx="${x}" cy="${y}" rx="3" ry="4.6" transform="rotate(${a} ${x} ${y})" fill="#93b96c" stroke="#3f6426" stroke-width="1.1"/>`, par = (x, y, a) => nodo(x, y, a) + nodo(200 - x, y, -a);
    const ret = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#exRet)"/>`;
    const svg = `<svg class="sv" viewBox="0 0 360 340" role="img" aria-label="${T("Corpo de frente e de costas com o exantema de cada doença", "Cuerpo de frente y de espalda con el exantema de cada enfermedad")}"><defs>${C.defs}${seta("exS", "var(--ink)")}
      <pattern id="exRet" width="13" height="13" patternUnits="userSpaceOnUse"><circle cx="6.5" cy="6.5" r="6.6" fill="none" stroke="#cf4368" stroke-width="1.6"/><circle cx="0" cy="0" r="3" fill="none" stroke="#cf4368" stroke-width="1"/><circle cx="13" cy="13" r="3" fill="none" stroke="#cf4368" stroke-width="1"/></pattern>
      <radialGradient id="exBo"><stop offset="0" stop-color="#d8362f" stop-opacity=".95"/><stop offset=".65" stop-color="#d8362f" stop-opacity=".7"/><stop offset="1" stop-color="#d8362f" stop-opacity="0"/></radialGradient></defs>
      ${C.frente(`<g data-show="sar">${mm(sarF)}<ellipse cx="92" cy="36" rx="5.4" ry="3.4" fill="#d8362f" opacity=".55"/><ellipse cx="108" cy="36" rx="5.4" ry="3.4" fill="#d8362f" opacity=".55"/></g>
        <g data-show="rub">${mm(rubF)}${par(126.5, 46, 8)}${par(111, 66, 18)}</g>
        <g data-show="par"><ellipse cx="87" cy="47" rx="8.5" ry="7.5" fill="url(#exBo)"/><ellipse cx="113" cy="47" rx="8.5" ry="7.5" fill="url(#exBo)"/><g opacity=".85">${mm(ret(128, 94, 38, 112) + ret(34, 94, 38, 112) + ret(68, 218, 64, 72))}</g></g>`)}
      ${C.costas(`<g data-show="sar">${mm(sarB)}</g>
        <g data-show="rub">${mm(rubB)}${par(125.5, 47, 6)}${par(108, 58, 20)}${par(111, 68, 14)}</g>
        <g data-show="par" opacity=".85">${mm(ret(128, 94, 38, 112) + ret(34, 94, 38, 112) + ret(68, 186, 64, 104))}</g>`)}
      ${vistas()}
      <g data-show="sar">${labC(26, [T("conjuntivite", "conjuntivitis"), T("+ febre alta e tos", "+ fiebre alta y tos")], [F(112, 36)])}${labC(72, [T("manchas brancas", "manchas blancas"), T("na mucosa jugal", "en la mucosa yugal")], [F(105, 55)])}${labC(124, [T("morbiliforme", "morbiliforme"), T("vermelho, confluente", "rojo, confluente")], [F(124, 136), B(76, 136)])}</g>
      <g data-show="rub">${labC(26, [T("adenopatias", "adenopatías"), T("retroauricular, occipital", "retroauricular, occipital"), T("e cervical posterior", "y cervical posterior"), T("móveis e indolores", "móviles e indoloras")], [F(126.5, 46), B(92, 58)])}${labC(124, [T("exantema rosado", "exantema rosado"), T("confluente, febre baixa", "confluente, fiebre baja")], [F(124, 136), B(76, 136)])}</g>
      <g data-show="sar rub">${tx(180, 196, T("crânio-caudal", "cráneo-caudal"), { a: "middle" })}<path d="M180 206L180 286" stroke="var(--ink)" stroke-width="1.6" fill="none" marker-end="url(#exS)"/>${tx(180, 304, T("da cabeça aos pés", "de la cabeza a los pies"), { a: "middle", c: "mut" })}</g>
      <g data-show="par">${labC(26, [T("1ª fase", "1ª fase"), T("sinal da bofetada", "signo de la cachetada"), T("nas duas bochechas", "en las dos mejillas")], [F(116, 48)])}${labC(124, [T("2ª fase", "2ª fase"), T("exantema reticulado", "exantema reticulado"), T("braços, coxas e nádegas", "brazos, muslos y nalgas")], [F(150, 160), B(84, 204)])}${labC(214, [T("reaparece", "reaparece"), T("com calor e exercício", "con calor y ejercicio")])}</g>
    </svg>`;
    const est = [
      { id: "sar", r: T("Sarampo", "Sarampión"), d: T("<b>Sarampo:</b> pródromo de febre alta, tos e conjuntivite; depois exantema maculopapular morbiliforme, avermelhado e confluente, de progressão crânio-caudal, com descamação fina.", "<b>Sarampión:</b> pródromo de fiebre alta, tos y conjuntivitis; luego exantema maculopapular morbiliforme, rojo y confluente, de progresión cráneo-caudal, con descamación fina.") },
      { id: "rub", r: T("Rubéola", "Rubéola"), d: T("<b>Rubéola:</b> exantema maculopapular rosado, confluente e crânio-caudal, com febre baixa e adenopatias retroauriculares, occipitais e cervicais posteriores, móveis e indolores.", "<b>Rubéola:</b> exantema maculopapular rosado, confluente y cráneo-caudal, con fiebre baja y adenopatías retroauriculares, occipitales y cervicales posteriores, móviles e indoloras.") },
      { id: "par", r: T("Parvovírus", "Parvovirus"), d: T("<b>Parvovírus B19:</b> primeiro a vermelhidão nas duas bochechas (sinal da bofetada); depois o exantema reticulado, mais nos braços, coxas e nádegas, que reaparece com calor e atividade física.", "<b>Parvovirus B19:</b> primero el enrojecimiento de las dos mejillas (signo de la cachetada); luego el exantema reticulado, más en brazos, muslos y nalgas, que reaparece con calor y actividad física.") }];
    est.sort((a, b) => (b.id === primeiro) - (a.id === primeiro));
    return U.estados(T("Exantemas lado a lado", "Exantemas lado a lado"), svg, est, { cap: CAP });
  };

  const figuras = {
    ebvAssoc: () => {
      const r = mk(7); let esp = "", cd = "", mini = "";
      for (let i = 0; i < 20; i++) { const a = i / 20 * 6.2832, c = Math.cos(a), s = Math.sin(a); esp += `<path d="M${f(62 + 44 * c)} ${f(78 + 44 * s)}L${f(62 + 51 * c)} ${f(78 + 51 * s)}" stroke="#2f6f5f" stroke-width="1.6"/><circle cx="${f(62 + 53 * c)}" cy="${f(78 + 53 * s)}" r="2.5" fill="#3f9a82" stroke="#1f5446" stroke-width=".6"/>`; }
      [150, 165, 180, 195, 210, 60, 20, 300, 255].forEach(g => { const a = g * Math.PI / 180, c = Math.cos(a), s = Math.sin(a), x = 236 + 58 * c, y = 96 + 58 * s, x2 = 236 + 66 * c, y2 = 96 + 66 * s; cd += `<path d="M${f(x)} ${f(y)}L${f(x2)} ${f(y2)}M${f(x2)} ${f(y2)}L${f(x2 + 4 * Math.cos(a + .8))} ${f(y2 + 4 * Math.sin(a + .8))}M${f(x2)} ${f(y2)}L${f(x2 + 4 * Math.cos(a - .8))} ${f(y2 + 4 * Math.sin(a - .8))}" stroke="#b5651d" stroke-width="2" stroke-linecap="round" fill="none"/>`; });
      for (let i = 0; i < 10; i++) { const a = i / 10 * 6.2832; mini += `<circle cx="${f(155 + 13.5 * Math.cos(a))}" cy="${f(96 + 13.5 * Math.sin(a))}" r="1.5" fill="#3f9a82"/>`; }
      let hex = ""; for (let i = 0; i < 6; i++) { const a = i / 6 * 6.2832 + .5236; hex += f(62 + 25 * Math.cos(a)) + "," + f(78 + 25 * Math.sin(a)) + " "; }
      let dna = "M48 78"; for (let i = 1; i <= 14; i++) dna += `Q${f(48 + (i - .5) * 2)} ${f(78 + (i % 2 ? -1 : 1) * (9 + r() * 5))} ${f(48 + i * 2)} 78`;
      const cd8 = (x, y) => `<circle cx="${x}" cy="${y}" r="21" fill="url(#ebT)" stroke="#a8641c" stroke-width="1.6"/><circle cx="${x + 2}" cy="${y + 1}" r="13" fill="#c97a2b" opacity=".9"/><circle cx="${x - 2}" cy="${y - 3}" r="4" fill="#e9a55b" opacity=".6"/>`;
      const chip = (x, w, s) => `<rect x="${x}" y="262" width="${w}" height="24" rx="12" fill="var(--sunk)" stroke="var(--line)"/>` + tx(x + w / 2, 278, s, { a: "middle" });
      const svg = `<svg class="sv" viewBox="0 0 360 336" role="img" aria-label="${T("EBV: vírus, entrada no linfócito B, resposta dos LT CD8+ e latência", "VEB: virus, entrada al linfocito B, respuesta de los LT CD8+ y latencia")}"><defs>${seta("ebS", "#c4332b")}${seta("ebG", "var(--muted)")}
        <radialGradient id="ebB" cx=".4" cy=".35"><stop offset="0" stop-color="#eef2ff"/><stop offset="1" stop-color="#b4c2ee"/></radialGradient><radialGradient id="ebN" cx=".4" cy=".35"><stop offset="0" stop-color="#9d8fd6"/><stop offset="1" stop-color="#57479a"/></radialGradient>
        <radialGradient id="ebT" cx=".4" cy=".35"><stop offset="0" stop-color="#fdebd0"/><stop offset="1" stop-color="#f0c189"/></radialGradient><radialGradient id="ebE" cx=".4" cy=".35"><stop offset="0" stop-color="#fbf1d8"/><stop offset="1" stop-color="#ecd29a"/></radialGradient></defs>
        <g data-on="virus">${esp}<circle cx="62" cy="78" r="44" fill="url(#ebE)" stroke="#b07c2c" stroke-width="3.2"/><circle cx="62" cy="78" r="40.6" fill="none" stroke="#e6c27a" stroke-width="1.1"/>
          <polygon points="${hex}" fill="#dfe4f6" stroke="#4f5b9c" stroke-width="1.8" stroke-linejoin="round"/><path d="${dna}" fill="none" stroke="#7b2d8e" stroke-width="1.5"/><path d="${dna}" fill="none" stroke="#c07fd0" stroke-width="1.2" transform="translate(0 2.6)"/>
          ${tx(62, 16, T("EBV", "VEB"), { a: "middle" })}</g>
        <g data-show="virus">${lab(95, 49, 104, 34, [T("envelope", "envoltura")])}${lab(62, 86, 44, 152, [T("DNA linear de dupla fita", "ADN lineal bicatenario")])}${lab(19, 106, 14, 174, [T("glicoproteínas", "glicoproteínas"), T("entrada e tropismo", "entrada y tropismo")])}</g>
        <path data-on="entrada" d="M112 84L136 92" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="3 3" fill="none" marker-end="url(#ebG)"/>
        <g data-on="entrada resp lat"><circle cx="236" cy="96" r="58" fill="url(#ebB)" stroke="#4a5aa8" stroke-width="2"/><circle cx="240" cy="98" r="35" fill="url(#ebN)" stroke="#3d3078" stroke-width="1"/>${tx(236, 22, T("linfócito B", "linfocito B"), { a: "middle" })}</g>
        <g data-on="entrada">${cd}${mini}<circle cx="155" cy="96" r="12" fill="url(#ebE)" stroke="#b07c2c" stroke-width="2"/><circle cx="155" cy="96" r="5" fill="#dfe4f6" stroke="#4f5b9c"/></g>
        <g data-show="entrada">${lab(172, 110, 150, 180, [T("receptor CD21 (CR2)", "receptor CD21 (CR2)"), T("porta de entrada do EBV", "puerta de entrada del VEB")])}</g>
        <g data-show="lat"><circle cx="232" cy="92" r="8" fill="none" stroke="#f6d55c" stroke-width="2.6"/><circle cx="252" cy="110" r="6" fill="none" stroke="#f6d55c" stroke-width="2.2"/>${lab(240, 92, 190, 180, [T("EBV latente no núcleo", "VEB latente en el núcleo"), T("EBNA · LB de memória", "EBNA · LB de memoria")])}</g>
        <g data-on="resp">${cd8(322, 196)}${cd8(274, 222)}<path d="M308 180L286 146" stroke="#c4332b" stroke-width="1.8" fill="none" marker-end="url(#ebS)"/><path d="M266 202L252 160" stroke="#c4332b" stroke-width="1.8" fill="none" marker-end="url(#ebS)"/></g>
        <g data-show="resp">${tx(298, 252, "LT CD8+", { a: "middle" })}${tx(8, 218, T("resposta exagerada", "respuesta exagerada"))}${tx(8, 232, T("dos LT CD8+ = sintomas", "de los LT CD8+ = síntomas"), { c: "mut" })}
          ${chip(8, 60, T("febre", "fiebre"))}${tx(74, 278, "+", { a: "middle" })}${chip(80, 86, T("adenopatia", "adenopatía"))}${tx(172, 278, "+", { a: "middle" })}${chip(178, 76, T("faringite", "faringitis"))}
          <path d="M22 312C22 300 40 296 52 302C62 307 62 322 50 326C38 330 22 326 22 312Z" fill="#8a3557" stroke="#5a1e37" stroke-width="1.4"/><path d="M30 310C36 304 46 306 50 312" fill="none" stroke="#b4607f" stroke-width="1.2"/>
          ${tx(70, 310, T("baço: esplenomegalia ~50%", "bazo: esplenomegalia ~50%"))}${tx(70, 324, T("ruptura: risco até 8 semanas", "rotura: riesgo hasta 8 semanas"), { c: "mut" })}</g>
      </svg>`;
      return U.estados(T("EBV: do vírus aos sintomas", "VEB: del virus a los síntomas"), svg, [
        { id: "virus", r: T("O vírus", "El virus"), d: T("<b>EBV:</b> gama-herpesvírus, DNA linear de dupla fita. É envelopado: o envelope vem do brotamento, e as glicoproteínas da superfície fazem a entrada e o tropismo.", "<b>VEB:</b> gamma herpesvirus, ADN lineal bicatenario. Es envuelto: la envoltura viene de la brotación, y las glicoproteínas de superficie hacen la entrada y el tropismo.") },
        { id: "entrada", r: T("Entrada", "Entrada"), d: T("<b>Saliva</b> (beijo, talheres, tosse). O vírus se liga ao <b>CD21 (CR2)</b> do linfócito B.", "<b>Saliva</b> (beso, cubiertos, tos). El virus se une al <b>CD21 (CR2)</b> del linfocito B.") },
        { id: "resp", r: T("Resposta", "Respuesta"), d: T("Os sintomas vêm da <b>resposta exagerada dos LT CD8+</b> contra os linfócitos B infectados, não do dano direto do vírus. Tríade: febre, linfadenopatia e faringite. Com esplenomegalia, sem esporte de contato.", "Los síntomas vienen de la <b>respuesta exagerada de los LT CD8+</b> contra los linfocitos B infectados, no del daño directo del virus. Tríada: fiebre, linfadenopatía y faringitis. Con esplenomegalia, sin deporte de contacto.") },
        { id: "lat", r: T("Latência", "Latencia"), d: T("Ciclo bifásico (lítico e latente). O EBV fica <b>latente nos linfócitos B de memória</b> (EBNA e proteína latente de membrana) e persiste a vida toda.", "Ciclo bifásico (lítico y latente). El VEB queda <b>latente en los linfocitos B de memoria</b> (EBNA y proteína latente de membrana) y persiste toda la vida.") }], { cap: CAP });
    },
    vzvAssoc: () => {
      const C = corpo("vz"), r = mk(41), mm = s => `<g mask="${C.m}">${s}</g>`;
      const les = (x, y, rr, forca) => { const t = forca || rr(); return t < .34 ? `<circle cx="${f(x)}" cy="${f(y)}" r="2.3" fill="#cf4337"/>` : t < .7 ? `<circle cx="${f(x)}" cy="${f(y)}" r="3.6" fill="#e2574a" opacity=".55"/><circle cx="${f(x)}" cy="${f(y)}" r="2.3" fill="#f7f3cf" stroke="#b9862f" stroke-width=".7"/>` : `<circle cx="${f(x)}" cy="${f(y)}" r="2.4" fill="#7b4a2a" stroke="#4d2c16" stroke-width=".5"/>`; };
      const q = (rr, c) => espalha(rr, c, (x, y, z) => les(x, y, z));
      const varF = q(r, { cab: 16, pes: 3, tro: 86, bra: 5, brb: 5, pea: 6, peb: 6 }), varB = q(mk(42), { pes: 3, tro: 92, bra: 5, brb: 5, pea: 6, peb: 6 });
      const faixa = (x0, y0, x1, y1) => { let s = `<path d="M${x0} ${y0 - 9}L${x0} ${y0 + 9}L${x1} ${y1 + 9}L${x1} ${y1 - 9}Z" fill="#d8362f" opacity=".3"/>`; for (let i = 0; i < 7; i++) { const u = (i + .5) / 7, cx = x0 + (x1 - x0) * u, cy = y0 + (y1 - y0) * u + (r() - .5) * 5; for (let k = 0; k < 5; k++) s += les(cx + (r() - .5) * 7, cy + (r() - .5) * 9, r, .5); } return s; };
      const meio = `<path d="M100 76L100 214" stroke="#1c1d33" stroke-width="1.4" stroke-dasharray="4 3"/>`;
      const svg = `<svg class="sv" viewBox="0 0 360 340" role="img" aria-label="${T("Distribuição das lesões na varicela e no herpes zóster, de frente e de costas", "Distribución de las lesiones en la varicela y el herpes zóster, de frente y de espalda")}"><defs>${C.defs}</defs>
        ${C.frente(`<g data-show="var">${mm(varF)}</g><g data-show="zos">${mm(faixa(68, 146, 100, 162))}${meio}</g>`)}
        ${C.costas(`<g data-show="var">${mm(varB)}</g><g data-show="zos">${mm(faixa(100, 130, 132, 146))}${meio}<circle cx="104.5" cy="130" r="3.4" fill="#f6d55c" stroke="#8a6d10" stroke-width="1.1"/></g>`)}
        ${vistas()}
        <g data-show="var">${labC(26, [T("começa aqui", "empieza acá"), T("couro cabeludo, rosto", "cuero cabelludo, cara"), T("ou tronco", "o tronco")], [F(110, 26)])}${labC(104, [T("centrípeta", "centrípeta"), T("predomina no tronco", "predomina en el tronco"), T("250 a 500 lesões, prurido", "250 a 500 lesiones, prurito")], [F(124, 136), B(76, 136)])}${labC(182, [T("poucas nos membros", "pocas en los miembros")], [F(152, 190), B(48, 190)])}
          <circle cx="152" cy="226" r="2.3" fill="#cf4337"/>${tx(162, 230, T("pápula", "pápula"), { c: "mut" })}<circle cx="152" cy="244" r="3.6" fill="#e2574a" opacity=".55"/><circle cx="152" cy="244" r="2.3" fill="#f7f3cf" stroke="#b9862f" stroke-width=".7"/>${tx(162, 248, T("vesícula", "vesícula"), { c: "mut" })}<circle cx="152" cy="262" r="2.4" fill="#7b4a2a"/>${tx(162, 266, T("crosta", "costra"), { c: "mut" })}</g>
        <g data-show="zos">${labC(26, [T("linha média", "línea media"), T("a lesão não cruza", "la lesión no la cruza")], [F(100, 96), B(100, 96)])}${labC(142, [T("1 dermátomo, unilateral", "1 dermatoma, unilateral"), T("vesículas em cacho", "vesículas en racimo"), T("dor ou parestesia antes", "dolor o parestesia antes")], [F(80, 152), B(120, 140)])}${labC(84, [T("gânglio sensitivo", "ganglio sensitivo"), T("vírus latente", "virus latente")], [B(104.5, 130)])}${tx(180, 226, T("resolve em 1 a 3 semanas", "resuelve en 1 a 3 semanas"), { a: "middle", c: "mut" })}</g>
      </svg>`;
      return U.estados(T("Onde ficam as lesões", "Dónde están las lesiones"), svg, [
        { id: "var", r: T("Varicela", "Varicela"), d: T("<b>Varicela:</b> disseminada. Começa no couro cabeludo, rosto ou tronco e tem evolução centrípeta (predomina no tronco). Lesões em pápula, vesícula e crosta ao mesmo tempo, com prurido.", "<b>Varicela:</b> diseminada. Empieza en cuero cabelludo, cara o tronco y tiene evolución centrípeta (predomina en el tronco). Lesiones en pápula, vesícula y costra al mismo tiempo, con prurito.") },
        { id: "zos", r: T("Zóster", "Zóster"), d: T("<b>Herpes zóster:</b> reativação do vírus latente no gânglio sensitivo, que desce pelo nervo até o dermátomo. Unilateral, não cruza a linha média; dor ou parestesia antes das vesículas em cacho.", "<b>Herpes zóster:</b> reactivación del virus latente en el ganglio sensitivo, que baja por el nervio hasta el dermatoma. Unilateral, no cruza la línea media; dolor o parestesia antes de las vesículas en racimo.") }], { cap: CAP });
    },
    vzvLesao: () => {
      const r = mk(3);
      const painel = (x, id, forma) => { let cel = "", col = ""; for (let i = 0; i < 9; i++) cel += `<ellipse cx="${f(x + 8 + i * 11)}" cy="97" rx="4.6" ry="3.4" fill="#c98aa0" stroke="#8d5069" stroke-width=".5"/>`;
        for (let i = 0; i < 7; i++) { const y = 110 + i * 6 + r() * 3; col += `<path d="M${x + 2} ${f(y)}q13 ${f(-3 - r() * 3)} 26 0t26 0t26 0t26 0" fill="none" stroke="#e7a9b4" stroke-width=".9" opacity=".8"/>`; }
        return `<g data-on="${id} tudo"><clipPath id="vl${id}"><rect x="${x}" y="20" width="104" height="136" rx="8"/></clipPath><g clip-path="url(#vl${id})"><rect x="${x}" y="100" width="104" height="56" fill="#f7dfe2"/>${col}<path d="M${x + 14} 140C${x + 34} 126 ${x + 60} 146 ${x + 92} 130" fill="none" stroke="#c4332b" stroke-width="3.4" opacity=".75"/>${forma(x)}${cel}</g></g>`; };
      const epi = (x, d) => `<path d="${d}" fill="#eec7b4" stroke="#a7785c" stroke-width="1.1"/>`;
      const svg = `<svg class="sv" viewBox="0 0 360 196" role="img" aria-label="${T("Corte da pele: pápula, vesícula e crosta", "Corte de la piel: pápula, vesícula y costra")}">
        ${painel(8, "pap", x => `<ellipse cx="${x + 52}" cy="118" rx="30" ry="14" fill="#d8362f" opacity=".3"/>` + epi(x, `M${x} 78L${x + 26} 78Q${x + 52} 56 ${x + 78} 78L${x + 104} 78L${x + 104} 100L${x} 100Z`))}
        ${painel(128, "ves", x => `<ellipse cx="${x + 52}" cy="118" rx="34" ry="15" fill="#d8362f" opacity=".3"/>` + epi(x, `M${x} 78L${x + 20} 78Q${x + 52} 30 ${x + 84} 78L${x + 104} 78L${x + 104} 100L${x} 100Z`) + `<path d="M${x + 27} 80Q${x + 52} 42 ${x + 77} 80Q${x + 52} 92 ${x + 27} 80Z" fill="#f8f4d2" stroke="#b9862f" stroke-width="1"/><circle cx="${x + 46}" cy="72" r="1.6" fill="#7b2d8e"/><circle cx="${x + 56}" cy="66" r="1.6" fill="#7b2d8e"/><circle cx="${x + 60}" cy="78" r="1.6" fill="#7b2d8e"/><circle cx="${x + 40}" cy="80" r="1.6" fill="#7b2d8e"/>`)}
        ${painel(248, "cro", x => epi(x, `M${x} 78L${x + 104} 78L${x + 104} 100L${x} 100Z`) + `<path d="M${x + 24} 79Q${x + 30} 64 ${x + 44} 68Q${x + 56} 60 ${x + 66} 68Q${x + 80} 66 ${x + 82} 79Z" fill="#7b4a2a" stroke="#4d2c16" stroke-width="1"/><path d="M${x + 36} 72l8 3M${x + 56} 68l6 6" stroke="#4d2c16" stroke-width=".8"/>`)}
        <defs>${seta("vlS", "var(--ink)")}</defs><path d="M114 92l9 0" stroke="var(--ink)" stroke-width="1.6" marker-end="url(#vlS)"/><path d="M234 92l9 0" stroke="var(--ink)" stroke-width="1.6" marker-end="url(#vlS)"/>
        ${tx(60, 174, T("1 · pápula", "1 · pápula"), { a: "middle" })}${tx(180, 174, T("2 · vesícula", "2 · vesícula"), { a: "middle" })}${tx(300, 174, T("3 · crosta", "3 · costra"), { a: "middle" })}
        ${tx(60, 190, T("elevação vermelha", "elevación roja"), { a: "middle", c: "mut" })}${tx(180, 190, T("líquido com vírus", "líquido con virus"), { a: "middle", c: "mut" })}${tx(300, 190, T("lesão secando", "lesión secándose"), { a: "middle", c: "mut" })}
        ${tx(12, 14, T("epiderme em cima, derme embaixo", "epidermis arriba, dermis abajo"), { c: "mut" })}</svg>`;
      return U.estados(T("A lesão da varicela em corte", "La lesión de la varicela en corte"), svg, [
        { id: "tudo", r: T("As três", "Las tres"), d: T("Na varicela as lesões passam por <b>pápula, vesícula e crosta</b>, e as três fases aparecem ao mesmo tempo no corpo.", "En la varicela las lesiones pasan por <b>pápula, vesícula y costra</b>, y las tres fases aparecen al mismo tiempo en el cuerpo.") },
        { id: "pap", r: T("Pápula", "Pápula"), d: T("<b>Pápula:</b> a primeira lesão, uma elevação avermelhada da pele.", "<b>Pápula:</b> la primera lesión, una elevación rojiza de la piel.") },
        { id: "ves", r: T("Vesícula", "Vesícula"), d: T("<b>Vesícula:</b> bolha com líquido. O contágio é pelo líquido das vesículas ou por secreções respiratórias.", "<b>Vesícula:</b> ampolla con líquido. El contagio es por el líquido de las vesículas o por secreciones respiratorias.") },
        { id: "cro", r: T("Crosta", "Costra"), d: T("<b>Crosta:</b> a vesícula seca e forma a crosta, última fase da lesão.", "<b>Costra:</b> la vesícula se seca y forma la costra, última fase de la lesión.") }], { cap: CAP });
    },
    exSarampo: () => exantemas("sar"), exParvo: () => exantemas("par"), exRubeola: () => exantemas("rub"),
    prazos: () => {
      const X0 = 122, D = 31, xa = d => X0 + d * D, Z0 = 196, E = 12.4, xb = d => Z0 + d * E;
      const linha = (y, nome, sub) => tx(6, y + 4, nome) + tx(6, y + 18, sub, { c: "mut" });
      const barra = (x1, x2, y, cls, fim) => `<rect x="${f(x1)}" y="${y - 6}" width="${f(x2 - x1)}" height="16" rx="5" class="${cls}"/>` + tx(f(x2 + 5), y + 6, fim);
      let ta = `<path d="M${X0} 196L${xa(7)} 196" stroke="var(--muted)" stroke-width="1"/>`, tb = `<path d="M${xb(-5)} 196L${xb(8)} 196" stroke="var(--muted)" stroke-width="1"/>`;
      for (let d = 0; d <= 7; d++) ta += `<path d="M${xa(d)} 30L${xa(d)} 196" stroke="var(--line)" stroke-width="1"/>` + tx(xa(d), 210, String(d), { a: "middle", c: "mut" });
      for (let d = -4; d <= 8; d += 2) tb += `<path d="M${f(xb(d))} 30L${f(xb(d))} 196" stroke="var(--line)" stroke-width="1"/>` + tx(f(xb(d)), 210, (d > 0 ? "+" : "") + d, { a: "middle", c: "mut" });
      const svg = `<svg class="sv" viewBox="0 0 360 232" role="img" aria-label="${T("Prazos de bloqueio e de contágio", "Plazos de bloqueo y de contagio")}"><style>.pzV{fill:var(--c)}.pzI{fill:#8b90b5}.pzH{fill:var(--c);opacity:.35}.pzC{fill:#c4332b;opacity:.8}.pzE{fill:#8b90b5}</style>
        <g data-show="pos">${ta}${linha(44, T("Varicela", "Varicela"), T("vacina", "vacuna"))}<rect x="${xa(3)}" y="38" width="${2 * D}" height="16" rx="5" class="pzH"/>${barra(xa(0), xa(3), 44, "pzV", "")}${tx(xa(5) + 5, 50, T("3 a 5 d", "3 a 5 d"))}
          ${linha(84, T("Varicela", "Varicela"), T("imunoglobulina", "inmunoglobulina"))}${barra(xa(0), xa(4), 84, "pzI", "96 h")}
          ${linha(124, T("Sarampo", "Sarampión"), T("vacina", "vacuna"))}${barra(xa(0), xa(3), 124, "pzV", "72 h")}
          ${linha(164, T("Sarampo", "Sarampión"), T("imunoglobulina", "inmunoglobulina"))}${barra(xa(0), xa(6), 164, "pzI", T("6 d", "6 d"))}
          ${tx(xa(3.5), 226, T("dias depois do contato", "días después del contacto"), { a: "middle", c: "mut" })}</g>
        <g data-show="exa">${tb}<path d="M${Z0} 24L${Z0} 196" stroke="var(--ink)" stroke-width="1.6"/>${tx(Z0, 18, T("dia do exantema", "día del exantema"), { a: "middle" })}
          ${linha(44, T("Sarampo", "Sarampión"), T("contágio", "contagio"))}${barra(xb(-4), xb(4), 44, "pzC", T("−4 a +4", "−4 a +4"))}
          ${linha(84, T("Sarampo", "Sarampión"), T("sem escola", "sin escuela"))}<rect x="${f(xb(4))}" y="78" width="${f(E)}" height="16" rx="5" class="pzH"/>${barra(xb(0), xb(4), 84, "pzE", "")}${tx(f(xb(5) + 5), 90, T("4 a 5 d", "4 a 5 d"))}
          ${linha(124, T("Rubéola", "Rubéola"), T("maior contágio", "mayor contagio"))}${barra(xb(1), xb(5), 124, "pzC", T("+1 a +5", "+1 a +5"))}
          ${linha(164, T("Rubéola", "Rubéola"), T("sem escola", "sin escuela"))}${barra(xb(0), xb(7), 164, "pzE", T("7 d", "7 d"))}
          ${tx(6, 226, T("Parvovírus: não exclui da escola", "Parvovirus: no excluye de la escuela"))}</g>
      </svg>`;
      return U.estados(T("Prazos que se confundem", "Plazos que se confunden"), svg, [
        { id: "pos", r: T("Depois do contato", "Después del contacto"), d: T("<b>Bloqueio pós-contato.</b> Varicela: vacina até 3 a 5 dias, imunoglobulina até 96 h. Sarampo: vacina até 72 h, imunoglobulina de pool até 6 dias (menores de 6 meses, imunocomprometidos e gestantes).", "<b>Bloqueo postcontacto.</b> Varicela: vacuna hasta 3 a 5 días, inmunoglobulina hasta 96 h. Sarampión: vacuna hasta 72 h, inmunoglobulina de pool hasta 6 días (menores de 6 meses, inmunocomprometidos y embarazadas).") },
        { id: "exa", r: T("Contágio e escola", "Contagio y escuela"), d: T("<b>Em torno do exantema.</b> Sarampo: contagia de 4 dias antes a 4 dias depois; exclusão escolar até 4 a 5 dias depois. Rubéola: maior contágio de 1 a 5 dias depois; exclusão até 7 dias depois. Parvovírus não exclui.", "<b>Alrededor del exantema.</b> Sarampión: contagia de 4 días antes a 4 días después; exclusión escolar hasta 4 a 5 días después. Rubéola: mayor contagio de 1 a 5 días después; exclusión hasta 7 días después. Parvovirus no excluye.") }]);
    },
    src: () => {
      const g = (x, s) => `<g transform="translate(${x} 128)">${s}</g>`;
      const svg = `<svg class="sv" viewBox="0 0 360 212" role="img" aria-label="${T("Rubéola congênita: 1º trimestre e órgãos afetados", "Rubéola congénita: 1º trimestre y órganos afectados")}">
        <rect x="14" y="22" width="110" height="20" rx="6" fill="#c4332b"/><rect x="127" y="22" width="108" height="20" rx="6" fill="var(--sunk)" stroke="var(--line)"/><rect x="238" y="22" width="108" height="20" rx="6" fill="var(--sunk)" stroke="var(--line)"/>
        ${tx(69, 58, T("1º trimestre: GRAVE", "1º trimestre: GRAVE"), { a: "middle" })}${tx(181, 58, T("2º trimestre", "2º trimestre"), { a: "middle", c: "mut" })}${tx(292, 58, T("3º trimestre", "3º trimestre"), { a: "middle", c: "mut" })}
        ${tx(14, 14, T("gestação", "gestación"), { c: "mut" })}${tx(14, 80, T("aborto, morte fetal ou malformações:", "aborto, muerte fetal o malformaciones:"), { c: "mut" })}
        ${g(50, `<path d="M-26 0Q0 -22 26 0Q0 22 -26 0Z" fill="#fff" stroke="#6b5a55" stroke-width="1.6"/><circle r="12" fill="#7c93b5" stroke="#4d607e"/><circle r="6.8" fill="#e3e6ec" stroke="#aab0bd"/><circle cx="-2" cy="-2" r="2" fill="#fff"/>`)}
        ${g(137, `<path d="M6 -24C-14 -27 -20 -8 -14 6C-11 13 -7 14 -5 21C-3 27 7 26 7 18C8 8 18 4 18 -9C18 -17 14 -23 6 -24Z" fill="#edc9b0" stroke="#a7785c" stroke-width="1.6"/><path d="M6 -15C-5 -17 -10 -5 -5 3C-1 8 4 3 2 -2" fill="none" stroke="#a7785c" stroke-width="1.5" stroke-linecap="round"/><path d="M26 -10Q32 0 26 10M32 -15Q41 0 32 15" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-linecap="round"/><path d="M22 14L40 -14" stroke="#c4332b" stroke-width="2.2" stroke-linecap="round"/>`)}
        ${g(224, `<path d="M-4 -16C-4 -27 8 -29 11 -20" fill="none" stroke="#8a2620" stroke-width="5" stroke-linecap="round"/><path d="M0 24C-27 6 -25 -18 -10 -18C-4 -18 0 -14 0 -10C0 -14 4 -18 10 -18C25 -18 27 6 0 24Z" fill="#cf4337" stroke="#7d1f18" stroke-width="1.6"/><path d="M-12 -6C-10 4 -4 12 2 16" fill="none" stroke="#e98a80" stroke-width="1.6" stroke-linecap="round"/>`)}
        ${g(311, `<path d="M-24 2C-26 -14 -10 -23 2 -19C16 -23 28 -12 25 2C26 14 12 19 2 15C-10 20 -24 14 -24 2Z" fill="#ebb9c3" stroke="#9c586a" stroke-width="1.6"/><path d="M2 -19C-2 -8 6 -2 0 15M-16 -8C-10 -6 -8 0 -14 6M14 -10C8 -6 10 2 18 6M-6 -14C-4 -10 -8 -6 -6 -2" fill="none" stroke="#9c586a" stroke-width="1.2" stroke-linecap="round"/>`)}
        ${tx(50, 174, T("catarata", "cataratas"), { a: "middle" })}${tx(50, 188, T("e cegueira", "y ceguera"), { a: "middle", c: "mut" })}${tx(137, 174, T("hipoacusia", "hipoacusia"), { a: "middle" })}${tx(224, 174, T("cardiopatia", "cardiopatía"), { a: "middle" })}${tx(224, 188, T("congênita", "congénita"), { a: "middle", c: "mut" })}${tx(311, 174, T("retardo", "retraso"), { a: "middle" })}${tx(311, 188, T("mental", "mental"), { a: "middle", c: "mut" })}
      </svg>`;
      return U.el("figure", { class: "fig" }, U.el("h3", null, T("Síndrome da rubéola congênita", "Síndrome de rubéola congénita")), U.el("div", { html: svg }), U.el("figcaption", null, CAP));
    }
  };
  const temas = [
    { id: "mono", n: "6.1", nome: T("Mononucleose infecciosa (EBV)", "Mononucleosis infecciosa (VEB)"), curto: T("Mononucleose", "Mononucleosis"),
      sub: T("EBV, linfócito B, tríade e baço", "VEB, linfocito B, tríada y bazo"),
      estudado: "2026-11-14", figuras: ["ebvAssoc"],
      chave: T("Os sintomas da mononucleose vêm da resposta exagerada dos LT CD8+ contra os linfócitos B infectados pelo EBV, não do dano direto do vírus.", "Los síntomas de la mononucleosis se deben a la respuesta exagerada de los LT CD8+ contra los linfocitos B infectados por el VEB, no al daño viral directo."),
      resumo: [
        [T("O vírus", "El virus"), [
          T("EBV: Herpesviridae, gama-herpesvírus, DNA linear de dupla fita.", "VEB: Herpesviridae, gamma herpesvirus, ADN lineal bicatenario."),
          T("ENVELOPADO: envelope de lipoproteínas ganho por brotamento; glicoproteínas de superfície fazem a entrada e o tropismo.", "ENVUELTO: envoltura lipoproteica adquirida por brotación; las glicoproteínas de superficie median la entrada y el tropismo."),
          T("Receptor: CD21 (CR2) do linfócito B.", "Receptor: CD21 (CR2) del linfocito B."),
          T("Ciclo bifásico: lítico e latente; fica latente nos linfócitos B de memória (EBNA e proteína latente de membrana).", "Ciclo bifásico: lítico y latente; persiste latente en linfocitos B de memoria (EBNA y proteína latente de membrana).")]],
        [T("Transmissão e clínica", "Transmisión y clínica"), [
          T("Saliva (beijo, talheres, tosse); raramente transfusão ou transplante.", "Saliva (besos, utensilios, tos); rara vez transfusión o trasplante."),
          T("Mais de 95% dos adultos infectados; infecção primária de 1 a 5 anos costuma ser assintomática.", "Más del 95% de los adultos infectados; la primoinfección de 1 a 5 años suele ser asintomática."),
          T("Incubação de 4 a 8 semanas. TRÍADE: febre + linfadenopatia + faringite. Esplenomegalia em cerca de 50%.", "Incubación de 4 a 8 semanas. TRÍADA: fiebre + linfadenopatía + faringitis. Esplenomegalia en ~50%.")]],
        [T("Diagnóstico e conduta", "Diagnóstico y conducta"), [
          T("Linfocitose atípica de 10% ou mais e transaminases elevadas.", "Linfocitosis atípica ≥10% y transaminasas elevadas."),
          T("Anticorpos heterófilos (Monospot, Paul-Bunnell).", "Anticuerpos heterófilos (Monospot, Paul-Bunnell)."),
          T("VCA IgM positivo com anti-EBNA IgG negativo: infecção recente. Anti-EBNA IgG positivo: infecção passada.", "VCA IgM positivo con anti-EBNA IgG negativo: infección reciente. Anti-EBNA IgG positivo: infección pasada."),
          T("Repouso, evitar antibiótico; com esplenomegalia, sem esporte de contato.", "Reposo, evitar ATB; con esplenomegalia, sin deportes de contacto."),
          T("Ruptura esplênica: rara, potencialmente fatal, risco até 8 semanas.", "Rotura esplénica: rara, potencialmente fatal, riesgo hasta 8 semanas."),
          T("Associado a Hodgkin, linfomas B e carcinoma de nasofaringe.", "Asociado a Hodgkin, linfomas B y carcinoma nasofaríngeo.")]],
        [T("Evasão", "Evasión"), [
          T("Latência nos linfócitos B de memória permite persistir a vida toda.", "La latencia en linfocitos B de memoria permite persistir de por vida."),
          T("Na doença crônica ativa (CAEBV), granzima B reduzida dificulta eliminar as células infectadas.", "En la enfermedad activa crónica (CAEBV), la granzima B reducida dificulta eliminar las células infectadas.")]]
      ],
      memo: [["Saliva", ">", "CD21 do LB", ">", "LT CD8+", ">", "sintomas"], ["Febre", "+", "adenopatia", "+", "faringite"], ["VCA IgM +", ">", "recente"], ["Anti-EBNA IgG +", ">", "passada"]],
      mapa: { c: T("Mononucleose", "Mononucleosis"), r: [
        { t: T("Vírus", "Virus"), f: [T("Gama-herpesvírus", "Gamma herpesvirus"), T("DNA dupla fita", "ADN bicatenario"), T("Envelopado", "Envuelto")] },
        { t: T("Alvo", "Blanco"), f: [T("Linfócito B, CD21", "Linfocito B, CD21"), T("Latência em B memória", "Latencia en B memoria")] },
        { t: T("Clínica", "Clínica"), f: [T("Tríade clássica", "Tríada clásica"), T("Esplenomegalia ~50%", "Esplenomegalia ~50%")] },
        { t: T("Diagnóstico", "Diagnóstico"), f: [T("Linfocitose atípica ≥10%", "Linfocitosis atípica ≥10%"), T("Monospot", "Monospot"), T("VCA e EBNA", "VCA y EBNA")] }] },
      guiada: { q: T("Por que o paciente com mononucleose deve evitar esporte de contato?", "¿Por qué el paciente con mononucleosis debe evitar deportes de contacto?"),
        dicas: [T("Pense no órgão que aumenta em metade dos casos.", "Pensá en el órgano que aumenta en la mitad de los casos."), T("Qual complicação rara pode ser fatal?", "¿Qué complicación rara puede ser fatal?")],
        r: T("Porque há esplenomegalia em cerca de 50% dos casos. O baço aumentado pode romper, com risco até 8 semanas depois do início.", "Porque hay esplenomegalia en ~50% de los casos. El bazo aumentado puede romperse, con riesgo hasta 8 semanas después del inicio.") },
      quiz: [
        { q: T("Qual célula o EBV infecta, e por qual receptor?", "¿Qué célula infecta el VEB y por qué receptor?"), o: [T("Linfócito B, CD21", "Linfocito B, CD21"), T("Linfócito T, CD4", "Linfocito T, CD4"), T("Hemácia, antígeno P", "Hematíe, antígeno P"), T("Célula epitelial, ICAM-1", "Célula epitelial, ICAM-1")], c: 0,
          e: T("O EBV se liga ao CD21 do linfócito B. CD4 é o receptor do HIV, antígeno P é do parvovírus B19 e ICAM-1 é do rinovírus.", "El VEB se une al CD21 del linfocito B. CD4 es del HIV, antígeno P del parvovirus B19 e ICAM-1 del rinovirus."), d: 0 },
        { q: T("Menino de 9 anos, febre há 1 semana, faringite e adenopatias. Sorologia: VCA IgM positivo, anti-EBNA IgG negativo. Interpretação?", "Niño de 9 años, fiebre de 1 semana, faringitis y adenopatías. Serología: VCA IgM positivo, anti-EBNA IgG negativo. ¿Interpretación?"), o: [T("Infecção recente por EBV", "Infección reciente por VEB"), T("Infecção passada por EBV", "Infección pasada por VEB"), T("Reativação do VZV", "Reactivación del VVZ"), T("Infecção por CMV descartada", "Infección por CMV descartada")], c: 0,
          e: T("VCA IgM positivo com anti-EBNA negativo indica infecção recente. Anti-EBNA IgG positivo indicaria infecção passada.", "VCA IgM positivo con anti-EBNA negativo indica infección reciente. Anti-EBNA IgG positivo indicaría infección pasada."), d: 1 },
        { q: T("Por que os sintomas da mononucleose aparecem?", "¿Por qué aparecen los síntomas de la mononucleosis?"), o: [T("Resposta exagerada dos LT CD8+", "Respuesta exagerada de los LT CD8+"), T("Lise direta dos linfócitos B pelo vírus", "Lisis directa de los linfocitos B por el virus"), T("Toxina viral circulante", "Toxina viral circulante"), T("Deficiência de anticorpos", "Déficit de anticuerpos")], c: 0,
          e: T("A clínica não é explicada pelo dano direto do vírus, e sim pela resposta imune excessiva dos LT CD8+.", "La clínica no se explica por citopatología directa sino por la respuesta inmune excesiva de los LT CD8+."), d: 0 }
      ],
      termos: [["ruptura esplênica", "rotura esplénica"], ["linfocitose atípica", "linfocitosis atípica"], ["antibiótico", "ATB"]],
      erro: T("Achar que os sintomas vêm do dano direto do vírus: vêm da resposta dos LT CD8+.", "Creer que los síntomas vienen del daño viral directo: vienen de la respuesta de los LT CD8+.") },
    { id: "varicela", n: "6.2", nome: T("Varicela e herpes zóster (VZV)", "Varicela y herpes zóster (VVZ)"), curto: T("Varicela", "Varicela"),
      sub: T("Contágio, lesões, zóster e profilaxia", "Contagio, lesiones, zóster y profilaxis"),
      estudado: "2026-11-14", figuras: ["vzvAssoc", "vzvLesao"],
      chave: T("A varicela é disseminada e centrípeta, com lesões em pápula, vesícula e crosta; o zóster é a reativação unilateral num dermátomo, sem cruzar a linha média.", "La varicela es diseminada y centrípeta, con lesiones en pápula, vesícula y costra; el zóster es la reactivación unilateral en un dermatoma, sin cruzar la línea media."),
      resumo: [
        [T("Epidemiologia", "Epidemiología"), [
          T("Herpesviridae, envelopado, DNA dupla fita. Reservatório só humano.", "Herpesviridae, envuelto, ADN bicatenario. Reservorio exclusivamente humano."),
          T("Muito contagiosa: taxa de ataque secundário acima de 90%. Fim do inverno e começo da primavera.", "Muy contagiosa: tasa de ataque secundario >90%. Fines de invierno y comienzos de primavera."),
          T("Contágio: líquido das vesículas ou secreções respiratórias. Incubação de 10 a 21 dias.", "Contagio: líquido vesicular o secreciones respiratorias. Incubación de 10 a 21 días.")]],
        [T("Patogenia", "Patogenia"), [
          T("Replicação na nasofaringe e gânglios regionais; viremia primária em 4 a 6 dias, chega aos gânglios sensitivos.", "Replicación en nasofaringe y ganglios regionales; viremia 1ª a los 4-6 días, llega a ganglios sensitivos."),
          T("Viremia secundária: rash. Com imunossupressão, reativa pelo nervo sensitivo até o dermátomo: herpes zóster.", "Viremia 2ª: rash. Con inmunosupresión, se reactiva por el nervio sensitivo hacia el dermatoma: herpes zóster.")]],
        [T("Clínica", "Clínica"), [
          T("Começa no couro cabeludo, rosto ou tronco; evolução centrípeta (predomina no tronco).", "Comienza en cuero cabelludo, cara o tronco; evolución centrípeta (predomina en tronco)."),
          T("Pápula, vesícula e crosta; 250 a 500 lesões; prurido. Imunidade geralmente para a vida toda.", "Pápulas, vesículas y costras; 250-500 lesiones; prurito. Inmunidad generalmente de por vida."),
          T("Zóster: UNILATERAL, não cruza a linha média, dor ou parestesia antes, vesículas em cacho, resolve em 1 a 3 semanas.", "Zóster: UNILATERAL, no cruza la línea media, dolor o parestesias previas, vesículas en racimo, se resuelve en 1-3 semanas.")]],
        [T("Gestação e profilaxia", "Embarazo y profilaxis"), [
          T("Varicela congênita: infecção nas primeiras 20 semanas (hipoplasia de membros, cicatrizes, microcefalia, coriorretinite).", "Varicela congénita: infección en las primeras 20 semanas (hipoplasia de miembros, cicatrices, microcefalia, coriorretinitis)."),
          T("Varicela periparto: de 5 dias antes a 2 dias depois do parto.", "Varicela periparto: desde 5 días antes hasta 2 días después del parto."),
          T("Vacina a partir de 12 meses, até 3 a 5 dias pós-contato. Imunoglobulina até 96 h. Aciclovir controverso, do 7º ao 10º dia.", "Vacuna desde los 12 meses, hasta 3-5 días postcontacto. IG hasta 96 h. Aciclovir controvertido, día 7-10."),
          T("Calendário argentino: 1 dose aos 15 meses (desde 2015) e 2ª dose aos 5 anos (desde 2022).", "Calendario argentino: 1 dosis a los 15 meses (desde 2015) y 2ª dosis a los 5 años (desde 2022).")]]
      ],
      memo: [["Pápula", ">", "vesícula", ">", "crosta"], ["Vacina", "≤", "3-5 dias"], ["Imunoglobulina", "≤", "96 h (4 dias)"], ["Congênita", "=", "< 20 semanas"]],
      mapa: { c: T("VZV", "VVZ"), r: [
        { t: T("Contágio", "Contagio"), f: [T("Líquido vesicular", "Líquido vesicular"), T("Secreção respiratória", "Secreción respiratoria"), T("Incubação 10-21 dias", "Incubación 10-21 días")] },
        { t: T("Varicela", "Varicela"), f: [T("Centrípeta", "Centrípeta"), T("Pápula-vesícula-crosta", "Pápula-vesícula-costra")] },
        { t: T("Zóster", "Zóster"), f: [T("Unilateral, dermátomo", "Unilateral, dermatoma"), T("Não cruza linha média", "No cruza línea media")] },
        { t: T("Profilaxia", "Profilaxis"), f: [T("Vacina ≤ 3-5 dias", "Vacuna ≤ 3-5 días"), T("IG ≤ 96 h", "IG ≤ 96 h"), T("15 meses e 5 anos", "15 meses y 5 años")] }] },
      guiada: { q: T("Por que o zóster aparece só num lado do corpo?", "¿Por qué el zóster aparece en un solo lado del cuerpo?"),
        dicas: [T("Onde o vírus fica latente?", "¿Dónde queda latente el virus?"), T("Que território um gânglio sensitivo inerva?", "¿Qué territorio inerva un ganglio sensitivo?")],
        r: T("Porque o VZV fica latente num gânglio sensitivo e, ao reativar, desce pelo nervo até o dermátomo daquele gânglio. Por isso é unilateral e não cruza a linha média.", "Porque el VVZ queda latente en un ganglio sensitivo y, al reactivarse, viaja por el nervio hasta su dermatoma. Por eso es unilateral y no cruza la línea media.") },
      quiz: [
        { q: T("Criança suscetível teve contato com varicela há 2 dias. O que ainda se pode indicar?", "Niño susceptible tuvo contacto con varicela hace 2 días. ¿Qué se puede indicar todavía?"), o: [T("Vacina ou imunoglobulina", "Vacuna o inmunoglobulina"), T("Só aciclovir imediato", "Solo aciclovir inmediato"), T("Nada, passou o prazo", "Nada, pasó el plazo"), T("Só imunoglobulina depois de 7 dias", "Solo IG después de 7 días")], c: 0,
          e: T("Vacina vale até 3 a 5 dias e imunoglobulina até 96 horas; com 2 dias as duas ainda servem. O aciclovir, se usado, começa do 7º ao 10º dia.", "La vacuna sirve hasta 3-5 días y la IG hasta 96 h; a los 2 días ambas sirven. El aciclovir, si se usa, se inicia el día 7-10."), d: 1 },
        { q: T("Em que período a infecção materna causa varicela congênita?", "¿En qué período la infección materna causa varicela congénita?"), o: [T("Primeiras 20 semanas", "Primeras 20 semanas"), T("Último trimestre", "Último trimestre"), T("5 dias antes a 2 depois do parto", "5 días antes a 2 después del parto"), T("Só no 1º mês", "Solo en el 1º mes")], c: 0,
          e: T("Congênita é nas primeiras 20 semanas. De 5 dias antes a 2 depois do parto é a varicela periparto.", "La congénita es en las primeras 20 semanas. De 5 días antes a 2 después del parto es la varicela periparto."), d: 0 },
        { q: T("Qual achado diferencia o zóster da varicela?", "¿Qué hallazgo diferencia el zóster de la varicela?"), o: [T("Lesões unilaterais num dermátomo", "Lesiones unilaterales en un dermatoma"), T("Presença de vesículas", "Presencia de vesículas"), T("Prurido", "Prurito"), T("Febre", "Fiebre")], c: 0,
          e: T("Ambos têm vesículas; o zóster é unilateral, segue um dermátomo e não cruza a linha média.", "Ambos tienen vesículas; el zóster es unilateral, sigue un dermatoma y no cruza la línea media."), d: 0 }
      ],
      termos: [["crosta", "costra"], ["em cacho", "en racimo"], ["vesícula", "vesícula"]],
      erro: T("Confundir centrípeta com 'vai para as extremidades': centrípeta é predomínio no tronco.", "Confundir centrípeta con 'va hacia las extremidades': centrípeta es predominio en el tronco.") },
    { id: "sarampo", n: "6.3", nome: T("Sarampo", "Sarampión"), curto: T("Sarampo", "Sarampión"),
      sub: T("Paramyxoviridae, via aérea, morbiliforme", "Paramyxoviridae, vía aérea, morbiliforme"),
      estudado: "2026-11-14", figuras: ["exSarampo", "prazos"],
      chave: T("O sarampo é um Paramyxoviridae (Morbillivirus) de transmissão aérea, com pródromo de febre, tos e conjuntivite e exantema morbiliforme crânio-caudal; não tem antiviral específico.", "El sarampión es un Paramyxoviridae (Morbillivirus) de transmisión aérea, con pródromo de fiebre, tos y conjuntivitis y exantema morbiliforme cráneo-caudal; no tiene antiviral específico."),
      resumo: [
        [T("O vírus e a transmissão", "El virus y la transmisión"), [
          T("Família Paramyxoviridae, gênero Morbillivirus.", "Familia Paramyxoviridae, género Morbillivirus."),
          T("Transmissão aérea; o vírus fica ativo no ar ou em superfícies por 2 horas.", "Transmisión aérea; el virus persiste activo en aire o superficies por 2 horas."),
          T("Contágio de 4 dias antes até 4 dias depois do exantema. Mais de 90% dos contatos suscetíveis adoecem.", "Contagio desde 4 días antes hasta 4 días después del exantema. Más del 90% de los contactos susceptibles enferman.")]],
        [T("Clínica", "Clínica"), [
          T("Pródromo: febre alta, tos e conjuntivite.", "Pródromo: fiebre alta, tos y conjuntivitis."),
          T("Exantema maculopapular MORBILIFORME, avermelhado, confluente, CRÂNIO-CAUDAL, com descamação fina.", "Exantema maculopapular MORBILIFORME, rojizo, confluente, CRÁNEO-CAUDAL, con descamación fina."),
          T("No caso clínico: manchas esbranquiçadas na mucosa jugal.", "En el caso clínico: manchas blanquecinas en la mucosa yugal."),
          T("Complicações: encefalite (1/1.000) e panencefalite esclerosante subaguda (1/100.000).", "Complicaciones: encefalitis (1/1.000) y panencefalitis esclerosante subaguda (1/100.000).")]],
        [T("Manejo e epidemiologia", "Manejo y epidemiología"), [
          T("Sem antiviral específico: só suporte.", "Sin antiviral específico: solo sostén."),
          T("Vacina de bloqueio até 72 horas do contato.", "Vacunación de bloqueo dentro de las 72 horas del contacto."),
          T("Imunoglobulina de pool até 6 dias: menores de 6 meses, imunocomprometidos e gestantes.", "Inmunoglobulina de pool dentro de los 6 días: menores de 6 meses, inmunocomprometidos y embarazadas."),
          T("Exclusão escolar até 4 a 5 dias depois do exantema. Notificação obrigatória.", "Exclusión escolar hasta 4-5 días después del exantema. Notificación obligatoria."),
          T("As Américas perderam o status de região livre de transmissão endêmica (Canadá); mais de 89% dos casos em não vacinados.", "Las Américas perdieron el estatus de región libre de transmisión endémica (Canadá); más del 89% de los casos en no vacunados.")]]
      ],
      memo: [["Febre", "+", "tos", "+", "conjuntivite", ">", "exantema"], ["Vacina", "≤", "72 h"], ["Imunoglobulina", "≤", "6 dias"], ["Contágio", "=", "4 dias antes a 4 depois"]],
      mapa: { c: T("Sarampo", "Sarampión"), r: [
        { t: T("Vírus", "Virus"), f: [T("Paramyxoviridae", "Paramyxoviridae"), T("Morbillivirus", "Morbillivirus")] },
        { t: T("Clínica", "Clínica"), f: [T("Pródromo febre, tos, conjuntivite", "Pródromo fiebre, tos, conjuntivitis"), T("Morbiliforme crânio-caudal", "Morbiliforme cráneo-caudal")] },
        { t: T("Complicações", "Complicaciones"), f: [T("Encefalite 1/1.000", "Encefalitis 1/1.000"), T("PEES 1/100.000", "PEES 1/100.000")] },
        { t: T("Manejo", "Manejo"), f: [T("Vacina ≤ 72 h", "Vacuna ≤ 72 h"), T("IG ≤ 6 dias", "IG ≤ 6 días"), T("Sem antiviral", "Sin antiviral")] }] },
      guiada: { q: T("Por que o sarampo se espalha tão fácil?", "¿Por qué el sarampión se contagia tan fácilmente?"),
        dicas: [T("Pense na via de transmissão.", "Pensá en la vía de transmisión."), T("Quanto tempo o vírus resiste no ambiente?", "¿Cuánto tiempo resiste el virus en el ambiente?")],
        r: T("Porque a transmissão é aérea e o vírus fica ativo no ar por 2 horas. Além disso, contagia desde 4 dias antes do exantema.", "Porque la transmisión es aérea y el virus persiste activo en el aire por 2 horas. Además contagia desde 4 días antes del exantema.") },
      quiz: [
        { q: T("Menina de 4 anos, não vacinada, voltou da Europa com febre de 39 °C, tos, conjuntivite e exantema crânio-caudal. Qual a conduta para um contato suscetível há 2 dias?", "Niña de 4 años no vacunada, volvió de Europa con fiebre de 39 °C, tos, conjuntivitis y exantema cráneo-caudal. ¿Conducta para un contacto susceptible de hace 2 días?"), o: [T("Vacina de bloqueio", "Vacunación de bloqueo"), T("Aciclovir", "Aciclovir"), T("Nada, passou o prazo", "Nada, pasó el plazo"), T("Antibiótico profilático", "ATB profiláctico")], c: 0,
          e: T("A vacina de bloqueio vale até 72 horas do contato. Não existe antiviral específico, e o aciclovir é para herpes.", "La vacunación de bloqueo sirve hasta 72 horas del contacto. No hay antiviral específico; el aciclovir es para herpes."), d: 1 },
        { q: T("Família e gênero do vírus do sarampo?", "¿Familia y género del virus del sarampión?"), o: [T("Paramyxoviridae, Morbillivirus", "Paramyxoviridae, Morbillivirus"), T("Togaviridae, Rubivirus", "Togaviridae, Rubivirus"), T("Herpesviridae, Varicellovirus", "Herpesviridae, Varicellovirus"), T("Parvoviridae, Erythrovirus", "Parvoviridae, Erythrovirus")], c: 0,
          e: T("Sarampo é Paramyxoviridae, gênero Morbillivirus; Togaviridae é a rubéola.", "Sarampión es Paramyxoviridae, género Morbillivirus; Togaviridae es la rubéola."), d: 0 }
      ],
      termos: [["sarampo", "sarampión"], ["mucosa jugal", "mucosa yugal"], ["exclusão escolar", "exclusión escolar"]],
      erro: T("Achar que existe antiviral para o sarampo: o manejo é só de suporte.", "Creer que hay antiviral para el sarampión: el manejo es solo de sostén.") },

    { id: "parvo", n: "6.4", nome: T("Parvovírus B19 (5ª doença)", "Parvovirus B19 (5ª enfermedad)"), curto: T("Parvovírus", "Parvovirus"),
      sub: T("Bochecha esbofeteada e exantema rendilhado", "Signo de la cachetada y exantema reticulado"),
      estudado: "2026-11-14", figuras: ["exParvo"],
      chave: T("O parvovírus causa a 5ª doença: primeiro a face esbofeteada, depois um exantema reticulado que volta com calor e exercício; não exclui da escola.", "El parvovirus causa la 5ª enfermedad: primero el signo de la cachetada, luego un exantema reticulado que reaparece con calor y ejercicio; no excluye de la escuela."),
      resumo: [
        [T("Clínica", "Clínica"), [
          T("1ª fase: vermelhidão nas duas bochechas, o SINAL DA BOFETADA.", "1ª fase: rubicundez en ambas mejillas, el SIGNO DE LA CACHETADA."),
          T("2ª fase: exantema RETICULADO generalizado, mais nos braços, coxas e nádegas.", "2ª fase: exantema RETICULAR generalizado, más en brazos, muslos y nalgas."),
          T("O exantema reaparece com atividade física, calor e outros gatilhos.", "El exantema reaparece con actividad física, calor y otros desencadenantes."),
          T("Idade típica: 4 a 10 anos. Caso clínico: menina afebril, em bom estado geral.", "Edad típica: 4-10 años. Caso clínico: niña afebril, en buen estado general.")]],
        [T("Pontos de atenção", "Puntos de atención"), [
          T("Não é causa de exclusão escolar.", "No es causa de exclusión escolar."),
          T("Receptor (generalidades): antígeno P das hemácias.", "Receptor (generalidades): antígeno P de los hematíes."),
          T("Parvoviridae é vírus desnudo (generalidades).", "Parvoviridae es virus desnudo (generalidades).")]]
      ],
      memo: [["Bochecha esbofeteada", ">", "exantema reticulado", ">", "volta com calor"], ["Parvo B19", "=", "antígeno P"]],
      mapa: { c: T("Parvovírus B19", "Parvovirus B19"), r: [
        { t: T("Fase 1", "Fase 1"), f: [T("Sinal da bofetada", "Signo de la cachetada")] },
        { t: T("Fase 2", "Fase 2"), f: [T("Exantema reticulado", "Exantema reticulado"), T("Braços, coxas, nádegas", "Brazos, muslos, nalgas")] },
        { t: T("Vírus", "Virus"), f: [T("Desnudo", "Desnudo"), T("Antígeno P hemácia", "Antígeno P hematíe")] },
        { t: T("Manejo", "Manejo"), f: [T("4 a 10 anos", "4 a 10 años"), T("Sem exclusão escolar", "Sin exclusión escolar")] }] },
      guiada: { q: T("Por que o exantema do parvovírus pode voltar dias depois?", "¿Por qué el exantema del parvovirus puede reaparecer días después?"),
        dicas: [T("Pense nos gatilhos citados na aula.", "Pensá en los desencadenantes de la clase.")],
        r: T("Porque o exantema reticulado reaparece com atividade física, calor e outros gatilhos. Isso não indica nova infecção.", "Porque el exantema reticulado reaparece con actividad física, calor y otros desencadenantes. No indica nueva infección. (Esta última frase: confirmar con la profesora.)") },
      quiz: [
        { q: T("Menina de 6 anos, afebril, com eritema nas duas bochechas e exantema reticulado no tronco e membros. Diagnóstico?", "Niña de 6 años, afebril, con eritema en ambas mejillas y exantema reticulado en tronco y miembros. ¿Diagnóstico?"), o: [T("Parvovírus (5ª doença)", "Parvovirus (5ª enfermedad)"), T("Sarampo", "Sarampión"), T("Rubéola", "Rubéola"), T("Varicela", "Varicela")], c: 0,
          e: T("Bochecha esbofeteada seguida de exantema reticulado é o parvovírus. No sarampo há febre alta, tos e conjuntivite.", "Signo de la cachetada seguido de exantema reticulado es parvovirus. En el sarampión hay fiebre alta, tos y conjuntivitis."), d: 1 }
      ],
      termos: [["sinal da bofetada", "signo de la cachetada"], ["reticulado", "reticulado"], ["bochecha", "mejilla"]],
      erro: T("Excluir a criança da escola: o parvovírus não é causa de exclusão.", "Excluir al niño de la escuela: el parvovirus no es causa de exclusión.") },

    { id: "rubeola", n: "6.5", nome: T("Rubéola", "Rubéola"), curto: T("Rubéola", "Rubéola"),
      sub: T("Togaviridae, adenopatia retroauricular, congênita", "Togaviridae, adenopatía retroauricular, congénita"),
      estudado: "2026-11-14", figuras: ["exRubeola", "src"],
      chave: T("A rubéola (Togaviridae) é leve na criança, mas no 1º trimestre da gestação causa a síndrome da rubéola congênita: catarata, surdez e cardiopatia.", "La rubéola (Togaviridae) es leve en el niño, pero en el 1º trimestre del embarazo causa el síndrome de rubéola congénita: cataratas, hipoacusia y cardiopatía."),
      resumo: [
        [T("O vírus", "El virus"), [
          T("Vírus da rubéola, família TOGAVIRIDAE.", "Virus de la rubéola, familia TOGAVIRIDAE."),
          T("Principal causa de anomalias congênitas preveníveis por vacina; cerca de 100.000 crianças por ano nascem com síndrome da rubéola congênita.", "Principal causa de anomalías congénitas prevenibles por vacunación; ~100.000 niños por año nacen con síndrome de rubéola congénita."),
          T("Sintomas 2 a 3 semanas depois da exposição; maior contágio de 1 a 5 dias depois do exantema.", "Síntomas 2-3 semanas después de la exposición; mayor contagio 1-5 días después de la erupción.")]],
        [T("Clínica", "Clínica"), [
          T("Exantema maculopapular rosado, confluente, crânio-caudal.", "Exantema maculopapular rosado, confluente, cráneo-caudal."),
          T("Febre baixa e ADENOPATIAS retroauriculares, occipitais e cervicais posteriores, móveis e indolores.", "Fiebre baja y ADENOPATÍAS retroauriculares, occipitales y cervicales posteriores, móviles e indoloras."),
          T("Exclusão escolar até 7 dias depois do exantema. Notificação obrigatória.", "Exclusión escolar hasta 7 días después del exantema. Notificación obligatoria.")]],
        [T("Rubéola congênita", "Rubéola congénita"), [
          T("Infecção no 1º TRIMESTRE: grave. Aborto, morte fetal ou malformações.", "Infección en el 1º TRIMESTRE: grave. Aborto, muerte fetal o malformaciones."),
          T("Cegueira, catarata, hipoacusia, cardiopatia congênita e retardo mental.", "Ceguera, cataratas, hipoacusia, cardiopatía congénita y retraso mental."),
          T("Antes da vacina, 4 em cada 1.000 nascidos vivos tinham SRC; 1 dose dá imunidade acima de 95%.", "Antes de la vacuna, 4 de cada 1.000 nacidos vivos tenían SRC; 1 dosis confiere inmunidad >95%.")]]
      ],
      memo: [["Rubéola", "=", "Togaviridae"], ["1º trimestre", ">", "catarata + surdez + cardiopatia"], ["Adenopatia", "=", "retroauricular e occipital"]],
      mapa: { c: T("Rubéola", "Rubéola"), r: [
        { t: T("Vírus", "Virus"), f: [T("Togaviridae", "Togaviridae"), T("Envelopado", "Envuelto")] },
        { t: T("Clínica", "Clínica"), f: [T("Exantema rosado crânio-caudal", "Exantema rosado cráneo-caudal"), T("Adenopatia retroauricular", "Adenopatía retroauricular")] },
        { t: T("Congênita", "Congénita"), f: [T("1º trimestre", "1º trimestre"), T("Catarata, surdez, cardiopatia", "Cataratas, hipoacusia, cardiopatía")] },
        { t: T("Prevenção", "Prevención"), f: [T("1 dose > 95%", "1 dosis > 95%"), T("Exclusão 7 dias", "Exclusión 7 días")] }] },
      guiada: { q: T("Se a rubéola é leve na criança, por que é tão importante vacinar?", "Si la rubéola es leve en el niño, ¿por qué es tan importante vacunar?"),
        dicas: [T("Pense em quem sofre mais com a infecção.", "Pensá en quién sufre más con la infección."), T("Em que trimestre a infecção é grave?", "¿En qué trimestre la infección es grave?")],
        r: T("Porque a infecção da gestante no 1º trimestre causa a síndrome da rubéola congênita. A vacina previne a principal causa de anomalias congênitas preveníveis.", "Porque la infección de la embarazada en el 1º trimestre causa el síndrome de rubéola congénita. La vacuna previene la principal causa de anomalías congénitas prevenibles.") },
      quiz: [
        { q: T("Menino de 7 anos, febre de 37,8 °C, exantema rosado e adenopatias retroauriculares e occipitais indolores. Diagnóstico mais provável?", "Niño de 7 años, fiebre de 37,8 °C, exantema rosado y adenopatías retroauriculares y occipitales indoloras. ¿Diagnóstico más probable?"), o: [T("Rubéola", "Rubéola"), T("Sarampo", "Sarampión"), T("Mononucleose", "Mononucleosis"), T("Parvovírus", "Parvovirus")], c: 0,
          e: T("Febre baixa, exantema rosado e adenopatia retroauricular e occipital apontam rubéola. A mononucleose tem faringite e adenopatia generalizada.", "Fiebre baja, exantema rosado y adenopatía retroauricular y occipital orientan a rubéola. La mononucleosis tiene faringitis y adenopatía generalizada."), d: 1 },
        { q: T("Família do vírus da rubéola?", "¿Familia del virus de la rubéola?"), o: [T("Togaviridae", "Togaviridae"), T("Paramyxoviridae", "Paramyxoviridae"), T("Parvoviridae", "Parvoviridae"), T("Herpesviridae", "Herpesviridae")], c: 0,
          e: T("Rubéola é Togaviridae. Paramyxoviridae é o sarampo.", "Rubéola es Togaviridae. Paramyxoviridae es el sarampión."), d: 0 }
      ],
      termos: [["surdez", "hipoacusia"], ["catarata", "cataratas"], ["retardo mental", "retraso mental"]],
      erro: T("Trocar a família: rubéola é Togaviridae, sarampo é Paramyxoviridae.", "Confundir la familia: rubéola es Togaviridae, sarampión es Paramyxoviridae.") },
  ];
  const cartoes = [
    ["mono", 0, T("Qual é o agente principal da mononucleose?", "¿Cuál es el agente principal de la mononucleosis?"), T("EBV, gama-herpesvírus de DNA dupla fita, envelopado.", "VEB, gamma herpesvirus ADN bicatenario, envuelto.")],
    ["mono", 0, T("Receptor do EBV?", "¿Receptor del VEB?"), T("CD21 do linfócito B.", "CD21 del linfocito B.")],
    ["mono", 0, T("Tríade clássica da mononucleose?", "¿Tríada clásica de la mononucleosis?"), T("Febre, linfadenopatia e faringite.", "Fiebre, linfadenopatía y faringitis.")],
    ["mono", 0, T("Por que a mononucleose dá sintomas?", "¿Por qué la mononucleosis da síntomas?"), T("Resposta exagerada dos LT CD8+, não dano direto.", "Respuesta exagerada de LT CD8+, no daño directo.")],
    ["mono", 0, T("Complicação rara e fatal da mononucleose?", "¿Complicación rara y fatal de la mononucleosis?"), T("Ruptura esplênica, risco até 8 semanas.", "Rotura esplénica, riesgo hasta 8 semanas.")],
    ["mono", 0, T("VCA IgM + com anti-EBNA IgG − indica?", "¿VCA IgM + con anti-EBNA IgG − indica?"), T("Infecção recente.", "Infección reciente.")],
    ["mono", 0, T("Onde o EBV fica latente?", "¿Dónde queda latente el VEB?"), T("Nos linfócitos B de memória.", "En linfocitos B de memoria.")],
    ["varicela", 1, T("Incubação da varicela?", "¿Incubación de la varicela?"), T("10 a 21 dias.", "10 a 21 días.")],
    ["varicela", 0, T("Vias de contágio da varicela?", "¿Vías de contagio de la varicela?"), T("Líquido das vesículas e secreções respiratórias.", "Líquido vesicular y secreciones respiratorias.")],
    ["varicela", 1, T("Distribuição: varicela x zóster?", "¿Distribución: varicela x zóster?"), T("Varicela disseminada e centrípeta; zóster unilateral, num dermátomo, sem cruzar a linha média.", "Varicela diseminada y centrípeta; zóster unilateral, en un dermatoma, sin cruzar la línea media.")],
    ["varicela", 1, T("Prazo da vacina pós-contato?", "¿Plazo de la vacuna postcontacto?"), T("Até 3 a 5 dias.", "Hasta 3 a 5 días.")],
    ["varicela", 1, T("Prazo da imunoglobulina pós-exposição?", "¿Plazo de la IG postexposición?"), T("Até 96 horas.", "Hasta 96 horas.")],
    ["varicela", 1, T("Período da varicela congênita?", "¿Período de la varicela congénita?"), T("Primeiras 20 semanas de gestação.", "Primeras 20 semanas de gestación.")],
    ["varicela", 0, T("Esquema de vacina no calendário argentino?", "¿Esquema de vacuna en el calendario argentino?"), T("15 meses e 5 anos.", "15 meses y 5 años.")],
    ["varicela", 1, T("Fases das lesões da varicela?", "¿Fases de las lesiones de la varicela?"), T("Pápula, vesícula e crosta.", "Pápula, vesícula y costra.")],
    ["sarampo", 0, T("Família e gênero do sarampo?", "¿Familia y género del sarampión?"), T("Paramyxoviridae, Morbillivirus.", "Paramyxoviridae, Morbillivirus.")],
    ["sarampo", 0, T("Período de contágio do sarampo?", "¿Período de contagio del sarampión?"), T("4 dias antes até 4 dias depois do exantema.", "4 días antes hasta 4 días después del exantema.")],
    ["sarampo", 0, T("Pródromo do sarampo?", "¿Pródromo del sarampión?"), T("Febre alta, tos e conjuntivite.", "Fiebre alta, tos y conjuntivitis.")],
    ["sarampo", 0, T("Tipo e progressão do exantema do sarampo?", "¿Tipo y progresión del exantema del sarampión?"), T("Morbiliforme, crânio-caudal, com descamação fina.", "Morbiliforme, cráneo-caudal, con descamación fina.")],
    ["sarampo", 0, T("Prazos de bloqueio no sarampo?", "¿Plazos de bloqueo en el sarampión?"), T("Vacina até 72 h; imunoglobulina até 6 dias.", "Vacuna hasta 72 h; IG hasta 6 días.")],
    ["sarampo", 0, T("Complicações neurológicas do sarampo?", "¿Complicaciones neurológicas del sarampión?"), T("Encefalite 1/1.000 e PEES 1/100.000.", "Encefalitis 1/1.000 y PEES 1/100.000.")],
    ["parvo", 0, T("Fases da 5ª doença?", "¿Fases de la 5ª enfermedad?"), T("Bochecha esbofeteada, depois exantema reticulado.", "Signo de la cachetada, luego exantema reticulado.")],
    ["parvo", 0, T("O que faz o exantema do parvovírus reaparecer?", "¿Qué hace reaparecer el exantema del parvovirus?"), T("Atividade física, calor e outros gatilhos.", "Actividad física, calor y otros desencadenantes.")],
    ["parvo", 0, T("Parvovírus exclui da escola?", "¿El parvovirus excluye de la escuela?"), T("Não.", "No.")],
    ["rubeola", 1, T("Família do vírus da rubéola?", "¿Familia del virus de la rubéola?"), T("Togaviridae.", "Togaviridae.")],
    ["rubeola", 0, T("Adenopatias típicas da rubéola?", "¿Adenopatías típicas de la rubéola?"), T("Retroauriculares, occipitais e cervicais posteriores, indolores.", "Retroauriculares, occipitales y cervicales posteriores, indoloras.")],
    ["rubeola", 0, T("Quando a rubéola na gestação é grave?", "¿Cuándo es grave la rubéola en el embarazo?"), T("No 1º trimestre.", "En el 1º trimestre.")],
    ["rubeola", 0, T("Achados da rubéola congênita?", "¿Hallazgos de la rubéola congénita?"), T("Cegueira, catarata, hipoacusia, cardiopatia e retardo mental.", "Ceguera, cataratas, hipoacusia, cardiopatía y retraso mental.")],
    ["rubeola", 0, T("Exclusão escolar na rubéola?", "¿Exclusión escolar en la rubéola?"), T("Até 7 dias depois do exantema.", "Hasta 7 días después del exantema.")]
  ];
  return { figuras, cartoes, unidade: { id: "virologia", nome: T("Virologia", "Virología"), curto: T("Virologia", "Virología"), fonte: "Aulas UCES 2026 (4º parcial)", temas,
    pendentes: [T("Vias aéreas superiores", "Vías aéreas superiores"), T("Hepatites", "Hepatitis"), T("HPV", "HPV"), T("Gastroenterites", "Gastroenteritis"), T("Arbovírus", "Arbovirus"), T("Retrovírus", "Retrovirus"), T("Encefalite", "Encefalitis"), T("Raiva e hantavírus", "Rabia y hantavirus")],
    nota: T("Alfa-herpesvírus para o VZV e a lista de evasão aplicada ao EBV não estão nos slides: confirmar com a professora.", "Alfa herpesvirus para el VVZ y la lista de evasión aplicada al VEB no están en los slides: confirmar con la profesora.") } };
});
