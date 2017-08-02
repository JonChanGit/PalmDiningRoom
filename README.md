# PalmDiningRoom

> Vue.js 学习项目<br>
> [Vue.js](https://bootstrap-vue.js.org/)<br>
> [bootstrap-vue](https://bootstrap-vue.js.org/)<br>
> [vue2-simplert](https://github.com/mazipan/vue2-simplert)<br>
> [SweetModal](https://github.com/adeptoas/sweet-modal-vue)<br>
> 需要额外安装的环境: `Python 2.7`

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 笔记
## 2017年7月26日
- 3-3
 
## 2017年7月30日
- 缺少的安装组件
> - npm install stylus-loader --save-dev
> - npm install stylus --save-dev
- 学习进度
> - 5-3
- 其他
> - 推送到远程：git push origin master/dev
> - 拉去代码：
> > - git pull origin master/dev [相当于是从远程获取最新版本并merge到本地]
> > - fetch origin master/dev [相当于是从远程获取最新版本到本地，不会自动merge]

## 2017年7月31日
1. 安装Axios
> 我们直接使用npm install来进行安装。
> 
> ```npm install axios --save```
> 
> 由于axios是需要打包到生产环境中的，所以我们使用–save来进行安装。

## 自动修正错误
> ```npm run lint -- --fix```