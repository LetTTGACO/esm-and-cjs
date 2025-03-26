// 可以直接使用

// import { cjsFn, cjsVar, CjsClass, default as cjsFnDefault } from 'cjs'
import cjsFnDefault, { cjsFn, cjsVar, CjsClass } from 'cjs' // 两种方式都可以，import 会自动处理 default 导出

cjsFnDefault()
cjsFn()
console.log(cjsVar)
const cjsClass = new CjsClass()
cjsClass.cjsClassFn()
