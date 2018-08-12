/**
 * 代理地址在config --> webpack.base.config --> proxyTable
 * @type {string}
 */
const login = 'http://localhost:8080/nobelstu/api/login'  //登录
const reg = 'api/reg'  //注册
const recommend = 'http://localhost:8080/nobelstu/api/recommend'  //获取推荐教师
const session = 'http://localhost:8080/nobelstu/api/session'  //判断session是否过时
const teacher = 'http://localhost:8080/nobelstu/api/teacher/' // api/teacher/{id} : 根据教师ID获取教师的信息和全部课程
const orders = 'http://localhost:8080/nobelstu/api/orders/' // api/orders/{id} : 根据教师ID获取教师的全部空闲时间
const search = 'http://localhost:8080/nobelstu/api/search' // 获取搜索页面的数据
const orderdetail  = 'http://localhost:8080/nobelstu/api/order/' //根据orderid 获取订单数据 /order/{orderid}
const choiceOrder = 'http://localhost:8080/nobelstu/api/choiceOrder/' //确认选择此订单
const records = 'http://localhost:8080/nobelstu/api/records'  //获取约课记录
const recorddetail = 'http://localhost:8080/nobelstu/api/recorddetail/'  //获取订单详情 : /recorddetail/{oid}
export default {
  login,
  reg,
  recommend,
  session,
  teacher,
  orders,
  search,
  orderdetail,
  choiceOrder,
  records,
  recorddetail
}
