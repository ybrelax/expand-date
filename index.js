/**
 * @param fmt  格式化类型
 */
Date.prototype.format = function(fmt = "yyyy-MM-dd") {
    var o = {
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
    return new Date(this);
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
 * 获取当前月第一天
 */
Date.prototype.getCurrMonthFirst = function() {
   this.setDate(1);
   return this;
};

exports = Date;