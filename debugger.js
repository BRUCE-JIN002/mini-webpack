const webpack = require("./webpack.js");
const webpackConfig = require("./webpack.config.js");
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  console.log("error:", err);
  console.log(
    stats.toJson({
      assets: true, //打印本次编译产出的资源
      chunks: true, //打印本次编译产出的代码块
      modules: true //打印本次编译产出的模块
    })
  );
});
