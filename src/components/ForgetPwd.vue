<template>
  <div>
    <div id="inputEmail" v-show="inputEmailBox"  class="mui-content">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>邮箱</label>
          <input id='email' @blur="checkemail=validateTextInput($event)&&validateEmail($event)" type="email" class="mui-input-clear mui-input" placeholder="请输入注册邮箱">
        </div>
      </form>
      <div class="mui-content-padded">
        <button id='sendMail' @click="sendMail($event)" class="mui-btn mui-btn-block mui-btn-primary">提交</button>
      </div>
    </div>
    <div id="inputVerifyCode" class="mui-content" v-show="inputVerifyBox">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>验证码</label>
          <input id="verifycode" @blur="checkverifycode=validateTextInput($event)" type="text" class="mui-input-clear " placeholder="请输入验证码">
          <input id="btn-reget" type="button" style="" class="mui-btn btn-code" value="获取"/>
        </div>
      </form>
      <div class="mui-content-padded">
        <button id='btn-verify' @click="sendVerifyCode($event)" class="mui-btn mui-btn-block mui-btn-primary">提交</button>
      </div>
    </div>
    <div id="inputResetPwd" class="mui-content" v-show="inputResetPwdBox">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label style="padding: 11px 7px;">新的密码</label>
          <input id='newpwd' @blur="checknewpwd=validateTextInput($event)&&validatePwd($event)" type="text"  class="mui-input-clear mui-input" placeholder="请输入新的密码">
        </div>
        <div class="mui-input-row">
          <label style="padding: 11px 7px;">确认密码</label>
          <input id='renewpwd' @blur="checkrepwd=validateTextInput($event)&&validateRepwd($event)" type="text" class="mui-input-clear mui-input" placeholder="请再次输入密码">
        </div>
      </form>
      <div class="mui-content-padded">
        <button id='btn-repwd' @click="resetPwd($event)" class="mui-btn mui-btn-block mui-btn-primary">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
  import {validateTextInput} from "../common/validationForm";
  import {validatePwd} from "../common/validationForm";
  import {validateEmail} from "../common/validationForm";
  export default {
    data () {
      return {
        inputEmailBox: true,
        inputVerifyBox: false,
        inputResetPwdBox: false,
        checkemail: false,
        checkverifycode: false,
        checknewpwd: false,
        checkrepwd: false
      }
    },
    methods: {
      validateTextInput,
      validatePwd,
      validateEmail,
      sendMail: function (ev) {
        if(!this.checkemail) return false;
        let btn = ev.currentTarget;
        btn.innerHTML = "正在验证中...";
        btn.setAttribute("disabled", "disabled");
        let email = document.getElementById('email').value;
        let params = new URLSearchParams();
        params.append("email", email);
        this.$http.post(this.$api.forget, params).then(res => {
          console.log(res.data);
          if (res.data.code==0){
            this.$toast.success("发送成功");
            this.inputEmailBox = false;
            this.inputVerifyBox = true;
            let btn = document.getElementById('btn-reget');
            let time = 120;
            btn.setAttribute("disabled", "disabled");//按钮倒计时
            let setIn = setInterval(function () {
              btn.setAttribute("value",--time+'s')
            }, 1000); //等待时间
            setTimeout(function () {
              btn.setAttribute("value","重新获取")
              btn.removeAttribute("disabled"); //倒计时结束
              clearInterval(setIn);
            }, 2*60*1000);
          } else {
            this.$toast.warning(res.data.message);
          }
        }).catch(err => {
          console.log(err)
          btn.innerHTML = '提交';
          btn.removeAttribute("disabled");
          this.$toast.warning("请求错误，请重新尝试");
        })
      },
      sendVerifyCode: function (ev) {
        if (!this.checkverifycode) return false;
        let btn = ev.currentTarget;
        btn.innerHTML = '正在验证中...';
        btn.setAttribute("disabled", "disabled");
        let email = document.getElementById('email').value;
        let verifycode = document.getElementById('verifycode').value
        let params = new URLSearchParams();
        params.append("email", email);
        params.append("verifycode", verifycode);

        this.$http.post(this.$api.verifyforget, params).then(res => {
          console.log(res.data);
          if (res.data.isVerify){
            this.inputVerifyBox = false;
            this.inputResetPwdBox = true;
          } else {
            this.$toast.warning(res.data.errmsg);
            btn.setAttribute("disabled", "false");
          }
        }).catch(err => {
          console.log(err)
          btn.innerHTML = '提交';
          btn.removeAttribute("disabled");
          this.$toast.warning("请求错误，请重新尝试");

        })
      },
      resetPwd: function (ev) {
        if (!(this.checknewpwd && this.checkrepwd)) return false;
        let btn = ev.currentTarget;
        btn.innerHTML = '密码正在重置中...';
        btn.setAttribute("disabled", "disabled");
        let email = document.getElementById('email').value;
        let newpwd = document.getElementById('newpwd').value;
        let params = new URLSearchParams();
        params.append("email", email);
        params.append("newpwd", this.$md5.hex(newpwd));

        this.$http.post(this.$api.reset, params).then(res => {
          console.log(res.data);
          if (res.data.isReset) {
            setTimeout(() => {
              this.$toast.success("密码重置成功，正在前往登录页面");
            }, 1000)
            this.$router.push("/login");
          } else {
            this.$toast.warning(res.data.errmsg);
            btn.setAttribute("disabled", "false");
          }
        })
      },
      validateRepwd: function (ev) {
        let obj = ev.currentTarget;
        let repwd = obj.value;
        let newpwd = document.getElementById('newpwd').value;
        if (repwd!=newpwd) {
          this.$toast.info("两次密码输入不一致");
          return false;
        }
        return true;
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
