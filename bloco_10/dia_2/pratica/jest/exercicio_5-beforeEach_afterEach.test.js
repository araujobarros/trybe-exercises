// Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// Resposta : Devido ao escopo principal imprime:
// 1 - beforeEach
//1 - test
//1 - afterEach
//Estas impressões estão relaciondas ao teste do escopo principal.
//antes e depois de cada teste no escopo do describe os before/after do principal tambem são aplicados, imprimindo mais as próximas linhas:
// 1 - beforeEach
// 2 - beforeEach
//2 - test
//2 - afterEach
//1 - afterEach