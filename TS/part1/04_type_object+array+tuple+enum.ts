// object
// 表示一个 js 对象
let a: object;
a = {};
a = function () {

};
// {} 用来指定对象中可以包含哪些属性
// 语法: {属性名: 属性值, 属性名: 属性值}
// let b: {name: string}; // 指定 b 是一个 含有 name 属性的对象
// b = {name: '孙悟空'};
// b = {name: '孙悟空', age: 18}; // 错误的. 属性多了少了都不行, 必须和声明时一样

let b: { name: string, age?: number }; // 属性名后加 ? 代表这个属性是可选的, 可以有可以没有
b = {name: '孙悟空'};
b = {name: '孙悟空', age: 18};
// 只要求有个 name 属性, 其他属性不做要求
// let c: { name: string, a?: number, b?: number};
let c: { name: string, [propName: string]: any }; // [propName: string]: any 表示任意类型的属性
/*
 * 属性名是 字符串 [propName: string] (propName可以写为 XXX)
 * 属性值是 any
 */
c = {name: '猪八戒', a: 1, b: 2, c: 3};
// let d: Function;
/*
 * 设置函数结构的类型声明:
 *  语法: (形参: 类型, 形参: 类型, ...) => 返回值类型
 */
let d: (a: number, b: number) => number; // 限制参数为两个, 且类型都是 number; 返回值类型必须是 number
d = function (n1, n2): number {
    return n1 + n2;
}

// array
/*
 * 声明方式
 * 1. 类型[]
 * 2. Array<类型>
 */
// string[] 表示字符串数组
let e: string[];
e = ['a', 'b', 'c'];
// e = ['a', 'b', 'c', 1, 2]; // 错误的.
// number[] 表示数值数组
let f: number[];
f = [1, 2, 3, 4];
let g: Array<number>; // 相当于number[]
g = [1, 2, 3];

// tuple
/*
 * 元组就是固定长度的数组
 * 语法:
 *      [类型, 类型, ...]
 */
let h: [string, string];
h = ['hello', 'abc'];
// h = ['hello', 'abc', 123]; // 错误的.
// h = ['hello', 123]; // 错误的.

// enum
/*
 * 枚举
 * 所有可能的情况列举出来
 */
enum Gender {
    Male,
    Female
}

let i: { name: string, gender: Gender };
i = {
    name: '孙悟空',
    gender: Gender.Male // male 使用 0 1 比使用男女在数据库中更节省, 而直接使用 0 1 难知其义
}
console.log(i.gender === 1);

// let j: string & number; // & 表示同时, 既是 string 又是 number
let j: { name: string } & { age: number };
j = {name: '孙悟空', age: 18};
// 类型的别名
/*
 * 可以简化类型的使用
 */
type myType = 1 | 2 | 3 | 4 | 5;
let k: 1 | 2 | 3 | 4 | 5;
let l: 1 | 2 | 3 | 4 | 5;
let m: myType;
k = 5;

