<template>
  <div>
    <div id="inputEmail" v-show="inputEmailBox"  class="mui-content">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>邮箱</label>
          <input id='email' type="email" class="mui-input-clear mui-input" placeholder="请输入注册邮箱">
        </div>
      </form>
      <div class="mui-content-padded">
        <button id='sendMail' @click="inputVerifyBox=true;inputEmailBox=false;" class="mui-btn mui-btn-block mui-btn-primary">提交</button>
      </div>
    </div>
    <div id="inputVerifyCode" class="mui-content" v-show="inputVerifyBox">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>验证码</label>
          <input id="verifycode" type="text" class="mui-input-clear " placeholder="请输入验证码">
          <input id="btn-reget" type="button" style="" class="mui-btn btn-code" value="获取"/>
        </div>
      </form>
      <div class="mui-content-padded">
        <button id='btn-verify' @click="inputVerifyBox=false;inputResetPwdBox=true;" class="mui-btn mui-btn-block mui-btn-primary">提交</button>
      </div>
    </div>
    <div id="inputResetPwd" class="mui-content" v-show="inputResetPwdBox">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label style="padding: 11px 7px;">新的密码</label>
          <input id='newpwd' type="text" onblur="checkResetPwd(this);" class="mui-input-clear mui-input" placeholder="请输入新的密码">
        </div>
        <div class="mui-input-row">
          <label style="padding: 11px 7px;">确认密码</label>
          <input id='renewpwd' type="text" onblur="checkReResetPwd(this);" class="mui-input-clear mui-input" placeholder="请再次输入密码">
        </div>
      </form>
      <div class="mui-content-padded">
        <button id='btn-repwd' class="mui-btn mui-btn-block mui-btn-primary">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        inputEmailBox: true,
        inputVerifyBox: false,
        inputResetPwdBox: false
      }
    }
  }
</script>
<style scoped>
  .mui-content{
    margin-top:75px;
    background-color: white;
  }
  .area {
    margin: 20px auto 0px auto;
  }
  .mui-input-group:first-child {
    margin-top: 20px;
  }
  .mui-input-group label {
    background-color: lightyellow;
    width: 22%;
  }
  .mui-input-row label~input,
  .mui-input-row label~select,
  .mui-input-row label~textarea {
    width: 78%;
  }
  .mui-checkbox input[type=checkbox],
  .mui-radio input[type=radio] {
    top: 6px;
  }
  .mui-content-padded {
    margin-top: 25px;
  }
  .mui-btn {
    padding: 10px;
  }
  .mui-input-row label~input, .mui-input-row label~select, .mui-input-row label~textarea{
    margin-top: 1px;
  }
  .mui-input-row #verifycode {
    float: left;
    width: 45%;
    margin-bottom: 0;
    padding-left: 0;
    border: 0
  }
  .btn-code{
    background-color: #007aff!important;
    color: #fff!important;
    border: 1px solid #007aff!important;
    border-radius:3px!important;
    margin: 3px 0px 0px 0px!important;
    width: 18%!important;
    margin-right: 2%!important;
    font-size: 10px!important;
    padding-left: 0px!important;
    padding-right: 0px!important;
  }
</style>
