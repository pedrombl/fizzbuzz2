const fizzbuzz = require('./fizzbuzz')

it('returns 1 when input is 1', () => {
  expect(fizzbuzz(1)).toEqual('1')
});

it('returns 2 when input is 2', () => {
  expect(fizzbuzz(2)).toEqual('2')
});

it('returns Fizz when input is 3', () => {
  expect(fizzbuzz(3)).toEqual('Fizz')
});

it('returns Buzz when input is 5', () => {
  expect(fizzbuzz(5)).toEqual('Buzz')
});

it('returns Fizz when input is 6', () => {
  expect(fizzbuzz(6)).toEqual('Fizz')
});

it('returns Buzz when input is 10', () => {
  expect(fizzbuzz(10)).toEqual('Buzz')
});

it('returns FizzBuzz when input is 15', () => {
  expect(fizzbuzz(15)).toEqual('FizzBuzz')
});

it('returns Fizz when input is 13', () => {
  expect(fizzbuzz(13)).toEqual('Fizz')
});

it('returns Buzz when input is 52', () => {
  expect(fizzbuzz(52)).toEqual('Buzz')
});
