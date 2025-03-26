
// async function test() {
//   const esmModule = import('esm_module').then(esm => esm);
//   const { default: esmFnDefault, esmFn, EsmClass, esmVar } = await esmModule
//   esmFnDefault()
//   esmFn()
//   console.log(esmVar)
//   const esmClass = new EsmClass()
//   esmClass.esmClassFn()
// }
//
// test();

// test esm_module
(async () => {
  const esmModule = import('esm_module').then(esm => esm);
  const { default: esmFnDefault, esmFn, EsmClass, esmVar } = await esmModule
  // const esmFnDefault = await esmModule
  esmFnDefault()
  esmFn()
  console.log(esmVar)
  const esmClass = new EsmClass()
  esmClass.esmClassFn()
})();
