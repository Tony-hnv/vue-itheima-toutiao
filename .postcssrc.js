module.exports = {
  plugins: {
    // Vue cli已经配置过了，会冲突，建议注释掉
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 7']
    // },
    'postcss-pxtorem': {
      // lib-flexble 的 rem 适配方案，把一行分为10份，每一份就是十分之一
      // vant是基于375处理的，设计稿一般以iphone6的750设计的，所以一般要/2

      // 如果是vant组件就37.5，自己的组件就正常使用
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*'],
      // 配置不要转换的样式资源
      exclude: 'github-markdown'
    }
  }
}
