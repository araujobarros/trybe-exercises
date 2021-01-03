const sum = require('../exercise_1_sum.js');

describe('exercise_1_sum', () =>{
    test('Is the result true? ', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    })
    test('Parameters must be numbers', () => {
        expect(() => {sum(4, '5')}).toThrow();
        expect(() => {sum(4, '5')}).toThrowError(new Error('Parameters must be numbers'));
    })
})

const myRemove = require('../exercise_2_myRemove.js');
const arr = [1, 2, 3, 4];
describe('exercise_2_myRemove', () =>{
    test('Is it Removing correctly ?', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    test('Testing the parameter', () => {
        expect(myRemove(arr, 3)).not.toEqual(arr);
    })
    test('It does not remove what does not exist', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})

const myRemoveWithoutCopy = require('../exercise_3_myRemoveWithoutCopy');
const numberList = [1, 2, 3, 4];
myRemoveWithoutCopy(numberList, 3);
describe('exercise_3_myRemoveWithoutCopy', () =>{
    test('Is it Removing correctly ?', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    test('Testing the parameter', () => {
        expect(numberList).not.toEqual([1, 2, 3, 4]);
    })
    test('It does not remove what does not exist', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})

const myFizzBuzz = require('../exercise_4_myFizzBuzz');
describe('exercise_4_myFizzBuzz', () =>{
    test('ther return is expected ?', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(10)).toBe('buzz');
        expect(myFizzBuzz(14)).toBe(14);
    })
    test('Testing whether the parameter is a number', () => {
        expect(myFizzBuzz('14')).toBeFalsy();
    })
})

const { obj1, obj2, obj3 } = require('../exercise_5_object');
describe('exercise_5_object', () =>{
    test('Comparing objects', () => {
        expect(obj1).toEqual(obj2);
        expect(obj2).not.toEqual(obj3);
    })
})