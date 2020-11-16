function criarCombobox () {
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
}
criarCombobox();

function prevenirEvento (event) {
  event.preventDefault();
}
function prevenirEnviar () {
  let botaoEnviar = document.querySelector('#enviar')
  botaoEnviar.addEventListener('click', prevenirEvento);
}
function aplicarPrevencao () {
  let botaoResumo = document.querySelector("#resumo");
  botaoResumo.addEventListener('click', prevenirEnviar);
}
aplicarPrevencao();
function habilitarEnviar () {
  let botaoEnviar = document.querySelector('#enviar')
  botaoEnviar.removeEventListener('click', prevenirEvento);
}
function desativarPrevencao () {
  let botaoHabilitar = document.querySelector("#habilitar");
  botaoHabilitar.addEventListener('click', habilitarEnviar);
}
desativarPrevencao ();


let botaoResumo = document.querySelector('#resumo')
  botaoResumo.addEventListener('click', function (){
    let teste = document.querySelectorAll(".control")
    for (let indexControl = 0; indexControl < teste.length; indexControl++){
      if (teste[indexControl] !== undefined) {
        var campos = teste[indexControl].firstElementChild.innerText;
        let elementCampo = document.createElement('p');
        elementCampo.innerText = campos;
        let recipienteCampo = document.querySelector("body > section:nth-child(6)");
        recipienteCampo.appendChild(elementCampo);
        console.log(campos);
        let filhos = teste[indexControl].children
        for (let filhosIndex = 0; filhosIndex < filhos.length; filhosIndex++){
          if ( filhos[filhosIndex].value !== undefined && filhos[filhosIndex].type !== 'radio' && filhos[filhosIndex].className !== 'select' ){
            var informacao = (filhos[filhosIndex].value);
          } else if (filhos[filhosIndex].className === 'select') {
            let opcoes = document.querySelector('.is-focused').options;
            let estadoSelecionado = document.querySelector('.is-focused').selectedIndex;
            informacao = (opcoes[estadoSelecionado].text);
          } else if (filhos[filhosIndex].type === 'radio') {
              informacao = "";
              if (filhos[filhosIndex].checked) {
              informacao = (filhos[filhosIndex].value);
            }
          }
        }
        let elementinformacao = document.createElement('p');
        elementinformacao.innerText = informacao;
        let recipienteInformacao = document.querySelector("body > section:nth-child(6)");
        recipienteInformacao.appendChild(elementinformacao);
        console.log(informacao);
      }
    }
  });


  let botaoLimpar = document.querySelector("#reset");
  botaoLimpar.addEventListener('click', function () {
    let resumo = document.querySelector("body > section:nth-child(6)");
    resumo.parentElement.removeChild(resumo);
  })

 