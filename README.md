<h1 align="center">
  Broccoli-homework
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/node-16.14.0-brightgreen.svg" alt="flask version" data-canonical-src="https://img.shields.io/badge/node-16.14.0-brightgreen.svg" style="max-width:100%;">
  <img src="https://img.shields.io/badge/yarn-1.22.17-brightgreen.svg" alt="lin-cms version" data-canonical-src="https://img.shields.io/badge/yarn-1.22.17-brightgreen.svg" style="max-width:100%;">
  <img src="https://img.shields.io/badge/webpack-5.70.0-yellow.svg" alt="LISENCE" data-canonical-src="https://img.shields.io/badge/webpack-5.70.0-yellow.svg" style="max-width:100%;">
  <img src="https://img.shields.io/badge/react-17.0.2-yellow.svg" alt="LISENCE" data-canonical-src="https://img.shields.io/badge/react-17.5.2-yellow.svg" style="max-width:100%;">
</p>

> Don't panic!

## 目录结构说

```
.
├── README.md
├── config
│   ├── webpack.common.js	webpack配置文件-公共部分
│   ├── webpack.dev.js		webpack配置文件-开发环境
│   └── webpack.prod.js		webpack配置文件-生产环境
├── dist
├── node_modules
├── package.json
├── public
├── src
│   ├── components		公共组件源码
│   ├── index.tsx		入口文件
│   ├── page			页面源码
│   └── styles			公共样式
├── tsconfig.json
└── yarn.lock
```

## 启动开发环境

### 安装依赖：

```bash
$ yarn
```

### 启动开发环境：

```bash
$ yarn dev
```

### 浏览器访问：[点这里](http://127.0.0.1:9953)

## 打包

```bash
$ yarn build
```

## TODO

- [ ] 通过 webpack dll 提高编译速度
