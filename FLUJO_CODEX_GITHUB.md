# Flujo de trabajo local + Codex + GitHub

## Arquitectura de trabajo
- **Carpeta local `MANU-DEV/`:** fuente principal de los archivos del proyecto.
- **Codex:** abre esta carpeta como proyecto local (si usas un entorno Codex con acceso al equipo); lee `AGENTS.md` y modifica los archivos permitidos.
- **Git/GitHub:** historial y sincronización mediante commits y push revisados.
- **GitHub Pages:** web pública cuando esté implementada; no sirve como almacenamiento privado de entregas.
- **ChatGPT:** ayuda con la planificación y las fichas, pero **no sincroniza automáticamente** la conversación con la carpeta de tu ordenador.

Si usas Codex en la nube en lugar de una instalación local, conecta el repositorio GitHub y sincroniza mediante Git. No es una carpeta compartida en tiempo real por sí sola.

## Qué depositar en cada lugar
1. `curso/mX/mXuY/entregas/`: **archivos originales** y versiones requeridas por el profesor. Si el profesor exige `m1u1/entregas` como ruta exacta, mantener esa ruta en la entrega académica; la copia organizada no la sustituye.
2. `curso/mX/mXuY/recursos/`: solo materiales que tengas derecho a redistribuir.
3. `contenido/actividades/`: ficha Markdown de la actividad, creada con la plantilla.
4. `web/`: código del sitio cuando se implemente.
5. `AGENTS.md`: instrucciones persistentes para Codex.

## Rutina recomendada para una nueva actividad
1. Termina el ejercicio y guarda su archivo de entrega sin modificar el nombre exigido.
2. Haz copia local en la carpeta correspondiente, pero **no subas a GitHub nada sensible o no autorizado**.
3. Pide a Codex: «Revisa los archivos nuevos de `curso/mX/mXuY/`, crea la ficha siguiendo `contenido/PLANTILLA_ACTIVIDAD.md`, verifica enlaces y no alteres ninguna entrega. No inventes datos y señala lo que falte. No publiques todavía.»
4. Revisa tú la ficha, comprueba los ficheros y el alcance público.
5. Haz commit y push cuando lo consideres correcto. Cuando el sitio y GitHub Actions estén configurados, el push a la rama definida puede iniciar el despliegue automático.

## Seguridad antes de hacer `git add`
- Un `.gitignore` ayuda con archivos locales, pero **no garantiza** evitar publicar secretos o materiales privados. Revisa los cambios con `git status` y `git diff --cached`.
- Nunca subir tokens, contraseñas, archivos `.env`, datos personales ni materiales del aula cuya publicación no esté autorizada.
- Si necesitas conservar información privada, mantenla fuera del repositorio público o en un repositorio privado separado. No basta con omitir enlaces desde la web.

## Configuración inicial (cuando tengas Git instalado)
```bash
cd MANU-DEV
git init
git add README.md AGENTS.md GUIA_PARA_VOLCAR_CONTENIDO.md FLUJO_CODEX_GITHUB.md contenido/ .gitignore
git commit -m "docs: base de MANU.DEV y flujo de Codex"
```
Crear el repositorio vacío en GitHub, agregar el remoto y subir los cambios siguiendo las instrucciones que muestre GitHub. No ejecutar comandos de publicación antes de revisar qué archivos pasarán a ser públicos.

## Nota sobre versiones
- **Proyecto web:** v0.1, v0.2, etc.
- **Entregas:** sufijos exigidos por el profesor (`_v01`, `_v02`, etc.).
- **Git:** commits con historial independiente.
