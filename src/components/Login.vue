<template>
  <div>
    <div class="mui-content">
    <form id='login-form' class="mui-input-group">
      <div class="mui-input-row">
        <label style="background-color: #FFF;margin-top: 3px">账号</label>
        <input id='account'  v-model="user.stuemail" type="text" name="stuemail" class="mui-input-clear mui-input" placeholder="请输入登录邮箱">
      </div>
      <div class="mui-input-row">
        <label style="background-color: #FFF;margin-top: 3px"">密码</label>
        <input id='password' v-model="user.stupwd" type="password" name="stupwd" class="mui-input-clear mui-input" placeholder="请输入密码">
      </div>
    </form>
      <div class="mui-content-padded">
        <button id='login' @click="login"  class="mui-btn mui-btn-block mui-btn-primary">登录</button>
        <div class="link-area">
          <router-link to="/reg" tag="span">注册账号</router-link>
          <span class="spliter">|</span>
          <router-link to="/forgetpwd" tag="span">忘记密码</router-link>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        user: {
          stuemail: '',
          stupwd: ''
        }
      }
    },
    methods: {
      ...mapActions(['userLogin']),
      login: function(){
        let loginStudent = {
          stuemail: this.user.stuemail,
          stupwd: this.$md5.hex(this.user.stupwd)
        }
       this.$http.post(this.$api.login,loginStudent).then(res => {
         console.log(res.data);
         if (res.data.code==0) {
           this.userLogin(res.data.data);
           //消息提示
           this.$toast.success(res.data.message);
           // 登录成功 跳转至首页
           this.$emit('loginChange', true);
            this.$router.push('/')
         }else{
           //消息提示
           this.$toast.error(res.data.message);
           return false;
         }
       }).catch(err => {
         //消息提示
         this.$toast.error(err.message)
       })
      }
    }
  }
</script>
<style scoped>
  .ui-page-login {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
  .mui-content{
    margin-top: 80px;
    height: 100%;
    background-color: white;
  }
  .area {
    margin: 20px auto 0px auto;
  }

  .mui-input-group {
    margin-top: 10px;
  }

  .mui-input-group:first-child {
    margin-top: 20px;
  }

  .mui-input-row label~input,
  .mui-input-row label~select,
  .mui-input-row label~textarea {
    width: 82%;
  }
.mui-input-group label {
  background-color: lightyellow;
  width: 18%;
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

  .link-area {
    display: block;
    margin-top: 25px;
    text-align: center;
  }

  .spliter {
    color: #bbb;
    padding: 0px 8px;
  }

  .oauth-area {
    position: absolute;
    bottom: 20px;
    left: 0px;
    text-align: center;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }

  .oauth-area .oauth-btn {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-size: 30px 30px;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0px 20px;
    /*-webkit-filter: grayscale(100%); */
    border: solid 1px #ddd;
    border-radius: 25px;
  }

  .oauth-area .oauth-btn:active {
    border: solid 1px #aaa;
  }

  .oauth-area .oauth-btn.disabled {
    background-color: #ddd;
  }
</style>

