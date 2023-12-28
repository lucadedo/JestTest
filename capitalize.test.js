
const capitalize = require('./capitalize');

test('CAPITALIZE THE FIRST LETTER OF ONE WORD', () => {
  expect(capitalize('luca')).toBe('Luca');
  expect(capitalize('Luca')).toBe('Luca');
  expect(capitalize('LUCA')).toBe('LUCA');
});


test('MORE WORDS IN STRING', () => {
  expect(capitalize('luca is testing')).toBe('Luca is testing');
  expect(capitalize('Luca is testing')).toBe('Luca is testing');
  expect(capitalize('LUCA IS TESTING')).toBe('LUCA IS TESTING');
});

test('DONT ACCEPT NUMBERS IN STRING', () => {
  expect(capitalize('135')).toBe('invalid characters in string');
});