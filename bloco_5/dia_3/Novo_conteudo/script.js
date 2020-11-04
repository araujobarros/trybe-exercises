function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let diasUl = document.querySelector("#days");
console.log(diasUl);
for (let i = 0; i < dezDaysList.length; i++){
  let dias = dezDaysList[i];
  let diasLi = document.createElement('li');
  diasLi.className = 'day';
  diasLi.innerHTML = dias;
  diasUl.appendChild(diasLi);

  if (dias === 24 || dias === 25 || dias === 31) {
    diasLi.classList.add('holiday');
  }
  if (dias === 4 || dias === 11 || dias === 18 || dias === 25){
    diasLi.classList.add('friday');
  }
}



let botaoConteiner = document.querySelector("body > div.buttons-container");
let botao1 = document.createElement('button');
botao1.innerHTML = 'Feriados';
botao1.id = 'btn-holiday'
botaoConteiner.appendChild(botao1);



let feriados = document.querySelectorAll('.holiday')
console.log(feriados)
function trocaCor (){
  for (i = 0; i< feriados.length; i++){
    if (feriados[i].style.backgroundColor === 'rgb(238, 238, 238)'){
      feriados[i].style.backgroundColor = 'blue';
    }else{
      feriados[i].style.backgroundColor = 'rgb(238, 238, 238)';
    }
  }
}
botao1.addEventListener('click', trocaCor);



let botao2 = document.createElement('button');
botao2.innerHTML = 'Sexta-feira';
botao2.id = 'btn-friday'
botaoConteiner.appendChild(botao2);


let sextaFeiras = document.querySelectorAll('.friday')
console.log(sextaFeiras)
function trocaTexto (){
  for (let i = 0; i < sextaFeiras.length; i++){    
    if (sextaFeiras[i].innerText != (4 + 7*i) ){      
      sextaFeiras[i].innerText = (4 + 7*i);
    }else{
      sextaFeiras[i].innerText = 'Sextou';
    }
  }
}
botao2.addEventListener('click', trocaTexto);


