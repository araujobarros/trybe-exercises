function randomNumber() {
    Math.floor(Math.random() * 100);
};

const isDivisible = (number) => (randomNumber() % number) === 0

// Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true .
//Obs: Ao usar arrow function com const ao atribuir o mockReturnValue o jest retorna o seguinte erro Assignment to constant variable.

test('randomNumber par', () => {
    randomNumber = jest.fn().mockReturnValue(4);
    // randomNumber();
    expect(isDivisible(2)).toBeTruthy()
})

// Simule ( mocke ) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.

test('mock randomNumber', () => {
    randomNumber = jest
    .fn()
    .mockReturnValue(2)
    .mockReturnValueOnce(9)
    .mockReturnValueOnce(8);

    expect(randomNumber).toHaveBeenCalledTimes(0);
    

    expect(isDivisible(2)).toBeFalsy();
    expect(randomNumber).toHaveBeenCalledTimes(1);

    expect(isDivisible(3)).toBeFalsy();
    expect(randomNumber).toHaveBeenCalledTimes(2);

    expect(isDivisible(2)).toBeTruthy();
    expect(randomNumber).toHaveBeenCalledTimes(3);

})