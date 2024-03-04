// import * as m1 from './hello.js'; // 静态导入

// 获取元素
const btn = document.getElementById('btn');
btn.onclick = function() {
    /*
     * 动态引入
     *  使用 import 函数
     *  - 返回结果是一个 Promise 对象
     *      这个 Promise 对象的成功的值 是 暴露出的对象
     */
    import('./hello.js').then(module => {
        console.log(module);
        module.hello();
    });
}