/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')


// eslint配置文件遵循commonjs的导出规则,所导出的对象就是eslint的配置对象
module.exports = {

  // 表示当前目录即为根目录,eslint规则将被限制到该目录下
  root: true,

  // 表示启用eslint检测的环境
  env: {
    // 在node环境下启动eslint检测
    node: true
  },

  // eslint的插件扩展
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],

  // 解析器
  parserOptions: {
    ecmaVersion: 'latest'
  },

  // 规则
  rules: {
    /**
     * 错误级别分为:
     * off或0: 关闭规则
     * warn或1: 开启规则,错误时会发生警告,但不会导致程序退出
     * error或2: 开启规则,错误时会导致程序退出
     */
  }
}
