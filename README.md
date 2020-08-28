# TypeScript类型兼容性
## 说明
```
两种类型可以兼容
提高程序的灵活性
```
## 口诀
```

结构之间兼容：成员少的兼容成员多的
函数之间兼容：参数多的兼容参数少的

```
## 代码
```ts
/**
 * 类型兼容
 * x 兼容 Y: X（目标类型）= Y（源类型）
 */
let s: string = 'a';
// "strictNullChecks": false,  
s = null; //可以执行 所以null是string子类型

// 接口兼容性
interface X {
    a: any;
    b: any;
}
interface Y {
    a: any;
    b: any;
    c: any;
}
let x: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }
x = y
// y = x error
// 如果Y接口具有X接口所有的属性则
// 成员少的兼容成员多的
// y 兼容 x

// 函数兼容性
type Handle = (a: number, b: number) => void
function hof(handle: Handle) {
    return handle
}

// 1)参数个数
let handle1 = (a: number) => { }
hof(handle1)
let handle2 = (a: number, b: number, c: number) => { }
// hof(handle2) error 参数个数不同

// 可选参数和剩余参数
let a = (p1: number, p2: number) => { }
let b = (p1?: number, p2?: number) => { }
let c = (...args: number[]) => { }
a = b
a = c
b = a
b = c
c = a
c = b

// 2)参数类型
let handle3 = (a: string) => { }
// hof(handle3) error 类型不兼容

interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => { }
let p2d = (point: Point2D) => { }
// 参数多的兼容参数少的
p3d = p2d //
// p2d = p3d error: 参数不兼容 
//"strictFunctionTypes": false 即可兼容

// 3) 返回值类型
let f = () => ({ name: 'zyc' });
let g = () => ({ name: 'zyc', location: 'Zhuzhou' })
f = g
// g = f error: 返回类型不兼容

// 重载
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any { }

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple

// 类的兼容
class A {
    constructor(p: number, q: number) { }
    id: number = 1
    private name: string = ''
}
class B {
    constructor(p: number) { }
    id: number = 2
}
let aClass: A = new A(1, 2)
let bClass: B = new B(1)
// aClass = bClass
bClass = aClass

class CClass extends A {
    constructor() {
        super(1, 2)
    }
}
// 父类与子类相互兼容
let cClass: CClass = new CClass()
aClass = cClass
cClass = aClass

// 泛型的兼容性
interface Empty<T> {
    value: T
}
let obj1: Empty<number> = {
    value: 1
}
let obj2: Empty<string> = {
    value: '1'
}
// 泛型T如果未被接口成员使用是兼容的
// obj1 = obj2
// obj2 = obj1
let log1 = <T>(x: T): T => {
    console.log(x)
    return x
}
let log2 = <U>(y: U): U => {
    console.log(y)
    return y
}
log1 = log2

```