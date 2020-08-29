// 交叉类型
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