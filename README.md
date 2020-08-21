# TypeScript基本数据类型
```ts
// 原始类型
// let 变量名: 数据类型 = 对应类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'
console.log(bool)
console.log(num)
console.log(str)

// 数组
// let 数组名：数据类型[] = [对应类型,对应类型] 只能接收对应的数据类型
let arr1: number[] = [1, 2, 3]
// let 数组名: Array(泛型接口)<数据类型> = [对应类型,对应类型] 只能接收对应的数据类型
let arr2: Array<number> = [1, 2, 3]
// 联合数组类型 let 数组名: Array<数据类型1,,数据类型2> = [数据类型1,数据类型2] 只能接收数据类型1或者数据类型2
let arr3: Array<number | string> = [1, 2, 3, '123']
console.log(arr1)
console.log(arr2)
console.log(arr3)

// 元组
// 联合数据类型 确定数据个数及数据类型
// let 元组名: [数据类型1,数据类型2] = [数据类型1,数据类型2]
let tuple: [number, string] = [0, '1']
tuple.push(2)// 虽然可以push但是元组会对数组越界做出检查
console.log(tuple)

// 函数
// 方法名 = (参数列表: 参数名1:数据类型, 参数名2:数据类型 ):返回类型(可不写,会对返回的类型作为该类型) => x + y 返回number 
let add = (x: number, y: number):number => x + y
// 方法的抽象实现类似于抽象接口 需实现该方法
let compute: (x: number, y: number) => number
compute = (x, y) => x + y
console.log(add(1, 2))

// 对象
// 针对对象做出属性的名称及个数类型做出约束
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1)
console.log(s2)

// undefined, null
let un: undefined = undefined
let nu: null = null

// void
// 无返回值
let noReturn = () => { void 0 }

// any
// 兼容js任何类型 ts中不推荐使用
let x
x = 1
x = {}
x = []
x = () => {}

// never
// 函数抛出异常
let error = () => { 
    throw new Error('error')
}
// 函数进入死循环
let endless = () => {
    while(true) {}
}

```