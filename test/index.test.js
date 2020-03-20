'use strict';
require('../dist/index');
const expect = require('chai').expect;

// describe('测试 获取每周周一 ', () => {
//   it('should return 2', () => {
//     const result = new Date().getCurrWeekFirst().getDay();
//     expect(result).to.equal(1);
//   });
// });

// describe('测试 上月第一天 ', () => {
//   it('should return 2020-03-01', () => {
//     const result = new Date('2020-03-02').getLastMonthFirst().format();
//     expect(result).to.equal('2020-02-01');
//   });
// });

// describe('测试 上月最后一天 ', () => {
//   it('should return 2020-03-01', () => {
//     const result = new Date('2020-03-02').getLastMonthLast().format();
//     expect(result).to.equal('2020-02-29');
//   });
// });

describe('测试 周历设置项 ', () => {
  it('should return 2020-03-17', () => {
    new Date().setWeekStartEnd(2);
    const result = new Date().getCurrMonthFirst().format();
    expect(result).to.equal('2020-03-17');
  });
});