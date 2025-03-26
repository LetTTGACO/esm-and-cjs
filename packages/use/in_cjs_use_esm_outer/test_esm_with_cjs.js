// test esm_with_cjs
(async () => {
  const esmModule = await import('esm_with_cjs')
  const { default: esmFnDefault, esmFn, EsmClass, esmVar } = esmModule
  // const esmFnDefault = await esmModule
  esmFnDefault()
  esmFn()
  console.log(esmVar)
  const esmClass = new EsmClass()
  esmClass.esmClassFn()
})()
