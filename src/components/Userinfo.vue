<template>
  <div>
    <mu-paper :z-depth="1">
      <mu-list textline="two-line">
        <mu-list-item avatar>
          <mu-list-item-content>
            <mu-list-item-title>头像</mu-list-item-title>
          </mu-list-item-content>
          <mu-list-item-action style="margin-right: 25px;">
            <mu-avatar>
              <img id="img" :src="user.stuprofilephoto" />
              <input class="fileInput" type="file" accept="image/png,image/jpg,image/jpeg" @change="change($event)" />
            </mu-avatar>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>姓名</mu-list-item-title>
            {{user.stuname}}
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>账号</mu-list-item-title>
            {{user.stuemail}}
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>性别</mu-list-item-title>
            {{user.stusex}}
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>年龄</mu-list-item-title>
            {{user.stuage}}
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>家庭地址</mu-list-item-title>
            {{user.stuaddress}}
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>联系电话</mu-list-item-title>
            {{user.stutel}}
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </mu-paper>
    <br />
    <mu-button @click='openModal' full-width color="primary">
        修改
    </mu-button>
    <br /><br /><br />
    
  <!--页面主内容区结束-->
  <!-- 修改信息模态框 -->
  <div id="modal" class="mui-modal bm_modal">
    <div style="margin-top: 2px;">
      <mu-paper :z-depth="1">
      <mu-form :model="user" label-position="left" label-width="100">
          <mu-list textline="two-line">
            <mu-list-item>
              <mu-form-item :style="formStyle" prop="input" label="姓名：">
                <mu-text-field v-model="user.stuname"></mu-text-field>
              </mu-form-item>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item >
                <mu-form-item :style="formStyle" prop="input" label="账号：">
                  <mu-text-field v-model="user.stuemail" disabled></mu-text-field>
                </mu-form-item>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item>
              <mu-form-item :style="formStyle" prop="radio" label="性别：">
                <mu-radio v-model="user.stusex" value="男" label="男"></mu-radio>
                <mu-radio v-model="user.stusex" value="女" label="女"></mu-radio>
              </mu-form-item>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item>
              <mu-form-item :style="formStyle" prop="select" label="年龄：">
                <mu-select v-model="user.stuage">
                  <mu-option v-for="(option,index) in options" :key="index" :label="option+''" :value="option"></mu-option>
                </mu-select>
              </mu-form-item>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item>
              <mu-form-item :style="formStyle" prop="input" label="家庭地址：">
                <mu-text-field v-model="user.stuaddress"></mu-text-field>
              </mu-form-item>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item>
              <mu-form-item :style="formStyle" prop="input" label="联系电话：">
                <mu-text-field v-model="user.stutel"></mu-text-field>
              </mu-form-item>
            </mu-list-item>
          </mu-list>
          <mu-button @click="closeModal" style="margin-left: 10px;margin-top: 10px;" class="mui-pull-left" color="error">取消</mu-button>
          <mu-button style="margin-right: 10px;margin-top: 10px;" class="mui-pull-right" color="primary" @click="submitForm">确认</mu-button>
        </mu-form>
      </mu-paper>
    </div>
  </div>
  <!-- 修改信息模态框 -->
  </div>
</template>
<script>
   import headImg from '../assets/images/logoimg.png'
   import '../common/validationForm.js'
  export default {
    data () {
      return {
        headImg,
        loadImg: '../assets/clipper/loading.gif',
        user: {
          stuprofilephoto: ''
        },
        options: [],
        formStyle: {
          paddingTop: '22px',
          paddingBottom: '5px'
        }
      }
    },
    created (){
      this.getUserinfo();
      for(let i=1; i<=70; i++){
        this.options.push(i);
      }
    },
    methods: {
      getUserinfo: function () {
        let token = localStorage.getItem("token");
        if(!token)
          token = "";
        this.$http.get(this.$api.session, {params:{token: token}}).then(res => {
          console.log(res.data);
          if (res.data.code==0) {
            this.user = res.data.data;
            if (this.user.stuprofilephoto==null) this.user.stuprofilephoto = headImg;
          } else {
            this.$alert(res.data.message);
          }
        })
      },
      submitForm: function () {
        let params = this.user;
        this.$http.post(this.$api.student, params).then(res => {
          console.log(res.data);
          if (res.data.code==0) {
            this.$toast.success(res.data.message);
            this.closeModal();
            window.location.reload();
          }else{
            this.$toast.warning(res.data.message);
          }
        })
      },
      change( event ) {
        let image = document.getElementById('img'); //预览对象
        this.clip(event , {
          resultObj : image,
          aspectRatio : 1
        })
      },
      openModal () {
        document.getElementById("modal").classList.add("mui-active");
      },
      closeModal () {
        document.getElementById("modal").classList.remove("mui-active");
      }
    },
    mounted () {
    }
  }
</script>
<style scoped>
  .fileInput{
    height:256px;
    overflow: hidden;
    font-size: 300px;
    position:absolute;
    right:0;
    top:0;
    opacity: 0;
    filter:alpha(opacity=0);
    cursor:pointer;
  }
  mui-item{
    height: 55px;
  }
  .mui-modal{
    top: 48px;
    color: black;
  }
  h3{
    text-align: center;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
    width: 100%;
  }

  a {
    color: #42b983;
  }

  .mu-raised-button.mu-button-full-width {
    width: 80%;
    left: 10%;
}
</style>
