# 基于KOA2的简单MVC WEB框架

## 特性

* 基于KOA2搭建
* 使用async,await语法实现异步调用
* 使用babel-core进行转码
* 实现了MVC架构，规范了不同文件的目录
* 模板使用arttemplate

## 目录结构

* **controllers:**控制层
* **middleware:**中间件
* **static:**静态资源，包括css、js、字体、img等
* **views:**html页面文件

## 使用

```
    npm install
    npm start
```

## 版本
### V0.0.1

* 第一版WEB应用框架，基于KOA2搭建，实现了基本的MVC结构。
* 写了一点测试代码

## 依赖

```
    "babel-core": "6.13.2",
    "babel-polyfill": "6.13.0",
    "babel-preset-es2015-node6": "0.3.0",
    "babel-preset-stage-3": "6.5.0",
    "koa": "2.0.0",
    "koa-router": "7.0.0",
    "koa-bodyparser": "3.2.0",
    "mime": "1.3.4",
    "mz": "2.4.0",
    "art-template": "3.1.0",
    "parseurl": "1.3.1",
    "querystring": "0.2.0",
    "lodash": "4.17.3"
```