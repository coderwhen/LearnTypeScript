// 索引类型
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d() {
        console.log(this)
    },
    e: 'e'
}
/**
 * 读取目标对象身上对象的属性值
 * T 为 目标对象的类型
 * K extends keyof T 表示K 目前为T对象上的属性的数据类型
 * T[K][] 表示 目标对象身上的属性的数据类型数组的联合类型
 * 当前T中包含的数据类型有number|string|(()=>void无参数无返回值的函数)所以T[K][]类型为 (number|string|(()=>void))[]联合类型数组
 * @param obj 目标对象
 * @param keys 目标对象的属性
 */
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map((key) => obj[key])
}
console.log(
    getValues(obj, ['a', 'b', 'c', 'd', 'e']) // 属性类型的(number|string|(()=>void))[]联合类型数组
)

// keyof T
interface Obj {
    a: number,
    b: string
}
// a|b联合字面量类型
let key: keyof Obj = 'b'
console.log(key)
// T[k]
let vlaue: Obj['a'] = 2
