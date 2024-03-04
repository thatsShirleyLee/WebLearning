"use strict";
(function () {
    const obj = {
        name: 'sss',
        age: 18
    };
    console.log(obj);
    /*
     * 定义类时, 就是使类去实现一个接口
     *  实现接口就是使类满足接口的要求
     */
    class MyClass {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        sayHello() {
            console.log("大家好~");
        }
    }
    console.log(new MyClass('小明', 20, '男'));
})();
