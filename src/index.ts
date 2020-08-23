/**
 * 泛型方法
 * T为泛型
 * @param value 打印的值
 */
function log<T>(value: T): T {
  console.log(value);
  return value;
}

// 泛型为string[] 参数就需要传入数组
log<string[]>(['a', 'b']);
// 不传入泛型 只传入参数   类型推断会推断当前方法返回类型为传入的参数
log(['a', 'b', 'c']);
log<number>(2);

// type 关键字定义方法的抽象 
// 并为方法添加泛型 泛型可以为多个 例如
// type Log = <T,S>(value: T,value1: S) => T
type Log = <T>(value: T) => T
let myLog: Log = log
myLog<string>('   ')

// interface 关键字定义泛型方法接口  并为方法添加泛型 泛型可以为多个
interface ILog {
  <T>(value: T): T
}

let myILog1: ILog = log
myILog1(123123)

// interface 关键字定义泛型接口  并为泛型接口添加默认类型
interface MyLog<T = string> {
  (value: T): T
}

let myILog2: MyLog<number> = log
myILog2(2)
