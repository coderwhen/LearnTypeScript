# TypeScript抽象类与多态
```ts

// 抽象类
abstract class Animal {
  eat() {
    console.log('eat')
  }
  // 抽象方法 必须在派生类中实现
  abstract sleep(): void
}
// let animal = new Animal() 抽象类无法被实例

class Dog extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() { }
  sleep() {
    console.log('dog sleep')
  }
}
let dog = new Dog('wangwang')
dog.eat();

class Cat extends Animal {
  sleep() {
    console.log('Cat sleep')
  }
}
let cat = new Cat()
// 将cat与dog都是继承至Animal抽象类
let animals: Animal[] = [dog, cat]
animals.forEach(i => {
  // 会调用派生类的sleep方法
  i.sleep();
})

class WorkFlow {
  step1() {
    // 返回this方便链式调用
    return this;
  }

  step2() {
    return this;
  }
}

new WorkFlow().step1().step2();

class Myflow extends WorkFlow {
  next() {
    return this;
  }
}

// 基类与派生类连环链式
let myflow = new Myflow().next().step1().next()
console.log(myflow)


```