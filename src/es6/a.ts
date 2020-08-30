export const a = '3'     // 导出变量a
export interface P {     // 导出ts接口
    x: number;
    y: number;
}
export { str as Str } from './b'   // 导入b模块重命名在导出
export default function (str: string) {   // 默认导出
    console.log('Im\'s default' + str)
}