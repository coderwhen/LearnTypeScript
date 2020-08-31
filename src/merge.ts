// 同名接口成员进行合并
interface A {
    x: number
    // y: string
    foo(bar: number): number // 3
    foo(bar: 'a'): number
}
interface A {
    y: number
    foo(bar: string): string      // 1
    foo(bar: number[]): number[]  // 2
    foo(bar: 'b'): number
}
// a变量需要实现上面两个接口的实现
let a: A = {
    x: 200,
    y: 200,
    foo(bar: any) {
        return bar
    }
}
console.log(a)

// 函数与命名空间进行合并 函数必须在命名空间之前
function Lib() { }
namespace Lib {
    export let version = '1.0'
}
console.log({Lib}, Lib.version)

// 类与命名空间进行合并 类必须在命名空间之前
class C { }
namespace C {
    export let state = 1
}
console.log(C, C.state)

// 枚举与命名空间进行合并 无要求
enum Color {
    Red,
    Yellow,
    Bule
}
namespace Color {
    export function min() {
        console.log('asdasd')
        return new Date().getTime()
    }
}
console.log(Color,Color.min())
