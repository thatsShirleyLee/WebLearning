import Food from './Food'
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    // 创建一个属性来存储蛇移动的方向
    direction: string = 'Right';
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    // 游戏的初始化方法, 调用后游戏即开始
    init() {
        // 绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this)); // bind()方法创建了一个新的函数，当被调用时，它的this关键字被设置为所提供的值，在新函数被调用时，给定的参数序列在任何提供的参数之前。
        // 调用 run 方法, 使蛇移动
        this.run();
    }

    // 创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // console.log(this);
        /*
         * ArrowDown
         * ArrowRight
         * ArrowLeft
         * ArrowUp
         */
        // 需要检查 event.key的值是否合法 (用户是否按了正确的按键)
        // 修改 direction 属性
        this.direction = event.key;
    }

    run() {
        /*
         * 根据方向 (this.direction) 来使蛇的位置改变
         * 向上 top 减少
         * 向下 top 增加
         * 向左 left 减少
         * 向右 left 增加
         */
        // 获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动
                X += 10;
                break;
        }

        // 检查蛇是否吃到了食物
        this.checkEat(X, Y);

        try {
            this.snake.X = X; // 调用 set X()
            this.snake.Y = Y; // 调用 set Y()
        } catch (e) {
            alert((e as Error).message + ' Game Over!');
            this.isLive = false;
        }
        // 开启定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    // 定义一个方法, 检查蛇是否吃到了食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            // 食物的位置要重置
            this.food.change();
            // 分数要增加
            this.scorePanel.addScore();
            // 蛇要增加一节
            this.snake.addBody();
        }
    }
}

export default GameControl;