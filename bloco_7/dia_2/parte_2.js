const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, uma chave que deve ser incluída e o valor dela.
const newTurno = (object, key, value) => object[key] = value;
newTurno (lesson2, 'turno', 'manhã')
console.log(lesson2);

// Crie uma função para listar como chaves de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = object =>  Object.keys(object);
console.log(listKeys(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.
const lengthObject = object => listKeys(object).length;
console.log(lengthObject(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = object => Object.values(object);
console.log(listValues(lesson1));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada Chave Desse Novo Objeto SERA UMA aula, Sendo essas chaves: lesson1, lesson2e lesson3. Ao executar o comando console.log(allLessons), a saída deve ser a seguinte:

  const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {}
};

const playLesson = (oldObject, newObject) => newObject = Object.assign(newObject,oldObject);
playLesson(lesson1, allLessons.lesson1);
playLesson(lesson2, allLessons.lesson2);
playLesson(lesson3, allLessons.lesson3);
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const contarEstudantes = () => {
  let qtdEstudantes = 0
  for (let key in allLessons) {
    qtdEstudantes = qtdEstudantes + (allLessons[key].numeroEstudantes);
  }
  console.log(qtdEstudantes);
}

contarEstudantes ();

// Crie uma função que obtém o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValuebyNumber = (object, i) => {
  let objectList = Object.values(object);
  return objectList[i];
}

console.log(getValuebyNumber(lesson1, 0));

// Crie uma função que se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (object, key, value) => {
  listPair = Object.entries(object);
  let bool = true
  for (let i = 0; i < listPair.length; i++) {
    if (listPair[i][0] === key && listPair[i][1] === value){
      break
    } else if (i === listPair.length - 1){ 
      bool = false
    }
  }
  return bool
}

console.log(verifyPair(lesson3, 'turno', 'noite'))
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'))

// Bônus
// Crie uma função para contar quantos alunos assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const contarEstudantesMatematica = () => {
  let qtdEstudantes = 0
  for (key in allLessons) {
    listPair = Object.entries(allLessons[key]);
    // console.log(listPair)
    // console.log(listPair[0][1]);
    // console.log(listPair[1][1]);
    if (listPair[0][1] === 'Matemática') {
      qtdEstudantes = qtdEstudantes + listPair[1][1]
    }
  }
  console.log(qtdEstudantes);
}
contarEstudantesMatematica ();

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (object, teacher) => {
  let qtdEstudantes = 0
  const report = {
    professor: teacher,
    aulas: []
  }
  for (key in object) {
    listPair = Object.entries(object[key]);
    if (listPair[2][1] === teacher) {
      report.aulas.push(listPair[0][1]);
      qtdEstudantes = qtdEstudantes + listPair[1][1];
      report.estudantes = qtdEstudantes;
    }
  }
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'))
console.log(createReport(allLessons, 'Carlos'))