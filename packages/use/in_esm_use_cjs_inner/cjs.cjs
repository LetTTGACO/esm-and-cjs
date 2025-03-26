// module.exports commonjs in esm
// NOTE:
//  在 esm 项目中必须使用.cjs 后缀的文件来使用 commonjs 模块

// CJS 变量导出
const cjsVar = "cjsVar----in_esm_use_cjs_inner:module.exports"

// CJS 函数导出
function cjsFn() {
  console.log("cjsFn", "----in_esm_use_cjs_inner:module.exports")
  return "cjsFn----in_esm_use_cjs_inner:module.exports"
}
// CJS 类导出
class CjsClass {
  cjsClassFn() {
    console.log("cjsClassFn", "----in_esm_use_cjs_inner:module.exports")
    return "cjsClassFn----in_esm_use_cjs_inner:module.exports"
  }
}

function cjsFnDefault() {
  console.log("cjsFnDefault", "----in_esm_use_cjs_inner:module.exports")
  return "cjsFnDefault----in_esm_use_cjs_inner:module.exports"
}


module.exports = cjsFnDefault
module.exports.default = cjsFnDefault
module.exports.cjsVar = cjsVar
module.exports.cjsFn = cjsFn
module.exports.CjsClass = CjsClass
