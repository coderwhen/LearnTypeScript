// 类定义
class Dog {
    /**
     * 加入privte关键字表示该类不能被实例与继承
     * protected表示该类只能被继承
     * @param name 
     */
    constructor(name: string) {
        this.name = name
        // 构造函数中为只读属性legs赋值
        this.legs = 123
    }
    // 实例属性
    public name: string // 公有属性允许任何地方是哟恒
    run() { }
    private pri() { }  // 私有方法只允许该类内部使用
    protected pro() { this.pri() } // 受保护的方法当前类与派生类才能访问
    readonly legs: number = 4 // 只读属性 可以默认赋值与构造函数赋值
    static food: string = 'bones' //静态属性只允许通过类名.静态名调用
}
// 打印Dog类的原型
console.log(Dog.prototype)
// 实例Dog类
let dog = new Dog('wangwang')
console.log(dog)
// dog.pri() 私有的不能被使用
// dog.pro() 受保护的不能被使用

// 调用静态属性
console.log(Dog.food)

// 类继承
class Husky extends Dog {
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
        // this.pri()
        // 调用基类pro方法
        this.pro()
    }
}
console.log(Husky.prototype)
// 类的静态成员也会被派生类继承
console.log(Husky.food)