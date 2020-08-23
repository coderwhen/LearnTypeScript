// UserInfo对象接口
interface UserInfo {
  id: number;
  uname: string;
  upwd: string;
}

interface Id {
  id: number
}

// class 泛型时点出对应属性
// 泛型需要继承接口
// 进而约束泛型
class TestUser<T extends Id> {
  run(value: T) {
    console.log(value.id);
  }
}

/**
 * 基本服务接口 抽象基本方法
 */
interface IBaseService<T> {
  data: T[]; // 用于存储数据
  LoadEntities(where: Function): T[]
  AddEntity(entity: T): T;
  DeleteEntity(entity: T): boolean;
  EditEntity(entity: T): boolean;
}

/**
 * 用户服务接口 抽象自己的方法
 */
interface IUserInfoService extends IBaseService<UserInfo> {
  Login(entity: UserInfo): boolean
}

/**
 * 构造一个过滤函数接口
 */
interface Filter<T> {
  (value: T, index: number, array: T[]): boolean
}

/**
 * 基本服务类 完成基本接口
 */
class BaseService<T extends Id> {
  data: T[] = []
  LoadEntities(where: Filter<T>): T[] {
    return this.data.filter(where);
  }
  AddEntity(entity: T): T {
    this.data.push(entity)
    return entity
  }
  DeleteEntity(entity: T): boolean {
    let index = this.data.findIndex((item) => entity.id === item.id);
    // 防止index = -1 删除了最后一个元素
    if (index === -1) return false;
    return this.data.splice(index, 1).length > 0;
  }
  EditEntity(entity: T): boolean {
    let index = this.data.findIndex(item => entity.id === item.id);
    if (index === -1) return false;
    this.data.splice(index, 1, entity)
    return true;
  }
}

/**
 * 继承IUserInfoService该接口富有基本的方法与自身方法  
 */
class UserInfoService extends BaseService<UserInfo> implements IUserInfoService {
  Login(entity: UserInfo): boolean {
    let value = this.data.find((item) => item.uname === entity.uname && item.upwd === entity.upwd);
    return value !== undefined;
  }
}

// 实例化一个接口对象
let userInfoService: IUserInfoService = new UserInfoService();

// 构造用户数据
for (let i = 0; i < 10; i++) {
  let random = Number.parseInt((Math.random() * 100).toFixed(0))
  // 调用基本方法中的添加方法为构建用户数据
  userInfoService.AddEntity({
    id: random,
    uname: `zyc${random * random}`,
    upwd: 'zychhazl99' + random
  })
}

// 打印对象接口   以及用户数据
console.log(userInfoService, userInfoService.LoadEntities(() => true));


// 获取页面节点构建登录环境
let node = document.getElementById("btn")

let txts = document.querySelectorAll("input")
node?.addEventListener('click', function () {
  const id = Number.parseInt(txts[0].value);
  const uname = txts[1].value;
  const upwd = txts[2].value;
  // 调用自身的登录方法
  const result = userInfoService.EditEntity({
    id,
    uname,
    upwd
  })
  console.log(userInfoService.LoadEntities(() => true))
  alert(result ? "删除成功" : "删除失败");
})

// 打印编号以1结尾的
let where: Filter<UserInfo> = (item, index, arr) => item.uname.endsWith('1')
console.log(userInfoService.LoadEntities(where))
