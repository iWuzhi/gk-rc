export const imports = {
  'Button/demo.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "button-demo" */ 'Button/demo.mdx'
    ),
}
