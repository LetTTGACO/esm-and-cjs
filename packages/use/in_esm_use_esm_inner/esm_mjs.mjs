// exports esm in esm

// 变量
const esmVar = "esmVar----in_esm_use_esm_inner:export"

// 函数导出
// 可以直接使用 export 导出函数
export function esmFn() {
  console.log("cjsFn", "----in_esm_use_esm_inner:export")
  return "cjsFn:----in_esm_use_esm_inner:export"
}
// 类
class EsmClass {
  esmClassFn() {
    console.log("esmClassFn", "----in_esm_use_esm_inner:export")
    return "esmClassFn----in_esm_use_esm_inner:export"
  }
}

// export default function esmFnDefault() {  也可以直接使用export default function 来导出默认函数
function esmFnDefault() {
  console.log("esmFnDefault", "----in_esm_use_esm_inner:export")
  return "esmFnDefault----in_esm_use_esm_inner:export"
}

// ESM 选择导出
export {
  esmVar,
  EsmClass,
  // cjsFn, 使用 export 导出的函数，和上面的选择其一
  // esmFnDefault as default, // esm 默认导出，和下面的选择其一，不能同时使用
}

export default esmFnDefault
