<template>
  <div class="mui-card">
    <div  class="mui-card-content">
      <div class="mui-input-group">
        <div class="mui-input-row">
          <label>姓名：</label>
          <input v-model="regStu.stuname" @blur="checkstuname=validateTextInput($event)" id="stuname" type="text" class="mui-input-clear" placeholder="请输入用户名">
        </div>
        <div class="mui-input-row">
          <label>邮箱：</label>
          <input v-model="regStu.stuemail" @blur="checkstuemail=validateTextInput($event)&&validteEmail($event)" id="stuemail" type="email" class="mui-input-clear " placeholder="请输入邮箱">
        </div>
        <div class="mui-input-row">
          <label>验证码：</label>
          <input v-model="regStu.verifycode" @blur="checkverifycode=validateTextInput($event)" id="verifycode" type="text" class="mui-input-clear " placeholder="请输入验证码">
          <input  type="button" style="" class="mui-btn btn-code" value="获取" @click="clickButton($event)"/>
        </div>
        <div class="mui-input-row">
          <label>密码：</label>
          <input id="stupwd" v-model="regStu.stupwd" @blur="checkstupwd=validateTextInput($event)&&validatePwd($event)" type="password" class="mui-input-clear mui-input-password" placeholder="请输入密码">
        </div>
        <div class="mui-input-row">
          <label>确认密码：</label>
          <input id="restupwd" v-model="regStu.restupwd" @blur="checkstupwd=validateTextInput($event)&&validateRepwd($event)" type="password" class="mui-input-clear mui-input-password" placeholder="确认密码">
        </div>
      </div>
      <div class="mui-card-footer">
        <button @click="submitReg" id="btn-submit" type="button" class="mui-btn mui-btn-blue mui-btn-block" style="padding: 6px 0px;">注册</button>
      </div>
    </div>
  </div>
</template>
<script>
  import '../common/validationForm.js'
  export default {
    data () {
      return {
        regStu: {
          stuname: '',
          stuemail: '',
          verifycode: '',
          stupwd: '',
          restupwd: ''
        },
        checkstuname: false,
        checkstuemail: false,
        checkverifycode: false,
        checkstupwd: false,
        checkrestupwd: false
      }
    },
    methods: {
      //表单验证未写
      submitReg: function () {
        if (!(this.checkstuname && this.checkstuemail && this.checkverifycode && this.checkstupwd && this,checkrepwd))
            return false;
        let params = {
          stuname: this.regStu.stuname,
          stuemail: this.regStu.stunemail,
          verifycode: this.regStu.verifycode,
          stupwd: this.stupwd
        }
        this.$http.post(this.$api.reg, params).then(res => {
            console.log(res.data);
            if (res.data.code==0) {
              this.$toast.success(res.data.message);
              this.$router.push("/login");
            }else{
              this.$toast.warning(res.data.message);
            }
        })
      },
      clickButton: function (ev) {
        // checkStuEmail();
        // console.log(checkemail);
        //从绑定目标触发
        let btn = ev.currentTarget;
        let time = 60;
        btn.setAttribute("disabled", "disabled");//按钮倒计时
        let setIn = setInterval(function () {
          btn.setAttribute("value",--time+'s')
        }, 1000); //等待时间
        setTimeout(function () {
          btn.setAttribute("disabled", false).val("重新获取"); //倒计时
          clearInterval(setIn);
        }, 60*1000);
        //点击发送邮箱验证码
          this.$http.post(this.$api.sendverify).then(res => {
            console.log(res.data);
            if (res.data.code==0){
              this.$toast.success("发送成功");
            } else {
              this.$toast.warning(res.data.message);
            }
          })

        },
      validateRepwd: function (ev) {
        let obj = ev.currentTarget;
        let repwd = obj.value;
        let stupwd = documetn.getElementById('stupwd');
        if (repwd!=stupwd) {
          this.$toast.info("两次密码输入不一致");
          return false;
        }
        return true;
      }
    }
  }
</script>
<style scoped>
  .mui-card-content{
    margin-top: 20px;
  }
  .mui-input-row #verifycode {
    float: left;
    width: 45%;
    margin-bottom: 0;
    padding-left: 0;
    border: 0
  }
  .mui-input-row label {
    background-color: lightyellow;
    width: 35%;
    padding: 10px 10px;
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
