// Teste de fumaça: abre o Atlas, entra sem conta e abre cada matéria e cada tema. Falha se houver erro de JavaScript.
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 900 } });
  const erros = [];
  p.on('pageerror', e => erros.push(e.message));
  p.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) erros.push(m.text()); });
  await p.route(/gstatic|firebase|googleapis/, r => r.abort());
  await p.goto('http://localhost:8766/index.html'); await p.waitForTimeout(1200);
  await p.getByText(/Usar solo en este dispositivo|Usar só neste/).first().click({ timeout: 5000 });
  await p.waitForTimeout(500);
  const mapa = await p.evaluate(() => Object.fromEntries(Object.keys(M).map(id => [id, M[id].unidades.flatMap(u => u.temas).map(t => t.id)])));
  let n = 0;
  for (const [mid, ts] of Object.entries(mapa)) {
    for (const h of ['#m-' + mid, ...ts.map(t => '#t-' + mid + '-' + t)]) {
      await p.evaluate(h => { location.hash = h; }, h); await p.waitForTimeout(300);
      const txt = await p.evaluate(() => (document.querySelector('main') || document.body).innerText.length);
      if (txt < 60) erros.push('tela vazia em ' + h);
      n++;
    }
  }
  console.log('telas abertas:', n, 'matérias:', Object.keys(mapa).join(','));
  if (erros.length) { console.log('ERROS:\n' + erros.join('\n')); process.exit(1); }
  console.log('ok'); await b.close();
})();
