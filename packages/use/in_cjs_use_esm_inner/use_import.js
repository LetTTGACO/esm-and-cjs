


// async function test() {
//   const esmModule = import('./esm_mjs.mjs').then(esm => esm);
//   const { default: esmFnDefault, esmFn, EsmClass, esmVar } = await esmModule
//   esmFnDefault()
//   esmFn()
//   console.log(esmVar)
//   const esmClass = new EsmClass()
//   esmClass.esmClassFn()
// }
//
// test();


// 自执行函数
(async () => {
  const esmModule = import('./esm_mjs.mjs').then(esm => esm);
  const { default: esmFnDefault, esmFn, EsmClass, esmVar } = await esmModule
  esmFnDefault()
  esmFn()
  console.log(esmVar)
  const esmClass = new EsmClass()
  esmClass.esmClassFn()
})()
