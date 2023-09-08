// 使用 class 关键字 来定义一个类
class Person {
    /*
     * 直接定义的属性是实例属性, 需要通过对象的实例去访问:
     *      const per = new Person();
     * 使用 static 开头的属性总是静态属性 (类属性)
     *      Person.age
     */
    // 定义实例属性
    // name: string = '孙悟空';
    // 在属性前使用 static 关键字可以定义类属性 (静态属性)
    // static age : number = 18;
    // readonly 开头的属性表示一个只读的属性无法修改
    readonly name: string = '孙悟空';
    static readonly age: number = 18;
    // 定义方法
    sayHello() {
        console.log('Index 大家好!');
    }
    // 静态方法 (类方法)
    static sayHello() {
        console.log('Index 大家好!');
    }
}
const per = new Person();
console.log(per);
console.log(Person.age);