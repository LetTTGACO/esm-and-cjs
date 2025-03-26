// test cjs_with_esm
(async () => {
  const esmModule = import('cjs_with_esm').then(esm => esm);
  const { default: esmFnDefault, esmFn, EsmClass, esmVar } = await esmModule
  // const esmFnDefault = await esmModule
  esmFnDefault()
  esmFn()
  console.log(esmVar)
  const esmClass = new EsmClass()
  esmClass.esmClassFn()
})();
