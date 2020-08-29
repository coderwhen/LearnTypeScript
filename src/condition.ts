// 条件类型 
//T extends U ? X : Y
type TypeName<T> =
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends Function ? 'function' :
    'object';

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extdents U ? X : Y)
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
// a | b | c Diff a | e
// a | e = a true => never          pass         a 能给 a | e 返回 never 不保留
// a | e = b false => T(b) T4 (b)
// a | e = c false => T(c) T4 (b | c)  
// never | 'b' | 'c'    不保留 never
// 'b' | 'c'

// 与上T4 一致 这里只是进行拆分然后联合
type T5 =
    Diff<'a', 'a' | 'e'> |
    Diff<'b', 'a' | 'e'> |
    Diff<'c', 'a' | 'e'>

type NotNull<T> = Diff<T, undefined | null>
type T6 = NotNull<string | number | undefined | null>

// Exclude<T,U> 找到不同的类型
// NotNullable<T> 过滤掉 undefined | null
// Extract<T,U> 找到相同的类型
type T7 = Exclude<'a' | 'b' | 'c', 'a' | 'e'>

type T8 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

type T9 = ReturnType<() => string>