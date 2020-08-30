// 引用部分ts文件
/// <reference path="a.ts" />

/**
 * Shape命名空间
 */
namespace Shape {
    const pi = Math.PI
    /**
     * 求圆的面积
     * @param r 半径
     */
    export function cricle(r: number) {
        return pi * r ** 2
    }
}

// 类型别名
import square = Shape.square
import cricle = Shape.cricle
// 调用命名空间的方法
console.log(square(3))
console.log(cricle(3))
