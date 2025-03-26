// 在 ems 中使用 cjs，可以直接使用，但需要指定 cjs 的文件后缀

import { cjsFn, cjsVar, CjsClass, default as cjsFnDefault } from './cjs.cjs'
// import cjsFnDefault, { cjsFn, cjsVar, CjsClass } from './cjs.cjs' // 两种方式都可以，import 会自动处理 default 导出

cjsFnDefault()
cjsFn()
console.log(cjsVar)
const cjsClass = new CjsClass()
cjsClass.cjsClassFn()


