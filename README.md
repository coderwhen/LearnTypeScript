# TypeScript函数的定义及重载

```ts
// 函数定义
function add1(x: number, y: number) {
    return x + y;
}

// 定义变量的类型并接收相应类型
let add2: (x: number, y: number) => number = add1;
// 以下未实现接口
type add3 = (x: number, y: number) => number

interface add4 {
    (x: number, y: number): number
}

add1(1, 2)

// add1(1,2,3) 报错不可以传递不同的参数个数

// 可选参数  y? 表示 y可选  如果没传递则为 undefined
function add5(x: number, y?: number) {
    return y ? x + y : x;
}
add5(1)
add5(1, 2)

// 默认值参数
function add6(x: number, y: number = 0, z: number, q: number = 1) {
    return x + y + z + q;
}

// 如果默认值参数在必选参数之前需要传递 必选参数之后不需要传递 
console.log(add6(1, undefined, 3))

// 剩余参数 rest为剩余参数
function add7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur)
}
// 1为x 2-10为rest
console.log(add7(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

/**
 * 函数重载
 */
// 先定义重载列表 最容易匹配的需要放在前面
/**
 * 求和
 * @param rest 数字数组
 */
function add8(...rest: number[]): number;
/**
 * 拼接
 * @param rest 字符串数组
 */
function add8(...rest: string[]): string;
// 实现重载方法
function add8(...rest: any[]): any {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join('')
    }
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur)
    }
    return "any"
}
console.log(add8(1, 2, 3))
console.log(add8('a', 'b', 'c'))

```