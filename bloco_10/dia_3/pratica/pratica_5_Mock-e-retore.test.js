const functionsStr = require('./pratica_4-5');

//   Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

  test("Nova implementação e restauraçõa", () => {
    // testando a implementação original, o mock e a restauração da função original
  
    // implementação original
    expect(functionsStr.upperCase('edson')).toBe('EDSON');
  
    // criando o mock e substituindo a implementação para uma subtração
    const mockUpperCase = jest
      .spyOn(functionsStr, "upperCase")
      .mockImplementation((str) => str.toLowerCase());
  
    functionsStr.upperCase('EDSON');
    expect(mockUpperCase).toHaveBeenCalledTimes(1);
    expect(mockUpperCase('EDSON')).toBe('edson');
    expect(mockUpperCase).toHaveBeenCalledTimes(2);
    expect(mockUpperCase).toHaveBeenLastCalledWith('EDSON');
  
    // restaurando a implementação original
    functionsStr.upperCase.mockRestore();
    expect(functionsStr.upperCase('edson')).toBe('EDSON');
  });