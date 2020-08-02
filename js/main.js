var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

/*PRIMEIRO PACIENTE*/
// var paciente = document.querySelector("#primeiro-paciente");
// var peso = paciente.querySelector(".info-peso").textContent;
// var altura = paciente.querySelector(".info-altura").textContent;
// var IMC = paciente.querySelector(".info-imc");
//
// if(peso <= 1.00 || peso >= 500) {
//   IMC.textContent = "Peso inválido!";
// } else if (altura <= 0.30 || altura >= 2.20) {
//   IMC.textContent = "Altura inválido!";
// } else {
//   IMC.textContent = peso / (altura * altura);
// }

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++){
  var peso = pacientes[i].querySelector(".info-peso").textContent;
  var altura = pacientes[i].querySelector(".info-altura").textContent;
  var IMC = pacientes[i].querySelector(".info-imc");

  if(peso <= 1.00 || peso >= 500) {
    IMC.textContent = "Peso inválido!";
    pacientes[i].classList.add("paciente-invalido");
  } else if (altura <= 0.30 || altura >= 2.20) {
    IMC.textContent = "Altura inválida!";
    pacientes[i].classList.add("paciente-invalido");
  } else {
    IMC.textContent = (peso / (altura * altura)).toFixed(2);
  }
}
