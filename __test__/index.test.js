let func = require('../funcs/func');

test('test sum', () => {
  expect(func.sum(2)).toBe(2);
  expect(func.sum(2, 3)).toBe(5);
});