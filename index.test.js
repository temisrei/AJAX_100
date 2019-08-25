//要測試的函式
const sum = (a, b) => {
  return a + b;
};

test('Check the result of 5 + 2', () => {
  expect(5 + 2).toBe(7);
});

test('Check the result of 5 + 2', () => {
  // 在 expect 中呼叫函式測試結果
  expect(sum(5, 2)).toBe(7);
});

test('Use toMatch test', () => {
  // 搭配正規表達式
  expect('Happy new year.').toMatch(/new/);
});

test('Check the object type', () => {
  let peopleA = {
    name: 'GQSM',
  };
  peopleA.age = 25;

  // 測試字串
  expect(peopleA.name).toBe('GQSM');
  // 測試物件
  expect(peopleA).toEqual({ name: 'GQSM', age: 25, });
});

test('Use not', () => {
  let peopleA = {
    name: 'GQSM',
  };
  // 確認 name 不等於空
  expect(peopleA.name).not.toBe('');

  // 如果 name 是空的
  // peopleA.name = '';
  // expect(peopleA.name).not.toBe('');
});

test('test integer', () => {
  // 整數可以使用 toBe 或 toEqual 斷言
  expect(5).toBe(5);
  expect(5).toEqual(5);

  // 測試輸出值是否大於期望值
  expect(5).toBeGreaterThan(4);

  // 測試輸出值是否大於等於期望值
  expect(5).toBeGreaterThanOrEqual(5);

  // 測試輸出值是否小於期望值
  expect(5).toBeLessThan(6);

  // 測試輸出值是否小於期望值
  expect(5).toBeLessThanOrEqual(5);
});