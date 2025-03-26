// module.exports commonjs in commonjs

// CJS 变量导出
const cjsVar = "cjsVar----in_cjs_use_cjs_inner:module.exports"

// CJS 函数导出
function cjsFn() {
  console.log("cjsFn", "----in_cjs_use_cjs_inner:module.exports")
  return "cjsFn----in_cjs_use_cjs_inner:module.exports"
}
// CJS 类导出
class CjsClass {
  cjsClassFn() {
    console.log("cjsClassFn", "----in_cjs_use_cjs_inner:module.exports")
    return "cjsClassFn----in_cjs_use_cjs_inner:module.exports"
  }
}
function cjsFnDefault() {
  console.log("cjsFnDefault", "----in_cjs_use_cjs_inner:exports")
  return "cjsFnDefault----in_cjs_use_cjs_inner:exports"
}


module.exports = {
  default: cjsFnDefault, // 这种也是默认导出，不过在使用时需要使用default来获取，例如：const { default: cjsFnDefault } = require('./module_exports')
  cjsVar,
  cjsFn,
  CjsClass,
}
