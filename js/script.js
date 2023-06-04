function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 55 * i);
  });
}

const titulo = document.querySelector("h1");
typeWriter(titulo);


  var btn = document.getElementById("btn-top");
  btn.addEventListener("click",function(){
    window.scrollTo({
      top:0,
      left: 0,
       behavior:"smooth"

  });
});
