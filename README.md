# CODE LAB — Academia pública de programación

Sitio estático gratuito para enseñar desde cero en español: Python, JavaScript, HTML, Java y una introducción a bots de Discord.

## Archivos
- `index.html`: estructura y contenido.
- `styles.css`: diseño adaptable, negro y verde neón.
- `script.js`: selector de cursos, botones de copiar y cuestionario interactivo.

## Publicarlo gratis con GitHub Pages
1. Iniciá sesión en GitHub o creá una cuenta en https://github.com/.
2. Creá un repositorio nuevo. Un nombre sugerido: `code-lab-academia`.
3. Si aparece la opción de visibilidad, elegí **Public**.
4. Subí `index.html`, `styles.css`, `script.js` y este `README.md` a la raíz del repositorio (no dentro de otra carpeta).
   - Desde el repositorio, elegí **Add file → Upload files**, seleccioná los archivos y confirmá con **Commit changes**.
5. Abrí **Settings → Pages**.
6. En **Build and deployment**, elegí **Deploy from a branch**.
7. Elegí la rama `main` y la carpeta `/(root)`, luego guardá con **Save**.
8. Esperá unos minutos. La dirección suele ser `https://TU-USUARIO.github.io/code-lab-academia/`. Reemplazá `TU-USUARIO` por tu nombre de usuario de GitHub. La URL exacta aparece en Settings → Pages cuando se publica.
9. Abrí el enlace para comprobarlo y compartilo por Discord, WhatsApp o donde quieras.

## Actualizar la web
Editá los archivos en GitHub y guardá los cambios con **Commit changes**. GitHub Pages volverá a publicar el sitio automáticamente después de unos minutos.

## Notas
- No necesita backend, base de datos ni claves secretas.
- El progreso del cuestionario no se guarda entre visitas.
- La fuente de Google Fonts puede requerir conexión a internet; el sitio tiene fuentes alternativas.
- El ejemplo de bot es educativo. Para ejecutar un bot real, configurá el token como variable de entorno y nunca lo subas a un repositorio público.
- GitHub Pages publica contenido estático; no ejecuta Python o Java en el servidor.
