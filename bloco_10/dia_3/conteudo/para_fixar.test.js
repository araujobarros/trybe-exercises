const math = require('./math.js')

// Faça o mock da funcão subtrair e teste sua chamada.

test('mock da funcão subtrair e teste de chamada', () => {
    const mockSubtrair = jest.spyOn(math, 'subtrair')

    math.subtrair(2, 1);

    expect(mockSubtrair).toHaveBeenCalled();
})

// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.

test('mock da função multiplicar com retorno igual a 10', () => {
    math.multiplicar = jest.fn().mockReturnValue(10)

    
    expect(math.multiplicar(1, 1)).toBe(10);
    expect(math.multiplicar).toHaveBeenCalled();

})

// Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

describe('testando requisição somar', () => {
    const mockSomar = jest.spyOn(math, 'somar')
    const implementSoma = (a, b) => a + b;
    test('mock da funcão somar ', async () => {
        mockSomar.mockResolvedValue(implementSoma(2, 1));
        //Não entendi muito o usod da linha 30 tendo em vista que é usado o 'resolves' abaixo para requisições assíncronas

        expect(mockSomar(2, 1)).resolves.toBe(implementSoma(2, 1));
        expect(mockSomar).toHaveBeenCalled();
        expect(mockSomar).toHaveBeenCalledWith(2, 1);
    })
})

// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

test('mock dividir', () => {
    math.dividir = jest
    .fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

    expect(math.dividir).toHaveBeenCalledTimes(0);
    

    expect(math.dividir()).toBe(2);
    expect(math.dividir).toHaveBeenCalledTimes(1);

    expect(math.dividir()).toBe(5);
    expect(math.dividir).toHaveBeenCalledTimes(2);

    expect(math.dividir()).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(3);

})
    