window.registrarUnidade("microbiologia", "virologia", 6, (T, U, H) => {
  const figuras = {
    ebvAssoc: () => U.el("figure", { class: "fig" },
      U.el("h3", null, T("EBV: do beijo ao baço", "VEB: del beso al bazo")),
      U.el("div", { html:
        "<svg viewBox='0 0 360 210' role='img' aria-label='Esquema EBV'>" +
        "<rect x='5' y='20' width='80' height='44' rx='8' fill='#fde2e4' stroke='#333'/><text x='45' y='38' text-anchor='middle' font-size='11'>1 SALIVA</text><text x='45' y='54' text-anchor='middle' font-size='9'>beijo</text>" +
        "<text x='95' y='46' font-size='16'>&#8594;</text>" +
        "<rect x='112' y='20' width='110' height='44' rx='8' fill='#e2ecfd' stroke='#333'/><text x='167' y='38' text-anchor='middle' font-size='11'>2 LINFÓCITO B</text><text x='167' y='54' text-anchor='middle' font-size='9'>receptor CD21</text>" +
        "<text x='230' y='46' font-size='16'>&#8594;</text>" +
        "<rect x='248' y='20' width='106' height='44' rx='8' fill='#fff3cd' stroke='#333'/><text x='301' y='38' text-anchor='middle' font-size='11'>3 LT CD8+</text><text x='301' y='54' text-anchor='middle' font-size='9'>resposta exagerada</text>" +
        "<text x='180' y='92' text-anchor='middle' font-size='11'>&#8595; sintomas = resposta imune, não dano direto</text>" +
        "<rect x='20' y='105' width='320' height='40' rx='8' fill='#e6f4ea' stroke='#333'/><text x='180' y='122' text-anchor='middle' font-size='11'>TRÍADE: febre + adenopatia + faringite</text><text x='180' y='138' text-anchor='middle' font-size='9'>linfocitose atípica &#8805;10% / Monospot</text>" +
        "<rect x='20' y='155' width='320' height='40' rx='8' fill='#f8d7da' stroke='#333'/><text x='180' y='172' text-anchor='middle' font-size='11'>&#9888; BAÇO: risco de ruptura até 8 semanas</text><text x='180' y='188' text-anchor='middle' font-size='9'>sem esporte de contato / sem antibiótico</text>" +
        "</svg>" }),
      U.el("p", { class: "aviso" }, T("Modelo simplificado para memorizar.", "Modelo simplificado para memorizar."))),
    vzvAssoc: () => U.el("figure", { class: "fig" },
      U.el("h3", null, T("Varicela x Zóster", "Varicela x Zóster")),
      U.el("div", { html:
        "<svg viewBox='0 0 360 170' role='img' aria-label='Varicela e zóster'>" +
        "<rect x='5' y='10' width='170' height='150' rx='8' fill='#e2ecfd' stroke='#333'/><text x='90' y='30' text-anchor='middle' font-size='12'>VARICELA</text>" +
        "<text x='90' y='52' text-anchor='middle' font-size='10'>disseminada, centrípeta</text><text x='90' y='70' text-anchor='middle' font-size='10'>pápula &#8594; vesícula &#8594; crosta</text><text x='90' y='88' text-anchor='middle' font-size='10'>250 a 500 lesões, prurido</text><text x='90' y='106' text-anchor='middle' font-size='10'>incubação 10 a 21 dias</text><text x='90' y='124' text-anchor='middle' font-size='10'>vacina &#8804; 3-5 d / IG &#8804; 96 h</text>" +
        "<rect x='185' y='10' width='170' height='150' rx='8' fill='#fff3cd' stroke='#333'/><text x='270' y='30' text-anchor='middle' font-size='12'>ZÓSTER</text>" +
        "<text x='270' y='52' text-anchor='middle' font-size='10'>latência no gânglio sensitivo</text><text x='270' y='70' text-anchor='middle' font-size='10'>UNILATERAL, 1 dermátomo</text><text x='270' y='88' text-anchor='middle' font-size='10'>não cruza a linha média</text><text x='270' y='106' text-anchor='middle' font-size='10'>vesículas em cacho</text><text x='270' y='124' text-anchor='middle' font-size='10'>dor antes das lesões</text>" +
        "</svg>" }),
      U.el("p", { class: "aviso" }, T("Modelo simplificado para memorizar.", "Modelo simplificado para memorizar.")))
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
      estudado: "2026-11-14", figuras: ["vzvAssoc"],
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
      estudado: "2026-11-14", figuras: [],
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
      estudado: "2026-11-14", figuras: [],
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
      estudado: "2026-11-14", figuras: [],
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
