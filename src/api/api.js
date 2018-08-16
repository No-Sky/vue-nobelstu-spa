/**
 * 代理地址在config --> webpack.base.config --> proxyTable
 * @type {string}
 * @type {string}
 */
const rootUri = 'http://142.93.207.161:8888'  //发布的IP地址或者域名加端口号
const login = rootUri+'/nobelstu/api/login'  //登录 post
const reg = rootUri+'nobelstu/api/signup'  //注册 post
const sendverify = rootUri+'nobelstu/api/verify'  //点击发送验证码 post
const recommend = rootUri+'/nobelstu/api/recommend'  //获取推荐教师 get
const session = rootUri+'/nobelstu/api/session'  //判断session是否过时 get
const teacher = rootUri+'/nobelstu/api/teacher/' // api/teacher/{id} : 根据教师ID获取教师的信息和全部课程 get
const orders = rootUri+'/nobelstu/api/orders/' // api/orders/{id} : 根据教师ID获取教师的全部空闲时间 get
const search = rootUri+'/nobelstu/api/search' // 获取搜索页面的数据 get
const orderdetail  = rootUri+'/nobelstu/api/order/' //根据orderid 获取订单数据 /order/{orderid} get
const choiceOrder = rootUri+'/nobelstu/api/choiceOrder/' //确认选择此订单 post
const records = rootUri+'/nobelstu/api/records'  //获取约课记录 get
const recorddetail = rootUri+'/nobelstu/api/recorddetail/'  //获取订单详情 : /recorddetail/{oid} get
const uploadavatar = rootUri+'/nobelstu/api/uploadavatar'  //上传头像 post
const delnotice = rootUri+'/nobelstu/api/cancelorder/'  //取消预约  ：/cancelorder/{nid} post
const confirmclass = rootUri+'/nobelstu/api/class/'  //确认上课  ：/class/{orderid} post
const grade = rootUri+'/nobelstu/api/grade'  //提交留言  ：/grade post
const student = rootUri+'/nobelstu/api/student'  //更新学生信息  ：/student post
const forget = rootUri+'/nobelstu/api/forget'  //忘记密码  ：/forget get
const verifyforget = rootUri+'/nobelstu/api/verifyforget'  //忘记密码验证  ：/verifyforget get
const reset = rootUri+'/nobelstu/api/reset'  //重置密码  ：/reset post
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
