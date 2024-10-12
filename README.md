# 项目构建指南

欢迎来到本项目的使用指南！这是一个使用 `Tapable，` `babel`, `node.js` 库构建的 mini webpack 项目,
旨在帮助你更好地理解 webpack 的构建过程， loader、plugin 的执行时机和运行原理。

### 项目结构

`src` 文件夹下的文件为项目源代码

`dist` 文件夹下的代码为编译后的代码

`loaders` 文件夹下的文件为 `loader` 文件

`plugins` 文件夹下的文件为 `plugin` 文件

`debugger.js` 为构建文件

`webpack.js` 为 `mini webpack` 的核心代码

`webpack.config.js` 为 webpack 配置文件

## 快速开始

### 安装依赖

首先，确保你已经安装了 Node.js 和 npm。然后，在项目根目录下运行以下命令来安装所有依赖：

```bash
npm install
```

### 构建项目

安装完依赖后，你可以使用以下命令来构建项目：

```bash
npm run build
```

这个命令将会编译项目中的所有文件，并将编译后的文件输出到 `dist` 目录中。
