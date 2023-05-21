// 读取 resource 文件下的内容
const fs = require("fs");
fs.readFile('./resources/为学.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
// node "Promise 读取文件.js"

// 使用 Promise 封装
const p = new Promise((resolve, reject) => {
    fs.readFile('./resources/为学.txt', (err, data) => {
        if (err) reject(err);
        resolve(data);
    })
});
p.then(value => {
    console.log(value);
}, reason => {
    console.log(reason);
});