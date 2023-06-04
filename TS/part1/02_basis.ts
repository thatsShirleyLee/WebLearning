/*
    JavaScript
    let a;
    a = 10;
    a = 'hello';
 */
// 声明一个变量 a, 同时指定它的类型为 number
let a: number;
// a 的类型设置为了 number, 在以后的使用过程中 a 的值只能是数字
a = 10;
a = 33;
// a = 'hello'; // 错误的
let b: string;
b = 'hello';
let c: boolean = true;
// 如果变量的声明和赋值是同时进行的, TS 可以自动对变量进行类型检测
let d = false;
// d = 123; // 错误的
/*
 * 但类型声明 对 函数参数的 意义重大
 *   JS 中的函数是不考虑 参数的类型和个数的
 */

/*
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456)); // 567
console.log(sum(123, '456')); // '123567'
*/

function sum(a: number, b:number) : number { // 返回值类型也指定
    return a + b;
}
// sum(123, '456'); // 错误的, 编译可以通过
// sum(123, 456, 789); // 错误的, 编译可以通过
let res = sum(123, 456);

