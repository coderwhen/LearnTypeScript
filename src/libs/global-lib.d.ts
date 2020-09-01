// 定义一个顶头的声明函数
declare function globalLib(options: globalLib.Options): void;
// 使用声明合并为函数添加对应参数
declare namespace globalLib {
    const vresion: string
    function doSomething(): void
    interface Options {
        [key: string]: any
    }
}
export = globalLib