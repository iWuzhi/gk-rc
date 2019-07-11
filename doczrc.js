/**
 * Author iWuzhi
 * Date 2019/7/9
 **/

export default {
  title: 'iWuzhi-rc',
  description: 'This is a geek react components.',
  src: './src',
  propsParser: true,
  indexHtml: './.docz/index.html',
  modifyBundlerConfig: (config) => {
    config.module.rules.push({
      test: /\.less/,
      use: ["style-loader", "css-loader", "less-loader"]
    })
    config.module.rules.push({
      test: /\.css/,
      use: ["style-loader", "css-loader"]
    })
    return config
  }
}