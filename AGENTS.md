# MANU.DEV — Instrucciones de trabajo para Codex

## Misión
Desarrollar y mantener MANU.DEV, una web de documentación del curso de Programación con IA (9 meses), sin convertirla en un portfolio general. Priorizar entregas verificables, navegación simple y facilidad de mantenimiento.

## Identidad y alcance
- Nombre: **MANU.DEV — Mi laboratorio de Programación con IA**.
- Estética: oscura, tecnológica y minimalista. Fondo `#0B1020`, tarjetas `#151D30`, blanco crudo `#F1F0EB`, secundario `#9CA8BD`, azul `#4776FF`, violeta `#9566FF`.
- Navegación: Inicio, Formación, Entregas, Evolución. No crear otras secciones sin aprobación.
- Stack previsto: Astro + Starlight + Markdown; publicación estática en GitHub Pages mediante GitHub Actions. Aún no está implementado.

## Reglas obligatorias
1. Conservar la estructura académica módulo → unidad → actividad y los nombres de entrega del profesor.
2. **No modificar, renombrar, sobreescribir ni eliminar archivos en `curso/**/entregas/`** sin autorización expresa.
3. Toda afirmación documental debe estar respaldada por archivos reales. Si falta información, escribir «no consta» o dejar pendiente; nunca inventarla.
4. Crear fichas de actividades basadas en `contenido/PLANTILLA_ACTIVIDAD.md`. No reemplazan las entregas originales.
5. Separar archivos académicos, fichas Markdown y código de la web (`web/`).
6. No publicar datos personales, credenciales, archivos privados, material con derechos de distribución restringidos ni contenido de terceros sin permiso. Ante dudas, marcar como **no publicable** y pedir revisión del usuario.
7. No agregar fechas, estados, resultados o cifras de progreso estimados como si fueran reales.
8. Para cada cambio de código, explicar qué se modificó, qué se verificó y qué queda pendiente. Ejecutar las comprobaciones disponibles antes de proponer publicación.
9. Respetar las versiones de entrega `_v01`, `_v02`, etc. y distinguirlas del versionado de la web y del historial Git.
10. No hacer `git push`, desplegar públicamente ni borrar contenido sin petición o autorización explícita del usuario.

## Flujo cuando aparece una actividad nueva
1. Revisar archivos incorporados a `curso/` sin alterarlos.
2. Identificar módulo, unidad, nombre, entregables, versiones y disponibilidad para publicación.
3. Generar o actualizar una ficha Markdown en `contenido/actividades/`, usando hechos verificables.
4. Comprobar rutas y enlaces; registrar lo pendiente.
5. Si existe la web, actualizar su índice usando las fichas, sin duplicación manual innecesaria.
6. Mostrar un resumen de cambios al usuario para su revisión previa a la publicación.

## Primer encargo de desarrollo (cuando el usuario lo solicite)
Implementar la versión inicial de MANU.DEV con Astro + Starlight: página de inicio visual, navegación por módulos, índice de entregas y sección de evolución discreta. Consumir fichas Markdown de `contenido/actividades/` o explicar claramente cualquier adaptación necesaria. Configurar compilación y, posteriormente, despliegue de GitHub Pages. No publicar información privada.

## Bandeja local de documentos
- `compartido/entrada/` recibe material nuevo y permanece fuera de Git mediante `.gitignore`.
- `compartido/pendientes_revision/` alberga materiales por clasificar; tampoco se publica.
- Nunca mover archivos desde `compartido/` a rutas rastreadas por Git sin revisar privacidad, derechos y permiso de publicación.
- El entorno de Codex solo puede acceder a la carpeta local si el usuario abre ese directorio en Codex/VS Code; no asumir que ChatGPT tiene acceso a `C:\Proyectos\MANU-DEV`.
- El repositorio GitHub acordado será `manupp056/MANU-DEV` una vez creado; **no asumir que ya existe**.
