// exports esm in esm

// 变量
const esmVar = "esmVar----esm_with_cjs:export"

// 函数导出
// 可以直接使用 export 导出函数
export function esmFn() {
  console.log("esmFn", "----esm_with_cjs:export")
  return "esmFn:----esm_with_cjs:export"
}
// 类
class EsmClass {
  esmClassFn() {
    console.log("esmClassFn", "----esm_with_cjs:export")
    return "esmClassFn----esm_with_cjs:export"
  }
}

// export default function esmFnDefault() {  也可以直接使用export default function 来导出默认函数
function esmFnDefault() {
  console.log("esmFnDefault", "----esm_with_cjs:export")
  return "esmFnDefault----esm_with_cjs:export"
}

// ESM 选择导出
export {
  esmVar,
  EsmClass,
  // esmFn, 使用 export 导出的函数，和上面的选择其一
  // esmFnDefault as default, // esm 默认导出，和下面的选择其一，不能同时使用
}

export default esmFnDefault
