import { h } from './dom.js';

function campo(def, modulos) {
  const id = `c-${def.name}`;
  let input;
  if (def.type === 'textarea') input = h('textarea', { id, name: def.name });
  else if (def.type === 'select') {
    const opts = def.fromModulos
      ? modulos.map((m) => h('option', { value: m.id }, m.titulo))
      : def.options.map((o) => h('option', { value: o }, o));
    input = h('select', { id, name: def.name }, h('option', { value: '' }, '— Elegí —'), ...opts);
  } else input = h('input', { id, name: def.name, type: def.type });
  return h('label', { for: id }, def.label, input);
}

// El backend se enchufa solo acá: endpoint vacío = formulario sin conectar.
async function enviar(endpoint, datos) {
  if (!endpoint) return { ok: false, motivo: 'sin-endpoint' };
  const r = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(datos) });
  return { ok: r.ok };
}

export function montarFormulario(form, estado, { perfiles, modulos, proyecto }, endpoint) {
  const extra = h('div', { class: 'extra' });
  const sel = h('select', { id: 'perfil', name: 'perfil', required: true },
    h('option', { value: '' }, '— Elegí una opción —'), ...perfiles.map((p) => h('option', { value: p.id }, p.etiqueta)));
  const btn = h('button', { class: 'btn', type: 'submit' }, 'Enviar');
  form.replaceChildren(
    h('label', { for: 'nombre' }, 'Nombre', h('input', { id: 'nombre', name: 'nombre', type: 'text', required: true, autocomplete: 'name' })),
    h('label', { for: 'whatsapp' }, 'WhatsApp', h('input', { id: 'whatsapp', name: 'whatsapp', type: 'tel', autocomplete: 'tel' })),
    h('label', { for: 'email' }, 'Correo', h('input', { id: 'email', name: 'email', type: 'email', autocomplete: 'email' })),
    h('label', { for: 'perfil' }, '¿Cómo te querés sumar?', sel), extra,
    h('label', { for: 'mensaje' }, 'Algo más que quieras contarnos (opcional)', h('textarea', { id: 'mensaje', name: 'mensaje' })),
    h('label', { class: 'check' }, h('input', { type: 'checkbox', name: 'consentimiento', required: true }),
      'Acepto que usen mis datos solo para contactarme por este proyecto.'),
    btn);

  sel.addEventListener('change', () => {
    const p = perfiles.find((x) => x.id === sel.value);
    extra.replaceChildren(...(p ? p.campos.map((c) => campo(c, modulos)) : []));
  });
  document.querySelectorAll('[data-perfil]').forEach((a) => a.addEventListener('click', () => {
    sel.value = a.dataset.perfil; sel.dispatchEvent(new Event('change'));
  }));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    estado.className = ''; estado.textContent = '';
    if (!form.reportValidity()) return;
    const d = Object.fromEntries(new FormData(form));
    if (!d.whatsapp && !d.email) { estado.className = 'error'; estado.textContent = 'Dejanos al menos un WhatsApp o un correo para contactarte.'; return; }
    btn.disabled = true; btn.textContent = 'Enviando…';
    try {
      const r = await enviar(endpoint, d);
      if (r.ok) { estado.textContent = 'Recibido. Te contactamos pronto.'; form.reset(); extra.replaceChildren(); }
      else {
        estado.className = 'error';
        if (r.motivo === 'sin-endpoint') {
          estado.textContent = 'El formulario todavía no está conectado. Usá los datos de contacto directo que aparecen más abajo.';
        } else {
          estado.textContent = 'No pudimos enviarlo. Probá de nuevo en unos minutos.';
        }
      }
    } catch { estado.className = 'error'; estado.textContent = 'Sin conexión. Probá de nuevo en unos minutos.'; }
    btn.disabled = false; btn.textContent = 'Enviar';
  });
}
