> 基于对Date属性的扩展

## 基于原型进行扩展

### 格式化日期

* yyyy - date.getFullYear()
* MM - date.getMonth() + 1
* dd - date.getDate()
* hh - date.getHours()
* mm - date.getMinutes()
* ss - date.getSeconds()

**format** 

* default 'yyyy-MM-dd'
* use: new Date().format(arg)

### 设置起始周

* setWeekStart(start) 设置周历 (周开始) 1,2,3,4,5,6,7
* default: 1