// test cjs_with_esm
(async () => {
  const esmModule = await import('cjs_with_esm')
  const { default: esmFnDefault, esmFn, EsmClass, esmVar } = esmModule
  // const esmFnDefault = await esmModule
  esmFnDefault()
  esmFn()
  console.log(esmVar)
  const esmClass = new EsmClass()
  esmClass.esmClassFn()
})();
