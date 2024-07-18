# Documentación del Proyecto: Encriptador de Textos

## Descripción del Proyecto

El "Encriptador de Textos" es una aplicación web que permite a los usuarios encriptar y desencriptar mensajes utilizando un conjunto específico de reglas. La aplicación también proporciona funciones para copiar el texto encriptado y limpiar los campos de entrada y salida. Esta herramienta es útil para aprender y practicar técnicas básicas de encriptación y desencriptación.

## Tecnologías Utilizadas

- **HTML**: Estructura y contenido de la página.
- **CSS**: Estilos y diseño de la página.
- **JavaScript**: Lógica para encriptar, desencriptar, copiar y limpiar texto.
- **AOS (Animate On Scroll)**: Biblioteca para animaciones de desplazamiento.
- **SweetAlert2**: Biblioteca para mostrar alertas modales y notificaciones.

## Estructura del Proyecto

### Archivos Principales

1. **`index.html`**: Archivo principal que define la estructura de la página web.
2. **`styles/reset.css`**: CSS para restablecer los estilos predeterminados del navegador.
3. **`styles/style.css`**: CSS personalizado para el diseño y estilo de la aplicación.
4. **`script.js`**: Archivo JavaScript que contiene la lógica para encriptar, desencriptar, copiar y limpiar el texto.

### Estructura del HTML

- **`<header>`**: Contiene la barra de navegación con el logo.
- **`<main>`**: Contiene el área principal de la aplicación con los campos de entrada y salida de texto, botones para encriptar, desencriptar, copiar y limpiar.
- **`<footer>`**: Información del desarrollador y enlaces a redes sociales.

### Funciones JavaScript

- **`encriptar()`**: Reemplaza caracteres específicos en el texto de entrada con sus correspondientes encriptados.
- **`desencriptar()`**: Reemplaza las cadenas encriptadas en el texto de entrada con los caracteres originales.
- **`copiarTexto()`**: Copia el texto encriptado al portapapeles y muestra una notificación de éxito o error.
- **`limpiarTexto()`**: Limpia los campos de entrada y salida de texto y muestra una notificación de éxito.
- **`validarEntrada()`**: Habilita o deshabilita el botón de desencriptar basado en la presencia de texto en el área de entrada.

### CSS

- **`reset.css`**: Incluye un conjunto básico de reglas para asegurar que los estilos se vean uniformes en diferentes navegadores.
- **`style.css`**: Contiene estilos específicos para la página, incluyendo el diseño de los botones, áreas de texto y animaciones.

### Animaciones

- **AOS**: Se utiliza para agregar animaciones al desplazar la página, mejorando la experiencia visual.

## Instalación y Uso

1. **Clonar el Repositorio**: 
   
   git clone <https://github.com/nykacmierez/Encriptador-de-Texto.git>

2. **Abrir index.html:** 
    Abre el archivo index.html en tu navegador web para ver la aplicación en funcionamiento.

3. **Requisitos:**
  Asegúrate de tener una conexión a Internet para cargar las bibliotecas externas (Google Fonts, AOS, SweetAlert2).

## Contribuciones
  Las contribuciones al proyecto son bienvenidas. Sigue las siguientes instrucciones para contribuir:
  - 1. *Fork* del repositorio.
  - 2. *Crea* una nueva rama para tu caracteristica o correccion de errores.
  - 3. Haz *commit* de tus cambios y realiza un *Pull Request*

## Licencia
  Todos los derechos reservados.

## Contacto
  Desarrollado por [Lucas Mierez](mailto:lukassmierez@gmail.com). Puedes encontrarme en [GitHub](https://github.com/nykacmierez) y [LinkedIn](https://www.linkedin.com/in/lucas-mierez-871249283/).
