function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 55 * i);
  });
}

const titulo = document.querySelector("h1");
typeWriter(titulo);

function abrirNav() {
  document.getElementById("menuOculto").style.width = "250px";
  document.getElementById("teste1").style.marginLeft = "250px";
}

function fecharNav() {
  document.getElementById("menuOculto").style.width = "0";
  document.getElementById("teste1").style.marginLeft = "0";
}
