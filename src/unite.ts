// 字面量联合类型
// type为类型取别名
type str = 'a' | 'b' | 'c'
// b只可以是字符串a|b|c
let b: str = 'a'
// c只可以是数字1|2|3
type num = 1 | 2 | 3
let c: num = 3
type obj = { kind: 'a', name: 'aa' } | { kind: 'b', name: 'bb' } | { kind: 'c', name: 'cc' }
let d: obj = { kind: 'a', name: 'aa' }

class Dog implements DogInterface {
    run() { }
    eat() { }
}
class Cat implements CatInterface {
    jump() { }
    eat() { }
}
enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog() : new Cat()
    pet.eat()// 类型未确定只能访问联合类型的交集成员
    if ('run' in pet) {
        // pet 目前为 Dog类型区块
        console.log(pet)
    } else {
        // pet 目前为 Cat类型区块
        console.log(pet)
    }
    return pet
}
getPet(Master.Boy)

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
            console.log(s)
            return ((e: never) => { throw new Error(e) })(s)
    }
}
console.log(area({ kind: 'circle', r: 1 }))
export default {}