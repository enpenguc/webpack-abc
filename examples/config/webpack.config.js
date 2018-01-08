/**
 * webpack的配置文件
 */

module.exports = {
  // 入口文件
  entry:  __dirname + "/src/index.js",
  // 输出配置
  output: {
    // 输出路径
    path: __dirname + "/dist",
    // 输出文件名称
    filename: "index.js"
  }
}
