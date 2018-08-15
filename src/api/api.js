/**
 * 代理地址在config --> webpack.base.config --> proxyTable
 * @type {string}
 */
const login = 'http://localhost:8080/nobelstu/api/login'  //登录 post
const reg = 'api/signup'  //注册 post
const sendverify = 'api/verify'  //点击发送验证码 post
const recommend = 'http://localhost:8080/nobelstu/api/recommend'  //获取推荐教师 get
const session = 'http://localhost:8080/nobelstu/api/session'  //判断session是否过时 get
const teacher = 'http://localhost:8080/nobelstu/api/teacher/' // api/teacher/{id} : 根据教师ID获取教师的信息和全部课程 get
const orders = 'http://localhost:8080/nobelstu/api/orders/' // api/orders/{id} : 根据教师ID获取教师的全部空闲时间 get
const search = 'http://localhost:8080/nobelstu/api/search' // 获取搜索页面的数据 get
const orderdetail  = 'http://localhost:8080/nobelstu/api/order/' //根据orderid 获取订单数据 /order/{orderid} get
const choiceOrder = 'http://localhost:8080/nobelstu/api/choiceOrder/' //确认选择此订单 post
const records = 'http://localhost:8080/nobelstu/api/records'  //获取约课记录 get
const recorddetail = 'http://localhost:8080/nobelstu/api/recorddetail/'  //获取订单详情 : /recorddetail/{oid} get
const uploadavatar = 'http://localhost:8080/nobelstu/api/uploadavatar'  //上传头像 post
const delnotice = 'http://localhost:8080/nobelstu/api/cancelorder/'  //取消预约  ：/cancelorder/{nid} post
const confirmclass = 'http://localhost:8080/nobelstu/api/class/'  //确认上课  ：/class/{orderid} post
const grade = 'http://localhost:8080/nobelstu/api/grade'  //提交留言  ：/grade post
const student = 'http://localhost:8080/nobelstu/api/student'  //更新学生信息  ：/student post
const forget = 'http://localhost:8080/nobelstu/api/forget'  //忘记密码  ：/forget get
const verifyforget = 'http://localhost:8080/nobelstu/api/verifyforget'  //忘记密码验证  ：/verifyforget get
const reset = 'http://localhost:8080/nobelstu/api/reset'  //重置密码  ：/reset post
export default {
  login,
  reg,
  sendverify,
  recommend,
  session,
  teacher,
  orders,
  search,
  orderdetail,
  choiceOrder,
  records,
  recorddetail,
  uploadavatar,
  delnotice,
  confirmclass,
  grade,
  student,
  forget,
  verifyforget,
  reset
}
