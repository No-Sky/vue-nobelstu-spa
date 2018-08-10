/**
 * 代理地址在config --> webpack.base.config --> proxyTable
 * @type {string}
 */
const login = 'api/login'  //登录
const reg = 'api/reg'  //注册
const recommend = 'api/recommend'  //获取推荐教师
const session = 'api/session'  //判断session是否过时
const teacher = 'api/teacher/' // api/teacher/{id} : 根据教师ID获取教师的信息和全部课程
const orders = 'api/orders/' // api/orders/{id} : 根据教师ID获取教师的全部空闲时间
const search = 'api/search' // 获取搜索页面的数据
export default {
  login,
  reg,
  recommend,
  session,
  teacher,
  orders,
  search
}
