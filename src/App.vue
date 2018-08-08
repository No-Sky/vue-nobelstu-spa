<template>
  <div id="app">
    <mu-container>
      <mu-drawer :open.sync="open" :docked="docked" :style="slideStyle">
        <mu-list>
          <mu-list-item avatar style="margin-top:50px;">
            <mu-avatar :size="size">
              <img :src="headimg">
            </mu-avatar>
          </mu-list-item>
          <mu-list-item button style="margin-top: 45px;" to="/login" @click="closeDrawer">
            <mu-icon value="input" color="primary"></mu-icon>&nbsp;&nbsp;
            请登录
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
          <mu-list-item  button @click="closeDrawer">
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
        <mu-button
          v-show="(this.$route.path=='/search'||this.$route.path=='/login'||this.$route.path=='/reg'||this.$route.path=='/forgetpwd')"
          icon slot="right">
          <mu-icon value=""></mu-icon>
        </mu-button>
        <mu-button
          v-show="!(this.$route.path=='/search'||this.$route.path=='/login'||this.$route.path=='/reg'||this.$route.path=='/forgetpwd')"
          to="/search" icon slot="right">
          <mu-icon value="search"></mu-icon>
        </mu-button>
        NobelEdu
      </mu-appbar>
    </div>

    <router-view style="margin-top: 46px;margin-bottom:80px;"></router-view>

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
import headimg from './assets/images/hnsoftedu.jpg'
import slidebg from './assets/images/sidebar-1.jpg'
  export default {
    name: 'App',
    data () {
      return {
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
    methods: {
      goBack () {
        this.$router.go(-1);
      },
      closeDrawer () {
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
