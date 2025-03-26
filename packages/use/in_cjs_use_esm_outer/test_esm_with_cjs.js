// test esm_with_cjs
(async () => {
  const esmModule = import('esm_with_cjs').then(esm => esm);
  const { default: esmFnDefault, esmFn, EsmClass, esmVar } = await esmModule
  // const esmFnDefault = await esmModule
  esmFnDefault()
  esmFn()
  console.log(esmVar)
  const esmClass = new EsmClass()
  esmClass.esmClassFn()
})()
