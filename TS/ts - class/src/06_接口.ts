(function () {
    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
    };


    /*
     * 接口用来定义一个类的结构, 用来定义一个类中应该包含哪些属性和方法
     *      同时接口也可以当成 类型声明 去使用
     *
     * 接口和类型声明的区别:
     *  相同点: 都可以当作 类型
     *  不同点: 接口可以同名多次定义; 类型声明只能写一次
     *
     * 接口和抽象类的区别:
     *  相同点: 接口\抽象类 可以在定义类的时候去限制类的结构
     *  不同点: 接口值定义对象的结构, 而不考虑实际值, 接口中的所有方法都是抽象方法; 抽象类中可以有具体的值\具体的方法
     */

    interface myInter {
        name: string;
        age: number;

        sayHello(): void;
    }

    /*
     * 同名接口, 可以理解为 向接口中新加入了限制
     */
    interface myInter {
        gender: string;
    }

    const obj: myType = {
        name: 'sss',
        age: 18
    };
    console.log(obj);

    /*
     * 定义类时, 就是使类去实现一个接口
     *  实现接口就是使类满足接口的要求
     */
    class MyClass implements myInter {
        name: string;
        age: number;
        gender: string;

        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        sayHello(): void {
            console.log("大家好~");
        }
    }

    console.log(new MyClass('小明', 20, '男'));
})()