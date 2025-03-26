// module.exports commonjs in esm
// NOTE:
//  在 esm 项目中必须使用.cjs 后缀的文件来使用 commonjs 模块

// CJS 变量导出
const cjsVar = "cjsVar----esm_with_cjs:module.exports"

// CJS 函数导出
function cjsFn() {
  console.log("cjsFn", "----esm_with_cjs:module.exports")
  return "cjsFn----esm_with_cjs:module.exports"
}
// CJS 类导出
class CjsClass {
  cjsClassFn() {
    console.log("cjsClassFn", "----esm_with_cjs:module.exports")
    return "cjsClassFn----esm_with_cjs:module.exports"
  }
}

function cjsFnDefault() {
  console.log("cjsFnDefault", "----esm_with_cjs:module.exports")
  return "cjsFnDefault----esm_with_cjs:module.exports"
}

// CJS 选择导出
module.exports = {
  default: cjsFnDefault, // 这种也是默认导出，选择其一就行
  cjsVar,
  cjsFn,
  CjsClass,
}
// CJS 默认导出
// module.exports.default = cjsFnDefault
