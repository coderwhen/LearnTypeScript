# TypeScript枚举类型
```ts

// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role, Role.Reporter)
// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}
console.log(Message)

// 异构枚举
enum Answer {
    N,
    Y = 'Yes'
}
console.log(Answer)

// 枚举成员
enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 3,
    // computed 必须赋值
    d = Math.random(),
    e = '123'.length
}
console.log(Char)

// 常量枚举
// 不会进行编译
const enum Manth {
    Jan,
    Feb,
    Mar
}
// 获取常量枚举
let month = [Manth.Jan, Manth.Feb, Manth.Mar]
console.log(month)

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banner' }

let e: E = 3
let f: F = 3

let e1: E.a = 1
let e2: E.b
let e3: E.a = 1
// e1 === e2 false
// e1 === e3 true

let g1: G = G.a
let g2: G.a = G.a


```