"use strict";
var startWeek = 1; //开始周历
/**
 * 格式化类型
 * @param fmt
 */
Date.prototype.format = function (fmt) {
    if (fmt === void 0) { fmt = "yyyy-MM-dd"; }
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1
                ? o[k] + ""
                : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return fmt;
};
/**
 * 增加天数
 */
Date.prototype.addDay = function (day) {
    if (day === void 0) { day = 0; }
    day >= 0
        ? this.setDate(this.getDate() + day)
        : this.setDate(this.getDate() - Math.abs(day));
    return this;
};
/**
 * 获取当前月第一天
 */
Date.prototype.getCurrMonthFirst = function () {
    this.setDate(1);
    return this;
};
/**
 * 获取当前月最后一天
 */
Date.prototype.getCurrMonthLast = function () {
    var currentMonth = this.getMonth();
    var nextMonth = ++currentMonth;
    var nextMonthFirstDay = new Date(this.getFullYear(), nextMonth, 1).getTime();
    var oneDay = 1000 * 60 * 60 * 24;
    return new Date(nextMonthFirstDay - oneDay);
};
/**
 * 获取上月第一天
 */
Date.prototype.getLastMonthFirst = function () {
    return new Date(this.getFullYear(), this.getMonth() - 1, 1);
};
/**
 * 获取上个月最后一天
 */
Date.prototype.getLastMonthLast = function () {
    var date = new Date();
    var day = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    return new Date(new Date().getFullYear(), new Date().getMonth() - 1, day);
};
/**
 * 获取当周的第一天
 */
Date.prototype.getCurrWeekFirst = function () {
    var weekday = this.getDay() || 7;
   
    if (startWeek === 1) {
        const day = weekday - startWeek;
        if (day < 0) {
            weekday = 7 -day - 1;
        } else {
            weekday = weekday - startWeek + 1
        }
    }
    console.log('weekday:', this.getDay() , weekday, startWeek);
    // 7 - startWeek + weekday; 
    // 1 / 1;  0
    // 1 / 2;  6
    // 1 / 3;  5
    // 1 / 4;  4
    // 1 / 5;  3
    // 1 / 6;  2
    // 1 / 7;  1
    this.setDate(this.getDate() - weekday + 1); //往前算（weekday-1）天
    return this;
};
/**
 * 获取当周的最后一天
 */
Date.prototype.getCurrWeekLast = function () {
    var weekday = this.getDay() > 0 ? 7 - this.getDay() : 0;
    this.setDate(this.getDate() + weekday);
    return this;
};
/**
 * 设置周历 (周开始、结束)
 * @param start 开始
 */
Date.prototype.setWeekStartEnd = function (start) {
    startWeek = start;
};

new Date().setWeekStartEnd(6);
const result = new Date().getCurrWeekFirst().format();
console.log('result:', result)