export const imports = {
  'Button/demo.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "button-demo" */ 'Button/demo.mdx'
    ),
  'Loading/demo.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "loading-demo" */ 'Loading/demo.mdx'
    ),
  'TextTip/demo.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "text-tip-demo" */ 'TextTip/demo.mdx'
    ),
}
