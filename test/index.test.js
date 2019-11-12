const regLib = require('../lib/index');

describe('test email', () => {
  test('xxx@gmail.com is an email', () => {
    expect(regLib.email.test('xxx@gmail.com')).toBe(true);
  });
});

describe('test mobile', () => {
  test('13401003333 is a mobile', () => {
    expect(regLib.mobile.test('13401003333')).toBe(true);
  });
  test('1340100333 is not a mobile', () => {
    expect(regLib.mobile.test('1340100333')).toBe(false);
  });
});
