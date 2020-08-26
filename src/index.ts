/**
 * 对象类型接口 抽象一个对象，这个对象必须满足下面属性
 */

interface List1 {
    // 只读属性
    readonly id: number;
    name: string;
    // 可选参数表示可以有也可以没有 
    age?: number;
}

interface List2 extends List1 {
    // 表示可以让任意字符串索引对象属性
    [x: string]: any;
    // 表示可以让任意数字索引对象属性
    [s: number]: string;
}


// 没有任意类型索引对象属性时 属性不能有多
let listObj1: List1 = {
    id: 123,
    name: 'asda',
    age: 123
    // 1:"" 报错因为List1没有定义数字索引
};
// 有[x: string]: any;这条时必须满足接口定义的类型声明 属性不能有多
let listObj2: List2 = {
    id: 123,
    name: 'asda',
    age: 123,
    asda: "",   // 对应[x: string]: any; 表示任意字符串能索引对象的任意类型属性
    1: ""       // 对应[s: number]: string; 表示任意数字能索引对象的字符串类型属性
};

interface Result {
    data: List1[] //表示改
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

// 任何数字均可索引字符串
// 可以抽象一个只有数字对象作为key的对象
// 也可以抽象数组
interface StringArray {
    [index: number]: string
}
// nums 定义成 由 StringArray 抽象成的由数字索引对象
let nums: StringArray = { 1: "", 2: "" }
// strs 定义成 由 StringArray 抽象成的数组
let strs: StringArray = ['A', 'B']

interface Names {
    [x: string]: string;
    [y: number]: any;
}
/**
 * 函数接口
 */
// 变量预先定义成抽象然后只能赋值成正确的抽象
let add: (x: number, y: number) => number
// 再实现   
// 不实现 编译之后 var add;
add = (x: number, y: number) => x + y
// 接口方式抽象
interface Add1 {
    (x: number, y: number): number
}
// type定义 Add抽象接口 x,y(number)  返回  number
type Add2 = (x: number, y: number) => number
let add1: Add1 = add;
let add2: Add2 = add;
console.log(add(1, 2))
console.log(add1(1, 2))
console.log(add2(1, 2))

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
    lib.doSomething = function () {
        console.log(this.version)
    }
    return lib;
}

// 类似将抽象成对象类
let lib1 = getLib();
lib1();
lib1.doSomething();
