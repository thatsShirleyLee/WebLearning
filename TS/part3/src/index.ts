import {hi} from './m1';

function sum(a: number, b: number): number {
    return a + b;
}

let obj: { name: string, age?: number };
obj = {name: "孙悟空"};
console.log(obj);
obj.age = 18;
console.log(obj);

console.log(sum(123, 456));
console.log('哈哈');
console.log(hi);

console.log(Promise);