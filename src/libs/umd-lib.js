(function (root, factoy) {
    if (typeof define === 'function' && define.amd) {
        define(factoy);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factoy()
    } else {
        root.umdLib = factoy()
    }
}(this, () => ({
    version: '1.0.0',
    doSomething() {
        console.log("umdLib do something")
    }
})));