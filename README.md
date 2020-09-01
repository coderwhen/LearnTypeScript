# TypeScript声明文件

## 什么是声明文件
### 说明
```
在ts中
```
### 安装第三方知名插件声明文件
```
npm install @types/jquery --jquery声明文件
npm install @types/[package] --安装[package]声明文件
```

## 声明文件如何编写

### 01新建同名模块的.d.ts文件
```ts
// globalLib.js
/**
 * 这是一个全局的类库
 * @param {*} options 
 */
function globalLib(options) {
    console.log(options)
}

globalLib.version = '1.0.0'

globalLib.doSomething = function() {
    console.log('globalLib do semething')
}

// 描述文件globalLib.d.ts
// 定义一个顶头的声明函数
declare function globalLib(options: globalLib.Options): void;
// 使用声明合并为函数添加对应参数
declare namespace globalLib {
    const vresion: string
    function doSomething(): void
    interface Options {
        [key: string]: any
    }
}
export = globalLib
```