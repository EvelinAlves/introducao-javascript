var btnAddPaciente = document.querySelector("#adicionar-paciente");

btnAddPaciente.addEventListener("click", (event) => {
  event.preventDefault();
  var form = document.querySelector("#form-add");
  var paciente = buscarDadosForm(form);
  var trPaciente = criarTR(paciente);
  var tbody = document.querySelector("#tabela-pacientes");
  tbody.appendChild(trPaciente);
  form.reset();
});

function buscarDadosForm(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value)
  };
  return paciente;
};

function criarTR(paciente) {
  var trPaciente = document.createElement("tr");
  trPaciente.classList.add('paciente');

  trPaciente.appendChild(criarTD(paciente.nome, "nome"));
  trPaciente.appendChild(criarTD(paciente.peso, "peso"));
  trPaciente.appendChild(criarTD(paciente.altura, "altura"));
  trPaciente.appendChild(criarTD(paciente.gordura, "gordura"));
  trPaciente.appendChild(criarTD(paciente.imc, "imc"));

  return trPaciente;
}

function criarTD(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(`info-${classe}`);
  return td;
}


/* TIPOS DE FUNÇÕES
//ARROW FUNCTION
titulo.addEventListener("click", () => {
  console.log('Eu fui clicado! - ARROW FUNCTION');
});

//FUNÇÃO ANONIMA
titulo.addEventListener("click", function (){
  console.log('Eu fui clicado! - FUNÇÃO ANONIMA');
});

titulo.addEventListener("click", adicionarNovoPaciente);
function adicionarNovoPaciente() {
   console.log('Eu fui clicado!');
 };
*/
