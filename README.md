# webpack ABC
  最近计划做一次webpack的系统学习。顺便来个由浅入深的例子详述，最后输出一个适用react/vuejs的开箱即用的webpack配置。

  一则算重新系统熟悉webpack，理解其的原理机制以及常用的loader、plugins以及业界常用的构建模式

  二则也算是一个知识积累记录，也方便自己以及各码农同仁查阅

  三则弄一个开箱即可使用的webpack配置，方便实际使用

**来个交代**
  
  > nodejs的自动化/构建工具一直非常活跃，从几年大红大紫的grunt，再到gulp,转眼又来个webpack的玩意，随大潮的漂浮中没有留下啥痕迹...

  > 接触webpack的开始，沿着grunt/gulp的方式，看下官方帮助，查找各种插件loader配置，算是一知半解。后来各种原因改用新出的轮子，如atool之类的二次封装，踩坑不少，现atool感觉要被放弃，基本没有更新。

  > 看着现在团队里奇怪webpack补丁配置，以及配套的开发服务器及mock服务都繁琐无味。
  
  所以决定回归征途，重拾下浮躁的心，再次脚踏实地学习下webpack...

## ABC计划任务

 - [x] helloWorld例子
 - [x] webpack配置文件例子
 - [ ] loader（以babel为例子）
 - [ ] plugin插件机制
 - [ ] uglifyjs压缩以及source-map代码映射
 - [ ] css模块化
 - [ ] 文件处理file-loader(处理图片、字体等)
 - [ ] webpack-dev-server及HMR（模块热替换）
 - [ ] CommonsChunkPlugin公共代码抽取
 - [ ] 动态引入、懒加载及缓存
 - [ ] shim或polyfill兼容处理（babel-polyfill）
 - [ ] react大团员
 - [ ] 来一发typescript

