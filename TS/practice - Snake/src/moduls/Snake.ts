class Snake {
    // 表示蛇头的元素
    head: HTMLElement;
    // 蛇的身体(也包括蛇头)
    bodies: HTMLCollection;
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 获取蛇的X轴坐标(蛇头坐标)
    get X() {
        return this.head.offsetLeft;
    }

    // 获取蛇的Y轴坐标
    get Y() {
        return this.head.offsetTop;
    }

    set X(value) {
        if (this.X === value) {
            return;
        }
        if (0 > value || value > 290) {
            throw new Error('蛇撞墙了!');
        }
        // 修改 x 时, 是在修改水平坐标, 蛇在左右移动. 蛇在向左移动时, 不能向右掉头, 反之亦然
        // 要有一节身体时, 才进行限制
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) { // 蛇头设置值和第二节身体一样, 说明发生了掉头
            if (value > this.X) {
                // 说明蛇在向左移动, 此时不应该让它掉头向右移动. 使它继续向左移动
                value = this.X - 10;
            } else {
                // 说明蛇在向右移动, 此时不应该让它掉头向左移动. 使它继续向右移动
                value = this.X + 10;
            }
        }
        // 在蛇头移动的时候, 移动身体
        this.moveBody();
        this.head.style.left = value + 'px';
        // 检查有没有撞到自己
        this.checkHeadBody();
    }

    set Y(value) {
        if (this.Y === value) {
            return;
        }
        if (0 > value || value > 290) {
            throw new Error('蛇撞墙了!');
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) { // 蛇头设置值和第二节身体一样, 说明发生了掉头
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        // 在蛇头移动的时候, 移动身体
        this.moveBody();
        this.head.style.top = value + 'px';
        // 检查有没有撞到自己
        this.checkHeadBody();
    }

    // 蛇增加身体的方法
    addBody() {
        // 向 element 中添加一个 div
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }

    // 添加一个蛇身体移动的方法
    moveBody() {
        /*
         * 将后面的身体设置为前面的身体的位置 (从后往前修改)
         *  举例子:
         *      第 4 节 = 第 3 节的位置
         *      第 3 节 = 第 2 节的位置
         *      第 2 节 = 第 1 节的位置
         */
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前面的身体
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    // 检查蛇头是否撞到身体
    checkHeadBody() {
        // 获取所有的身体, 检查其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体, 游戏结束
                throw new Error('撞到自己了');
            }
        }
    }
}

export default Snake;