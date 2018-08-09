<template>
  <div id="app">
    <mu-container>
      <mu-drawer :open.sync="open" :docked="docked" :style="slideStyle">
        <mu-list>
          <mu-list-item avatar style="margin-top:50px;">
            <mu-avatar :size="size">
              <img :src="!isLogin?headimg:user.stuprofilephoto">
            </mu-avatar>
          </mu-list-item>
          <mu-list-item v-if="!isLogin" button style="margin-top: 45px;" to="/login" @click="closeDrawer">
            <mu-icon value="input" color="primary"></mu-icon>&nbsp;&nbsp;
            请登录
          </mu-list-item>
          <mu-list-item v-else button style="margin-top: 45px;"  @click="closeDrawer">
            NobelEdu账号： {{user.stuemail}}
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item button to="/userinfo" @click="closeDrawer">
            <mu-icon value="person" color="primary"></mu-icon>&nbsp;&nbsp;
            账号与安全
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item button to="/about" @click="closeDrawer">
            <mu-icon value="grade" color="primary"></mu-icon>&nbsp;&nbsp;
            联系我们
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item v-if="!isLogin" button @click="closeDrawer">
            <mu-icon value="assignment_ind" color="primary"></mu-icon>&nbsp;&nbsp;
            注册
          </mu-list-item>
          <mu-list-item v-else button @click="closeDrawer">
            <mu-icon value="power_settings_new" color="primary"></mu-icon>&nbsp;&nbsp;
            退出登录
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
      </mu-drawer>
      </mu-container>
    <!--顶部-->
    <div id="header" style="width: 100%;height: 46px; position: fixed;top:0;left:0;right:0;z-index:999;">
      <mu-appbar style="width: 100%; height:100%; text-align: center;" color="primary">
        <mu-button
          v-show="this.$route.path=='/index'"
          @click="open=true" icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        <mu-button
          v-show="!(this.$route.path=='/index'||this.$route.path=='/record'||this.$route.path=='/user'||this.$route.path=='/')"
          @click="goBack" icon slot="left">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
        <mu-button to="/index"
          v-show="!(this.$route.path=='/index')"
          icon slot="right">
          <mu-icon value="home"></mu-icon>
        </mu-button>
        <mu-button to="/search"
          v-show="this.$route.path=='/index'"
          icon slot="right">
          <mu-icon value="search"></mu-icon>
        </mu-button>
        NobelEdu
      </mu-appbar>
    </div>

    <keep-alive>
      <router-view style="margin-top: 46px"></router-view>
    </keep-alive>


    <!--底部导航-->
    <!--<div style="position: fixed;bottom: 0;width: 100%;z-index: 999;">
      <mu-container>
        <mu-bottom-nav :value.sync="shift">
          <router-link to="/index">
            <mu-bottom-nav-item value="recommend" title="推荐" icon="home"></mu-bottom-nav-item>
          </router-link>
          <router-link to="/record">
            <mu-bottom-nav-item value="record" title="约课记录" icon="history"></mu-bottom-nav-item>
          </router-link>
          <router-link to="/user">
            <mu-bottom-nav-item value="user" title="账号" icon="person"></mu-bottom-nav-item>
          </router-link>
        </mu-bottom-nav>
      </mu-container>
    </div>-->
  </div>
</template>

<script>
import headimg from './assets/images/logoimg.png'
import slidebg from './assets/images/sidebar-2.jpg'
  export default {
    name: 'App',
    data () {
      return {
        isLogin: false,
        user: {
          roleid: '',
          stuid: '',
          stuname: '',
          stuemail: '',
          stupwd: "",
          stuemailcheck: '',
          stuprofilephoto: "",
          stuage: 0,
          stusex: "",
          stuaddress: '',
          stutel: ""
        },
        headimg,
        slideStyle: {
          padding: '10px 0',
          backgroundImage: 'url("'+slidebg+'")'
        },
        size: 150,
        docked: false,
        open: false,
        position: 'left',
        shift: 'recommend'
      }
    },
    /*beforeCreate(){
      // 当主页刷新时，如果服务端设置的cookie（包含sessionId）
      // 的时效到了的话，便会提示未登录
      this.$http.get(this.$api.session)
        .then(res => {
          console.dir(res.data)
          if (res.data.code==500) {
            this.$toast.error(res.data.message);
            this.user = null;
            return false;
          }else{
            let user = localStorage.getItem('user');
            if (user) {
              this.user = JSON.parse(user);
            }
          }
        })
        .catch(err => {
          this.$toast.error(err.message)
        })

    },*/
    created () {
      this.getUser();
      this.isLogin = JSON.stringify(this.user)=={}?false:true;
    },
    methods: {
      getUser: function(){
        let user = localStorage.getItem('user');
        if(user)
          this.user = JSON.parse(user);
        console.log(this.user);
      },
      goBack: function () {
        this.$router.go(-1);
      },
      closeDrawer: function () {
        this.open = false;
      }
    },
    mounted(){

    },
    watch: {
      // '$route': this.path=this.$route.path
    }
  }
</script>
<style>
  @import '//fonts.useso.com/css?family=Roboto:300,400,500,700,400italic';
  @import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
  @import "assets/css/clip.css";
  .container{
    padding-right: 2px;
    padding-left: 2px;
  }

</style>
