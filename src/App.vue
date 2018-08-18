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
            NobelEdu账号：<br/>&nbsp;&nbsp;&nbsp;&nbsp;{{user.stuemail}}
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item button to="/userinfo" @click="closeDrawer">
            <mu-icon value="person" color="primary"></mu-icon>&nbsp;&nbsp;
            账号与安全
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item button @click="toRecord">
            <mu-icon value="dashboard" color="primary"></mu-icon>&nbsp;&nbsp;
            约课记录
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item button to="/about" @click="closeDrawer">
            <mu-icon value="grade" color="primary"></mu-icon>&nbsp;&nbsp;
            联系我们
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item v-if="!isLogin" button @click="closeDrawer" to="/reg">
            <mu-icon value="assignment_ind" color="primary"></mu-icon>&nbsp;&nbsp;
            注册
          </mu-list-item>
          <mu-list-item v-else button @click="logout">
            <mu-icon value="power_settings_new" color="primary"></mu-icon>&nbsp;&nbsp;
            退出登录
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
      </mu-drawer>
      </mu-container>
    <div ref="component">
      <!--下拉刷新组件-->
      <mu-load-more @refresh="pullRefresh" :refreshing="refreshing" loading-text="正在刷新">
    <!--顶部-->
    <div id="header" style="width: 100%;height: 46px; position: fixed;top:0;left:0;right:0;z-index:999;">
      <mu-appbar style="width: 100%; height:100%; text-align: center;" color="primary">
        <mu-button
          v-show="this.$route.path=='/index'"
          @click="open=true" icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        <mu-button
          v-show="!(this.$route.path=='/index'||this.$route.path=='/')"
          @click="goBack" icon slot="left">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
        <mu-button to="/index"
          v-show="!(this.$route.path=='/index')"
          icon slot="right">
          <mu-icon value="home"></mu-icon>
        </mu-button>
        <mu-button @click="toSearch"
          v-show="this.$route.path=='/index'"
          icon slot="right">
          <mu-icon value="search"></mu-icon>
        </mu-button>
        NobelEdu
      </mu-appbar>
    </div>
        <keep-alive>
          <router-view  style="margin-top: 46px" :key="key" @loginChange="getUser"></router-view>
        </keep-alive>
    </mu-load-more>
  </div>

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
import {mapActions} from 'vuex'
import bus from './common/eventBus.js'

  export default {
    name: 'App',
    provide (){
      return {
        reload:this.reload
      }
    },
    data () {
      return {
        refreshing: false,
        isLogin: false,
        user: {
          stuprofilephoto: ''
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
    beforeCreate () {

    },
    created () {
      this.refreshSession();
      //this.getUser();
    },
    methods: {
      ...mapActions(['refresh']),
      ...mapActions(['userLoginOut']),
      ...mapActions(['delSession']),
      getUser: function(){
        let user = localStorage.getItem('user');
        if(user){
          this.user = JSON.parse(user)
          if (this.user.stuprofilephoto==null) this.user.stuprofilephoto = headimg;
          this.isLogin = true;
        }
      },
      pullRefresh: function () {
        this.refreshing = true;
        this.$refs.component.scrollTop = 0;
        setTimeout(() => {
          this.refreshing = false;
          window.location.reload()
          // this.$forceUpdate();
        },2000)
      },
      refreshSession: function () {
        // 当主页刷新时，如果服务端设置的cookie（包含sessionId）
        // 的时效到了的话，便会提示未登录
        let token = localStorage.getItem("token");
        if(!token)
          token = "";
        this.$http.get(this.$api.session, {params:{token: token}})
          .then(res => {
            console.dir(res.data)
            if (res.data.code==0){
              this.refresh(res.data.data);
              this.getUser();
            } else if (res.data.code==-1) {
              this.$alert(res.data.message);
              this.logout();
              this.isLogin = false;
              this.user = null;
              this.$router.push("/")
              return false;
            } else if (res.data.code==-2){
              this.isLogin = false;
              this.user = null;
              return false;
            }
          }).catch(err => {
          this.$toast.error(err.message)
        })
        this.refreshing = false;
      },
      logout: function(){
        this.userLoginOut();
        this.delSession();
        this.user = {};
        this.isLogin = false;
        this.closeDrawer();
        this.$router.push("/");
      },
      goBack: function () {
        this.$router.go(-1);
      },
      closeDrawer: function () {
        this.open = false;
      },
      toRecord: function () {
        this.closeDrawer();
        bus.$emit("reloadEvent");
        this.$router.push("/record")
      },
      toSearch: function () {
        setTimeout(() => {
          bus.$emit("reloadEvent");
        }, 200)
        this.$router.push("/search");
      }
    /* reload () {
        // this.isRouterAlive = false
        this.$nextTick(() => (this.isRouterAlive = true))
      }*/
    },
    mounted(){

    },
    computed: {
      key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
      }
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
