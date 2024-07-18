Documentación para el Script de Encriptación y Desencriptación
Este script contiene funciones para encriptar y desencriptar texto, copiar texto al portapapeles, limpiar campos de texto, y validar la entrada del usuario. A continuación se detalla la funcionalidad de cada función.

function encriptar()
Convierte el texto del textarea de entrada (msg_entrada) a una versión encriptada según las siguientes reglas:

La letra "e" se convierte en "enter".
La letra "i" se convierte en "imes".
La letra "a" se convierte en "ai".
La letra "o" se convierte en "ober".
La letra "u" se convierte en "ufat".
El resultado encriptado se muestra en el textarea de salida (msg_salida).

Uso:

javascript
Copiar código
encriptar();
function desencriptar()
Convierte el texto del textarea de entrada (msg_entrada) de vuelta a su versión original según las siguientes reglas:

La cadena "enter" se convierte en "e".
La cadena "imes" se convierte en "i".
La cadena "ai" se convierte en "a".
La cadena "ober" se convierte en "o".
La cadena "ufat" se convierte en "u".
El resultado desencriptado se muestra en el textarea de salida (msg_salida).

Uso:

javascript
Copiar código
desencriptar();
function copiarTexto()
Copia el contenido del textarea de salida (msg_salida) al portapapeles utilizando la API document.execCommand("copy") y muestra una alerta de éxito utilizando SweetAlert2.

Uso:

javascript
Copiar código
copiarTexto();
function limpiarTexto()
Limpia el contenido de los textarea de entrada (msg_entrada) y salida (msg_salida). Llama a la función validarEntrada para actualizar la visibilidad del botón "DESENCRIPTAR".

Uso:

javascript
Copiar código
limpiarTexto();
function validarEntrada()
Valida el contenido del textarea de entrada (msg_entrada) para asegurarse de que solo contiene letras minúsculas y espacios. Si el campo está vacío, oculta el botón "DESENCRIPTAR"; de lo contrario, lo muestra.

Uso:

javascript
Copiar código
validarEntrada();
document.addEventListener("DOMContentLoaded", validarEntrada)
Llama a la función validarEntrada cuando el documento ha terminado de cargarse, para inicializar la visibilidad del botón "DESENCRIPTAR".

Uso:

javascript
Copiar código
document.addEventListener("DOMContentLoaded", validarEntrada);
Código Completo del Script (script.js)
javascript
Copiar código
function encriptar() {
  const input = document.getElementById("msg_entrada").value;
  const output = input
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  document.getElementById("msg_salida").value = output;
}

function desencriptar() {
  const input = document.getElementById("msg_entrada").value;
  const output = input
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  document.getElementById("msg_salida").value = output;
}

function copiarTexto() {
  const text = document.getElementById("msg_salida");
  text.select();
  document.execCommand("copy");
  Swal.fire({
    icon: 'success',
    title: 'Texto copiado',
    showConfirmButton: false,
    timer: 1500
  });
}

function limpiarTexto() {
  document.getElementById("msg_entrada").value = "";
  document.getElementById("msg_salida").value = "";
  validarEntrada();
}

function validarEntrada() {
  const textarea = document.getElementById("msg_entrada");
  
  const btnDescript = document.getElementById("btn_descript");
  const msgSalida = document.getElementById("msg_salida");

  if (textarea.value.trim() === "") {
    btnDescript.classList.add("hidden");
    msgSalida.value = ""; // Limpiar el textarea de salida
  } else {
    btnDescript.classList.remove("hidden");
  }
}

// Inicializa la visibilidad del botón cuando se carga la página
document.addEventListener("DOMContentLoaded", validarEntrada);
Este script es ideal para una aplicación de encriptación de texto simple en un entorno de navegador web. Asegúrate de que SweetAlert2 esté correctamente enlazado en tu proyecto para que las alertas funcionen correctamente.