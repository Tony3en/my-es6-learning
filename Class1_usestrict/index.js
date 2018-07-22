'use strict';
//禁止污染window 全局. 定义变量要用var 
var username = 'kobe';
console.log(username);

//禁止自定义函数的this指向window
function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}
var Kobe = new Person('kobe', 'male')
console.log(Kobe)

//创建eval的作用域
var str = 'NBA';
eval('var str = "CBA";console.warn(str)');
console.log(str)

//对象不能有重名属性
var obj ={
    username:'kobe',
    // username:'b' 重名
}


