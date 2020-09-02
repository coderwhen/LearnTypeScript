# TypeScript配置文件

## 文件相关选项

### 是否编译的文件或目录

``` js
{
    // 需要编译的文件路径
    "files": [
      "src/a.ts"
    ],
    // 需要编译的文件或文件夹路径
    "include": [
      "src"
    ],
    // 需要排除的文件或文件夹路径
    "exclude": [
      "src/lib"
    ]
    // 以上选项会最终会合并然后生成最终需要编译的文件
}
```

### 配置合并

``` js
// tsconfig.base.json
{
    // 需要编译的文件路径
    "files": [
        "src/a.ts"
    ],
    // 需要编译的文件或文件夹路径
    "include": [
        "src"
    ],
    // 需要排除的文件或文件夹路径
    "exclude": [
        "src/lib"
    ]
}

// tsconfig.json
{
  // 导入配置
  "extends": "./tsconfig.base",
  // 会与以上配置进行覆盖
  "exclude": [],
  // 保存文件后自动编译（vscode不支持）
  "compileOnSave": true
}
```

## 文件编译选项

### 配置文件

```js
{
  "include": [
    "src"
  ],
  "compilerOptions": {
    // "incremental": true,      // 增量编译
    // "tsBuildInfoFile": "./buildfile",    // 增量编译文件的存储位置
    // "diagnostics": true,       // 打印诊断信息

    // "target": "es5",            // 目标语言的版本
    // "module": "amd",            // 生成代码的模块标准
    // "outFile": "./app.js",      // 将多个相互依赖的文件生成一个文件吗，可以用在 AMD 模块中
    
    // "lib": ["DOM","es5","scripthost","es2019.Array"],            // TS 需要引用的库，及生命文件，es5 默认 "dom", "es5", "scripthost"
    
    // "allowJs": true,              // 允许编译 JS 文件 （.js .jsx）
    // "checkJs": true,              // 允许在 JS 文件中报错 通常与 allowJS 一起使用
    // "outDir": "./out",            // 指定输出目录
    // "rootDir": "./src",           // 指定输入目录

    // "declaration": true,             // 生成声明文件
    // "declarationDir": "./d",         // 声明文件路径
    // "emitDeclarationOnly": true,     // 只生成声明文件
    // "sourceMap": true,               // 生成目标文件的 sourceMap
    // "inlineSourceMap": true,         // 生成目标文件的 inline SourceMap
    // "declarationMap": true,          // 生成声明文件的 sourceMap
    // "typeRoots": [],                 // 声明文件目录, 默认 node_modules/@types
    // "types": [],                     // 声明文件包
    
    // "removeComments": true,          // 删除注释
    
    // "noEmit": true,                  // 不输出文件
    // "noEmitOnError": true,           // 发生错误时不输出文件
    
    // "noEmitHelpers": true,           // 不生产 helper 函数, 需要而外安装 ts-helpers
    // "importHelpers": true,           // 通过 tslib 引入 helper 函数，文件必须是模块

    // "downlevelIteration": true,      // 降级遍历器的实现
    
    // "strict": true,                  // 开启所有严格的类型检查
    // "alwaysStrict": true,            // 在代码中注入 "use strict";
    // "noImplicitAny": false,          // 不允许隐式的 any 类型
    // "strictNullChecks": false,       // 不允许把 null, undefined 赋值给其他类型变量
    // "strictFunctionTypes": false,       // 不允许函数参数双向协变
    // "strictPropertyInitialization": false,// 类的实例属性必须初始化
    // "strictBindCallApply": true,       // 严格的 bind/call/apply 检查
    // "noImplicitThis": true,            // 不允许 this 有隐式的 any 类型    
  
    // "noUnusedLocals": true,            // 检查值只声明, 未使用的局部变量
    // "noUnusedParameters": true,        // 检查未使用的函数参数
    // "noFallthroughCasesInSwitch": true,// 防止 switch 语句贯穿

    // "esModuleInterop": true,           // 允许 export = 导出, 由import from 导入
    // "allowUmdGlobalAccess": true,      // 允许在模块中范文 UMD 全局变量
    // "moduleResolution": "node",        // 模块解析策略
    // "baseUrl": "./",                   // 解析非相对模块的基地址
    // "paths": {                         // 路径映射，相对于 baseUrl
      // "jquery": ["node_modules/jquery/dist/jquery.slim.min.js"]
    // },
    // "rootDirs": ["src","out"],         // 将多个目录放在一个虚拟目录下，用于运行时
    
    // "listEmittedFiles": true,          // 打印输出的文件
    // "listFiles": true,                 // 打印编译的文件（包括引用的声明文件）
  }
}
```

### 代码

``` ts
let hello: string = 'hello TypeScript';
console.log(hello);

// importHelpers
// class A {}
// class B extends A {}

// export = B

// downlevelIteration
// let a = [1, 2, 3]
// let b = [1, ...a]

// strictBindCallApply
// function add(x: number, y: number) {
//     return x + y
// }
// add.call(undefined, 1, "2")

// noImplicitThis
// class A {
//     a: number = 1
//     getA() {
//         return () => {
//             console.log(this.a)
//         }
//     }
// }
// let a = new A().getA()()

// rootDirs
// import {util} from './util'
```

## 项目引用

### 说明

``` 
当项目多的话，需要抽离项目。
以便于其他项目引用。
```

### 建立项目

`1` 新建多个项目
`2` 确定依赖关系
`3` 添加依赖

### 添加引用

``` js
// tsconfig.json 基本设置
{
    "compilerOptions": {
        // 转换至目标语言
        "target": "es5",
        // 模块标准
        "module": "commonjs",
        // 开启严格模式
        "strict": true,
        // 是否能被引用
        "composite": true,
        // 生成声明文件
        "declaration": true
    }
}
// 一下文件均是对应项目的tsconfig.json
// client
{
    // 扩展配置 上方基本配置
    "extends": "../../tsconfig.json",
    "compilerOptions": {
        // 输出文件路径
        "outDir": "../../dist/client"
    },
    // 项目引用
    "references": [
      // 引用的项目
      {"path": "../common"}
    ]
}
// server
{
    "extends": "../../tsconfig.json",
    "compilerOptions": {
        "outDir": "../../dist/server"
    },
    "references": [
        {
            "path": "../common"
        }
    ]
}
// common
{
    "extends": "../tsconfig.json",
    "compilerOptions": {
        "outDir": "../dist/test"
    },
    "references": [
        {"path": "../client"},
        {"path": "../server"}
    ]
}
```
### 编译项目
```
tsc -b [项目路径]
or
tsc --build [项目路径]
```
