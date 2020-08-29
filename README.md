# TypeScript高级类型

## 交叉类型
### 说明
```
具有多种类型的所有成员
用于对象的混入
```
### 代码
```ts
interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}
interface TestInterface {
    log(): void
}
/**
 * pet为交叉类型 (取类型的并集)
 * pet具有DogInterface和CatInterface所有的属性和方法
 */
let pet: DogInterface & CatInterface & TestInterface = {
    run() { },
    jump() { },
    log() { }
}
```
## 字面量联合类型
### 说明
```
已生命好的类型常量
```
### 代码
```ts
// 字面量类型
// type为类型取别名
type str = 'a' | 'b' | 'c'
// b只可以是字符串a|b|c
let b: str = 'a'
// c只可以是数字1|2|3
type num = 1 | 2 | 3
let c: num = 3
type obj = { kind: 'a', name: 'aa' } | { kind: 'b', name: 'bb' } | { kind: 'c', name: 'cc' }
let d: obj = { kind: 'a', name: 'aa' }
```
## 联合类型
### 说明
```
多种类型的联合起来，需要对类型做保护，否则无法使用
```
### 代码
```ts
// 联合类型
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}
interface Circle {
    kind: 'circle',
    r: number
}
/**
 * type类型别名 联合类型
 */
type Shape = Square | Rectangle | Circle
function area(s: Shape): number {
    switch (s.kind) {
        case "square":
            // Square类型区块
            return s.size * s.size;
        case "rectangle":
            // Rectangle类型区块
            return s.height * s.width;
        case "circle":
            // Circle类型区块
            return Math.PI * s.r ** 2;
        default:
            // never区块
            console.log(s)
            return ((e: never) => { throw new Error(e) })(s)
    }
}
console.log(area({ kind: 'circle', r: 1 }))
```
## 索引类型
### 说明
```
keyof T将类型T变成属性的联合类型
如：
// keyof T
interface Obj {
    a: number,
    b: string
}
// a|b联合字面量类型
let key: keyof Obj = 'b'
console.log(key)
// T[k]
let vlaue: Obj['a'] = 2 //value为Obj['a']类型number
```
### 代码
```ts
// 索引类型
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d() {
        console.log(this)
    },
    e: 'e'
}
/**
 * 读取目标对象身上对象的属性值
 * T 为 目标对象的类型
 * K extends keyof T 表示K 目前为T对象上的属性的数据类型
 * T[K][] 表示 目标对象身上的属性的数据类型数组的联合类型
 * 当前T中包含的数据类型有number|string|(()=>void无参数无返回值的函数)所以T[K][]类型为 (number|string|(()=>void))[]联合类型数组
 * @param obj 目标对象
 * @param keys 目标对象的属性
 */
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map((key) => obj[key])
}
console.log(
    getValues(obj, ['a', 'b', 'c', 'd', 'e']) // 属性类型的(number|string|(()=>void))[]联合类型数组
)

// keyof T
interface Obj {
    a: number,
    b: string
}
// a|b联合字面量类型
let key: keyof Obj = 'b'
console.log(key)
// T[k]
let vlaue: Obj['a'] = 2
```
## 映射类型
### 说明
```
将已有的类型映射成另一种类型
interface Obj {
    a: number;
    b: string;
    c: boolean;
}
// 将Obj接口映射成成员只读接口
type ReadonlyObj = Readonly<Obj>
```
### 代码
```ts
// 映射类型
interface Obj {
    a: number;
    b: string;
    c: boolean;
}
// 将Obj接口映射成成员只读接口
type ReadonlyObj = Readonly<Obj>
// 将Obj接口映射成成员可选接口
type PartialObj = Partial<Obj>
// 将Obj接口指定成员映射成新的接口
type PickObj = Pick<Obj, 'a' | 'b'>

type RecordObj = Record<'x' | 'y', Obj>
```
## 条件类型
### 说明
```
根据条件得出相应的类型
```
### 代码
```ts
// 条件类型 
//T extends U ? X : Y
type TypeName<T> =
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends Function ? 'function' :
    'object';

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extdents U ? X : Y)
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
// a | b | c Diff a | e
// a | e = a true => never          pass         a 能给 a | e 返回 never 不保留
// a | e = b false => T(b) T4 (b)
// a | e = c false => T(c) T4 (b | c)  
// never | 'b' | 'c'    不保留 never
// 'b' | 'c'

// 与上T4 一致 这里只是进行拆分然后联合
type T5 =
    Diff<'a', 'a' | 'e'> |
    Diff<'b', 'a' | 'e'> |
    Diff<'c', 'a' | 'e'>

type NotNull<T> = Diff<T, undefined | null>
type T6 = NotNull<string | number | undefined | null>

// Exclude<T,U> 找到不同的类型
// NotNullable<T> 过滤掉 undefined | null
// Extract<T,U> 找到相同的类型

type T7 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

type T8 = ReturnType<() => string>
```
## 代码位置
```ts
import './cross' //交叉类型
import './unite' //联合类型
import './map'   //映射类型
import './indexes'//索引类型
import './condition' //条件类型
```