(function () {
    // 定义一个表示 人的类
    class Person {
        // TS 可以在属性钱添加属性的修饰符
        /*
         * public 修饰的属性可以在任意位置访问/修改 (不加修饰符默认是 public)
         * private 私有属性, 私有属性只能在类内部进行访问/修改
         *      - 通过在类中添加方法可以使得私有属性可以被外部访问/修改
         * protected 受保护的属性, 只能在当前类的子类中访问/修改
         */
        // public _name: string;
        // public _age: number;
        private _name: string;
        private _age: number;

        constructor(_name: string, _age: number) {
            this._name = _name;
            this._age = _age;
        }

        /*
         * 通过在类中添加方法可以使得私有属性可以被外部访问/修改
         */

        // 定义方法, 用来获取 name 属性
        getName() {
            return this._name;
        }

        // 定义方法, 用来设置 name 属性
        setName(value: string) {
            this._name = value;
        }

        // 定义方法, 用来获取 age 属性
        getAge() {
            return this._age;
        }

        // 定义方法, 用来设置 age 属性
        setAge(value: number) {
            if (value >= 0) {
                this._age = value;
            }
        }

        // TS 中 提供了 可以添加方法修改 private 属性; 同时 在调用时可以使用原来 .属性的方法 来访问/修改
        /*
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *      - 它们被称为属性的存取器
         */
        get name() {
            console.log('get name() 执行了');
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get age() {
            return this._age;
        }

        set age(value: number) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }

    const per = new Person('孙悟空', 18);
    /*
     * 现在属性是在对象中设置的, 属性可以任意的被修改
     *  属性可以任意被修改, 将会导致对象中的数据变得非常不安全
     */
    // per._name = '猪八戒';
    // per._age = -38;

    per.setName('猪八戒');
    per.setAge(38);
    console.log(per);
    console.log(per.name);

    // protected
    class A {
        protected num: number;

        constructor(num: number) {
            this.num = num;
        }
    }

    class B extends A {
        test() {
            console.log(this.num); // num 如果用 private 修饰就无法访问
        }
    }

    // class C {
    //     name: string;
    //     age: number;
    //
    //     // 可以直接将属性定义在构造函数中
    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age;
    //     }
    // }

    class C {
        constructor(public name: string, public age: number) {
            this.name = name;
            this.age = age;
        }
    }
})()