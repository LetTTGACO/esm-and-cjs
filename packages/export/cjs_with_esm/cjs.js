// module.exports commonjs in commonjs

// CJS 变量导出
const cjsVar = "cjsVar----cjs_with_esm:module.exports"

// CJS 函数导出
function cjsFn() {
  console.log("cjsFn", "----cjs_with_esm:module.exports")
  return "cjsFn----cjs_with_esm:module.exports"
}
// CJS 类导出
class CjsClass {
  cjsClassFn() {
    console.log("cjsClassFn", "----cjs_with_esm:module.exports")
    return "cjsClassFn----cjs_with_esm:module.exports"
  }
}

function cjsFnDefault() {
  console.log("cjsFnDefault", "----cjs_with_esm:module.exports")
  return "cjsFnDefault----cjs_with_esm:module.exports"
}

// 作为npm库来说
// 如果只有一个入口函数/对象。推荐使用 默认导出 导出一个函数
// 如果有多个入口函数/对象，推荐使用 选择导出 导出多个函数

// 如果既有主入口函数/对象需要导出，又有其他函数需要导出，推荐使用如下方式来导出
// 1. 用户可以直接使用 const cjsFnDefault = require('./module_exports') 来获取默认导出的函数
module.exports = cjsFnDefault
// 2. 这里也加一个 default 是为了兼容默认导出。当用户需要既使用默认函数，又使用其他函数时，可以使用 const { default: cjsFnDefault, cjsFn } = require('./module_exports') 更方便地获取
module.exports.default = cjsFnDefault
// 3. 选择导出其他函数
module.exports.cjsVar = cjsVar
module.exports.cjsFn = cjsFn
module.exports.CjsClass = CjsClass
