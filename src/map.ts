// 映射类型
interface Obj {
    a: number;
    b: string;
    c: boolean;
}
// 将Obj接口映射成成员只读接口
type ReadonlyObj = Readonly<Obj>
// 将Obj接口映射成成员可选接口
type PartialObj = Partial<Obj>
// 将Obj接口指定成员映射成新的接口
type PickObj = Pick<Obj, 'a' | 'b'>

type RecordObj = Record<'x' | 'y', Obj>