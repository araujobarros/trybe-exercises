
const api = require('./bonus');

const requestReturn = {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  }


  test('Mock fetchJoke', async () => {
      api.fetchJoke = jest.fn().mockResolvedValue(requestReturn);

      api.fetchJoke();
      expect(api.fetchJoke).toHaveBeenCalled();
      expect(api.fetchJoke).toHaveBeenCalledTimes(1);
      expect(api.fetchJoke()).resolves.toBe(requestReturn);
      expect(api.fetchJoke).toHaveBeenCalledTimes(2);
    });
  
    test("testando requisição caso a promise seja rejeitada", async () => {
        api.fetchJoke = jest.fn().mockResolvedValue('a requisição falhou');
  
      expect(api.fetchJoke).toHaveBeenCalledTimes(0);
      expect(api.fetchJoke()).rejects.toMatch('a requisição falhou');
      expect(api.fetchJoke).toHaveBeenCalledTimes(1);
    });

