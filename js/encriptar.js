


function encriptar(){

var texto = document.getElementById("ingreso").value.toLowerCase();
var txtCifrado = texto.replace(/e/img,"enter");
var txtCifrado = txtCifrado.replace(/o/img,"ober");
var txtCifrado = txtCifrado.replace(/i/img,"imes");
var txtCifrado = txtCifrado.replace(/a/img,"ai");
var txtCifrado = txtCifrado.replace(/u/img,"ufat");

document.getElementById("muheco").style.display = "none"; 
document.getElementById("mensaje1").style.display = "none";
document.getElementById("codificado").innerHTML = txtCifrado;
document.getElementById("copiar").style.display = "show";
document.getElementById("copiar").style.display = "inherit";
console.log(txtCifrado)

};