# MANU.DEV — Desarrollo local

## Requisitos

- Node.js instalado.
- npm disponible desde la terminal.

## Ejecutar la web

Desde esta carpeta:

```powershell
npm install
npm run dev
```

Después abre la URL local que indique Astro, normalmente `http://localhost:4321/MANU-DEV/`.

Para generar la versión de producción:

```powershell
npm run build
npm run preview
```

El comando `build` sincroniza antes las fichas publicables y genera `dist/`.

## Incorporar una actividad

1. Conserva la entrega original en `../curso/<modulo>/<unidad>/entregas/` sin cambiar su nombre ni contenido.
2. Copia `../contenido/PLANTILLA_ACTIVIDAD.md` a `../contenido/actividades/<codigo>-<nombre-corto>.md`.
3. Completa la ficha únicamente con información real y rutas existentes.
4. Añade `publicar: true` al frontmatter solo después de revisar privacidad y derechos de publicación.
5. Ejecuta `npm run build` y revisa la página generada.

Las fichas sin `publicar: true` no se incorporan a la web. La carpeta `compartido/` no se lee ni se copia durante el build.

## GitHub Pages

La configuración de Astro ya contempla el futuro repositorio `manupp056/MANU-DEV`. El archivo `.github/workflows/deploy-pages.yml.example` es solo una plantilla: no se ejecuta automáticamente. No se ha creado repositorio remoto, no se ha hecho `push` y no se ha activado ningún despliegue.
