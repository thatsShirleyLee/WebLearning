// 定义 Food 类
class Food {
    // 定义一个属性表示 food 对应的元素
    element: HTMLElement;

    constructor() {
        // 获取页面中的 food 元素赋值给 element
        this.element = document.getElementById('food')!;
    }

    // 定义一个获取food X 轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 定义一个获取food Y 轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 修改 food 的位置
    change() {
        // 生成一个随机的位置, 范围0-290
        // 蛇移动一次就是一格, 10px
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food;