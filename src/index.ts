// a的类型会被ts推断成 number
let a = 1;
// "strictNullChecks": false 数字数组
// "strictNullChecks": true 数字或空数组 
let b = [1, null]

// c为一个数字参数返回数字的函数
let c = (x = 1) => x + 1

// 为文档绑定keydown事件 所以ev为KeyboardEvent类型
document.addEventListener('keydown', (ev) => {
    console.log(ev, ev.key, ev.keyCode)
})

// mousedown ev为MouseEvent类型
document.addEventListener('mousedown', (ev) => {
    console.log(ev, ev.button)
})

interface Foo {
    bar: number
}

// 类型断言 不推荐使用
// 容易造成类型异常
let foo1 = {} as Foo;
// foo1.bar 按接口定义需要是 数字类型
// foo1.bar bar未赋值目前为undefined 如果使用容易造成程序异常
console.log(foo1.bar)

// f002 定义成Foo接口所以必须实现接口内容
// 更安全 不会造成foo2.bar 为undefined
let foo2: Foo = {
    bar: 1
}
console.log(foo2.bar)
// foo.bar = 1
