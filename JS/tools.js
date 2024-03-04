/*
 * 创建一个可以执行简单动画的函数
 *
 * 参数:
 *  obj: 要执行动画的对象
 *  attr: 要执行动画的样式, 比如: left, top, width, height
 *  speed: 执行动画的目标位置
 *  callback: 回调函数, 这个函数将会在动画执行完毕后调用这个函数
 */
function move(obj, attr, target, speed, callback) {
    // 关闭上一个定时器
    clearInterval(obj.timer);
    // 获取obj的原来的left值
    var current = parseInt(getStyle(obj, attr));
    // 判断速度正负
    if (current > target) {
        speed = -speed;
    }

    // 开启一个定时器,用来执行动画效果
    obj.timer = setInterval(function () {
        // 获取obj的原来的left值
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;

        // 判断newValue
        // 向左移动最小不能小于target
        // 向右移动最大不能大于target
        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target;
        }
        obj.style[attr] = newValue + "px";

        if (newValue == target) {
            clearTimeout(obj.timer);
            callback && callback();
        }
    }, 30);
};


/*
 * 定义一个函数,用来获取指定元素的当前样式
 *
 * 参数:
 *  obj: 要获取样式的元素
 *  name: 要获取的样式名
 */
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[name];
    } else {
        // IE8
        return obj.currentStyle[name];
    }
};


/*
 * 定义一个函数,用于判断对象的class是否含有指定class
 *
 * 参数:
 *  obj: 要判断class属性的对象
 *  cn: 要查询的class值
 */
function hasClass(obj, cn) {
    // 判断obj中有没有cn class
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
};


/*
 * 定义一个函数,用来向一个元素中添加指定的class属性
 *
 * 参数:
 *  obj: 要添加class属性的元素
 *  cn: 要添加的class值
 */
function addClass(obj, cn) {
    // 检查obj中是否含有cn
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
};

/*
 *
 */