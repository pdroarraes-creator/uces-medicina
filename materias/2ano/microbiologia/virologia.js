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
    },
    hepQuadro: () => {
      const BOCA = ["A", "E"], C = (pt, es) => T(pt, es);
      const L = [
        [T("Genoma", "Genoma"), C("RNA+ simples", "ARN+ simple"), C("DNA parcial dupla fita", "ADN parcial doble cadena"), C("RNA+ simples", "ARN+ simple"), C("RNA− circular", "ARN− circular"), C("RNA+ simples", "ARN+ simple")],
        [T("Envelope", "Envoltura"), C("não (nu)", "no (desnudo)"), C("sim", "sí"), C("sim", "sí"), C("usa a casca do B (HBsAg)", "usa la envoltura del B (HBsAg)"), C("não (nu)", "no (desnudo)")],
        [T("Família", "Familia"), "Picornaviridae\nHepatovirus", "Hepadnaviridae\nOrthohepadnavirus", "Flaviviridae\nHepacivirus", C("gênero Deltavirus", "género Deltavirus"), "Hepeviridae\nOrthohepevirus"],
        [T("Transmissão", "Transmisión"), C("fecal-oral: água e alimentos", "fecal-oral: agua y alimentos"), C("sangue, sexo e parto (o mais frequente)", "sangre, sexo y parto (el más frecuente)"), C("sangue, sexo e parto", "sangre, sexo y parto"), C("sangue (e sexo), junto com o B", "sangre (y sexo), junto con el B"), C("água (genótipos 1 e 2); carne de porco (3 e 4)", "agua (genotipos 1 y 2); carne de cerdo (3 y 4)")],
        [T("Evolução", "Evolución"), C("aguda; menor de 4 anos: assintomática", "aguda; menor de 4 años: asintomática"), C("RN: cronifica; adulto: até 10%", "RN: cronifica; adulto: hasta 10%"), C("a MAIORIA cronifica", "la MAYORÍA cronifica"), C("coinfecção: 90% curam; superinfecção: 90% crônica", "coinfección: 90% cura; sobreinfección: 90% crónica"), C("aguda; crônica em imunossuprimido", "aguda; crónica en inmunosuprimido")],
        [T("Diagnóstico", "Diagnóstico"), C("IgM anti-HAV (até 14 semanas)", "IgM anti-HAV (hasta 14 semanas)"), C("HBsAg e IgM anti-HBc; anti-HBs = cura ou vacina", "HBsAg e IgM anti-HBc; anti-HBs = curación o vacuna"), C("anti-HCV = exposição; PCR do RNA = ativa", "anti-HCV = exposición; PCR del ARN = activa"), "—", C("IgM e IgG específicas", "IgM e IgG específicas")],
        [T("Prevenção e alerta", "Prevención y alerta"), C("vacina aos 12 meses; isolar 7 dias", "vacuna a los 12 meses; aislar 7 días"), C("vacina (é o HBsAg); RN: semáforo", "vacuna (es el HBsAg); RN: semáforo"), C("antivirais: cura acima de 95%", "antivirales: curación mayor al 95%"), C("prevenir o B previne o D", "prevenir el B previene el D"), C("gestante no 3º trimestre: até 25% de mortalidade", "embarazada en 3º trimestre: hasta 25% de mortalidad")]];
      const gota = (cor, sangue) => `<svg viewBox="0 0 12 16" width="11" height="14" aria-hidden="true"><path d="M6 1C6 1 1 7.5 1 10.5A5 5 0 0 0 11 10.5C11 7.5 6 1 6 1Z" fill="${cor}"${sangue ? "" : ' fill-opacity=".9"'}/></svg>`;
      const cont = U.el("div", { class: "muted sm", "aria-live": "polite" }), cels = []; let teste = false;
      const pinta = () => { let ab = 0; cels.forEach(c => { c.b.classList.toggle("cob", teste && !c.ab); c.b.setAttribute("aria-label", teste && !c.ab ? T("Coberta. Toque para ver.", "Cubierta. Tocá para ver.") : c.t); if (c.ab) ab++; });
        cont.textContent = teste ? ab + T(" de ", " de ") + cels.length + T(" casas abertas. Diga a resposta antes de tocar.", " casillas abiertas. Decí la respuesta antes de tocar.") : T("Leia por linha e deslize para o lado para ver as cinco.", "Leé por fila y deslizá hacia el costado para ver las cinco."); };
      const cab = l => { const b = BOCA.includes(l); return U.el("th", { scope: "col", class: "hq " + (b ? "boca" : "sang") }, U.el("b", null, l), U.el("span", { html: gota(b ? "#3f7fbf" : "#b9302a", !b) + " " + (b ? T("boca", "boca") : T("sangue", "sangre")) })); };
      const tb = U.el("table", { class: "cmp hep" }, U.el("thead", null, U.el("tr", null, U.el("td", null, ""), ["A", "B", "C", "D", "E"].map(cab))),
        U.el("tbody", null, L.map(l => U.el("tr", null, U.el("th", { scope: "row" }, l[0]), [1, 2, 3, 4, 5].map(i => { const v = l[i], c = { ab: false, t: v };
          c.b = U.el("button", { class: "cel tx " + (v === "—" ? "na" : BOCA.includes("ABCDE"[i - 1]) ? "boca" : "sang"), onclick: () => { if (!teste) return; c.ab = !c.ab; pinta(); } }, U.el("span", null, ...v.split("\n").flatMap((x, k) => k ? [U.el("br"), x] : [x]))); cels.push(c); return U.el("td", null, c.b); })))));
      const seg = U.el("div", { class: "seg", role: "group", "aria-label": T("Modo", "Modo") });
      const modo = t => { teste = t; cels.forEach(c => c.ab = false); [...seg.children].forEach((b, i) => b.setAttribute("aria-pressed", String(!!i === t))); pinta(); };
      seg.append(U.el("button", { onclick: () => modo(false) }, T("Estudar", "Estudiar")), U.el("button", { onclick: () => modo(true) }, T("Testar: cobrir tudo", "Probar: cubrir todo"))); modo(false);
      return U.el("figure", { class: "fig" }, U.el("h3", null, T("Hepatites A a E lado a lado", "Hepatitis A a E lado a lado")),
        U.el("p", { class: "hq-mn" }, U.el("b", null, T("Vogais pela boca", "Vocales por la boca")), " (A, E) · ", U.el("b", null, T("consoantes pelo sangue", "consonantes por la sangre")), " (B, C, D)"),
        seg, cont, U.el("div", { class: "cmpw" }, tb),
        U.el("div", { class: "desc" }, U.el("ul", { class: "hq-ul" },
          U.el("li", null, T("Nenhuma é citolítica: quem lesa o fígado são os LT CD8+ (no D e no E, também as NK).", "Ninguna es citolítica: quien lesiona el hígado son los LT CD8+ (en la D y la E, también las NK).")),
          U.el("li", null, T("Crônica = mais de 6 meses (B: HBsAg; C: RNA). Transaminases acima de 10 vezes, ALT maior que AST.", "Crónica = más de 6 meses (B: HBsAg; C: ARN). Transaminasas más de 10 veces, ALT mayor que AST.")),
          U.el("li", null, T("Só a B é DNA; só a D é RNA negativa.", "Solo la B es ADN; solo la D es ARN negativo.")))),
        U.el("details", { class: "mini-sec hq-tr" }, U.el("summary", null, T("Truques para lembrar", "Trucos para recordar"), U.el("small", null, T("criados no estudo", "creados en el estudio"))),
          U.el("div", { class: "in" }, U.el("dl", { class: "hq-dl" }, ...[
            [T("A de Água", "A de Agua"), T("passa pela água e pelos alimentos (fecal-oral).", "pasa por el agua y los alimentos (fecal-oral).")],
            [T("B de Banco de DNA", "B de Banco de ADN"), T("é a única das cinco com DNA.", "es la única de las cinco con ADN.")],
            [T("C de Crônico, o camaleão", "C de Crónico, el camaleón"), T("a maioria cronifica.", "la mayoría cronifica.")],
            [T("D de Dependente", "D de Dependiente"), T("só se forma com o HBsAg do B.", "solo se forma con el HBsAg del B.")],
            [T("E de Embarazada", "E de Embarazada"), T("é grave na gestante no 3º trimestre.", "es grave en la embarazada en el 3º trimestre.")],
            [T("Coinfecção: 90% Corre", "Coinfección: 90% Corre"), T("B e D chegam juntos e 90% eliminam (curam).", "B y D llegan juntos y el 90% los elimina (cura).")],
            [T("Superinfecção: 90% Super-fica", "Sobreinfección: 90% Super-queda"), T("o D chega quando o B já está lá e 90% cronificam.", "el D llega cuando el B ya está y el 90% cronifica.")],
            [T("A polícia", "La policía"), T("nenhum vírus destrói o fígado sozinho: quem lesa são os LT CD8+ (no D e no E, também as NK).", "ningún virus destruye el hígado solo: quien lesiona son los LT CD8+ (en la D y la E, también las NK).")],
            [T("A testemunha", "El testigo"), T("o anti-HCV viu o vírus passar: mostra exposição, mas não diz se ainda está ativo.", "el anti-HCV vio pasar al virus: muestra exposición, pero no dice si sigue activo.")],
            [T("A câmera", "La cámara"), T("a PCR do RNA flagra o vírus agora: infecção ativa.", "la PCR del ARN filma al virus ahora: infección activa.")],
            [T("A rosquinha de cabeça para baixo", "La rosquilla al revés"), T("só a D é negativa, e o RNA dela é circular.", "solo la D es negativa, y su ARN es circular.")],
            [T("O semáforo", "El semáforo"), T("o que fazer com o recém-nascido conforme a mãe (figura do semáforo, mais abaixo).", "qué hacer con el recién nacido según la madre (figura del semáforo, más abajo).")]
          ].flatMap(([t, d]) => [U.el("dt", null, t), U.el("dd", null, d)])))),
        U.el("figcaption", null, T("Quadro feito a partir das aulas. Na D, o diagnóstico está numa imagem do slide e ficou sem dado aqui.", "Cuadro hecho a partir de las clases. En la D, el diagnóstico está en una imagen de la diapositiva y quedó sin dato acá.")));
    },
    respVirus: () => {
      const cy = 72, R = 24, cx = [58, 180, 296];
      const rnaP = (x, y, w, cor) => { let d = `M${f(x - w)} ${y}`; for (let i = 1; i <= 8; i++) d += `Q${f(x - w + (i - .5) * w / 4)} ${f(y + (i % 2 ? -3.6 : 3.6))} ${f(x - w + i * w / 4)} ${y}`; return `<path d="${d}" fill="none" stroke="${cor}" stroke-width="1.7" stroke-linecap="round"/>`; };
      const ang = (i, n, off) => (i / n) * 6.2832 + (off || 0);
      const pt = (x, y, r, a) => [f(x + r * Math.cos(a)), f(y + r * Math.sin(a))];
      const corpoV = (x, cor, grad) => `<circle cx="${x}" cy="${cy}" r="${R}" fill="url(#${grad})" stroke="${cor}" stroke-width="2.4"/><circle cx="${x}" cy="${cy}" r="${R - 3.4}" fill="none" stroke="${cor}" stroke-width=".8" opacity=".5"/>`;
      let vsr = "", flu = "", cov = "";
      for (let i = 0; i < 16; i++) { const a = ang(i, 16), [x1, y1] = pt(cx[0], cy, R, a), [x2, y2] = pt(cx[0], cy, R + 7, a), [x3, y3] = pt(cx[0], cy, R + 11, a + .22), [x4, y4] = pt(cx[0], cy, R + 11, a - .22);
        vsr += `<path d="M${x1} ${y1}L${x2} ${y2}M${x2} ${y2}L${x3} ${y3}M${x2} ${y2}L${x4} ${y4}" stroke="#1f7a8c" stroke-width="1.7" stroke-linecap="round" fill="none"/>`; }
      for (let i = 0; i < 18; i++) { const a = ang(i, 18), ha = i % 3 !== 2, [x1, y1] = pt(cx[1], cy, R, a), [x2, y2] = pt(cx[1], cy, R + 8, a);
        if (ha) { const [x3, y3] = pt(cx[1], cy, R + 12, a + .16), [x4, y4] = pt(cx[1], cy, R + 12, a - .16); flu += `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#b9302a" stroke-width="1.6"/><polygon points="${x2},${y2} ${x3},${y3} ${x4},${y4}" fill="#b9302a"/>`; }
        else { const [x5, y5] = pt(cx[1], cy, R + 11, a); flu += `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#3f6a9c" stroke-width="1.6"/><circle cx="${x5}" cy="${y5}" r="3.3" fill="#3f6a9c"/>`; } }
      for (let i = 0; i < 14; i++) { const a = ang(i, 14, .1), [x1, y1] = pt(cx[2], cy, R, a), [x2, y2] = pt(cx[2], cy, R + 8, a), [x3, y3] = pt(cx[2], cy, R + 12, a);
        cov += `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#7d4fa0" stroke-width="2.2" stroke-linecap="round"/><circle cx="${x3}" cy="${y3}" r="4.3" fill="#7d4fa0"/>`; }
      let covEM = "";
      for (let i = 0; i < 3; i++) { const a = ang(i, 3, .6), [x, y] = pt(cx[2], cy, R - 1, a); covEM += `<rect x="${f(+x - 2.4)}" y="${f(+y - 2.4)}" width="4.8" height="4.8" rx="1.2" fill="#d9a21b" stroke="var(--surface)" stroke-width=".8"/>`; }
      for (let i = 0; i < 20; i++) { const a = ang(i, 20, .25), [x, y] = pt(cx[2], cy, R - 3.4, a); covEM += `<circle cx="${x}" cy="${y}" r="1.6" fill="#3d7a51"/>`; }
      const g = (id, x, cor, grad, sp, rna) => `<g data-on="${id} tudo">${sp}${corpoV(x, cor, grad)}${rna}</g>`;
      const nome = (i, id, s1, s2) => `<g data-on="${id} tudo">${tx(cx[i], 126, id === "VSR" ? "VSR" : id === "Influenza" ? "Influenza" : "SARS-CoV-2", { a: "middle", c: "hv-l" })}${tx(cx[i], 141, s1, { a: "middle", c: "mut" })}${tx(cx[i], 154, s2, { a: "middle", c: "mut" })}</g>`;
      const leg = (x, y, cor, forma, t1, t2) => `${forma === "c" ? `<circle cx="${x}" cy="${y - 4}" r="4.3" fill="${cor}"/>` : forma === "t" ? `<polygon points="${x - 4.5},${y - .5} ${x + 4.5},${y - .5} ${x},${y - 8.5}" fill="${cor}"/>` : forma === "q" ? `<rect x="${x - 4}" y="${y - 8}" width="8" height="8" rx="2" fill="${cor}"/>` : `<path d="M${x - 5} ${y - 4}L${x + 5} ${y - 4}M${x + 2} ${y - 8}L${x + 5} ${y - 4}L${x + 2} ${y}" stroke="${cor}" stroke-width="2" fill="none" stroke-linecap="round"/>`}${tx(x + 12, y, t1)}${t2 ? tx(x + 12, y + 14, t2, { c: "mut" }) : ""}`;
      const svg = `<svg class="sv" viewBox="0 0 360 262" role="img" aria-label="${T("Os três vírus respiratórios desenhados lado a lado", "Los tres virus respiratorios dibujados lado a lado")}"><defs><radialGradient id="rvA" cx=".4" cy=".35"><stop offset="0" stop-color="#e3f3f5"/><stop offset="1" stop-color="#b4dbe1"/></radialGradient><radialGradient id="rvB" cx=".4" cy=".35"><stop offset="0" stop-color="#fbebd9"/><stop offset="1" stop-color="#efc9a0"/></radialGradient><radialGradient id="rvC" cx=".4" cy=".35"><stop offset="0" stop-color="#efe5f6"/><stop offset="1" stop-color="#cdb5df"/></radialGradient></defs>
        ${g("VSR", cx[0], "#1f7a8c", "rvA", vsr, rnaP(cx[0], cy, 11, "#7b2d8e"))}${g("Influenza", cx[1], "#c5762a", "rvB", flu, rnaP(cx[1], cy, 11, "#7b2d8e"))}${g("SARS-CoV-2", cx[2], "#7d4fa0", "rvC", cov, rnaP(cx[2], cy, 10, "#7b2d8e") + covEM)}
        ${nome(0, "VSR", "Orthopneumovirus", T("RNA fita simples", "ARN simple cadena"))}${nome(1, "Influenza", "Orthomyxoviridae", T("tipos A, B e C", "tipos A, B y C"))}${nome(2, "SARS-CoV-2", T("envelopado", "envuelto"), T("RNA não segmentado", "ARN no segmentado"))}
        <g data-show="tudo">${tx(180, 196, T("Cada vírus tem a sua proteína de superfície:", "Cada virus tiene su proteína de superficie:"), { a: "middle" })}${tx(180, 212, T("VSR = F · influenza = HA e NA · SARS-CoV-2 = S", "VSR = F · influenza = HA y NA · SARS-CoV-2 = S"), { a: "middle", c: "mut" })}</g>
        <g data-show="VSR">${leg(24, 192, "#1f7a8c", "y", T("F (fusão): principal antígeno", "F (fusión): principal antígeno"))}${leg(24, 214, "#1f7a8c", "s", T("funde as células do epitélio: sincícios", "fusiona las células del epitelio: sincicios"))}
          <ellipse cx="180" cy="242" rx="70" ry="13" fill="#b4dbe1" stroke="#1f7a8c" stroke-width="1.4"/>${[130, 160, 200, 230].map(x => `<circle cx="${x}" cy="242" r="3.6" fill="#7b2d8e"/>`).join("")}${tx(264, 246, "sincício", { c: "mut" })}</g>
        <g data-show="Influenza">${leg(24, 196, "#b9302a", "t", T("HA: hemaglutinina", "HA: hemaglutinina"))}${leg(24, 216, "#3f6a9c", "c", T("NA: neuraminidase", "NA: neuraminidasa"))}${tx(180, 246, T("HA + NA definem o subtipo da influenza A (H1N1, H3N2)", "HA + NA definen el subtipo de la influenza A (H1N1, H3N2)"), { a: "middle", c: "mut" })}</g>
        <g data-show="SARS-CoV-2">${leg(24, 192, "#7d4fa0", "c", T("S (espiga): liga ao ACE2", "S (espiga): se une a ACE2"))}${leg(24, 212, "#d9a21b", "q", T("E (envelope)", "E (envoltura)"))}${leg(24, 232, "#3d7a51", "c", T("M (membrana)", "M (membrana)"))}</g>
      </svg>`;
      return U.estados(T("Os três vírus lado a lado", "Los tres virus lado a lado"), svg, [
        { id: "tudo", r: T("Todos", "Todos"), d: T("Os três são <b>envelopados</b> e de <b>RNA</b>. O que muda é a proteína de superfície, e é ela que a vacina, o anticorpo e o receptor celular reconhecem.", "Los tres son <b>envueltos</b> y de <b>ARN</b>. Lo que cambia es la proteína de superficie, y es la que reconocen la vacuna, el anticuerpo y el receptor celular.") },
        { id: "VSR", r: "VSR", d: T("<b>VSR:</b> gênero Orthopneumovirus, RNA de fita simples. A <b>proteína F</b> (fusão) é o principal antígeno e funde as células do epitélio respiratório, formando <b>sincícios</b>. Grupos A e B. Pré-F e pós-F são as duas conformações; os anticorpos contra a pré-F neutralizam.", "<b>VSR:</b> género Orthopneumovirus, ARN de simple cadena. La <b>proteína F</b> (fusión) es el principal antígeno y fusiona las células del epitelio respiratorio, formando <b>sincicios</b>. Grupos A y B. Pre-F y post-F son las dos conformaciones; los anticuerpos contra la pre-F neutralizan.") },
        { id: "Influenza", r: "Influenza", d: T("<b>Influenza:</b> família Orthomyxoviridae, tipos A, B e C. O tipo A se divide em subtipos pelos antígenos de superfície <b>HA</b> (hemaglutinina) e <b>NA</b> (neuraminidase): H1N1, H3N2.", "<b>Influenza:</b> familia Orthomyxoviridae, tipos A, B y C. El tipo A se divide en subtipos por los antígenos de superficie <b>HA</b> (hemaglutinina) y <b>NA</b> (neuraminidasa): H1N1, H3N2.") },
        { id: "SARS-CoV-2", r: "SARS-CoV-2", d: T("<b>SARS-CoV-2:</b> envelopado, RNA de fita simples <b>não segmentado</b>, com as proteínas <b>S</b> (espiga), <b>E</b> (envelope) e <b>M</b> (membrana). A S se liga ao <b>ACE2</b> do epitélio respiratório e dos enterócitos. Grande capacidade de mutação e recombinação.", "<b>SARS-CoV-2:</b> envuelto, ARN de simple cadena <b>no segmentado</b>, con las proteínas <b>S</b> (espiga), <b>E</b> (envoltura) y <b>M</b> (membrana). La S se une a <b>ACE2</b> del epitelio respiratorio y de los enterocitos. Gran capacidad de mutación y recombinación.") }],
        { cap: T("Ilustração própria e simplificada: formas aproximadas, tamanhos e número de espículas fora de escala. Confira com o material da aula.", "Ilustración propia y simplificada: formas aproximadas, tamaños y número de espículas fuera de escala. Verificá con el material de la clase.") });
    },
    respAno: () => {
      const x0 = 44, w = 300, sx = s => f(x0 + (s - 1) / 35 * w);
      const faixa = (id, y, a, cor, t1, t2) => `<g data-on="${id} tudo">${tx(4, y - 8, id === "VSR" ? "VSR" : id === "Influenza" ? "Influenza" : "SARS-CoV-2", { c: "hv-l" })}<rect x="${x0}" y="${y}" width="${w}" height="16" rx="6" fill="var(--sunk)" stroke="var(--line)"/><rect x="${sx(a)}" y="${y}" width="${f(x0 + w - sx(a))}" height="16" rx="6" fill="${cor}"/>${tx(x0, y + 32, t1)}${t2 ? tx(x0, y + 46, t2, { c: "mut" }) : ""}</g>`;
      const svg = `<svg class="sv" viewBox="0 0 360 292" role="img" aria-label="${T("Argentina 2026: quando cada vírus respiratório sobe", "Argentina 2026: cuándo sube cada virus respiratorio")}">
        <path d="M${sx(12)} 34V262M${sx(24)} 34V262" stroke="var(--line)" stroke-width="1" stroke-dasharray="3 4"/>
        ${[1, 12, 24, 36].map(s => tx(sx(s), 24, "SE" + s, { a: "middle", c: "mut" })).join("")}
        ${faixa("Influenza", 52, 12, "#c5762a", T("sobe a partir da SE12: H3N2 desde o fim de 2025", "sube desde la SE12: H3N2 desde fines de 2025"), T("agora pesa mais a influenza B", "ahora pesa más la influenza B"))}
        ${faixa("VSR", 122, 24, "#1f7a8c", T("a positividade sobe a partir da SE24", "la positividad sube desde la SE24"))}
        ${faixa("SARS-CoV-2", 192, 1, "#7d4fa0", T("níveis baixos durante todo o ano", "niveles bajos durante todo el año"))}
        <g data-on="SARS-CoV-2 tudo"><rect x="${x0}" y="192" width="${w}" height="16" rx="6" fill="var(--surface)" opacity=".62"/></g>
        ${tx(180, 280, T("semanas epidemiológicas (SE) de 2026", "semanas epidemiológicas (SE) de 2026"), { a: "middle", c: "mut" })}
      </svg>`;
      return U.estados(T("Argentina 2026: quando cada vírus sobe", "Argentina 2026: cuándo sube cada virus"), svg, [
        { id: "tudo", r: T("Os três", "Los tres"), d: T("A influenza sobe primeiro (SE12), o VSR depois (SE24) e o SARS-CoV-2 fica baixo o ano todo. Há <b>co-circulação</b> viral e diferenças regionais.", "La influenza sube primero (SE12), el VSR después (SE24) y el SARS-CoV-2 queda bajo todo el año. Hay <b>co-circulación</b> viral y diferencias regionales.") },
        { id: "Influenza", r: "Influenza", d: T("<b>Influenza:</b> aumento de casos e de positividade a partir da SE12, com H3N2 desde o fim de 2025. Hoje tem mais peso a influenza B.", "<b>Influenza:</b> aumento de casos y de positividad desde la SE12, con H3N2 desde fines de 2025. Hoy tiene más peso la influenza B.") },
        { id: "VSR", r: "VSR", d: T("<b>VSR:</b> a positividade aumentou a partir da SE24.", "<b>VSR:</b> la positividad aumentó desde la SE24.") },
        { id: "SARS-CoV-2", r: "SARS-CoV-2", d: T("<b>SARS-CoV-2:</b> manteve níveis baixos durante todo o ano, com circulação endêmica e aumentos periódicos.", "<b>SARS-CoV-2:</b> mantuvo niveles bajos durante todo el año, con circulación endémica y aumentos periódicos.") }],
        { cap: T("Esquema próprio a partir do texto do slide, sem os números reais dos gráficos. Confira as semanas no gráfico da aula.", "Esquema propio a partir del texto del slide, sin los números reales de los gráficos. Verificá las semanas en el gráfico de la clase.") });
    },
    hepVirions: () => {
      const cx = [38, 109, 180, 251, 322], cy = 92, R = 27;
      const ico = (x, y, r, cor, st) => { let p = ""; for (let i = 0; i < 6; i++) { const a = i / 6 * 6.2832 - 1.5708; p += f(x + r * Math.cos(a)) + "," + f(y + r * Math.sin(a)) + " "; }
        let fac = ""; for (let i = 0; i < 6; i += 2) { const a = i / 6 * 6.2832 - 1.5708; fac += `<path d="M${x} ${y}L${f(x + r * Math.cos(a))} ${f(y + r * Math.sin(a))}" stroke="${st}" stroke-width=".8" opacity=".55"/>`; }
        return `<polygon points="${p}" fill="${cor}" stroke="${st}" stroke-width="1.6" stroke-linejoin="round"/>${fac}`; };
      const rna = (x, y, w, cor) => { let d = `M${f(x - w)} ${y}`; for (let i = 1; i <= 8; i++) d += `Q${f(x - w + (i - .5) * w / 4)} ${f(y + (i % 2 ? -3.4 : 3.4))} ${f(x - w + i * w / 4)} ${y}`; return `<path d="${d}" fill="none" stroke="${cor}" stroke-width="1.6" stroke-linecap="round"/>`; };
      const env = (x, y, r, esp, corEsp) => { let s = ""; for (let i = 0; i < 16; i++) { const a = i / 16 * 6.2832, c = Math.cos(a), n = Math.sin(a);
          s += esp === "s" ? `<path d="M${f(x + r * c)} ${f(y + r * n)}L${f(x + (r + 5) * c)} ${f(y + (r + 5) * n)}" stroke="${corEsp}" stroke-width="2.2" stroke-linecap="round"/><circle cx="${f(x + (r + 6) * c)}" cy="${f(y + (r + 6) * n)}" r="2.1" fill="${corEsp}"/>`
            : `<path d="M${f(x + r * c)} ${f(y + r * n)}L${f(x + (r + 6) * c)} ${f(y + (r + 6) * n)}" stroke="${corEsp}" stroke-width="1.5"/><path d="M${f(x + (r + 6) * c - 2.4 * n)} ${f(y + (r + 6) * n + 2.4 * c)}L${f(x + (r + 6) * c + 2.4 * n)} ${f(y + (r + 6) * n - 2.4 * c)}" stroke="${corEsp}" stroke-width="2"/>`; }
        return s + `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#hvE)" stroke="#a9772e" stroke-width="2.6"/><circle cx="${x}" cy="${y}" r="${r - 3.2}" fill="none" stroke="#e5c17a" stroke-width="1"/>`; };
      const HBS = "#d08a1e";
      const A = `<g data-on="A tudo">${ico(cx[0], cy, 21, "#d9e6f5", "#3f6a9c")}${rna(cx[0], cy, 10, "#7b2d8e")}</g>`;
      const B = `<g data-on="B tudo">${env(cx[1], cy, R, "s", HBS)}${ico(cx[1], cy, 15, "#efe2c8", "#8a6d3a")}<path d="M${cx[1] + 7} ${cy}A7 7 0 1 1 ${cx[1]} ${cy - 7}" fill="none" stroke="#7b2d8e" stroke-width="1.7"/><circle cx="${cx[1]}" cy="${cy}" r="9.5" fill="none" stroke="#c07fd0" stroke-width="1.5"/></g>`;
      const Cv = `<g data-on="C tudo">${env(cx[2], cy, R, "t", "#5c7d3a")}${ico(cx[2], cy, 15, "#e6eedb", "#5c7d3a")}${rna(cx[2], cy, 7.5, "#7b2d8e")}</g>`;
      const D = `<g data-on="D tudo">${env(cx[3], cy, R - 4, "s", HBS)}<circle cx="${cx[3]}" cy="${cy}" r="11" fill="none" stroke="#b44d7a" stroke-width="2.2"/>${[0, 1, 2, 3, 4, 5].map(i => { const a = i / 6 * 6.2832; return `<circle cx="${f(cx[3] + 15 * Math.cos(a))}" cy="${f(cy + 15 * Math.sin(a))}" r="2.6" fill="#7d6bb8"/>`; }).join("")}</g>`;
      const E = `<g data-on="E tudo">${ico(cx[4], cy, 21, "#dcefe0", "#3d7a51")}${rna(cx[4], cy, 10, "#7b2d8e")}</g>`;
      const nome = (i, l, s1, s2) => `<g data-on="${l} tudo">${tx(cx[i], 150, l, { a: "middle", c: "hv-l" })}${tx(cx[i], 166, s1, { a: "middle", c: "mut" })}${tx(cx[i], 179, s2, { a: "middle", c: "mut" })}</g>`;
      const svg = `<svg class="sv" viewBox="0 0 360 236" role="img" aria-label="${T("Os cinco vírus das hepatites desenhados lado a lado", "Los cinco virus de las hepatitis dibujados lado a lado")}"><defs><radialGradient id="hvE" cx=".4" cy=".35"><stop offset="0" stop-color="#fbf1d8"/><stop offset="1" stop-color="#ecd29a"/></radialGradient></defs>
        <rect x="4" y="34" width="70" height="152" rx="10" fill="#3f7fbf" opacity=".07"/><rect x="287" y="34" width="70" height="152" rx="10" fill="#3f7fbf" opacity=".07"/><rect x="76" y="34" width="208" height="152" rx="10" fill="#b9302a" opacity=".06"/>
        ${tx(38, 26, T("boca", "boca"), { a: "middle", c: "mut" })}${tx(180, 26, T("sangue", "sangre"), { a: "middle", c: "mut" })}${tx(322, 26, T("boca", "boca"), { a: "middle", c: "mut" })}
        ${A}${B}${Cv}${D}${E}
        ${nome(0, "A", T("nu", "desnudo"), "RNA+")}${nome(1, "B", T("envelope", "envoltura"), "DNA")}${nome(2, "C", T("envelope", "envoltura"), "RNA+")}${nome(3, "D", T("casca do B", "envoltura del B"), T("RNA− circular", "ARN− circular"))}${nome(4, "E", T("nu", "desnudo"), "RNA+")}
        <g data-show="B">${lab(cx[1] + 25, cy - 18, 150, 210, ["HBsAg", T("superfície (casca)", "superficie (envoltura)")])}${lab(cx[1] - 10, cy + 8, 30, 210, ["HBcAg", T("core", "core")])}</g>
        <g data-show="D">${lab(cx[3] + 18, cy - 20, 150, 210, [T("HBsAg emprestado do B", "HBsAg prestado del B"), T("sem o B, não se forma", "sin el B, no se forma")])}${lab(cx[3] - 11, cy, 30, 210, [T("RNA− circular", "ARN− circular")])}</g>
        <g data-show="A E">${tx(180, 210, T("sem envelope: resiste no ambiente", "sin envoltura: resiste en el ambiente"), { a: "middle" })}${tx(180, 224, T("e passa pela via fecal-oral", "y pasa por la vía fecal-oral"), { a: "middle", c: "mut" })}</g>
        <g data-show="tudo">${tx(180, 210, T("A e E sem envelope; B, C e D com envelope", "A y E sin envoltura; B, C y D con envoltura"), { a: "middle" })}${tx(180, 224, T("a D usa a mesma casca do B (mesma cor)", "la D usa la misma envoltura del B (mismo color)"), { a: "middle", c: "mut" })}</g>
        <g data-show="C">${tx(180, 210, T("RNA+ com envelope: a que mais cronifica", "ARN+ con envoltura: la que más cronifica"), { a: "middle" })}</g>
      </svg>`;
      return U.estados(T("Os cinco vírus lado a lado", "Los cinco virus lado a lado"), svg, [
        { id: "tudo", r: T("Todos", "Todos"), d: T("Compare a <b>casca</b>: A e E são nus, B, C e D têm envelope. A D não tem casca própria: usa o <b>HBsAg do B</b>.", "Compará la <b>envoltura</b>: A y E son desnudos, B, C y D tienen envoltura. La D no tiene envoltura propia: usa el <b>HBsAg del B</b>.") },
        { id: "A", r: "A", d: T("<b>A:</b> Picornaviridae, RNA+ de fita simples, sem envelope. Fecal-oral; aguda.", "<b>A:</b> Picornaviridae, ARN+ simple cadena, sin envoltura. Fecal-oral; aguda.") },
        { id: "B", r: "B", d: T("<b>B:</b> Hepadnaviridae, a única de DNA (parcialmente de dupla fita), com envelope. O <b>HBsAg</b> é a casca; o <b>HBcAg</b> é o core (daí o anti-HBc).", "<b>B:</b> Hepadnaviridae, la única de ADN (parcialmente doble cadena), con envoltura. El <b>HBsAg</b> es la envoltura; el <b>HBcAg</b> es el core (de ahí el anti-HBc).") },
        { id: "C", r: "C", d: T("<b>C:</b> Flaviviridae, Hepacivirus, RNA+ com envelope. A maioria cronifica; os antivirais curam mais de 95%.", "<b>C:</b> Flaviviridae, Hepacivirus, ARN+ con envoltura. La mayoría cronifica; los antivirales curan más del 95%.") },
        { id: "D", r: "D", d: T("<b>D:</b> RNA de fita simples negativa, circular. Depende do <b>HBsAg do B</b> para se formar: só infecta quem tem o B (coinfecção ou superinfecção).", "<b>D:</b> ARN simple cadena negativo, circular. Depende del <b>HBsAg del B</b> para formarse: solo infecta a quien tiene el B (coinfección o sobreinfección).") },
        { id: "E", r: "E", d: T("<b>E:</b> Hepeviridae, RNA+ sem envelope. Água (genótipos 1 e 2) ou carne de porco (3 e 4); grave na gestante no 3º trimestre.", "<b>E:</b> Hepeviridae, ARN+ sin envoltura. Agua (genotipos 1 y 2) o carne de cerdo (3 y 4); grave en la embarazada en el 3º trimestre.") }],
        { cap: T("Ilustração própria e simplificada: formas aproximadas e tamanhos fora de escala. Confira com o material da aula.", "Ilustración propia y simplificada: formas aproximadas y tamaños fuera de escala. Verificá con el material de la clase.") });
    },
    hepRN: () => {
      const cx1 = 213, cx2 = 309;
      const caixa = (x, y, l1, l2) => `<rect x="${x - 45}" y="${y - 20}" width="90" height="40" rx="8" fill="var(--sunk)"/>${tx(x, y - 3, l1, { a: "middle" })}${tx(x, y + 11, l2, { a: "middle", c: "mut" })}`;
      const lin = (y, cor, rot1, rot2, a1, a2, b1, b2) => `<circle cx="22" cy="${y}" r="11" fill="${cor}" stroke="#222" stroke-opacity=".25"/>${tx(40, y - 2, rot1)}${tx(40, y + 12, rot2, { c: "mut" })}${caixa(cx1, y, a1, a2)}${caixa(cx2, y, b1, b2)}`;
      const svg = `<svg class="sv" viewBox="0 0 360 222" role="img" aria-label="${T("Semáforo do recém-nascido e da hepatite B", "Semáforo del recién nacido y la hepatitis B")}">
        ${tx(261, 12, T("peso do RN", "peso del RN"), { a: "middle", c: "mut" })}${tx(cx1, 28, "> 2000 g", { a: "middle" })}${tx(cx2, 28, "&lt; 2000 g", { a: "middle" })}
        <rect x="6" y="36" width="32" height="178" rx="16" fill="#2b2d36"/>
        ${lin(64, "#d23a32", T("Mãe HBsAg +", "Madre HBsAg +"), T("vacina + HBIG", "vacuna + HBIG"), T("vacina + HBIG", "vacuna + HBIG"), T("em 12 h", "en 12 h"), T("vacina + HBIG", "vacuna + HBIG"), T("em 12 h", "en 12 h"))}
        ${lin(124, "#e7b424", T("Mãe desconhecida", "Madre desconocida"), T("vacina em 12 h", "vacuna en 12 h"), T("vacina 12 h", "vacuna 12 h"), T("HBIG em 7 dias", "HBIG en 7 días"), T("vacina 12 h", "vacuna 12 h"), T("HBIG em 12 h", "HBIG en 12 h"))}
        ${lin(184, "#3c9a5a", T("Mãe negativa", "Madre negativa"), T("só vacina", "solo vacuna"), T("vacina 24 h", "vacuna 24 h"), T("sem HBIG", "sin HBIG"), T("vacina 1 mês", "vacuna al mes"), T("ou na alta", "o al alta"))}
      </svg>`;
      return U.el("figure", { class: "fig" }, U.el("h3", null, T("Recém-nascido e hepatite B: o semáforo", "Recién nacido y hepatitis B: el semáforo")), U.el("div", { html: svg }),
        U.el("div", { class: "desc" }, T("Vermelho é a mãe com HBsAg positivo: vacina e imunoglobulina nas primeiras 12 horas, seja qual for o peso.", "Rojo es la madre con HBsAg positivo: vacuna e inmunoglobulina en las primeras 12 horas, sea cual sea el peso.")),
        U.el("figcaption", null, T("Esquema feito a partir das aulas. Confira com o material da aula.", "Esquema hecho a partir de las clases. Verificá con el material de la clase.")));
    },
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
    { id: "respiratorios", n: "6.6", nome: T("Vírus respiratórios: VRS, influenza e SARS-CoV-2", "Virus respiratorios: VSR, influenza y SARS-CoV-2"), curto: T("Vias aéreas sup.", "Vías aéreas sup."),
      sub: T("Resfriado, ETI, proteína F, HA e NA, proteína S e ACE2", "Resfriado, ETI, proteína F, HA y NA, proteína S y ACE2"),
      estudado: "2026-11-17", figuras: ["respVirus", "respAno"],
      chave: T("O VSR forma sincícios pela proteína F e é a principal causa de infecção respiratória em lactentes; a influenza tem HA e NA e o antiviral rende mais nas primeiras 48 h; o SARS-CoV-2 entra pela S no ACE2 e pode dar SIM-C na criança.", "El VSR forma sincicios por la proteína F y es la principal causa de infección respiratoria en lactantes; la influenza tiene HA y NA y el antiviral rinde más en las primeras 48 h; el SARS-CoV-2 entra por la S en ACE2 y puede dar SIM-C en el niño."),
      resumo: [
        [T("Resfriado e vigilância", "Resfriado y vigilancia"), [
          T("Catarro de via aérea superior: benigno, autolimitado, muito frequente, o ano todo. Incubação de 2 a 5 dias.", "Catarro de vía aérea superior: benigno, autolimitado, muy frecuente, todo el año. Incubación de 2 a 5 días."),
          T("Odinofagia, rinorreia e congestão nasal, tosse, lacrimejamento ou congestão ocular, febre; pode ter sintomas gripais.", "Odinofagia, rinorrea y congestión nasal, tos, epífora o congestión ocular, fiebre; puede asociar síntomas gripales."),
          T("Vírus: rinovírus (resfriado comum), influenza, VSR, SARS-CoV-2 e metapneumovírus. Podem chegar às vias aéreas baixas conforme o hospedeiro.", "Virus: rinovirus (resfriado común), influenza, VSR, SARS-CoV-2 y metapneumovirus. Pueden llegar a la vía aérea baja según el huésped."),
          T("ETI (enfermidade tipo influenza): infecção respiratória aguda com T ≥ 38 °C, tosse e início dos sintomas nos últimos 10 dias.", "ETI (enfermedad tipo influenza): infección respiratoria aguda con T° ≥ 38 °C, tos e inicio de los síntomas dentro de los 10 días.")]],
        [T("VSR", "VSR"), [
          T("RNA de fita simples, gênero Orthopneumovirus. Funde as células do epitélio respiratório e forma sincícios. Grupos A e B.", "ARN monocatenario, género Orthopneumovirus. Se fusiona con las células del epitelio respiratorio y crea sincicios. Grupos A y B."),
          T("Proteína F (fusão): principal antígeno, em duas conformações (pré-F e pós-F). Os anticorpos contra a pré-F neutralizam e reduzem a gravidade.", "Proteína F (fusión): principal antígeno, con dos conformaciones (pre-F y post-F). Los anticuerpos contra la pre-F neutralizan y reducen la gravedad."),
          T("Principal causa de infecção respiratória aguda em lactentes e crianças pequenas; um terço das mortes no 1º ano de vida (mais de 97% em países de renda baixa ou média).", "Principal causa de infección respiratoria aguda en lactantes y niños pequeños; un tercio de las muertes en el 1º año de vida (más del 97% en países de ingresos bajos o medianos)."),
          T("Só o ser humano é reservatório. Contágio por secreções ou superfícies; R0 de cerca de 4,5; incubação de 2 a 8 dias.", "Solo el ser humano es reservorio. Contagio por secreciones o superficies; R0 de alrededor de 4,5; incubación de 2 a 8 días."),
          T("Clínica: infecção respiratória aguda, com crupe e otite média. Infecção grave cedo se associa a sibilância recorrente, hiper-reatividade brônquica, asma e queda da função pulmonar.", "Clínica: infección respiratoria aguda, con crup y otitis media. La infección grave temprana se asocia con sibilancias recurrentes, hiperreactividad bronquial, asma y descenso de la función pulmonar."),
          T("Risco de doença grave: prematuridade, doença pulmonar crônica, cardiopatia congênita, imunodeficiência e doença neuromuscular (também fibrose cística e síndrome de Down).", "Riesgo de enfermedad grave: prematurez, enfermedad pulmonar crónica, cardiopatía congénita, inmunodeficiencia y enfermedad neuromuscular (también fibrosis quística y síndrome de Down)."),
          T("Prevenção: vacina na gestante entre 32 e 36,6 semanas, na temporada de circulação; imunização passiva do lactente menor de 8 meses com nirsevimab.", "Prevención: vacuna en la persona gestante entre las semanas 32 y 36,6, en temporada de circulación; inmunización pasiva del lactante menor de 8 meses con nirsevimab.")]],
        [T("Influenza", "Influenza"), [
          T("Família Orthomyxoviridae; tipos A, B e C. O A se divide em subtipos pela hemaglutinina (HA) e neuraminidase (NA): H1N1, H3N2.", "Familia Orthomyxoviridae; tipos A, B y C. El A se subdivide en subtipos por la hemaglutinina (HA) y neuraminidasa (NA): H1N1, H3N2."),
          T("A maioria das crianças se recupera em 3 a 7 dias, mas há complicações mesmo em saudáveis. A influenza é fator de risco independente para infecção bacteriana grave (pneumocócica invasiva ou S. aureus).", "La mayoría de los niños se recupera en 3 a 7 días, pero hay complicaciones incluso en sanos. La influenza es factor de riesgo independiente de infección bacteriana grave (neumocócica invasiva o S. aureus)."),
          T("Subclado K (J.2.4.1): variante recente que se expande na Argentina.", "Subclado K (J.2.4.1): variante reciente que se expande en Argentina."),
          T("Antiviral: mais efetivo nas primeiras 48 h do início dos sintomas, em pacientes com fatores de risco. Há cápsula de 75 mg, pó para suspensão de 12 mg/mL e xarope magistral de 15 mg/mL.", "Antiviral: más efectivo dentro de las 48 h del inicio de los síntomas, en pacientes con factores de riesgo. Hay cápsulas de 75 mg, polvo para suspensión de 12 mg/mL y jarabe magistral de 15 mg/mL."),
          T("Vacina anual (SAP). Prioridade: crianças de 6 a 24 meses, crianças com fatores de risco, gestantes e profissionais de saúde. Recomendação ampliada: todas as crianças até 5 anos.", "Vacunación anual (SAP). Prioridad: niños de 6 a 24 meses, niños con factores de riesgo, embarazadas y personal de salud. Recomendación ampliada: todos los niños hasta los 5 años.")]],
        [T("SARS-CoV-2", "SARS-CoV-2"), [
          T("Vírus envelopado, de RNA de fita simples não segmentado. Grande capacidade de mutação e recombinação.", "Virus envuelto, de ARN monocatenario no segmentado. Elevada capacidad de mutación y recombinación."),
          T("Proteínas estruturais: S (espiga), E (envelope) e M (membrana).", "Proteínas estructurales: S (espiga), E (envoltura) y M (membrana)."),
          T("Entrada: a glicoproteína S se liga à enzima conversora de angiotensina 2 (ACE2), presente no epitélio respiratório e nos enterócitos.", "Entrada: la glicoproteína S interactúa con la enzima convertidora de angiotensina 2 (ACE2), presente en el epitelio respiratorio y en los enterocitos."),
          T("Clínica respiratória predominante; pode haver manifestações extrapulmonares graves: cardiovascular, neurológica, hematológica e gastrointestinal.", "Clínica respiratoria predominante; puede haber manifestaciones extrapulmonares graves: cardiovascular, neurológica, hematológica y gastrointestinal."),
          T("Circulação endêmica com aumentos periódicos. Na criança é leve na maioria, mas há risco de doença grave em lactentes e em quem tem comorbidades. Vigiar a SIM-C (síndrome inflamatória multissistêmica).", "Circulación endémica con incrementos periódicos. En el niño es leve en la mayoría, pero persiste riesgo de enfermedad grave en lactantes y en quienes tienen comorbilidades. Vigilar el SIM-C (síndrome inflamatorio multisistémico)."),
          T("Prevenção: vacina (RNA mensageiro ou proteínas recombinantes contra a S), isolamento respiratório e vigilância epidemiológica.", "Prevención: vacunación (ARNm o proteínas recombinantes contra la S), aislamiento respiratorio y vigilancia epidemiológica.")]],
        [T("Em conjunto", "En conjunto"), [
          T("Cenário argentino de 2026: co-circulação viral. Influenza sobe da SE12, VSR da SE24, SARS-CoV-2 fica baixo.", "Escenario argentino 2026: co-circulación viral. Influenza sube desde la SE12, VSR desde la SE24, SARS-CoV-2 queda bajo."),
          T("Conclusões da aula: quadros frequentes e contagiosos; manejo sintomático, repouso e hidratação; isolamento respiratório e/ou de contato; vacinação em hospedeiros suscetíveis; vigilância epidemiológica.", "Conclusiones de la clase: cuadros frecuentes y contagiosos; manejo sintomático, reposo e hidratación; aislamiento respiratorio y/o de contacto; vacunación en huéspedes susceptibles; vigilancia epidemiológica.")]]
      ],
      memo: [["VSR", "=", T("proteína F, sincícios", "proteína F, sincicios")], [T("Influenza", "Influenza"), "=", "HA + NA"], ["SARS-CoV-2", "=", T("S liga ao ACE2", "S se une a ACE2")], [T("Antiviral da influenza", "Antiviral de la influenza"), "=", T("até 48 h do início", "hasta 48 h del inicio")], [T("Vacina VSR na gestante", "Vacuna VSR en la gestante"), "=", T("32 a 36,6 semanas", "semanas 32 a 36,6")]],
      mapa: { c: T("Vírus respiratórios", "Virus respiratorios"), r: [
        { t: "VSR", f: [T("Orthopneumovirus", "Orthopneumovirus"), T("Proteína F: sincícios", "Proteína F: sincicios"), T("Lactente: mais grave", "Lactante: más grave")] },
        { t: "Influenza", f: [T("Orthomyxoviridae A, B, C", "Orthomyxoviridae A, B, C"), T("HA + NA: subtipo", "HA + NA: subtipo"), T("Antiviral em 48 h", "Antiviral en 48 h")] },
        { t: "SARS-CoV-2", f: [T("RNA não segmentado", "ARN no segmentado"), T("S + ACE2", "S + ACE2"), T("SIM-C na criança", "SIM-C en el niño")] },
        { t: T("Prevenção", "Prevención"), f: [T("Vacinas", "Vacunas"), T("Isolamento respiratório", "Aislamiento respiratorio"), T("Vigilância (ETI)", "Vigilancia (ETI)")] }] },
      guiada: { q: T("Por que a proteína F do VSR é o alvo da prevenção?", "¿Por qué la proteína F del VSR es el blanco de la prevención?"),
        dicas: [T("O que a F faz com as células do epitélio?", "¿Qué hace la F con las células del epitelio?"), T("Que conformação gera anticorpos que neutralizam?", "¿Qué conformación genera anticuerpos que neutralizan?")],
        r: T("Porque a F faz a fusão do vírus com a célula (e forma sincícios) e é o principal antígeno. Anticorpos contra a F em pré-fusão neutralizam o vírus e reduzem a gravidade; por isso se vacina a gestante e se faz imunização passiva no lactente.", "Porque la F hace la fusión del virus con la célula (y forma sincicios) y es el principal antígeno. Los anticuerpos contra la F en pre-fusión neutralizan el virus y reducen la gravedad; por eso se vacuna a la gestante y se hace inmunización pasiva en el lactante.") },
      quiz: [
        { q: T("Lactente de 5 meses com infecção respiratória baixa e hipoxemia. O vírus forma sincícios e a proteína F é seu principal antígeno. Qual é?", "Lactante de 5 meses con infección respiratoria baja e hipoxemia. El virus forma sincicios y la proteína F es su principal antígeno. ¿Cuál es?"), o: ["VSR", T("Influenza", "Influenza"), "SARS-CoV-2", T("Rinovírus", "Rinovirus")], c: 0,
          e: T("Sincícios e proteína F são do VSR (Orthopneumovirus), a principal causa de infecção respiratória aguda em lactentes.", "Sincicios y proteína F son del VSR (Orthopneumovirus), la principal causa de infección respiratoria aguda en lactantes."), d: 0 },
        { q: T("O que define o subtipo da influenza A (H1N1, H3N2)?", "¿Qué define el subtipo de la influenza A (H1N1, H3N2)?"), o: [T("Hemaglutinina e neuraminidase", "Hemaglutinina y neuraminidasa"), T("Proteína F", "Proteína F"), T("Proteína S", "Proteína S"), T("Proteínas E e M", "Proteínas E y M")], c: 0,
          e: T("O tipo A se subdivide pelos antígenos de superfície HA e NA. F é do VSR; S, E e M são do SARS-CoV-2.", "El tipo A se subdivide por los antígenos de superficie HA y NA. F es del VSR; S, E y M son del SARS-CoV-2."), d: 0 },
        { q: T("Criança com influenza e fator de risco chega com 24 h de sintomas. Sobre o antiviral, qual afirmação é a certa?", "Niño con influenza y factor de riesgo llega con 24 h de síntomas. Sobre el antiviral, ¿qué afirmación es la correcta?"), o: [T("Rende mais nas primeiras 48 h do início dos sintomas", "Rinde más en las primeras 48 h del inicio de los síntomas"), T("Só vale a partir do 5º dia", "Solo vale desde el 5º día"), T("Está indicado para todo resfriado", "Está indicado para todo resfriado"), T("Substitui a vacina anual", "Reemplaza la vacuna anual")], c: 0,
          e: T("A maior efetividade é nas primeiras 48 h, em pacientes com fatores de risco. A vacina anual é a estratégia principal de prevenção e não é substituída.", "La mayor efectividad es en las primeras 48 h, en pacientes con factores de riesgo. La vacuna anual es la estrategia principal de prevención y no se reemplaza."), d: 1 },
        { q: T("Qual receptor celular o SARS-CoV-2 usa para entrar?", "¿Qué receptor celular usa el SARS-CoV-2 para entrar?"), o: ["ACE2", "CD21", "CD4", "CCR5"], c: 0,
          e: T("A glicoproteína S se liga à ACE2, presente no epitélio respiratório e nos enterócitos. CD21 é do EBV; CD4 e CCR5, do HIV.", "La glicoproteína S se une a ACE2, presente en el epitelio respiratorio y en los enterocitos. CD21 es del VEB; CD4 y CCR5, del VIH."), d: 0 }
      ],
      termos: [["sincício", "sincicio"], ["rinorreia", "rinorrea"], ["lactente", "lactante"], ["gestante", "embarazada"], ["lacrimejamento", "epífora"]],
      erro: T("Trocar as proteínas: VSR = F (fusão); influenza = HA e NA; SARS-CoV-2 = S, E e M, com a S ligando ao ACE2.", "Confundir las proteínas: VSR = F (fusión); influenza = HA y NA; SARS-CoV-2 = S, E y M, con la S uniéndose a ACE2.") },
    { id: "hepatites", n: "6.8", nome: T("Hepatites virais: comparativo A a E", "Hepatitis virales: comparativo A a E"), curto: T("Hepatites", "Hepatitis"),
  sub: T("Vogais pela boca, consoantes pelo sangue", "Vocales por la boca, consonantes por la sangre"),
  estudado: "2026-11-17", figuras: ["hepQuadro", "hepVirions", "hepRN"],
  chave: T("A e E são de transmissão fecal-oral e sem envelope; B, C e D são parenterais. B é a única de DNA, C é a que mais cronifica, D depende do HBsAg do B e E é grave na gestante no 3º trimestre.", "A y E son de transmisión fecal-oral y desnudos; B, C y D son parenterales. B es el único ADN, C es el que más cronifica, D depende del HBsAg del B y E es grave en la embarazada en el 3º trimestre."),
  resumo: [
   [T("Clínica geral (Taller)", "Clínica general (Taller)"), [
    T("Pré-ictérica: febre, astenia, mialgias, anorexia e náuseas.", "Preictérica: fiebre, astenia, mialgias, anorexia y náuseas."),
    T("Ictérica: icterícia, colúria, hipocolia/acolia, hepatomegalia dolorosa, transaminases mais de 10 vezes o normal.", "Ictérica: ictericia, coluria, hipocolia/acolia, hepatomegalia dolorosa, transaminasas >10 veces lo normal."),
    T("Crônica (mais de 6 meses): cirrose, hipertensão portal, esplenomegalia, ascite, varizes, encefalopatia e coagulopatia.", "Crónica (>6 meses): cirrosis, hipertensión portal, esplenomegalia, ascitis, várices, encefalopatía y coagulopatía.")]],
   [T("Marcadores da hepatite B", "Marcadores de la hepatitis B"), [
    T("HBsAg: 1º marcador, infecção ativa; mais de 6 meses = crônica.", "HBsAg: 1º marcador, infección activa; >6 meses = crónica."),
    T("HBeAg: alta replicação e infectividade. Anti-HBe: replicação diminuindo.", "HBeAg: alta replicación e infectividad. Anti-HBe: replicación en descenso."),
    T("IgM anti-HBc: aguda recente. IgG anti-HBc: contato prévio, para sempre.", "IgM anti-HBc: aguda reciente. IgG anti-HBc: contacto previo, de por vida."),
    T("Anti-HBs + anti-HBc = curou. Anti-HBs sem anti-HBc = vacinado. Protetor: acima de 10 mUI/mL.", "Anti-HBs + anti-HBc = curación. Anti-HBs sin anti-HBc = vacunado. Protector: >10 mUI/mL."),
    T("Crônica em 4 fases: imunotolerância, imunoeliminação, portador inativo, reativação.", "Crónica en 4 fases: inmunotolerancia, inmunoeliminación, portador inactivo, reactivación.")]],
   [T("Recém-nascido e hepatite B (semáforo)", "Recién nacido y hepatitis B (semáforo)"), [
    T("Mãe HBsAg+: vacina + HBIG em 12 h, qualquer peso.", "Madre HBsAg+: vacuna + HBIG en 12 h, cualquier peso."),
    T("Mãe negativa: só vacina; mais de 2000 g em 24 h, menos de 2000 g com 1 mês ou na alta.", "Madre negativa: solo vacuna; >2000 g en 24 h, <2000 g al mes o al alta."),
    T("Mãe desconhecida: vacina em 12 h; HBIG em 7 dias (mais de 2000 g) ou em 12 h (menos de 2000 g).", "Madre desconocida: vacuna en 12 h; HBIG en 7 días (>2000 g) o en 12 h (<2000 g).")]],
   [T("Hepatite C: diagnóstico", "Hepatitis C: diagnóstico"), [
    T("Anti-HCV (ELISA): exposição, não diferencia ativa de passada; aparece em média em 2 meses.", "Anti-HCV (ELISA): exposición, no distingue activa de pasada; aparece en promedio a los 2 meses."),
    T("RT-PCR: infecção ativa, positiva em 7 a 14 dias; RNA mais de 6 meses = crônica; genotipagem antes do tratamento.", "RT-PCR: infección activa, positiva a los 7-14 días; ARN >6 meses = crónica; genotipado antes del tratamiento."),
    T("Bebê: anticorpos maternos até 18 meses; 2 PCR positivas entre 2 e 6 meses.", "Lactante: anticuerpos maternos hasta 18 meses; 2 PCR positivas entre 2 y 6 meses.")]]
  ],
  memo: [[T("A e E", "A y E"), "=", T("vogais pela boca", "vocales por la boca")], [T("B, C e D", "B, C y D"), "=", T("consoantes pelo sangue", "consonantes por la sangre")], [T("Coinfecção", "Coinfección"), "=", T("90% curam", "90% cura")], [T("Superinfecção", "Sobreinfección"), "=", T("90% cronificam", "90% cronifica")], [T("Fibrose", "Fibrosis"), ">", T("cirrose", "cirrosis"), ">", T("câncer", "cáncer")]],
  mapa: { c: T("Hepatites", "Hepatitis"), r: [
   { t: "A", f: [T("Picornaviridae", "Picornaviridae"), T("Fecal-oral", "Fecal-oral"), T("Vacina 12 meses", "Vacuna 12 meses")] },
   { t: "B", f: [T("Hepadnaviridae, DNA", "Hepadnaviridae, ADN"), T("Sangue, sexo, parto", "Sangre, sexo, parto"), T("RN cronifica", "RN cronifica")] },
   { t: "C", f: [T("Flaviviridae, Hepacivirus", "Flaviviridae, Hepacivirus"), T("Maioria cronifica", "Mayoría cronifica"), T("Cura > 95%", "Curación > 95%")] },
   { t: "D", f: [T("Deltavirus, RNA− circular", "Deltavirus, ARN− circular"), T("Depende do HBsAg", "Depende del HBsAg"), T("Anti-LKM", "Anti-LKM")] },
   { t: "E", f: [T("Hepeviridae", "Hepeviridae"), T("Água (1-2) / carne (3-4)", "Agua (1-2) / carne (3-4)"), T("Gestante 3º tri: 25%", "Embarazada 3º tri: 25%")] }] },
  guiada: { q: T("Por que a superinfecção pelo D cronifica mais que a coinfecção?", "¿Por qué la sobreinfección por D cronifica más que la coinfección?"),
   dicas: [T("De que o D precisa para formar o vírus?", "¿Qué necesita el D para formar el virus?"), T("Na superinfecção, o que já está sobrando no fígado?", "En la sobreinfección, ¿qué ya sobra en el hígado?")],
   r: T("Porque o D usa a casca do B (HBsAg). Na superinfecção o HBsAg já é abundante, então o D se replica rápido e 90% cronificam.", "Porque el D usa la envoltura del B (HBsAg). En la sobreinfección el HBsAg ya es abundante, el D se replica rápido y el 90% cronifica.") },
  quiz: [
   { q: T("Paciente com anti-HBs positivo e anti-HBc negativo. Interpretação?", "Paciente con anti-HBs positivo y anti-HBc negativo. ¿Interpretación?"), o: [T("Vacinado", "Vacunado"), T("Curou de infecção natural", "Curado de infección natural"), T("Infecção aguda", "Infección aguda"), T("Infecção crônica", "Infección crónica")], c: 0,
    e: T("A vacina tem só o HBsAg (a casca), então gera anti-HBs sem anti-HBc.", "La vacuna tiene solo HBsAg, genera anti-HBs sin anti-HBc."), d: 1 },
   { q: T("Gestante no 3º trimestre, após inundação, com hepatite aguda grave. Vírus mais provável?", "Embarazada en 3º trimestre, tras inundación, con hepatitis aguda grave. ¿Virus más probable?"), o: [T("Hepatite E", "Hepatitis E"), T("Hepatite C", "Hepatitis C"), T("Hepatite D", "Hepatitis D"), T("Hepatite B", "Hepatitis B")], c: 0,
    e: T("Hepatite E: água contaminada (genótipos 1 e 2) e mortalidade materna de até 25% no 3º trimestre.", "Hepatitis E: agua contaminada (genotipos 1 y 2) y mortalidad materna de hasta 25% en el 3º trimestre."), d: 1 }
  ],
  termos: [["colúria", "coluria"], ["acolia", "acolia"], ["gestante", "embarazada"], ["transaminases", "transaminasas"]],
  erro: T("Trocar anti-HBs (imunidade) com IgG anti-HBc (contato prévio para sempre).", "Confundir anti-HBs (inmunidad) con IgG anti-HBc (contacto previo de por vida).") }
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
    ["rubeola", 0, T("Exclusão escolar na rubéola?", "¿Exclusión escolar en la rubéola?"), T("Até 7 dias depois do exantema.", "Hasta 7 días después del exantema.")],
    ["hepatites", 1, T("Marcador que fica para sempre e indica contato prévio com o B?", "¿Marcador de contacto previo de por vida con el B?"), T("IgG anti-HBc.", "IgG anti-HBc.")],
    ["hepatites", 1, T("Anti-HBs + e anti-HBc +?", "¿Anti-HBs + y anti-HBc +?"), T("Teve a infecção e curou.", "Tuvo la infección y se curó.")],
    ["hepatites", 1, T("Sorotipos e genótipos do vírus B?", "¿Serotipos y genotipos del virus B?"), T("1 sorotipo, 9 genótipos (A-J).", "1 serotipo, 9 genotipos (A-J).")],
    ["hepatites", 1, T("4 fases da hepatite B crônica?", "¿4 fases de la hepatitis B crónica?"), T("Imunotolerância, imunoeliminação, portador inativo, reativação.", "Inmunotolerancia, inmunoeliminación, portador inactivo, reactivación.")],
    ["hepatites", 1, T("Coinfecção B+D: desfecho?", "¿Coinfección B+D: desenlace?"), T("90% eliminam; risco de hepatite grave e fulminante.", "90% elimina; riesgo de hepatitis grave y fulminante.")],
    ["hepatites", 1, T("Superinfecção pelo D: desfecho?", "¿Sobreinfección por D: desenlace?"), T("90% cronificam: cirrose e hepatocarcinoma.", "90% cronifica: cirrosis y hepatocarcinoma.")],
    ["hepatites", 1, T("Genoma do vírus D?", "¿Genoma del virus D?"), T("RNA de fita simples negativa, circular.", "ARN simple cadena negativo, circular.")],
    ["hepatites", 1, T("Família e gênero do vírus C?", "¿Familia y género del virus C?"), T("Flaviviridae, Hepacivirus.", "Flaviviridae, Hepacivirus.")],
    ["hepatites", 1, T("Quando a RT-PCR do C fica positiva?", "¿Cuándo es positiva la RT-PCR del C?"), T("7 a 14 dias após o contágio.", "7-14 días tras el contagio.")],
    ["hepatites", 1, T("Doenças por imunocomplexos no C?", "¿Enfermedades por inmunocomplejos en el C?"), T("Glomerulonefrite, poliarterite nodosa, artrite e púrpura.", "Glomerulonefritis, poliarteritis nudosa, artritis y púrpura.")],
    ["hepatites", 1, T("Família e gênero do vírus A?", "¿Familia y género del virus A?"), T("Picornaviridae, Hepatovirus.", "Picornaviridae, Hepatovirus.")],
    ["hepatites", 1, T("Genótipos da E em países em desenvolvimento?", "¿Genotipos de la E en países en desarrollo?"), T("1 e 2, pela água.", "1 y 2, por agua.")],
    ["hepatites", 0, T("Hepatite E grave na gestante: quando?", "¿Hepatitis E grave en embarazada: cuándo?"), T("3º trimestre, mortalidade até 25%.", "3º trimestre, mortalidad hasta 25%.")],
    ["hepatites", 0, T("Bebê de mãe HBsAg+: conduta?", "¿RN de madre HBsAg+: conducta?"), T("Vacina + HBIG em 12 h.", "Vacuna + HBIG en 12 h.")],
    ["respiratorios", 0, T("Vírus respiratórios de importância médica no slide?", "¿Virus respiratorios de importancia médica del slide?"), T("Rinovírus (resfriado comum), influenza, VSR, SARS-CoV-2 e metapneumovírus.", "Rinovirus (resfriado común), influenza, VSR, SARS-CoV-2 y metapneumovirus.")],
    ["respiratorios", 0, T("Catarro de via aérea superior: perfil e incubação?", "Catarro de vía aérea superior: perfil e incubación?"), T("Benigno, autolimitado, muito frequente; incubação de 2 a 5 dias.", "Benigno, autolimitado, muy frecuente; incubación de 2 a 5 días.")],
    ["respiratorios", 0, T("Definição de ETI?", "¿Definición de ETI?"), T("Infecção respiratória aguda com T ≥ 38 °C, tosse e início dos sintomas nos últimos 10 dias.", "Infección respiratoria aguda con T° ≥ 38 °C, tos e inicio de los síntomas dentro de los 10 días.")],
    ["respiratorios", 0, T("Argentina 2026: quando sobe cada vírus?", "Argentina 2026: ¿cuándo sube cada virus?"), T("Influenza da SE12 (H3N2, agora mais B); VSR da SE24; SARS-CoV-2 baixo o ano todo.", "Influenza desde la SE12 (H3N2, ahora más B); VSR desde la SE24; SARS-CoV-2 bajo todo el año.")],
    ["respiratorios", 0, T("Gênero do VSR e o que ele faz na célula?", "¿Género del VSR y qué hace en la célula?"), T("Orthopneumovirus, RNA de fita simples; funde as células do epitélio e forma sincícios.", "Orthopneumovirus, ARN monocatenario; fusiona las células del epitelio y forma sincicios.")],
    ["respiratorios", 0, T("Principal antígeno do VSR?", "¿Principal antígeno del VSR?"), T("Proteína F (fusão), em pré-F e pós-F; anticorpos contra a pré-F neutralizam.", "Proteína F (fusión), en pre-F y post-F; los anticuerpos contra la pre-F neutralizan.")],
    ["respiratorios", 0, T("Grupos antigênicos do VSR?", "¿Grupos antigénicos del VSR?"), T("A e B.", "A y B.")],
    ["respiratorios", 0, T("R0 e incubação do VSR?", "¿R0 e incubación del VSR?"), T("R0 de cerca de 4,5; incubação de 2 a 8 dias.", "R0 de alrededor de 4,5; incubación de 2 a 8 días.")],
    ["respiratorios", 0, T("Reservatório do VSR?", "¿Reservorio del VSR?"), T("Só o ser humano.", "Solo el ser humano.")],
    ["respiratorios", 0, T("Sequelas da infecção grave por VSR cedo na vida?", "¿Secuelas de la infección grave por VSR temprano en la vida?"), T("Sibilância recorrente, hiper-reatividade brônquica, asma e queda da função pulmonar.", "Sibilancias recurrentes, hiperreactividad bronquial, asma y descenso de la función pulmonar.")],
    ["respiratorios", 0, T("Fatores de risco para VSR grave?", "¿Factores de riesgo para VSR grave?"), T("Prematuridade, doença pulmonar crônica, cardiopatia congênita, imunodeficiência e doença neuromuscular.", "Prematurez, enfermedad pulmonar crónica, cardiopatía congénita, inmunodeficiencia y enfermedad neuromuscular.")],
    ["respiratorios", 0, T("Vacina do VSR na gestante: quando?", "¿Vacuna del VSR en la gestante: cuándo?"), T("Entre 32 e 36,6 semanas, na temporada de circulação do vírus.", "Entre las semanas 32 y 36,6, en temporada de circulación del virus.")],
    ["respiratorios", 0, T("Imunização passiva contra o VSR no lactente?", "¿Inmunización pasiva contra el VSR en el lactante?"), T("Nirsevimab, em menores de 8 meses (indicações exatas: conferir no slide).", "Nirsevimab, en menores de 8 meses (indicaciones exactas: verificar en el slide).")],
    ["respiratorios", 0, T("Família e tipos da influenza?", "¿Familia y tipos de la influenza?"), T("Orthomyxoviridae; tipos A, B e C. O A se divide por HA e NA.", "Orthomyxoviridae; tipos A, B y C. El A se divide por HA y NA.")],
    ["respiratorios", 0, T("Tempo de recuperação da influenza na criança?", "¿Tiempo de recuperación de la influenza en el niño?"), T("3 a 7 dias na maioria, mas há complicações mesmo em saudáveis.", "3 a 7 días en la mayoría, pero hay complicaciones incluso en sanos.")],
    ["respiratorios", 0, T("A influenza é fator de risco independente para quê?", "¿La influenza es factor de riesgo independiente de qué?"), T("Infecção bacteriana grave (pneumocócica invasiva ou S. aureus).", "Infección bacteriana grave (neumocócica invasiva o S. aureus).")],
    ["respiratorios", 0, T("Antiviral da influenza: quando rende mais?", "¿Antiviral de la influenza: cuándo rinde más?"), T("Nas primeiras 48 h do início dos sintomas, em pacientes com fatores de risco.", "En las primeras 48 h del inicio de los síntomas, en pacientes con factores de riesgo.")],
    ["respiratorios", 0, T("Vacina da influenza (SAP): prioridades?", "¿Vacuna de la influenza (SAP): prioridades?"), T("Anual. Crianças de 6 a 24 meses, com fatores de risco, gestantes e profissionais de saúde; ampliada a todos até 5 anos.", "Anual. Niños de 6 a 24 meses, con factores de riesgo, embarazadas y personal de salud; ampliada a todos hasta 5 años.")],
    ["respiratorios", 1, T("Genoma do SARS-CoV-2?", "¿Genoma del SARS-CoV-2?"), T("RNA de fita simples NÃO segmentado, envelopado.", "ARN monocatenario NO segmentado, envuelto.")],
    ["respiratorios", 1, T("Proteínas estruturais do SARS-CoV-2?", "¿Proteínas estructurales del SARS-CoV-2?"), T("S (espiga), E (envelope) e M (membrana).", "S (espiga), E (envoltura) y M (membrana).")],
    ["respiratorios", 0, T("Como o SARS-CoV-2 entra na célula?", "¿Cómo entra el SARS-CoV-2 a la célula?"), T("Proteína S + ACE2, no epitélio respiratório e nos enterócitos.", "Proteína S + ACE2, en el epitelio respiratorio y en los enterocitos.")],
    ["respiratorios", 0, T("Manifestações extrapulmonares do SARS-CoV-2?", "¿Manifestaciones extrapulmonares del SARS-CoV-2?"), T("Cardiovascular, neurológica, hematológica e gastrointestinal.", "Cardiovascular, neurológica, hematológica y gastrointestinal.")],
    ["respiratorios", 1, T("Complicação a vigiar na criança com COVID-19?", "¿Complicación a vigilar en el niño con COVID-19?"), T("SIM-C, a síndrome inflamatória multissistêmica.", "SIM-C, el síndrome inflamatorio multisistémico.")],
    ["respiratorios", 0, T("Vacina do SARS-CoV-2: contra o quê e para quem priorizar?", "¿Vacuna del SARS-CoV-2: contra qué y a quién priorizar?"), T("Resposta contra a S (RNA mensageiro ou proteínas recombinantes); lactentes e crianças com fatores de risco.", "Respuesta contra la S (ARNm o proteínas recombinantes); lactantes y niños con factores de riesgo.")],
    ["respiratorios", 0, T("Conduta geral nos quadros respiratórios virais?", "¿Conducta general en los cuadros respiratorios virales?"), T("Manejo sintomático, repouso e hidratação; isolamento respiratório e/ou de contato; vacinação e vigilância.", "Manejo sintomático, reposo e hidratación; aislamiento respiratorio y/o de contacto; vacunación y vigilancia.")]
  ];
  return { figuras, cartoes, unidade: { id: "virologia", nome: T("Virologia", "Virología"), curto: T("Virologia", "Virología"), fonte: "Aulas UCES 2026 (4º parcial)", temas,
    pendentes: [T("HPV", "HPV"), T("Gastroenterites", "Gastroenteritis"), T("Arbovírus", "Arbovirus"), T("Retrovírus", "Retrovirus"), T("Encefalite", "Encefalitis"), T("Raiva e hantavírus", "Rabia y hantavirus")],
    nota: T("Alfa-herpesvírus para o VZV e a lista de evasão aplicada ao EBV não estão nos slides: confirmar com a professora. No tema 6.6, o slide do nirsevimab saiu ilegível: conferir as indicações exatas no PowerPoint; o nome do antiviral da influenza não aparece no texto do slide.", "Alfa herpesvirus para el VVZ y la lista de evasión aplicada al VEB no están en los slides: confirmar con la profesora. En el tema 6.6, el slide del nirsevimab salió ilegible: verificar las indicaciones exactas en el PowerPoint; el nombre del antiviral de la influenza no aparece en el texto del slide.") } };
});
