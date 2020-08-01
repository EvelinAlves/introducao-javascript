var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var trPaciente = document.querySelector("#primeiro-paciente");
var peso = trPaciente.querySelector(".info-peso").textContent;
var altura = trPaciente.querySelector(".info-altura").textContent;

var IMC = peso / (altura * altura);

console.log(IMC);
