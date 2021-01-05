// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

function randomNumber() {
    Math.floor(Math.random() * 100);
};

// afterEach(randomNumber.mockRestore())
//randomNumber.mockRestore is not a function

test('randomNumber, teste retorno e chamadas', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    expect(randomNumber).toHaveBeenCalledTimes(0);

    expect(randomNumber()).toBe(10);

    expect(randomNumber).toHaveBeenCalledTimes(1);
})

// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

test("Implementação dividir", () => {
    
    randomNumber.mockRestore()

    randomNumber.mockImplementation((a, b) => a / b);

    expect(randomNumber).toHaveBeenCalledTimes(0);

    randomNumber(9, 3);
  
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(9, 3);
    expect(randomNumber(15, 5)).toBe(3);
  });

//   Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

describe('Testando duas implementações diferentes', () => {
    test("Implementação 3 multiplicações", () => {
    
        randomNumber.mockRestore()
    
        randomNumber.mockImplementation((a, b, c) => a * b * c);
    
        expect(randomNumber).toHaveBeenCalledTimes(0);
    
        randomNumber(1, 2, 3);
      
        expect(randomNumber).toHaveBeenCalledTimes(1);
        expect(randomNumber).toHaveBeenCalledWith(1, 2, 3);
        expect(randomNumber(2, 3, 4)).toBe(24);
      });
      test("Implementação dobro", () => {
    
        randomNumber.mockRestore()
    
        randomNumber.mockImplementation((a) => a * 2);
    
        expect(randomNumber).toHaveBeenCalledTimes(0);
    
        randomNumber(7);
      
        expect(randomNumber).toHaveBeenCalledTimes(1);
        expect(randomNumber).toHaveBeenCalledWith(7);
        expect(randomNumber(23)).toBe(46);
      });
})