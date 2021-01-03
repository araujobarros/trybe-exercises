const searchEmployee = require('../bonus.js');

describe('searchEmployee', () =>{
    test('Is it a function?', () => {
        expect(typeof(searchEmployee)).toBe('function');
    })
    test('Testing the return', () => {
        expect(searchEmployee('4678-2', 'First Name')).toBe('Paul');
        expect(searchEmployee('9852-2-2', 'Last Name')).toBe('Cook');
        expect(searchEmployee('1256-4', 'Specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
    })
    test('Testing existence of ID', () => {
        expect(searchEmployee('125-4', 'Specialities')).toBe('ID não identificada');
    })
    test('Testing existence of detail', () => {
        expect(searchEmployee('1256-4', 'Favorite color')).toBe('Informação indisponível');
    })
})