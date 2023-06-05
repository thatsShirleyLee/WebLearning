// 引入一个包
const path = require("path");

// 引入 html 插件
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 引入清空插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// webpack 中的所有配置信息都应该写在 module.export 中
module.exports = {

    mode: "production",

    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        path: path.resolve(__dirname, "dist"),
        // 打包后文件的名字
        filename: "bundle.js",
        // 告诉 webpack 不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },

    // 指定 webpack 打包时所使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的 loader, 用 ts-loader 去处理 以 .ts 结尾的文件
                use: [
                    // 配置 babel
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        options: {
                            // 设置预定义环境 (代码要在哪些浏览器下运行)
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "88",
                                            "ie": "11"
                                        },
                                        // 指定 corejs 的版本
                                        "corejs": "3",
                                        // 使用 corejs 的方法 "usage" 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader",
                ],
                // 要排除的文件夹
                exclude: /node-modules/
            }
        ]
    },

    // 配置 webpack 插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title : "这是一个自定义的 title"
            template: "./src/index.html"
        }), // 帮助我们自动创建 html 文件, 引入相关资源
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}