# Verdor de Lavalleja

Repositorio de trabajo del proyecto **Verdor**: convocatoria para reunir un grupo comprador de un predio de 11 ha cerca de Minas (Lavalleja, Uruguay) y desarrollarlo con permacultura y agroecología.

El predio se divide en parcelas privadas y un área colectiva. Quien compra una parcela accede a su propiedad y participa en la copropiedad del área colectiva según las normas que establezca el reglamento.

---

## Estructura del repositorio

```
Verdor-De-Lavalleja/
├── PLAN/                        # Documentos canónicos del proyecto
│   ├── 00-vision.md             # Propósito, perfiles y agenda
│   ├── 01-roles-gobernanza.md   # Roles y principios de gobernanza
│   ├── 02-modelo-economico.md   # Costos, aportes y modelo de acceso
│   ├── 03-legal-pendientes.md   # Pendientes jurídicos y escribanía
│   ├── DECISIONES.md            # Registro de decisiones tomadas
│   └── PREGUNTAS-ABIERTAS.md   # Preguntas pendientes de resolver
│
├── Sitio-Verdor/
│   ├── VERDOR-WEB/              # El sitio web público
│   │   ├── index.html
│   │   ├── images/              # Logo
│   │   ├── style.css
│   │   ├── js/                  # JS modular sin build
│   │   │   ├── config.js        # Carga de los JSON de contenido
│   │   │   ├── dom.js           # Helper h() — nunca innerHTML con datos
│   │   │   ├── main.js          # Entry point
│   │   │   ├── render.js        # Renderiza todos los datos en el DOM
│   │   │   ├── form.js          # Formulario de contacto
│   │   │   └── plano.js         # SVG generativo del predio
│   │   └── contenido/           # ← fuente única de contenido
│   │       ├── proyecto.json    # Datos principales, equipo, principios
│   │       ├── modulos.json     # Ideas de módulos productivos
│   │       ├── fases.json       # Agenda por etapas
│   │       ├── perfiles.json    # Perfiles del formulario de contacto
│   │       └── faq.json         # Preguntas frecuentes
│   └── sitio-ejemplo.zip        # Referencia técnica de arquitectura
│
├── CRITERIOS_GENERALES.md       # Contexto y reglas para sesiones de trabajo
├── CHANGELOG.md                 # Historial de cambios del proyecto
└── CORREGIR.md                  # Lista de correcciones (con estado)
```

---

## El sitio web

Sitio estático, sin build, sin dependencias. Solo requiere un servidor HTTP para servir los JSON.

**Probar en local:**
```bash
cd Sitio-Verdor/VERDOR-WEB
python3 -m http.server 8000
# abrir http://localhost:8000
```

**El contenido del proyecto está en `contenido/*.json`**; el HTML solo conserva títulos de sección y textos de interfaz. Para cambiar un texto del sitio, editá el JSON correspondiente.

**Conectar el formulario:** poner la URL del endpoint en `proyecto.json → contacto.formEndpoint`. Vacío = el formulario avisa que no está conectado. Los datos de contacto directos (`contacto.whatsapp`, `contacto.email`) se muestran siempre debajo del formulario.

---

## Flujo de trabajo

| Tipo de cambio | Dónde editar |
|---|---|
| Texto del sitio (predio, módulos, fases, FAQ) | `contenido/*.json` |
| Decisión tomada | `PLAN/DECISIONES.md` + JSON si corresponde |
| Pregunta nueva | `PLAN/PREGUNTAS-ABIERTAS.md` |
| Cambio de código | `js/` o `style.css` |
| Cambio significativo | Registrar en `CHANGELOG.md` |

---

## Reglas clave

- Los ítems no resueltos llevan `"estado": "por-definir"` en el JSON; el sitio los muestra con el badge **En definición**.
- Nunca poner secretos (tokens, endpoints privados) en el código del sitio.
- Este proyecto es independiente del sitio ecoRivera: no reutilizar sus endpoints, bots ni URLs.
- Al vendedor del predio no nombrarlo ni identificar su chacra en nada público.

Para el contexto completo de personas, decisiones y reglas de contenido, ver [`CRITERIOS_GENERALES.md`](./CRITERIOS_GENERALES.md).
