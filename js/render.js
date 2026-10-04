import { h, badge, usd } from './dom.js';
import { dibujarPlano } from './plano.js';

const NUMEROS = ['Ninguna', 'Una', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez'];
// Uruguay: 09X XXX XXX -> wa.me/5989XXXXXXX (se quita el 0 inicial)
const waLink = (tel) => `https://wa.me/598${tel.replace(/\D/g, '').replace(/^0/, '')}`;

export function renderTodo({ proyecto: p, modulos, fases, faq }) {
  const $ = (id) => document.getElementById(id);
  $('h-titulo').textContent = p.titulo;
  $('h-bajada').textContent = p.bajada;
  $('h-datos').textContent = `${p.predio.hectareas} hectáreas · ${usd(p.predio.valorUSD)} de valor de referencia · ${p.predio.zona}`;
  dibujarPlano($('plano'), p.estructura.parcelas);

  $('predio-body').replaceChildren(
    h('p', {}, p.estructura.explicacion),
    h('p', {}, p.estructura.porQueColectiva),
    h('h3', {}, 'Qué hay en el área colectiva', badge(p.estructura.areaColectiva.estado)),
    h('p', {}, p.estructura.areaColectiva.contenido),
    h('p', {}, p.predio.nota));

  const n = modulos.length;
  $('modulos-titulo').textContent = `${NUMEROS[n] ?? n} ${n === 1 ? 'idea' : 'ideas'} de proyecto para el predio`;
  $('modulos-lista').replaceChildren(...modulos.map((m) =>
    h('li', {}, h('h3', {}, m.titulo), h('p', {}, m.resumen))));

  $('fases-lista').replaceChildren(...fases.map((f) =>
    h('li', {}, h('h3', {}, f.titulo), h('span', { class: 'sem' }, `Semanas ${f.semanas}`), h('p', {}, f.detalle))));

  $('gob-body').replaceChildren(...p.principios.map((x) =>
    h('div', { class: 'principio' }, h('h3', {}, x.titulo), h('p', {}, x.texto))));

  $('equipo-lista').replaceChildren(...p.equipo.map((e) =>
    h('div', { class: 'persona' },
      h('h3', {}, e.nombre ? `${e.nombre} — ${e.rol}` : e.rol, badge(e.estado)), h('p', {}, e.texto))));

  $('dis-titulo').textContent = p.disenador.titulo;
  $('dis-necesidad').textContent = p.disenador.necesidad;
  $('dis-ofrecemos').textContent = p.disenador.ofrecemos;

  $('faq-lista').replaceChildren(...faq.map((q) =>
    h('details', {}, h('summary', {}, q.p, badge(q.estado)), h('p', {}, q.r))));

  const { whatsapp, email } = p.contacto;
  const enlaces = [
    whatsapp && h('a', { href: waLink(whatsapp) }, `WhatsApp ${whatsapp}`),
    email && h('a', { href: `mailto:${email}` }, email),
  ].filter(Boolean);
  if (enlaces.length) {
    $('contacto-directo').replaceChildren('También podés escribirnos directo: ',
      ...enlaces.flatMap((a, i) => (i ? [' · ', a] : [a])));
  }

  $('pie').textContent = `${p.nombre} · Proyecto en etapa de convocatoria. La información en definición se marca como tal y puede cambiar.`;
}
