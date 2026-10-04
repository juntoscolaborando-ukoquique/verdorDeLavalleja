// Carga todos los JSON de contenido en paralelo.
const DATA_FILES = ['proyecto', 'modulos', 'fases', 'perfiles', 'faq'];
export async function loadContent() {
  const entries = await Promise.all(DATA_FILES.map(async (n) => {
    const r = await fetch(`contenido/${n}.json`);
    if (!r.ok) throw new Error(`No se pudo cargar contenido/${n}.json`);
    return [n, await r.json()];
  }));
  return Object.fromEntries(entries);
}
