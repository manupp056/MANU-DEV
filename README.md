# MANU.DEV — Mi laboratorio de Programación con IA

> Proyecto vivo de documentación del curso de Programación con Inteligencia Artificial (duración prevista: 9 meses).

## Propósito

Documentar el aprendizaje y las actividades del curso, conservar los archivos originales de entrega y ofrecer al profesor un enlace público para consultar y descargar el trabajo. El sitio no es un portfolio general: todo el contenido debe estar relacionado con el curso.

## Decisiones acordadas

- **Nombre:** MANU.DEV — Mi laboratorio de Programación con IA.
- **Estilo:** oscuro, tecnológico, minimalista; blanco crudo, azules y violetas.
- **Paleta inicial:** fondo `#0B1020`, tarjetas `#151D30`, texto `#F1F0EB`, secundario `#9CA8BD`, azul `#4776FF`, violeta `#9566FF`, verde `#34D399`.
- **Navegación prevista:** Inicio/Dashboard, Formación, Entregas y Evolución.
- **Organización académica:** módulo → unidad → actividad, respetando nombres y formatos exigidos por el profesor.
- **Tecnología prevista (pendiente de implementación):** Astro + Starlight, Markdown, Git/GitHub, GitHub Pages y GitHub Actions.
- **Alojamiento:** GitHub Pages con repositorio público, evitando información personal o material con restricciones de publicación.
- **Desarrollo incremental:** la web debe facilitar el curso, no añadir una carga excesiva.

## Regla fundamental: dos tipos de contenido

1. **Entregas originales** → `curso/m1/m1u1/entregas/` (o el módulo/unidad correspondiente). Conservar nombre, extensión y contenido pedidos por el profesor.
2. **Ficha para la web** → `contenido/actividades/` en Markdown. Contiene objetivo, proceso, archivos enlazados, versiones y aprendizajes. No sustituye la entrega original.

Los apuntes y documentos de apoyo que puedan compartirse van en `curso/<modulo>/<unidad>/recursos/`. No subir enunciados completos, documentación restringida, datos personales, credenciales ni material protegido sin permiso.

## Flujo para cada nueva actividad

1. Realizar la actividad localmente y guardar el archivo **original de entrega** en la carpeta académica indicada.
2. Copiar `contenido/PLANTILLA_ACTIVIDAD.md` a `contenido/actividades/<codigo>-<nombre-corto>.md` y rellenarla.
3. Añadir capturas o recursos compartibles si son útiles (sin datos sensibles).
4. Revisar los enlaces a los archivos y comprobar que el contenido publicado puede ser público.
5. Registrar cambios con Git y subirlos a GitHub. **Cuando exista la web y su despliegue**, el sitio se actualizará automáticamente.

## Fases orientativas

- **v0.1:** estructura, diseño y navegación.
- **v0.2:** primeras actividades documentadas.
- **v0.3:** vista de entregas para el profesor.
- **v0.4:** despliegue automático con GitHub Pages.
- **v1.0:** primera plataforma estable.

Las versiones del **sitio** son distintas de las versiones de una **entrega** (`_v01`, `_v02`, etc.). Git conservará adicionalmente el historial de cambios.

## Situación actual

Este repositorio inicial es **una base de organización y documentación**, no una web ya implementada. Las carpetas `web/` y `.github/workflows/` quedan preparadas para su desarrollo posterior. Las fechas de tareas, módulos y competencias solo se añadirán cuando sean reales.

## Privacidad

Al usar GitHub Pages público, cualquier visitante puede ver los archivos publicados. Antes de subir cada archivo, eliminar datos personales, información privada y contenidos del curso que no se puedan redistribuir. Si hay entregas no publicables, conservarlas solo en local o en un repositorio privado y documentar en la web únicamente su existencia y resumen permitido.

## Trabajo con Codex y GitHub (actualización v0.2 de la base)

- `AGENTS.md` establece las normas que debe seguir Codex al abrir este proyecto.
- `FLUJO_CODEX_GITHUB.md` explica cómo incorporar actividades y revisar cambios antes de hacer commits o publicar.
- `.gitignore` excluye dependencias, secretos habituales y carpetas privadas, pero **no sustituye una revisión manual** de los archivos que se suben.
- La carpeta local y el repositorio GitHub se sincronizan mediante Git; ChatGPT y Codex no disponen necesariamente de una carpeta compartida en tiempo real.
- **Este paquete sigue siendo una base documental**, no una web Astro terminada ni un repositorio ya conectado a GitHub.
