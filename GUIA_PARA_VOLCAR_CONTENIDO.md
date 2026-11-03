# Dónde incorporar cada cosa

| Tipo de información | Carpeta | Ejemplo |
| --- | --- | --- |
| Archivos que pide entregar el profesor | `curso/m1/m1u1/entregas/` | `m1u1_respuestas-solicitudes_v01.txt` |
| Ficha de documentación para mostrar en la web | `contenido/actividades/` | `m1u1-a03-tres-solicitudes.md` |
| Material de apoyo que se pueda compartir | `curso/m1/m1u1/recursos/` | `notas-git.md` |
| Código y diseño de la web | `web/` | (se añadirá al construir Astro) |
| Configuración de publicación automática | `.github/workflows/` | (se añadirá al configurar Pages) |

## Cómo empezar

1. Descomprime esta carpeta en tu ordenador, por ejemplo en `Documentos/MANU-DEV/`.
2. Si ya tienes la estructura `m1u1/entregas`, conserva esos archivos y cópialos bajo `curso/m1/m1u1/entregas/` **solo para tu copia organizada**, sin cambiar el nombre que requiere el profesor. Si su consigna exige una ruta concreta, utiliza esa ruta al entregar.
3. Para documentar una actividad, duplica `contenido/PLANTILLA_ACTIVIDAD.md`, cambia su nombre y rellena las secciones.
4. Comparte en este chat los nuevos enunciados, archivos o notas cuando quieras que te ayude a convertirlos en una ficha lista para la web. El chat no sustituye tu carpeta local ni guarda automáticamente archivos en GitHub.
5. Una vez vinculemos el repositorio de GitHub, subiremos los cambios y configuraremos la publicación.

## Ejemplo para la actividad «Tres solicitudes»

- Entrega: `curso/m1/m1u1/entregas/m1u1_respuestas-solicitudes_v01.txt`
- Ficha web: `contenido/actividades/m1u1-tres-solicitudes.md`

**Importante:** No se incluyen entregas de ejemplo ni se afirma que los archivos originales ya estén copiados. Debes aportar tus versiones reales.

## Si trabajas con Codex

Abre el directorio raíz `MANU-DEV/` en el entorno local de Codex y mantén `AGENTS.md` en esa raíz. Guarda los ejercicios en `curso/` y pide a Codex que prepare la ficha de `contenido/actividades/` **sin alterar los archivos originales**. Consulta `FLUJO_CODEX_GITHUB.md` para sincronización, revisión de privacidad y publicación.
