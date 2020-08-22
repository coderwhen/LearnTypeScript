/**
 * 对象类型接口
 */
interface List {
    // 只读属性
    readonly id: number;
    name: string;
    // 表示可以接收任意所以类型的
    [x: string]: any;
    // 可选参数表示可以有也可以没有 
    age?: number;
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach(item => {
        // item.id = 1 只读属性 报错
        item.age && console.log(item.age)
        console.log(item)
    })
}
let result = {
    data: [
        { id: 1, name: 'A' },
        { id: 1, name: 'B', b: "", age: 1 }
    ]
}
render(result)

interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names {
    [x: string]: string;
    [y: number]: string;
}
/**
 * 函数接口
 */
// let add: (x: number, y: number) => number

// interface Add {
//     (x: number, y: number): number
// }

type Add = (x: number, y: number) => number
let add: Add = (a, b) => a + b
/**
 * 混合类型接口
 */
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}
function getLib() {
    let lib: Lib = (() => { }) as Lib;
    lib.version = '1.0';
    lib.doSomething = () => { }
    return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
