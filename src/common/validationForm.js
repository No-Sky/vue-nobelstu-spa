/**
 *@charset=utf-8
 *@auther 肖方伟
 *@description JS定制表单验证函数
 **/

// 验证值是否为空，为空返回false,否则返回true
function isBlock(val) {
  return (val==null || val=="" || val==undefined)?false:true;
}

//验证邮箱是否输入正确  输入正确返回true,否则返回false
function checkEmail(email){
  var reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
  return reg.test(email);
}

//验证用户密码是否符合格式 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线
function checkPassword(password){
  var reg = /^[a-zA-Z0-9]\w{5,17}$/;
  return reg.test(password);
}

//验证输入是否为数字 ,为空返回false,否则返回true
function checkNumber(number){
  var reg = /^[0-9]*$/;
  return reg.test(number);
}

//验证输入是否符合年龄
function chackStuAge(age){
  var reg = /^[0-9]{1,2}$/;
  return reg.test(age);
}

function onlyAllowNum(obj){
  obj.value = obj.value.replace(/[^0-9.]/g,"");
}

//验证电话号码是否符合格式  格式： xxxxxxxxxx xxxxxxxxxxx
function checkTel(tel){
  var reg= /^\d{10,11}$/;
  return reg.test(tel);
}

//验证日期是否大于此时
function checkStartTime(date){
  var startTime = date.replace(" ",":").replace(/\:/g,"-").split("-");
  var std = new Date(startTime[0],startTime[1],startTime[2],startTime[3],startTime[4],startTime[5]);
  var nowtime = new Date();
  return std.getTime()>=nowtime.getTime()?true:false;
}

//输入表单是否为空
export function validateTextInput(ev){
  let obj = ev.currentTarget;
  if (!isBlock(obj.value)) {
    this.$toast.info("输入不可为空");
    return false;
  }
  return true;
}
//密码输入是否符合格式
export function validatePwd(ev){
  let obj = ev.currentTarget;
  if (!checkPassword(obj.value)) {
    this.$toast.info("请输入以字母开头，长度在6-18之间，只能包含字符、数字和下划线的密码")
    return false;
  }
  return true;
}
//邮箱输入是否符合格式
export function validateEmail(ev){
  let obj = ev.currentTarget;
  if (!checkEmail(obj.value)) {
    this.$toast.info("邮箱不符合格式");
    return false;
  }
  return true;
}

