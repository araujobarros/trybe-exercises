
let listaEstados = 
  ['Acre (AC)',
  'Alagoas (AL)',
  'Amapá (AP)',
  'Amazonas (AM)',
  'Bahia (BA)',
  'Ceará (CE)',
  'Distrito Federal (DF)',
  'Espírito Santo (ES)',
  'Goiás (GO)',
  'Maranhão (MA)',
  'Mato Grosso (MT)',
  'Mato Grosso do Sul (MS)',
  'Minas Gerais (MG)',
  'Pará (PA)',
  'Paraíba (PB)',
  'Paraná (PR)',
  'Pernambuco (PE)',
  'Piauí (PI)',
  'Rio de Janeiro (RJ)',
  'Rio Grande do Norte (RN)',
  'Rio Grande do Sul (RS)',
  'Rondônia (RO)',
  'Roraima (RR)',
  'Santa Catarina (SC)',
  'São Paulo (SP)',
  'Sergipe (SE)',
  'Tocantins (TO)'];

let seletor = document.querySelector("#estado");
for (let indiceEstados = 0; indiceEstados < listaEstados.length; indiceEstados += 1) {
  let opcao = document.createElement('option');
  seletor.appendChild(opcao);
  opcao.innerHTML = listaEstados[indiceEstados];
  opcao.setAttribute('value', (indiceEstados + 1));
}


function prevenirEvento (event) {
  event.preventDefault();
}

function ativarPrevencao () {
  let botaoEnviar = document.querySelector('#enviar')
  botaoEnviar.addEventListener('click', prevenirEvento);
}
let botaoResumo = document.querySelector("#resumo");
botaoResumo.addEventListener('click', ativarPrevencao )


function desativarPrevencao () {
  let botaoEnviar = document.querySelector('#enviar')
  botaoEnviar.removeEventListener('click', prevenirEvento);
}
let botaoHabilitar = document.querySelector("#habilitar");
botaoHabilitar.addEventListener('click', desativarPrevencao )


