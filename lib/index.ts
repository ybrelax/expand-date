interface Date {
  format: (arg?: string) => string;
  addDay: (arg?: number) => Date;
  getCurrMonthFirst: () => Date;
  getCurrMonthLast: () => Date;
  getCurrWeekFirst: () => Date;
  getCurrWeekLast: () => Date;
  getLastMonthFirst: () => Date;
  getLastMonthLast: () => Date;
  setWeekStart: (start: number) => void;
}

let startWeek = 1; //开始周历

/**
 * 格式化类型
 * @param fmt  
 */
Date.prototype.format = function(fmt = "yyyy-MM-dd") {
  var o: any = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? o[k] + ""
          : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

/**
 * 增加天数
 */
Date.prototype.addDay = function(day = 0) {
  day >= 0
    ? this.setDate(this.getDate() + day)
    : this.setDate(this.getDate() - Math.abs(day));
  return this;
};
/**
 * 获取当前月第一天
 */
Date.prototype.getCurrMonthFirst = function() {
  this.setDate(1);
  return this;
};
/**
 * 获取当前月最后一天
 */
Date.prototype.getCurrMonthLast = function() {
  let currentMonth = this.getMonth();
  const nextMonth = ++currentMonth;
  const nextMonthFirstDay = new Date(
    this.getFullYear(),
    nextMonth,
    1
  ).getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return new Date(nextMonthFirstDay - oneDay);
};

/**
 * 获取上月第一天
 */
Date.prototype.getLastMonthFirst = function() {
  return new Date(this.getFullYear(), this.getMonth()-1, 1);
};
/**
 * 获取上个月最后一天
 */
Date.prototype.getLastMonthLast = function() {
  const date = new Date();
  const day = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  return new Date(new Date().getFullYear(), new Date().getMonth()-1, day);
};



/**
 * 获取当周的第一天
 */
Date.prototype.getCurrWeekFirst = function () {
  var weekday = this.getDay() || 7;
  let day = weekday - startWeek;
  if (day <= 0) {
      day = 7 - day -1;
  }
  this.setDate(this.getDate() - day + 1); //往前算（weekday-1）天
  return this;
};
/**
* 获取当周的最后一天
*/
Date.prototype.getCurrWeekLast = function () {
  var weekday = this.getDay() > 0 ? 7 - this.getDay() : 0;
  let day = weekday + startWeek;
  const cur = this.getDay() ||7;
  if(( cur - startWeek) <= 0) {
      day =  weekday - (startWeek - cur) - 1;
  }
  this.setDate(this.getDate() + day);
  return this;
};
/**
* 设置周历 (周开始、结束)
* @param start 开始
*/
Date.prototype.setWeekStart = function (start) {
  startWeek = start - 1;
};
