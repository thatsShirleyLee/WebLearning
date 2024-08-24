# Greedy-Snake-ts
## 技术栈：
> TypeScript+Webpack+CSS(Less)+HTML
## 功能解释
### HTML 文件 (`index.html`):
这个文件定义了网页的结构，包括游戏的容器 (`#main`)、舞台 (`#stage`)、蛇 (`#snake`)、食物 (`#food`)，以及一个显示分数和等级的计分板 (`#score-panel`)。
> 这个文件中定义了网页的基本布局，使用了 HTML 元素来容纳和展示游戏组件。
### TypeScript 文件:
- `index.ts`: 这是项目的入口文件，主要用于初始化游戏。它创建了 `GameControl` 实例并开始游戏循环。
- `Snake.ts`: 定义了 `Snake` 类，表示游戏中的蛇，包括蛇的移动、增加身体、检查碰撞等功能。
- `Food.ts`: 定义了 `Food` 类，表示游戏中的食物，负责生成随机位置的食物。
- `ScorePanel.ts`: 定义了 `ScorePanel` 类，负责管理和显示游戏的分数和等级。
- `GameControl.ts`: 定义了 `GameControl` 类，作为游戏的控制中心，处理游戏的主要逻辑，包括蛇的移动、食物的处理、分数的更新等。
## 总结
1. TypeScript 文件会被编译成 JavaScript 文件。
2. Webpack 会处理文件的打包和转换。
3. HTML 文件通过 `<script>` 标签引入编译后的 JavaScript 文件。
4. TypeScript 模块中的类和功能会在 JavaScript 中被执行，从而实现游戏逻辑。
