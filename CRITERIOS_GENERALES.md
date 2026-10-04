# Verdor de Lavalleja — contexto para cualquier sesión de trabajo

Leé este archivo primero. Si algo de acá contradice una conversación vieja, manda este archivo.

## Qué es
Convocatoria a un grupo comprador de un predio rural de **11 ha cerca de Minas (Lavalleja, Uruguay)**, valor de referencia **USD 120.000**, para un proyecto de permacultura/agroecología. El predio se divide en **parcelas privadas + un área colectiva** (hoy 7 parcelas, número provisional). Sitio público + base de datos de interesados.

## Personas y límites
- **Administrador (el programador)**: vive en Rivera, casi no puede ausentarse; administra a distancia, puede visitar el predio si hace falta. No compra parcela. Cobrar NO es prioridad: cualquier compensación la decide el grupo y se publica.
- **Gerardo**: facilitador en Montevideo, cara visible, módulo de gastronomía/fermentos. No maneja IA ni dinero. Todo lo que se le entregue debe ser copiar-y-pegar.
- **Diseñador/a de permacultura**: tercer socio, aún por encontrar (convocatoria en la web).
- **Pedro** (vendedor): NO nombrarlo ni identificar su chacra en nada público hasta que acepte. Se le mostrará el sitio terminado; su rol es solo de vendedor salvo que quiera integrarse.

## Reglas de contenido
1. Claridad sin ambigüedad: qué se compra, cuánto cuesta, qué es de cada uno, qué es colectivo. Lo no resuelto se marca `"estado": "por-definir"` y la web lo muestra como "En definición". Nunca se rellena con invención.
2. No prometer rentabilidad ni retorno. Se ofrece tierra, uso y un proyecto. Cualquier texto financiero/jurídico pasa por escribano antes de difundirse.
3. Los organizadores no aportan capital de compra: se dice de frente.
4. Tono: voseo rioplatense, frases cortas, sin jerga técnica ni humo.
5. No se publican compromisos que el grupo todavía no acordó (por ejemplo, que algo «será votado»): solo lo que ayude a entender la propuesta hoy.
6. Este proyecto es independiente del trabajo del administrador en Rivera: no reutilizar cuentas, endpoints, bot ni URLs del sitio de ejemplo (ecoRivera).

## Estructura
- `PLAN/` — documentos canónicos (`00-vision`, `01-roles-gobernanza`, `02-modelo-economico`, `03-legal-pendientes`), `DECISIONES.md`, `PREGUNTAS-ABIERTAS.md`. `Directivas-Gemini` es el diálogo original (archivo histórico).
- `Sitio-Verdor/VERDOR-WEB/` — el sitio. **Fuente única de contenido: `contenido/*.json`**; la web lo renderiza, no lo duplica en HTML.
- `Sitio-Verdor/sitio-ejemplo.zip` — solo referencia técnica (arquitectura estática modular).

## Flujo de trabajo
Cambio de contenido → editar JSON (y `PLAN/` si es una decisión) → registrar en `DECISIONES.md`. Todo cambio significativo → `CHANGELOG.md`. Pregunta nueva → `PREGUNTAS-ABIERTAS.md`. Código: JS modular sin build, secretos nunca en el cliente.
