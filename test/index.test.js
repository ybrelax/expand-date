'use strict';
require('../dist/index');
const expect = require('chai').expect;

describe('测试 获取每周周一', () => {
  it('should return 2', () => {
    const result = new Date().getCurrWeekFirst().getDay();
    expect(result).to.equal(1);
  });
});