// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'
console.log(bool)
console.log(num)
console.log(str)

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string> = [1, 2, 3, '123']
console.log(arr1)
console.log(arr2)
console.log(arr3)

// 元组
let tuple: [number, string] = [0, '1']
tuple.push(2)
console.log(tuple)

// 函数
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (x, y) => x + y
console.log(add(1, 2))

// 对象
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
let noReturn = () => { void 0 }

// any
let x
x = 1
x = {}
x = []
x = () => {}

// never
let error = () => { 
    throw new Error('error')
}

let endless = () => {
    while(true) {}
}
