"use strict";
// function fn(a: any): any {
//     return a;
// }
/*
 * 在定义函数或类时, 如果遇到类型不明确的就可以使用泛型
 */
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
let res = fn(10); // 不指定泛型, TS 可以自动对类型进行判断 (number)
let res2 = fn('hello'); // 指定泛型
// 复杂一些的泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello'); // 指定泛型比较不容易出错
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('孙悟空');
// T extends Inter 表示泛型 T 必须是 Inter 实现类 (或子类)
function fn3(a) {
    return a.length;
}
fn3('hello'); // string 有 length 属性
// fn3(123) // 错误的, number 没有 length 属性
// fn3({name: '小明'}); // 错误的, object 没有 length 属性
fn3({ name: '小明', length: 13 }); // object 有 length 属性
