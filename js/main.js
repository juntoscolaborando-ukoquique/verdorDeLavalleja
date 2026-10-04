import { loadContent } from './config.js';
import { renderTodo } from './render.js';
import { montarFormulario } from './form.js';

try {
  const c = await loadContent();
  renderTodo(c);
  montarFormulario(document.getElementById('form'), document.getElementById('form-estado'), c, c.proyecto.contacto.formEndpoint);
} catch (err) {
  document.getElementById('h-titulo').textContent = 'No se pudo cargar el contenido';
  document.getElementById('h-bajada').textContent = 'Si estás en local, abrí el sitio con un servidor (python3 -m http.server) y no con doble clic.';
  console.error(err);
}
