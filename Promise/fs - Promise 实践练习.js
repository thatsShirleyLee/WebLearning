const fs = require('fs');
fs.readFile('./resource/content.txt', (err, data) => {
    // 如果错误 则抛出错误
    if (err) throw err;
    // 输出文件内容
    console.log(data.toString());
});

// promise形式
const p = new Promise((resolve, reject) => {
    fs.readFile('./resource/content.txt', (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
});

p.then( // 形参只有一个 可以简写, 不用写小括号
    value => {
        console.log(value.toString());
    },
    reason => {
        console.log(reason);
    }
);