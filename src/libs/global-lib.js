/**
 * 这是一个全局的类库
 * @param {*} options 
 */
function globalLib(options) {
    console.log(options)
}

globalLib.version = '1.0.0'

globalLib.doSomething = function() {
    console.log('globalLib do semething')
}