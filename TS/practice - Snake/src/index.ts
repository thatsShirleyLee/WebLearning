import './style/index.less';
import Food from './moduls/Food';
import ScorePanel from './moduls/ScorePanel';
import GameControl from './moduls/GameControl'

// 测试代码
// const food = new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);

// 测试代码
// const scorePanel = new ScorePanel(10, 2);
// for (let i = 0; i < 100; i++) {
//     scorePanel.addScore();
// }
const gameControl = new GameControl();
setInterval(() => {
    console.log(gameControl.direction);
}, 1000);


