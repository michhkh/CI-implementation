const attack = require('./node-test');

test('Is it working?', () => {
  expect(attack('Kylo Ren', 1)).toBe('Kylo Ren dealt 1 damage!');
});
