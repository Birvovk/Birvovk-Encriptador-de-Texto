
function desencriptar(){

  var texto = document.getElementById("ingreso").value.toLowerCase();
  var txtCifrado = texto.replace(/enter/img,"e");
  var txtCifrado = txtCifrado.replace(/ober/img,"o");
  var txtCifrado = txtCifrado.replace(/imes/img,"i");
  var txtCifrado = txtCifrado.replace(/ai/img,"a");
  var txtCifrado = txtCifrado.replace(/ufat/img,"u");
  
  document.getElementById("muheco").style.display = "none"; 
  document.getElementById("mensaje1").style.display = "none";
  document.getElementById("codificado").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  console.log(txtCifrado)
  
  };