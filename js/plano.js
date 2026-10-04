// Esquema del predio: área colectiva al centro, N parcelas (N >= 2) alrededor.
const NS = 'http://www.w3.org/2000/svg';
const s = (tag, attrs = {}, text) => {
  const el = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  if (text) el.textContent = text;
  return el;
};
const P = (a, r) => [200 + r * Math.cos(a), 200 + r * Math.sin(a)];
function sector(a0, a1, r0, r1) {
  const [x0, y0] = P(a0, r1), [x1, y1] = P(a1, r1), [x2, y2] = P(a1, r0), [x3, y3] = P(a0, r0);
  return `M${x0} ${y0}A${r1} ${r1} 0 0 1 ${x1} ${y1}L${x2} ${y2}A${r0} ${r0} 0 0 0 ${x3} ${y3}Z`;
}
export function dibujarPlano(host, n) {
  const desc = `Esquema del predio: un área colectiva central rodeada por ${n} parcelas privadas`;
  const svg = s('svg', { viewBox: '0 0 400 400', role: 'img', 'aria-labelledby': 'plano-titulo' });
  svg.append(s('title', { id: 'plano-titulo' }, desc));
  const gap = 0.05, step = (2 * Math.PI) / n;
  for (let i = 0; i < n; i++) {
    const a0 = i * step + gap - Math.PI / 2, a1 = (i + 1) * step - gap - Math.PI / 2;
    svg.append(s('path', { d: sector(a0, a1, 92, 185), class: 'parcela' }));
  }
  svg.append(s('circle', { cx: 200, cy: 200, r: 78, class: 'colectiva' }),
    s('text', { x: 200, y: 196 }, 'Área'), s('text', { x: 200, y: 214 }, 'colectiva'));
  host.replaceChildren(svg);
}
