/*
 * util.promisify 方法
 */
// 引入 util 模块
const util = require('util');
const fs = require('fs');
// 返回一个新的函数
let mineReadFile = util.promisify(fs.readFile);
/*
 * 借助util.promisify可以将 回调函数形式的函数 封装成 Promise形式
 */
mineReadFile('./resource/content.txt').then(value => {
    console.log(value.toString());
});
