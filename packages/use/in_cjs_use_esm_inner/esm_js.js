// exports esm in commonjs
// NOTE:
//  在 commonjs项目中必须使用 .mjs 后缀的文件来使用 esm 模块
//  因为 commonjs 中使用 require 导入 esm 模块时，会使用 require 方法来加载 esm 模块，而 require 方法只支持 .js 和 .json 后缀的文件
//  所以在 commonjs 项目中，必须使用 .mjs 后缀的文件来使用 esm 模块

// 变量
const esmVar = "esmVar----cjs_with_esm:export"

// 函数导出
// 可以直接使用 export 导出函数
export function esmFn() {
  console.log("cjsFn", "----cjs_with_esm:export")
  return "cjsFn:----cjs_with_esm:export"
}
// 类
class EsmClass {
  esmClassFn() {
    console.log("esmClassFn", "----cjs_with_esm:export")
    return "esmClassFn----cjs_with_esm:export"
  }
}

// export default function esmFnDefault() {  也可以直接使用export default function 来导出默认函数
function esmFnDefault() {
  console.log("esmFnDefault", "----cjs_with_esm:export")
  return "esmFnDefault----cjs_with_esm:export"
}

// ESM 选择导出
export {
  esmVar,
  EsmClass,
  // cjsFn, 使用 export 导出的函数，和上面的选择其一
  // esmFnDefault as default, // esm 默认导出，和下面的选择其一
}

export default esmFnDefault
