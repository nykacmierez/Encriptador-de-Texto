function encriptar() {
    const input = document.getElementById("msg_entrada").value.trim();
    if (input === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No hay texto para encriptar!',
        showConfirmButton: true
      });
      
      return;
    }

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
    if (input === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No hay texto para desencriptar!',
        showConfirmButton: true
      });
      
      return;
    }
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
    if (text.value.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No hay texto para copiar',
        showConfirmButton: true
      });
    } else {
      text.select();
      document.execCommand("copy");
      Swal.fire({
        icon: 'success',
        title: 'Texto copiado',
        showConfirmButton: false,
        timer: 1500
      });
    }
}

function limpiarTexto() {
    document.getElementById("msg_entrada").value = "";
    document.getElementById("msg_salida").value = "";
    validarEntrada();
    Swal.fire({
      icon: 'success',
      title: 'Limpiado!',
      showConfirmButton: false,
      timer: 1500
    })
}

function validarEntrada() {
  const textarea = document.getElementById("msg_entrada");
  const btnDescript = document.getElementById("btn_descript");
  const msgSalida = document.getElementById("msg_salida");

  if (textarea.value.trim() === "") {
    btnDescript.classList.add("hidden");
    msgSalida.value = ""; 
  } else {
    btnDescript.classList.remove("hidden");
  }
}
   
  // Inicializa la visibilidad del botón cuando se carga la página
  document.addEventListener("DOMContentLoaded", validarEntrada);

document.getElementById('msg_entrada').addEventListener('keydown', function(addEventListener) {
  if (event.key === 'Enter') {
    event.preventDefault();
    encriptar();
  }
});