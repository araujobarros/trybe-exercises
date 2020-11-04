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
    diasLi.className = 'day holiday'
  }
  else if (dias === 4 || dias === 11 || dias === 18 || dias === 25)
  diasLi.className = 'day friday'
}

