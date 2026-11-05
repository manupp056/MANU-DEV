# Añadir actividades a MANU.DEV

| Qué quieres guardar | Dónde va |
| --- | --- |
| Original de una entrega de M1.1 | `curso/m1/m1u1/entregas/` |
| Original de M1.2, M1.3 o M1.4 | `curso/m1/m1u2/entregas/`, `curso/m1/m1u3/entregas/` o `curso/m1/m1u4/entregas/` |
| Ficha de la actividad | `contenido/actividades/` |
| Copia autorizada para descarga pública | `web/public/entregables/` |

1. Guarda el original con el nombre y la extensión que pide el profesor.
2. Copia `contenido/PLANTILLA_ACTIVIDAD.md` a `contenido/actividades/`. Ponle un nombre como `m1u1-a03-tres-solicitudes.md` y completa `title`, `codigo` y los datos que puedas verificar. El código `M1U1-A03` sitúa la ficha en M1.1.
3. Para ofrecer un archivo en **Entregas**, copia únicamente el archivo autorizado a `web/public/entregables/m1u1/` y añade su ruta relativa en la ficha. Por ejemplo, `archivos: ["m1u1/mi-entrega_v01.txt"]`. Todo lo que pongas en `web/public/` se incluye en la compilación pública. Si no hay un archivo autorizado, deja `archivos: []`.
4. Cambia `publicar: false` a `publicar: true` cuando la ficha esté lista para mostrarse. **Formación**, **Entregas** y **Evolución** leen las fichas automáticamente.

## Vista previa local en Windows

Con Node.js 24 instalado, desde PowerShell, abre la carpeta del proyecto y ejecuta:

```powershell
cd web
npm ci
npm run dev
```

Abre la URL que indica Astro. Reinicia el servidor después de añadir o cambiar fichas para volver a sincronizarlas. Para comprobar la versión estática, ejecuta `npm run build` desde `web/`.
