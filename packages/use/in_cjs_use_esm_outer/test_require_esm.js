// 注意：此用例的 Node 版本需要>=22.12.0
// 直接使用 require 加载 ESM 模块： https://nodejs.org/en/blog/release/v22.12.0
const { default: esmFnDefault, esmFn, EsmClass, esmVar } = require('esm_module')

esmFnDefault()
esmFn()
console.log(esmVar)
const esmClass = new EsmClass()
esmClass.esmClassFn()
