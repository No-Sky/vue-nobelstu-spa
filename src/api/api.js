/**
 * 代理地址在config --> webpack.base.config --> proxyTable
 * @type {string}
 * @type {string}
 */
const rootUri = 'http://localhost:8080/nobelstu'  //发布的IP地址或者域名加端口号
//const  rootUri = ''
const login = rootUri+'/api/login'  //登录 post
const reg = rootUri+'/api/signup'  //注册 post
const sendverify = rootUri+'/api/verify'  //点击发送验证码 post
const recommend = rootUri+'/api/recommend'  //获取推荐教师 get
const ads = rootUri+'/api/ads'  //获取广告列表 get
const session = rootUri+'/api/session'  //判断session是否过时 get
const teacher = rootUri+'/api/teacher/' // api/teacher/{id} : 根据教师ID获取教师的信息和全部课程 get
const orders = rootUri+'/api/orders/' // api/orders/{id} : 根据教师ID获取教师的全部空闲时间 get
const search = rootUri+'/api/search' // 获取搜索页面的数据 get
const orderdetail  = rootUri+'/api/order/' //根据orderid 获取订单数据 /order/{orderid} get
const choiceOrder = rootUri+'/api/choiceOrder/' //确认选择此订单 post
const records = rootUri+'/api/records'  //获取约课记录 get
const recorddetail = rootUri+'/api/recorddetail/'  //获取订单详情 : /recorddetail/{nid} get
const uploadavatar = rootUri+'/api/uploadavatar'  //上传头像 post
const delnotice = rootUri+'/api/cancelorder/'  //取消预约  ：/cancelorder/{nid} post
const confirmclass = rootUri+'/api/class/'  //确认上课  ：/class/{orderid} post
const grade = rootUri+'/api/grade'  //提交留言  ：/grade post
const student = rootUri+'/api/student'  //更新学生信息  ：/student post
const forget = rootUri+'/api/forget'  //忘记密码  ：/forget post
const verifyforget = rootUri+'/api/verifyforget'  //忘记密码验证  ：/verifyforget get
const reset = rootUri+'/api/reset'  //重置密码  ：/reset post
export default {
  login,
  reg,
  sendverify,
  recommend,
  ads,
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
