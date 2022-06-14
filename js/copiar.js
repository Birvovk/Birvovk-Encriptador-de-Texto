function copiar (evento){
  var contenido = document.querySelector("#codificado");
  contenido.select();
  document.execCommand("copy");
  document.getElementById("emergente").style.display = "show";
  document.getElementById("emergente").style.display = "inherit";

}