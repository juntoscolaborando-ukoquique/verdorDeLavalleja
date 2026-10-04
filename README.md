# Verdor de Lavalleja

Convocatoria para reunir un grupo comprador de un predio de 11 ha cerca de Minas (Lavalleja, Uruguay) y desarrollarlo con permacultura y agroecología.

**Sitio web publicado:**
## 🌍 https://juntoscolaborando-ukoquique.github.io/verdorDeLavalleja/

---

## Estructura del repositorio

```
Verdor-De-Lavalleja/
├── index.html                   # Página principal
├── style.css                    # Estilos
├── js/                          # JavaScript modular (sin build)
│   ├── config.js                # Carga de JSONs de contenido
│   ├── dom.js                   # Helper h() para crear nodos
│   ├── main.js                  # Entry point
│   ├── render.js                # Renderiza datos en el DOM
│   ├── form.js                  # Formulario de contacto
│   └── plano.js                 # SVG generativo del predio
├── contenido/                   # ← FUENTE ÚNICA DE CONTENIDO
│   ├── proyecto.json            # Datos principales, equipo, principios
│   ├── modulos.json             # Ideas de módulos productivos
│   ├── fases.json               # Agenda por etapas
│   ├── perfiles.json            # Perfiles del formulario
│   └── faq.json                 # Preguntas frecuentes
├── images/                      # Logo y recursos visuales
├── PLAN/                        # Documentos canónicos del proyecto
│   ├── 00-vision.md             # Propósito, perfiles y agenda
│   ├── 01-roles-gobernanza.md   # Roles y principios
│   ├── 02-modelo-economico.md   # Costos y modelo de acceso
│   ├── 03-legal-pendientes.md   # Pendientes jurídicos
│   ├── DECISIONES.md            # Decisiones tomadas
│   └── PREGUNTAS-ABIERTAS.md    # Preguntas pendientes
├── CRITERIOS_GENERALES.md       # Contexto y reglas para el equipo
├── CHANGELOG.md                 # Historial de cambios
├── .env.example                 # Plantilla de variables de entorno
└── .env                         # Variables reales (gitignoreado)
```

---

## El sitio web

**Sitio estático, sin build, sin dependencias.** Todo el contenido de texto sale de `contenido/*.json`; el HTML no tiene texto del proyecto hardcodeado.

### Probar en local
```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

### Cambiar contenido
Editar los JSONs en `contenido/`:
- `proyecto.json` — Datos principales, equipo, principios, contacto
- `modulos.json` — Módulos productivos
- `fases.json` — Agenda
- `perfiles.json` — Perfiles de contacto
- `faq.json` — Preguntas frecuentes

Los cambios se ven inmediatamente al refrescar el navegador.

### Conectar el formulario
Poner la URL del endpoint en `proyecto.json` → `contacto.formEndpoint`. Vacío = el sitio muestra los datos de contacto directos.

---

## Flujo de trabajo

| Tipo de cambio | Dónde editar |
|---|---|
| Texto del sitio | `contenido/*.json` |
| Decisión tomada | `PLAN/DECISIONES.md` + JSON si aplica |
| Pregunta nueva | `PLAN/PREGUNTAS-ABIERTAS.md` |
| Cambio de código | `js/`, `style.css` |
| Cambio significativo | Registrar en `CHANGELOG.md` |

---

## Reglas clave

- **Estados "por definir"** — llevan `"estado": "por-definir"` en el JSON; el sitio los muestra con el badge **En definición**.
- **Nunca secrets en el código** — tokens, endpoints privados, etc., van en `.env` (gitignoreado).
- **Independencia de ecoRivera** — este proyecto no reutiliza endpoints, bots ni URLs del sitio de ejemplo.
- **Privacidad del vendedor** — no nombrarlo ni identificar su chacra en nada público.

---

## Para el contexto completo
Ver [`CRITERIOS_GENERALES.md`](./CRITERIOS_GENERALES.md) — personas, decisiones, y reglas de contenido.
