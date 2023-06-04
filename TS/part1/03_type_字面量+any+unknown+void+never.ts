// 字面量
// 也可以直接使用字面量进行类型声明
let a: 10; // 类似 常量
a = 10;
// a = 11;
// 可以使用 | 连接多个类型 (联合类型)
let b: 'male' | 'female';
b = 'male';
b = 'female';

let c: boolean | string;
c = true;
c = 'hello';

// any
// 表示的是任意类型, 设置 any 后相当于 关闭了 ts 的类型检测
// 不建议使用
// let d; // 隐式 any , 声明变量如果不指定类型, 则 TS 解析器会自动判断类型为 any
let d: any; // 显式 any
d = 10;
d = 'hello';
d = true;

// unknown
// 表示未知类型, 实际上就一个类型安全的 any
// unknown 类型的变量, 不能直接赋值给其他变量
let e: unknown;
e = 10;
e = 'hello';
// e = true;
// d 的类型是 any, 它可以赋值给任意变量 (被赋值的变量 的 类型检测也会被关闭)
let s: string;
s = d;
// s = e; // 错误的, 未知类型不能赋值给 string
if (typeof e === "string") {
    s = e;
}
// 类型断言
s = e as string; // 用来告诉解析器 变量的实际类型
s = <string>e;

function fn(num) { // num: any ; return true | 123
    if (num > 0) {
        return true;
    } else {
        return 123;
    }
}

// void
// 用来表示空, 以函数为例, 就表示没有返回值
function fun () : void { // 函数没有返回值

}

// never
// 表示永远不会返回结果
function fun2 () : never { // 函数没有返回值
    throw new Error("报错了!");
}

