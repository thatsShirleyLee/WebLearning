class Promise {
    // 构造方法
    constructor(executor) {
        // 添加属性
        this.promiseState = 'pending';
        this.promiseResult = null;
        // 声明属性
        // this.callback = {};
        this.callbacks = [];
        // 保存实例值对象的 this 值
        const self = this; // self _this that
        // resolve 函数
        function resolve(data) {
            // 状态只能修改一次
            if (self.promiseState !== 'pending') return;
            // 1. 修改对象的状态 ( promiseState )
            self.promiseState = 'fulfilled' // resolved
            // 2. 修改对象的结果值 ( promiseResult )
            self.promiseResult = data;
            // 调用成功的回调函数
            // if (self.callback.onResolved) {
            //     self.callback.onResolved(self.promiseResult);
            // }
            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onResolved(data);
                });
            });
        }

        // reject 函数
        function reject(data) {
            // 状态只能修改一次
            if (self.promiseState !== 'pending') return;
            // 1. 修改对象的状态 ( promiseState )
            self.promiseState = 'rejected'
            // 2. 修改对象的结果值 ( promiseResult )
            self.promiseResult = data;
            // 调用失败的回调函数
            // if (self.callback.onRejected) {
            //     self.callback.onRejected(data);
            // }
            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onRejected(data);
                });
            });
        }

        try {
            // 执行器函数是同步调用的
            executor(resolve, reject);
        } catch (e) {
            // 修改 promise 状态为失败
            reject(e);
        }
    }
    // then() 方法封装
    then(onResolved, onRejected){
        let self = this;
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason;
            };
        }
        if (typeof onResolved !== 'function') {
            onResolved = value => value; // value => {return value;}
        }
        // 返回 Promise 对象
        return new Promise((resolve, reject) => {
            // 封装函数
            function callback(type) {
                try {
                    let result = type(self.promiseResult);
                    if (result instanceof Promise) {
                        result.then(v => {
                            resolve(v);
                        }, r => {
                            reject(r);
                        })
                    } else {
                        resolve(result);
                    }
                } catch (e) {
                    reject(e);
                }
            }

            if (this.promiseState === 'fulfilled') {
                setTimeout(() => {
                    callback(onResolved);
                });
            }
            if (this.promiseState === 'rejected') {
                setTimeout(() => {
                    callback(onRejected);
                });
            }
            // 使 then 能够异步
            if (this.promiseState === 'pending') {
                // 保存回调函数
                // this.callbacks.push({
                //     onResolved: onResolved, // value => {console.log(value);}
                //     onRejected: onRejected  // reason => {console.log(reason);}
                // });

                this.callbacks.push({
                    onResolved: function () {
                        callback(onResolved);
                    },
                    onRejected: function () {
                        callback(onRejected);
                    }
                });
            }
        });
    }
    // catch() 方法
    catch(onRejected){
        return this.then(undefined, onRejected);
    }
    // resolve() 方法
    /*
     * 不属于实例对象, 属于Promise类, 需要使用 static
     */
    static resolve(value){
        // 返回 promise 对象
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })
            } else {
                resolve(value);
            }
        });
    }
    // reject() 方法
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }
    // all() 方法
    static all(promises) {
        return new Promise((resolve, reject) => {
            // 声明变量
            let count = 0;
            let arr = [];
            // 遍历
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    // 得知对象的状态是成功的
                    // 每个对象都成功, 才能调用
                    count++;
                    // 将当前promise对象成功的结果 存入到数组中
                    arr[i] = v;
                    // 判断
                    if (count === promises.length) {
                        resolve(arr);
                    }
                }, r => {
                    reject(r);
                });
            }
        });
    }
    // race() 方法
    static race(promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => { // 状态只能只会改变一次
                    resolve(v);
                }, r => {
                    reject(r);
                });
            }
        });
    };
}
