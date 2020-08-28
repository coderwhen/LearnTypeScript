# TypeScript类型保护

## 说明
```
一个变量在运行时确保这个对象的类型正确
确保变量能点出对应属性或者方法 否则容易调用对象上不存在的属性或方法
提高程序的安全性
```

## 代码
```ts
const enum Type { Strong, Week }
class Java {
    helloJava() {
        console.log('Hello Java')
    }
    java: any = 1
}

class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript')
    }
    javascript: any = 2
}
/**
 * 判断lang是否为Java的实例
 * @param lang 实例类
 * @returns 是否为Java类实例
 */
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    console.log(lang)
    // instanceof 一个类是否为子类或者同类
    if (lang instanceof Java) {
        // lang 为 Java实例
        lang.helloJava()
    } else {
        // lang 为 JavaScript实例
        lang.helloJavaScript()
    }

    // in 判断一个属性是否为该对象上的属性
    if ('java' in lang) {
        // lang 为 Java实例
        lang.helloJava()
    } else {
        // lang 为 JavaScript实例
        lang.helloJavaScript()
    }

    // typeof 返回一个数据类型字符串
    if (typeof x === 'string') {
        //x 为string    
    } else {
        //x 为number
    }

    // 自定义函数返回是否为Java实例
    if (isJava(lang)) {
        // lang 为 Java实例
        lang.helloJava()
    } else {
        // lang 为 JavaScript实例
        lang.helloJavaScript()
    }
    return lang;
}
getLanguage(Type.Week, 1)
```