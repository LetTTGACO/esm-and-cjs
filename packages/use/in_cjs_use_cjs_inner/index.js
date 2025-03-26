// in cjs project to use cjs inner
// 在 cjs 项目中使用 cjs 内部模块



const { default: cjsFnDefault, cjsVar, cjsFn, CjsClass } = require('./cjs_inner');
cjsFnDefault()
cjsFn()
console.log(cjsVar)
const cjsClass = new CjsClass()
cjsClass.cjsClassFn()
