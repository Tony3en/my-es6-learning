'use strict'

var obj = {
    firstName: 'kobe',
    lastName: 'bryant'
}

var obj2 = Object.create(obj, {
    sex: {
        value: '男',
        writable: true,
        configurable: true,
        enumerable: true     //遍历是否可查到~对象中该属性
    }
})
obj2.sex = '女'
console.log(obj2)
for (var i in obj2) {
    console.log(i)
}
// delete obj2.sex;
// console.log(obj2)

console.log(`--------------part2..............Object.defineProperties-----------------`);

//Object.defineProperties(object,descriptors)

var obj1 = {
    firstName: 'shen',
    lastName: 'guoxiang'
}
Object.defineProperties(obj1, {
    fullName: {
        get: function () { //获取扩展属性
            console.log(`get()`, obj1)
            return this.firstName + ' ' + this.lastName;
        },
        set: function (data) { //监听扩展属性
            console.log(`set() `, data)
            var data = data.split(' ')
            this.firstName = data[0];
            this.lastName = data[1];
        }
    }
});
console.log(obj1.fullName)
obj1.fullName = 'li yaxin';
console.log(obj1.fullName)

console.log(` -------------------part3 Object本身的set/get  `)

var obj3 = {
    firstName: 'tim',
    lastName: 'duncan',
    get fullName() {
        // console.log('get()')
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(data) {
        var data = data.split(' ');
        this.firstName = data[0];
        this.lastName = data[1];
    }
}
console.log(obj3)
obj3.fullName = 'kobe bryant';
console.log(obj3.fullName)