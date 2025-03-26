
async function test() {
  const esmModule = await import('esm_module')
  const { default: esmFnDefault, esmFn, EsmClass, esmVar } = esmModule
  esmFnDefault()
  esmFn()
  console.log(esmVar)
  const esmClass = new EsmClass()
  esmClass.esmClassFn()
}

test();

// test esm_module
(async () => {
  const esmModule = await import('esm_module')
  const { default: esmFnDefault, esmFn, EsmClass, esmVar } = esmModule
  // const esmFnDefault = await esmModule
  esmFnDefault()
  esmFn()
  console.log(esmVar)
  const esmClass = new EsmClass()
  esmClass.esmClassFn()
})();
