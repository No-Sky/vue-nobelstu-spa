/**
 * 代理地址在config --> webpack.base.config --> proxyTable
 * @type {string}
 */
const login = 'api/login'  //登录
const reg = 'api/reg'  //注册
const recommend = 'api/recommend'  //获取推荐教师
const session = 'api/session'  //判断session是否过时
export default {
  login,
  reg,
  recommend,
  session
}
