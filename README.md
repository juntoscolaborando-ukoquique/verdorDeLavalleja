# VERDOR-WEB

Sitio estático sin build. Cómo probarlo, la estructura y el flujo de trabajo están en el [README raíz](../../README.md).

## Contrato del formulario (para el backend del hito 2)
`POST` JSON al endpoint de `contenido/proyecto.json` → `contacto.formEndpoint`, con estos campos:
`nombre`, `whatsapp`, `email` (al menos uno de los dos), `perfil` (`id` de `perfiles.json`), los campos propios del perfil (por ejemplo `capital`, `modulo` con el `id` del módulo), `mensaje` y `consentimiento`.
Responde 2xx si se guardó. Solo cambia `enviar()` en `js/form.js` si el contrato cambia.
