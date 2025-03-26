// exports commonjs in commonjs

// CJS 变量导出
const cjsVar = "cjsVar----cjs:exports"

// CJS 函数导出
function cjsFn() {
  console.log("cjsFn", "----cjs:exports")
  return "cjsFn----cjs:exports"
}
// CJS 类导出
class CjsClass {
  cjsClassFn() {
    console.log("cjsClassFn", "----cjs:exports")
    return "cjsClassFn----cjs:exports"
  }
}

function cjsFnDefault() {
  console.log("cjsFnDefault", "----cjs:exports")
  return "cjsFnDefault----cjs:exports"
}


// exports 默认导出，当用户使用时需要通过 const { default: cjsFnDefault } = require('./exports') 来获取
exports.default = cjsFnDefault
exports.cjsVar = cjsVar
exports.cjsFn = cjsFn
exports.CjsClass = CjsClass
// 不能使用 exports = {} 来导出，exports 是一个指向 module.exports 的引用。当你直接对 exports 赋值时，实际上只是改变了 exports 这个局部变量的指向，而并没有真正修改模块的导出内容。


// exports 没有直接的默认导出，所以当需要使用默认导出时，更推荐使用 module.exports
