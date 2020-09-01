import globalLib from './global-lib'
globalLib({ x: 1 })
globalLib.doSomething()

import moduleLib from './module-lib'
moduleLib(moduleLib)

import umdLib from './umd-lib'
umdLib.doSomething()

import m from 'moment'
declare module 'moment' {
    export function myFunction(): void
}
m.myFunction = () => { }
