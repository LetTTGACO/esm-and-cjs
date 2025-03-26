// const esmModule = await import('./esm_mjs.mjs'); // ❌ 报错，CJS 模块不允许顶层 await


async function test() {
  const esmModule = await import('./esm_mjs.mjs');
  const { default: esmFnDefault, esmFn, EsmClass, esmVar } = esmModule
  esmFnDefault()
  esmFn()
  console.log(esmVar)
  const esmClass = new EsmClass()
  esmClass.esmClassFn()
}

test();


// 自执行函数
(async () => {
  const esmModule = await import('./esm_mjs.mjs')
  const { default: esmFnDefault, esmFn, EsmClass, esmVar } = esmModule
  esmFnDefault()
  esmFn()
  console.log(esmVar)
  const esmClass = new EsmClass()
  esmClass.esmClassFn()
})()
