
window.registrarBase("fisiologia", (T, U) => {
  const AVISO = T("Modelo simplificado.", "Modelo simplificado.");
  const QUAL = T("Simulação qualitativa, sem valores reais. ", "Simulación cualitativa, sin valores reales. ");
  const simples = (titulo, svg, cap) => U.el("figure", { class: "fig" }, U.el("h3", null, titulo), U.el("div", { html: svg }), U.el("figcaption", null, cap));

  const EIXO_EST = [
        { id: "tudo", r: T("Visão geral", "Vista general"), d: T("<b>Dois lobos, duas conexões.</b> A posterior é ligada por axônios (neural). A anterior é ligada pelos vasos porta.", "<b>Dos lóbulos, dos conexiones.</b> La posterior está unida por axones (neural). La anterior está unida por los vasos porta.") },
        { id: "post", r: "Posterior (neural)", d: T("<b>Neuro-hipófise.</b> Os corpos celulares ficam no hipotálamo: SO = supraóptico (ADH) e PV = paraventricular (ocitocina). Os axônios descem e os hormônios ficam armazenados na neuro-hipófise até a liberação.", "<b>Neurohipófisis.</b> Los cuerpos celulares están en el hipotálamo: SO = supraóptico (ADH) y PV = paraventricular (oxitocina). Los axones descienden y las hormonas quedan almacenadas en la neurohipófisis hasta su liberación.") },
        { id: "ant", r: "Anterior (vasos porta)", d: T("<b>Adeno-hipófise.</b> Os hormônios hipotalâmicos chegam pelos vasos porta, direto e em ALTA concentração, e quase não aparecem na circulação sistêmica.", "<b>Adenohipófisis.</b> Las hormonas hipotalámicas llegan por los vasos porta, directamente y en ALTA concentración, y casi no aparecen en la circulación sistémica.") },
        { id: "horm", r: T("Os 6 hormônios", "Las 6 hormonas"), d: T("<b>TSH</b> (tirotrofas), <b>ACTH</b> (corticotrofas), <b>FSH e LH</b> (gonadotrofas), <b>GH</b> (somatotrofas) e <b>prolactina</b> (lactotrofas).", "<b>TSH</b> (tirotropas), <b>ACTH</b> (corticotropas), <b>FSH y LH</b> (gonadotropas), <b>GH</b> (somatotropas) y <b>prolactina</b> (lactotropas).") }
      ];
  const SUPRA_EST = [
    { id: "tudo", r: T("Visão geral", "Vista general"), d: T("<b>Córtex por fora (cerca de 80%), medula por dentro (cerca de 20%).</b> De fora para dentro: glomerular, fasciculada, reticular e medula.", "<b>Corteza por fuera (cerca del 80%), médula por dentro (cerca del 20%).</b> De afuera hacia adentro: glomerular, fasciculada, reticular y médula.") },
    { id: "glo", r: "Glomerular", d: T("<b>Mineralocorticoides (aldosterona).</b> ACTH só em nível tônico; o controle principal é o sistema renina-angiotensina-aldosterona e o potássio.", "<b>Mineralocorticoides (aldosterona).</b> ACTH solo en nivel tónico; el control principal es el sistema renina-angiotensina-aldosterona y el potasio.") },
    { id: "fr", r: T("Fasciculada e reticular", "Fasciculada y reticular"), d: T("<b>Glicocorticoides (cortisol) e androgênios.</b> Reguladas pelo eixo CRH, ACTH.", "<b>Glucocorticoides (cortisol) y andrógenos.</b> Reguladas por el eje CRH, ACTH.") },
    { id: "med", r: T("Medula", "Médula"), d: T("<b>Adrenalina e noradrenalina.</b> Origem neuroectodérmica; o córtex é mesodérmico.", "<b>Adrenalina y noradrenalina.</b> Origen neuroectodérmico; la corteza es mesodérmica.") }
  ];
  
  const RG = (x, y, z) => { const pl = 1 - z * z, th = Math.atan2(y, x); let r = 1 / Math.sqrt((x / 1.3) ** 2 + (y / 1.05) ** 2 + (z / .55) ** 2);
    r *= 1 + .2 * pl * Math.cos(3 * th - 1.5 * Math.PI);                                                         
    const b = Math.atan2(Math.sin(th + Math.PI / 2), Math.cos(th + Math.PI / 2)); r *= 1 - .28 * pl * Math.exp(-b * b / .35);   
    return r + .012 * pl * Math.sin(9 * th + 4 * z); };
  const RK = (x, y, z) => { const pl = 1 - z * z, th = Math.atan2(y, x); return (1 / Math.sqrt((x / 1.0) ** 2 + (y / 1.5) ** 2 + (z / .7) ** 2)) * (1 - .2 * pl * pl * pl * Math.exp(-th * th / .16)); };   
  
  const RC = (x, y, z) => { let r = 1 / Math.sqrt((x / 1.15) ** 2 + (y / (y > 0 ? .98 : .74)) ** 2 + (z / 1.5) ** 2);
    r *= 1 + .16 * Math.exp(-((Math.abs(x) - .78) ** 2 + (y + .5) ** 2 + (z - .3) ** 2) / .14);                 
    if (y > -.25) r *= 1 - .1 * Math.exp(-x * x / .003);                                                         
    return r * (1 + .03 * Math.sin(13 * z + 4 * Math.sin(7 * y)) * Math.cos(11 * y + 3 * x) + .014 * Math.sin(23 * x + 17 * z)); };   
  const RB = (x, y, z) => (1 / Math.sqrt((x / .95) ** 2 + (y / .55) ** 2 + (z / .62) ** 2)) * (1 + .04 * Math.sin(30 * y + 3 * Math.sin(5 * x))) * (1 - .12 * Math.exp(-x * x / .01));
  const LOBO = (x, y, z) => { if (y < -.15 - .12 * z && z > -.6 && z < .6) return "temp"; if (z < -.62) return "occ"; const s = z - (.15 - .25 * y); return s > .14 ? "front" : s > 0 ? "motor" : s > -.14 ? "senso" : "par"; };
  const cerebro = kind => {
    const P = (d, k) => { const n = Math.hypot(d[0], d[1], d[2]), u = [d[0] / n, d[1] / n, d[2] / n], r = RC(u[0], u[1], u[2]) * k; return [u[0] * r, u[1] * r, u[2] * r]; };
    const NAT = "#dcc3bd", H = Math.PI / 2;
    const tronco = (a, on, dim) => {   
      a.esfera([0, -.55, -.16], 1, { cor: "#a58fd8", on: on.mes, dim }, [.3, .24, .3]); a.esfera([0, -.92, -.02], 1, { cor: "#7f6fd0", on: on.pon, dim }, [.42, .3, .4]);
      a.esfera([0, -1.36, -.2], 1, { cor: "#5d4fc0", on: on.bul, dim }, [.25, .34, .25]); a.esfera([0, -1.95, -.26], 1, { cor: "#cdbfb8", on: on.med, dim }, [.14, .42, .14]);
      a.radial([0, -.84, -.98], RB, { cor: on.corCer || "#cfa59c", on: on.cer, dim }); };
    if (kind === "lobos") return U.cena3d(T("Os quatro lobos e as áreas da linguagem", "Los cuatro lóbulos y las áreas del lenguaje"), a => {
      a.radial([0, 0, 0], RC, { regiao: LOBO, natural: NAT, partes: { front: { cor: "#6f93ee", on: "tudo front" }, motor: { cor: "#2f52c9", on: "tudo front mov" }, senso: { cor: "#23875c", on: "tudo par" }, par: { cor: "#7fcf9f", on: "tudo par" }, temp: { cor: "#f0b04a", on: "tudo temp" }, occ: { cor: "#e07aa5", on: "tudo occ" } } });
      tronco(a, {});
      const rot = (txt, d, o) => { const q = P(d, 1.02), n = Math.hypot(d[1], d[2]) || 1; a.rotulo(txt, [q[0] + .2, q[1] + d[1] / n * .62, q[2] + d[2] / n * .62], Object.assign({ face: d, de: q }, o)); };
      rot("FRONTAL", [.7, .32, .68], { on: "tudo front" }); rot("PARIETAL", [.68, .62, -.32], { on: "tudo par" }); rot("TEMPORAL", [.85, -.5, .12], { on: "tudo temp" }); rot("OCCIPITAL", [.55, .08, -.85], { on: "tudo occ" });
      rot(T("motor primário (área 4)", "motor primario (área 4)"), [.62, .72, .02], { show: "front mov" }); rot(T("somatossensitivo (giro pós-central)", "somatosensitivo (giro poscentral)"), [.62, .74, -.14], { show: "par" });
      rot(T("pré-motora e suplementar (área 6)", "premotora y suplementaria (área 6)"), [.6, .66, .3], { show: "mov" });
      rot(T("auditivo primário", "auditivo primario"), [.9, -.3, -.05], { show: "temp" }); rot(T("visual primário", "visual primario"), [.3, -.05, -.95], { show: "occ" });
      const B = [.85, -.02, .53], W = [.86, -.24, -.45];
      a.esfera(P(B, 1.07), .11, { cor: "#1b1b2f", show: "ling" }); a.esfera(P(W, 1.05), .11, { cor: "#1b1b2f", show: "ling" });
      rot(T("Broca: produz a fala", "Broca: produce el habla"), B, { show: "ling" }); rot(T("Wernicke: compreende", "Wernicke: comprende"), W, { show: "ling" });
    }, [
      { id: "tudo", r: T("Os quatro", "Los cuatro"), d: T("<b>Frontal decide e move, parietal sente, temporal ouve e lembra, occipital vê.</b> A faixa escura entre o frontal e o parietal são os dois giros vizinhos: o motor na frente e o somatossensitivo atrás.", "<b>Frontal decide y mueve, parietal siente, temporal oye y recuerda, occipital ve.</b> La franja oscura entre el frontal y el parietal son los dos giros vecinos: el motor adelante y el somatosensitivo atrás.") },
      { id: "front", r: "Frontal", d: T("<b>Frontal:</b> planejamento, juízo, decisão, controle executivo, movimento voluntário e produção da linguagem. Córtex motor primário (área 4), pré-motora e suplementar (área 6), área de Broca no hemisfério dominante.", "<b>Frontal:</b> planificación, juicio, decisión, control ejecutivo, movimiento voluntario y producción del lenguaje. Corteza motora primaria (área 4), premotora y suplementaria (área 6), área de Broca en el hemisferio dominante.") },
      { id: "par", r: "Parietal", d: T("<b>Parietal:</b> processamento somatossensitivo e integração espacial do corpo e do entorno. Córtex somatossensitivo primário no giro PÓS-CENTRAL.", "<b>Parietal:</b> procesamiento somatosensitivo e integración espacial del cuerpo y del entorno. Corteza somatosensitiva primaria en el giro POSCENTRAL.") },
      { id: "temp", r: "Temporal", d: T("<b>Temporal:</b> audição, memória, reconhecimento e compreensão da linguagem. Córtex auditivo primário e área de Wernicke no hemisfério dominante.", "<b>Temporal:</b> audición, memoria, reconocimiento y comprensión del lenguaje. Corteza auditiva primaria y área de Wernicke en el hemisferio dominante.") },
      { id: "occ", r: "Occipital", d: T("<b>Occipital:</b> informação visual; córtex visual primário.", "<b>Occipital:</b> información visual; corteza visual primaria.") },
      { id: "mov", r: T("Movimento", "Movimiento"), d: T("<b>Cinco passos:</b> 1 intenção (áreas de associação e circuitos frontais); 2 programação (área 6); 3 execução (área 4, trato corticoespinal); 4 motoneurônios da medula ativam o músculo; 5 correção (cerebelo e núcleos da base).", "<b>Cinco pasos:</b> 1 intención (áreas de asociación y circuitos frontales); 2 programación (área 6); 3 ejecución (área 4, tracto corticoespinal); 4 las motoneuronas de la médula activan el músculo; 5 corrección (cerebelo y núcleos de la base).") },
      { id: "ling", r: T("Linguagem", "Lenguaje"), d: T("<b>Broca (frontal): produz a fala.</b> Lesão: fala travada e esforçada, entende. <b>Wernicke (temporal posterior): compreende.</b> Lesão: fala solta, sem sentido, e não entende. As duas no hemisfério dominante.", "<b>Broca (frontal): produce el habla.</b> Lesión: habla trabada y esforzada, entiende. <b>Wernicke (temporal posterior): comprende.</b> Lesión: habla fluida, sin sentido, y no entiende. Las dos en el hemisferio dominante.") }
    ], { cap: T("Gire o cérebro: você está vendo o lado esquerdo, com a frente à esquerda. Limites dos lobos e posição das áreas são aproximados. ", "Gira el cerebro: estás viendo el lado izquierdo, con el frente a la izquierda. Los límites de los lóbulos y la posición de las áreas son aproximados. ") + AVISO,
      dist: 9.6, ry: -H + .3, rx: .1, zoom: Object.fromEntries(["tudo", "front", "par", "temp", "occ", "mov", "ling"].map(k => [k, [1.22, [0, -.42, 0]]])),
      vistas: [[T("Lado esquerdo", "Lado izquierdo"), -H, 0], [T("De cima", "Desde arriba"), -H, 1.15], [T("De frente", "De frente"), 0, 0], [T("De trás", "Desde atrás"), Math.PI, 0]] });
    const di = kind === "di", HEM = di ? "tudo tal hipo" : undefined, TR = di ? "tudo tal hipo" : undefined;
    return U.cena3d(di ? T("Por dentro: tálamo, hipotálamo e estruturas profundas", "Por dentro: tálamo, hipotálamo y estructuras profundas") : T("Tronco encefálico e cerebelo, com o cérebro em corte", "Tronco encefálico y cerebelo, con el cerebro en corte"), a => {
      a.radial([0, 0, 0], RC, { cor: NAT, corte: [-1, 0, 0, 0], on: HEM, dim: .13 }); a.fatia(RC, 0, 0, .12, { cor: "#a8766e", on: HEM, dim: .1 }); a.fatia(RC, 0, .12, null, { cor: "#cfb0a6", on: HEM, dim: .1 });
      const L = (txt, de, para, o) => a.rotulo(txt, para, Object.assign({ de, face: [1, 0, 0] }, o));
      if (!di) { tronco(a, { mes: "tudo mes", pon: "tudo pon", bul: "tudo bul", med: "tudo bul", cer: "tudo cer", corCer: "#e0926b" }, .14);
        L(T("mesencéfalo", "mesencéfalo"), [.2, -.55, .05], [.5, -.42, 1.05], { on: "tudo mes" }); L(T("ponte", "puente"), [.3, -.92, .3], [.5, -.95, 1.2], { on: "tudo pon" });
        L(T("bulbo", "bulbo"), [.18, -1.4, -.05], [.5, -1.5, .85], { on: "tudo bul" }); L(T("cerebelo", "cerebelo"), [.4, -1.0, -1.1], [.5, -1.72, -1.2], { on: "tudo cer" });
        a.rotulo(T("medula", "médula"), [.3, -2.3, .25], { show: "tudo", de: [.1, -2.1, -.2], face: [1, 0, 0] });
      } else { tronco(a, { mes: TR, pon: TR, bul: TR, med: TR, cer: TR }, .13);
        a.esfera([0, -.18, -.12], 1, { cor: "#7b6ad6", on: "tudo tal" }, [.2, .2, .36]); a.esfera([0, -.44, .14], 1, { cor: "#e0669a", on: "tudo hipo" }, [.13, .12, .2]);
        a.tubo([[0, -.5, .2], [0, -.6, .27], [0, -.66, .3]], .03, { cor: "#e0669a", on: "tudo hipo" }); a.esfera([0, -.72, .31], .085, { cor: "#c9477f", on: "tudo hipo" });
        a.esfera([-.36, -.02, .2], 1, { cor: "#2a9d8f", on: "nb" }, [.2, .2, .34]); a.esfera([0, -.6, -.12], .075, { cor: "#2b2222", on: "nb" });
        a.tubo([[-.34, -.5, -.55], [-.4, -.58, -.2], [-.4, -.6, .12]], .075, { cor: "#e9a23b", on: "lim" }); a.esfera([-.4, -.58, .29], .115, { cor: "#d1495b", on: "lim" });
        L(T("tálamo", "tálamo"), [.2, -.12, -.12], [.5, .45, -.55], { on: "tudo tal" }); L(T("hipotálamo", "hipotálamo"), [.13, -.44, .2], [.5, -.3, 1.0], { on: "tudo hipo" }); L(T("hipófise", "hipófisis"), [.08, -.72, .33], [.5, -.86, 1.0], { on: "hipo" });
        L(T("núcleos da base", "núcleos de la base"), [-.16, .02, .25], [.5, .6, .7], { show: "nb" }); L(T("substância negra (no mesencéfalo)", "sustancia negra (en el mesencéfalo)"), [.06, -.6, -.1], [.5, -1.15, .7], { show: "nb" });
        L(T("hipocampo", "hipocampo"), [-.32, -.56, -.3], [.5, -1.2, -.6], { show: "lim" }); L(T("amígdala", "amígdala"), [-.3, -.58, .32], [.5, -1.0, .9], { show: "lim" }); }
    }, di ? [
      { id: "tudo", r: T("Visão geral", "Vista general"), d: T("<b>O cérebro aberto ao meio.</b> No centro ficam o tálamo e, logo abaixo, o hipotálamo com a hipófise pendurada. Toque nas estruturas profundas para ver através do hemisfério.", "<b>El cerebro abierto al medio.</b> En el centro están el tálamo y, justo debajo, el hipotálamo con la hipófisis colgando. Toca las estructuras profundas para ver a través del hemisferio.") },
      { id: "tal", r: T("Tálamo", "Tálamo"), d: T("<b>Tálamo: a central de retransmissão.</b> Grande parte da informação sensitiva que vai ao córtex passa por ele; o OLFATO é a exceção. Participa também de circuitos motores e do estado de alerta.", "<b>Tálamo: la central de relevo.</b> Gran parte de la información sensitiva que va a la corteza pasa por él; el OLFATO es la excepción. Participa también en circuitos motores y en el estado de alerta.") },
      { id: "hipo", r: T("Hipotálamo", "Hipotálamo"), d: T("<b>Hipotálamo: o elo entre o autônomo e o endócrino.</b> Regula temperatura, fome, saciedade, sede, balanço hídrico e resposta ao estresse. Controla a hipófise anterior pelo sistema porta e faz ADH e ocitocina, liberados pela neuro-hipófise.", "<b>Hipotálamo: el nexo entre el autónomo y el endocrino.</b> Regula temperatura, hambre, saciedad, sed, balance hídrico y respuesta al estrés. Controla la hipófisis anterior por el sistema porta y produce ADH y oxitocina, liberadas por la neurohipófisis.") },
      { id: "nb", r: T("Núcleos da base", "Núcleos de la base"), d: T("<b>Núcleos da base: selecionam, iniciam e dão fluidez ao movimento.</b> No Parkinson, a perda de neurônios dopaminérgicos da substância negra dá bradicinesia, rigidez e tremor de repouso. A substância negra fica no mesencéfalo.", "<b>Núcleos de la base: seleccionan, inician y dan fluidez al movimiento.</b> En el Parkinson, la pérdida de neuronas dopaminérgicas de la sustancia negra da bradicinesia, rigidez y temblor de reposo. La sustancia negra está en el mesencéfalo.") },
      { id: "lim", r: T("Hipocampo e amígdala", "Hipocampo y amígdala"), d: T("<b>Hipocampo:</b> forma e consolida memórias declarativas novas; a lesão impede formar memórias novas. <b>Amígdala:</b> processamento emocional (medo, relevância emocional), em conjunto com o hipotálamo.", "<b>Hipocampo:</b> forma y consolida memorias declarativas nuevas; la lesión impide formar memorias nuevas. <b>Amígdala:</b> procesamiento emocional (miedo, relevancia emocional), en conjunto con el hipotálamo.") }
    ] : [
      { id: "tudo", r: T("Visão geral", "Vista general"), d: T("<b>De baixo para cima: bulbo, ponte, mesencéfalo.</b> O tronco liga a medula às estruturas de cima; o cerebelo fica atrás dele.", "<b>De abajo hacia arriba: bulbo, puente, mesencéfalo.</b> El tronco conecta la médula con las estructuras de arriba; el cerebelo queda detrás.") },
      { id: "bul", r: "Bulbo", d: T("<b>Bulbo é vida:</b> controle cardiovascular e respiratório; deglutição, tosse, espirro e vômito.", "<b>Bulbo es vida:</b> control cardiovascular y respiratorio; deglución, tos, estornudo y vómito.") },
      { id: "pon", r: T("Ponte", "Puente"), d: T("<b>Ponte é conexão:</b> liga regiões do encéfalo, participa da regulação respiratória e de circuitos de postura e coordenação.", "<b>Puente es conexión:</b> une regiones del encéfalo, participa en la regulación respiratoria y en circuitos de postura y coordinación.") },
      { id: "mes", r: T("Mesencéfalo", "Mesencéfalo"), d: T("<b>Mesencéfalo é olhos:</b> movimentos oculares, reflexos visuais e auditivos, circuitos motores.", "<b>Mesencéfalo es ojos:</b> movimientos oculares, reflejos visuales y auditivos, circuitos motores.") },
      { id: "cer", r: "Cerebelo", d: T("<b>O cerebelo não dá a ordem: compara o plano com a execução e corrige.</b> Ajusta força, velocidade, amplitude e direção; equilíbrio, postura e aprendizado motor. Lesão: ataxia, dismetria, tremor de intenção, marcha alterada, dificuldade em movimentos alternados rápidos.", "<b>El cerebelo no da la orden: compara el plan con la ejecución y corrige.</b> Ajusta fuerza, velocidad, amplitud y dirección; equilibrio, postura y aprendizaje motor. Lesión: ataxia, dismetría, temblor de intención, marcha alterada, dificultad en movimientos alternados rápidos.") }
    ], { cap: T("O hemisfério esquerdo foi retirado para mostrar o meio do cérebro. Formas, tamanhos e posições aproximados. ", "Se retiró el hemisferio izquierdo para mostrar el medio del cerebro. Formas, tamaños y posiciones aproximados. ") + AVISO,
      dist: 9.6, ry: -H + .35, rx: .06,
      zoom: di ? { tudo: [1.15, [0, -.5, 0]], tal: [1.5, [0, -.3, 0]], hipo: [1.5, [0, -.45, .1]], nb: [1.4, [0, -.3, .1]], lim: [1.4, [0, -.5, 0]] } : { tudo: [1.05, [0, -.6, -.2]], bul: [1.45, [0, -1.1, -.2]], pon: [1.45, [0, -1.0, -.2]], mes: [1.45, [0, -.8, -.2]], cer: [1.45, [0, -.9, -.6]] },
      vistas: [[T("Corte medial", "Corte medial"), -H, 0], [T("Três quartos", "Tres cuartos"), -H + .6, .1], [T("Por fora", "Por fuera"), H, 0], [T("De trás", "Desde atrás"), Math.PI, .1]] });
  };
  
  const cadeia = (n, aria, extra) => `<svg class="sv" viewBox="0 0 360 296" role="img" aria-label="${aria}">
    ${n.map((x, i) => `<rect class="f-vi" x="105" y="${20 + i * 100}" width="150" height="44" rx="12"/><text x="180" y="${39 + i * 100}" text-anchor="middle">${x[0]}</text><text x="180" y="${55 + i * 100}" text-anchor="middle" class="mut">${x[1]}</text>`).join("")}
    <path class="ln k-gr" d="M180 64 V111" marker-end="url(#ah-gr)"/><path class="ln k-gr" d="M180 164 V211" marker-end="url(#ah-gr)"/>${extra}</svg>`;
  const FONTE = T("", "");
  return { nome: T("Fisiologia", "Fisiología"), sub: T("Costanzo, Fisiología (6ª ed.).", "Costanzo, Fisiología (6ª ed.)."), H: { AVISO, QUAL, simples, EIXO_EST, SUPRA_EST, RG, RK, RC, RB, LOBO, cerebro, cadeia, FONTE } };
});
