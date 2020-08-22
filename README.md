# TypeScript接口与类关系

```ts
// 接口只能约束类的共有成员
interface Human {
  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  // 以下是接口约束的成员对象
  name: string;
  eat(): void {
    console.log('Asian eat')
  }
  // 可以实现自己的方法
  exit(): void {
    console.log('Asian exit')
  }
}

// Human接口接收Asian实体
let asian: Human = new Asian('zyc')
// 只能点出接口上定义的属性与方法
asian.eat();
asian.name;
// 通过 as 关键字进行类型转换就可以点出Asian本身的方法
(asian as Asian).exit();
// 通过 <Asian>进行类型转换就可以点出Asian本身的方法
(<Asian>asian).exit();

// 接口直接相互继承
interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man, Child {

}

// 实例接口
let boy: Boy = {
  name: '',
  run() { },
  eat() { },
  cry() { }
}
console.log(boy)

class Auto {
  state: number = 1;
  private state2 = 0;
}

// 将Auto中的所有成员抽象成接口
interface AutoInterface extends Auto {
  // state: number = 1;
  // priveate state2 = 0;
}

// c不是 Auto 的派生类所以就不能继承接口
// class C implements AutoInterface {
//   state: number = 0;
// }

// 继承Auto Auto中已实现AutoInterface的约束所以不用继续实现接口
class Bus extends Auto implements AutoInterface {

}

```

![image-20200823011440746](.\image-20200823011440746.png)

