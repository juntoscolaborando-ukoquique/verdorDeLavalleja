# CHANGELOG — Verdor de Lavalleja

Todos los cambios notables de este proyecto se documentan aquí.
El formato sigue [Keep a Changelog](https://keepachangelog.com/es/1.1.0/).

---

## [1.2.0] — 2026-10-04

### Corregido
- **Enlace de WhatsApp roto:** `render.js` armaba `wa.me/598096140673` (con el 0 inicial). Ahora genera `wa.me/59896140673`.
- **Logo:** tenía fondo blanco opaco y se veía como un cuadrado blanco sobre el verde del encabezado y el pie. Ahora es transparente.
- **CSS:** el botón del hero se estiraba a todo el ancho de la columna; ahora tiene su ancho natural. Se quitaron márgenes que se sumaban al `gap` del hero.
- **CSS:** `.principio` y `.persona` ahora sí son reglas separadas (en 1.1.0 seguían combinadas y se anulaban).
- **CSS:** el enlace «Sumate» del menú tenía contraste insuficiente (3,7:1); ahora 5,8:1. Se quitó el `!important`.
- **Accesibilidad:** el logo es decorativo (`alt=""`) porque el texto «Verdor» está al lado; el SVG usa un solo texto (`<title>` + `aria-labelledby`) en vez de dos duplicados.
- **Contenido:** el rol de administración ya no muestra «En definición» (el rol está definido; solo falta el nombre).
- **Fuentes:** se piden solo los pesos usados (antes faltaba el 600 y se pedía una cursiva que no se usa).
- **Documentación:** `00-vision.md` ya no duplica agenda ni módulos (divergían de los JSON); remite a `contenido/`. Se corrigió «publicada» en 1.0.0.

### Cambiado
- `render.js`: el título de módulos usa una lista de palabras en vez de un ternario anidado.
- El bloque «Buscamos diseñador/a» pasó del HTML a `proyecto.json` → `disenador` (era contenido fuera de la fuente única).
- `VERDOR-WEB/README.md` se redujo a lo que no está en el README raíz (contrato del formulario).

### Eliminado (código muerto y duplicados)
- `proyecto.json`: `estructura.parcelasEsEstricto` y `principios[].estado` (nada los leía).
- `form.js`: `id`, clase y estilo en línea sin uso del contenedor de campos extra; comentarios «Ítem N» (el historial vive acá).
- `config.js`: `export` de `DATA_FILES` sin uso.
- `/verdorLOGO.png` (copia idéntica de `images/verdorLOGO.png`) y `VERDOR-WEB/.gitignore` (no hay build ni `.env`; se agrega cuando haga falta).

---

## [1.1.0] — 2026-10-04

### Corregido
- **UX:** Datos de contacto (`whatsapp`, `email`) ahora se muestran debajo del formulario en la sección Sumate, y en el mensaje de error cuando el formulario no está conectado — antes quedaban en el JSON sin renderizarse.
- **JS:** `form.js` — `campo()` ahora respeta `def.type` en vez de hardcodear `type="text"` para todos los inputs genéricos.
- **JS:** `form.js` — el select de módulos (`fromModulos: true`) ahora envía `m.id` como `value` y muestra `m.titulo` como etiqueta, en lugar de enviar el título como valor.
- **JS:** `form.js` — orden de validación invertido: `reportValidity()` corre primero (valida campos `required`), la validación custom de WhatsApp/email corre después.
- **Accesibilidad:** `plano.js` — el SVG ahora incluye un elemento `<title>` como primer hijo, complementando el `aria-label` ya existente (WCAG 2.1).
- **CSS:** Variables renombradas de `--marcela`/`--marcela-suave` a `--dorado`/`--dorado-suave` para mayor claridad semántica.
- **CSS:** Reglas `.principio` y `.persona` separadas; `.persona` ya no cancela el `border-bottom` heredado de una regla combinada con `border:0` — ahora declara `border-bottom:0` explícitamente.
- **CSS:** Declarado `color-scheme: light` en `:root` para evitar inconsistencias visuales en dispositivos con dark mode del sistema (inputs y selects ya no pueden adoptar estilos oscuros del navegador).
- **Contenido:** Fase 2 renombrada de "Captación y encuentros" a "Captación y asambleas" (alineado con `00-vision.md`).
- **Contenido:** Fase 4 renombrada de "Compra" a "Cierre legal y escrituración" (alineado con `00-vision.md`, preserva la dimensión legal).
- **Contenido:** Principio 3 en `proyecto.json` — eliminada la palabra "votada" que introducía un compromiso no acordado en el plan; queda "será pública y acordada por el grupo".

### Añadido
- `index.html` — elemento `#contacto-directo` en la sección Sumate para mostrar los datos de contacto directos.
- `index.html` — `<script nomodule>` con mensaje claro para navegadores pre-2021 que no soportan módulos ES.
- `js/render.js` — render dinámico del `<h2>` de módulos con el conteo real de `modulos.length` en palabras (antes era "Siete" hardcodeado en el HTML).

### Eliminado (código muerto)
- `contenido/fases.json` — campo `id` en cada fase: no era usado por ningún render.
- `contenido/proyecto.json` — campo `predio.estado`: no era usado por ningún render.

---

## [1.0.0] — 2026-10-04

Primera versión del sitio (aún sin publicar). Sitio estático modular sin build step:
- `index.html` — estructura HTML completa con secciones hero, predio, módulos, agenda, gobernanza, equipo, diseñador, FAQ y sumate.
- `style.css` — paleta y estilos completos.
- `js/` — arquitectura modular ES: `config.js`, `dom.js`, `main.js`, `render.js`, `form.js`, `plano.js`.
- `contenido/*.json` — fuente única de contenido: `proyecto.json`, `modulos.json`, `fases.json`, `perfiles.json`, `faq.json`.
- Formulario con endpoint vacío (falla graceful con mensaje); sin secretos en el cliente.
- Plano SVG generativo del predio con área colectiva y N parcelas configurables.
