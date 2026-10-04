// Helper mínimo: construye nodos con textContent (nunca innerHTML con datos).
export function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v == null) continue;
    el.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat()) el.append(kid);
  return el;
}
export const badge = (estado) =>
  estado === 'por-definir' ? h('span', { class: 'badge' }, 'En definición') : '';
export const usd = (n) => 'USD ' + n.toLocaleString('es-UY');
