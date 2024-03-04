"use strict";
class Dog {
    // constructor 称为构造函数
    // 构造函数会在对创建时调用
    constructor(name, age) {
        // 在实例方法中, this 就表示当前的实例
        // 在构造函数中当前对象就是 当前新建的那个对象
        // 可以通过 this 向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        // console.log("汪汪汪~");
        console.log(this);
    }
}
const dog = new Dog('小黑', 4); // 相当于调用 constructor()
console.log(dog);
dog.bark();
