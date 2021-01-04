// Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
    callback(str.toUpperCase());
}

describe('Uppercase', () => {
  it('upper shoud become UPPER', done => {
    uppercase('upper', (str) => {
      expect(str.toUpperCase()).toBe('UPPER')
      done();
    })
  })
})

// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
  };
  
const findUserById = (id) => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (users[id]) {
            return resolve(users[id]);
        }
        return reject({ error: 'User with ' + id + ' not found.' });
    }, 100);
});
}
  
const getUserName = (userID) => {
   return findUserById(userID).then(user => user.name);
}

describe('Testing promise getUserName', () => {
    test('return name', () => {
      expect.assertions(1);
      return expect(getUserName(4)).resolves.toEqual('Mark')
    });
    test('return erro', () => {
        expect.assertions(1);
        return expect(getUserName(10)).rejects.toEqual({ error: 'User with ' + 10 + ' not found.'
      });
    });
});

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

describe('Testing async/await getUserName', () => {
    test('return name', async() => {
      expect.assertions(1);
      await expect(getUserName(4)).resolves.toEqual('Mark')
    });
    test('return erro', async () => {
        expect.assertions(1);
        await expect(getUserName(10)).rejects.toEqual({ error: 'User with ' + 10 + ' not found.'
      });
    });
});

// O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      const teste = data.map((repo) => repo.name)
      // return data.map((repo) => repo.name)
      // console.log(teste);
      return teste
    });
}
// getRepos('https://api.github.com/users/tryber/repos')

describe('Testing promise getRepos', () => {
  test('return linter-template', () => {
    expect.assertions(1);
    return expect(getRepos('https://api.github.com/users/tryber/repos')).resolves.toContain('linter-template')
  });
  test('return hackatrybe-covid', () => {
      expect.assertions(1);
      return expect(getRepos('https://api.github.com/users/tryber/repos')).resolves.toContain('hackatrybe-covid')
  });
});

// 6.1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.

//   Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalObject = Animals.find(animal => animal.name === name);
      if (animalObject !== undefined) {
        return resolve(animalObject);
      }
      return reject('Nenhum animal com esse nome!')
    },100)
  })
)

// const getAnimal = (name) => {
//   return findAnimalByName(name).then(animal =>console.log(animal))
// }

const getAnimal = (name) => {
  return findAnimalByName(name).then(animal =>animal)
}

// getAnimal('Dorminhoco');
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

// 6.2. Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalList = Animals.filter(animal => animal.age === age);
      if (animalList.length !== 0) {
        return resolve(animalList);
      }
      return reject({ error: 'Animal ' + age + ' year old not found.'
    })},100)
  })
)

// const getAnimal = (name) => {
//   return findAnimalByName(name).then(animal =>console.log(animal))
// }

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then(animalList =>animalList)
}

describe('Testing promise getAnimalByAge', () => {
  test('return animalList by age (5)', () => {
    expect.assertions(1);
    return expect(getAnimalByAge(5)).resolves.toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }])
  });
  test('return erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(10)).rejects.toEqual({ error: 'Animal ' + 10 + ' year old not found.'
    });
  });
});