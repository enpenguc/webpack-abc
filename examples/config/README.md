# 使用webpack配置文件的例子

  一个最基本的例子。利用webpack进行模块化构建，将依赖的js打包在一起输出到dist目录，然后浏览index.html查看结果。对比helloWord多了一个webpack.config.js文件，用于配置webpack。
  
## 步骤如下：

  1. 创建一个空目录（如本例的config），在执行npm init命令创建及配置package.json。
  > 题外话：一个标准的前端项目都应该存在package.json文件，来说明项目名称、描述、作者以及依赖等信息。
  ```bash
  # 输入如下命令后，按提示写入项目名称、描述、版本、作者等信息。不想填写则直接回车取默认也可以
  $ npm install
  ```

  2. 安装依赖，本例子只依赖webpack一个npm包
  > 注：“--registry=https://registry.npm.taobao.org“表示使用淘宝镜像源，国内比较快速安装依赖。详细见http://npm.taobao.org
  ```bash
  $ npm install --save-dev webpack --registry=https://registry.npm.taobao.org
  ```
 3. 根目录创建创建`index.html`，作为是浏览器入口文件，作用是引入webpack打包构建输出的js，查看执行效果、开发调试等。如本例的./dist/index.js即为即打包输出的文件。
 ``` html
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>hello world</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./dist/index.js"></script>
  </body>
  </html>
 ```

 4. 新建src目录，编写`src/components/HelloWorld`组件，以及入口`src/index.js`。index.js入口文件依赖引用HelloWorld组件,用于测试webpack打包构建。webpack在编译index.js时候会将依赖HelloWord一并打包在一起。
 ```js
  // HelloWorld组件，此处对比helloWord例子，改动es6的export写法
  //（注意这个与webpack配置没有关系，只是可以方便查看下两周写法webpage打包输出的区别）
  export default function () {
    const dom = document.createElement('div');
    dom.textContent = "hello, world! ";
    return dom;
  };
  
 ```
 ```js
  // 入口index.js，此处对比helloWord例子，改动es6的import写法
  import HelloWord from './components/HelloWorld';

  document.querySelector("#root").appendChild(HelloWord());
```

 5. 编写package.json，修改srcipts下的start值为”webpack ./src/index.js ./dist/index.js“。此处是利用npm脚本，使用缩略的`npm start`来执行对应的脚本，如本例的`webpack ./src/index.js ./dist/index.js`命令，同理可以可以将这个执行脚本写得很复杂。
 ```json
  {
    ... // 前后代码省略
    "scripts": {
      "start": "webpack"
    },
    ... // 前后代码省略
  }
 ```

 6. 执行编译构建

  ```bash
  $ npm start
  ```
  执行npm start后，将.src/index.js的依赖代码都模块化打包输出到./dist/index.js中。
  
  以下是执行结果

  ```bash
  > webpack-example@1.0.0 start /home/deepin/Documents/webpack-example/examples/helloWorld
  > webpack ./src/index.js ./dist/index.js

  Hash: 98bf79ec14ca78836935
  Version: webpack 3.10.0
  Time: 107ms
    Asset     Size  Chunks             Chunk Names
  index.js  2.82 kB       0  [emitted]  main
    [0] ./src/index.js 117 bytes {0} [built]
      + 1 hidden module

  ```

  6. 使用浏览器打开index.html页面，查看效果。至此一个webpack的helloWord例子完成。建议大家查看下webpack打包构建输出的./dist/index.js代码。可以大概明白webpack的打包输出格式（也可以对比下使用es6的import方式与helloWord中的nodejs的require区别）。
