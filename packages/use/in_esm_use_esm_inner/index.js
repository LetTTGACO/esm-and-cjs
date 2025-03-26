import esmFnDefault, { esmVar, EsmClass, esmFn } from './esm_js.js'; // 需要指定文件后缀名
// import esmFnDefault, { esmVar, EsmClass, esmFn } from './esm_mjs.mjs'; // 也需要指定文件名


esmFnDefault()
esmFn()
console.log(esmVar)
const esmClass = new EsmClass()
esmClass.esmClassFn()
