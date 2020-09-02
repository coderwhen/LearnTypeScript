let hello: string = 'hello TypeScript';
console.log(hello);


// importHelpers
// class A {}
// class B extends A {}

// export = B

// downlevelIteration
// let a = [1, 2, 3]
// let b = [1, ...a]

// strictBindCallApply
// function add(x: number, y: number) {
//     return x + y
// }
// add.call(undefined, 1, "2")

// noImplicitThis
// class A {
//     a: number = 1
//     getA() {
//         return () => {
//             console.log(this.a)
//         }
//     }
// }
// let a = new A().getA()()

// rootDirs
// import {util} from './util'