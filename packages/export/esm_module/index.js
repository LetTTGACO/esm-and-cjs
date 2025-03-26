// exports esm in esm

// 变量
const esmVar = "esmVar----esm_module:export"

// 函数导出
// 可以直接使用 export 导出函数
export function esmFn() {
  console.log("esmFn", "----esm_module:export")
  return "esmFn:----esm_module:export"
}
// 类
class EsmClass {
  esmClassFn() {
    console.log("esmClassFn", "----esm_module:export")
    return "esmClassFn----esm_module:export"
  }
}

// export default function esmFnDefault() {  也可以直接使用export default function 来导出默认函数
function esmFnDefault() {
  console.log("esmFnDefault", "----esm_module:export")
  return "esmFnDefault----esm_module:export"
}

// ESM 选择导出
export {
  esmVar,
  EsmClass,
  // esmFn, // 使用 export 导出的函数，和上面的选择其一，不能同时使用
  // esmFnDefault as default, // esm 默认导出，和下面的选择其一，不能同时使用
}

export default esmFnDefault
