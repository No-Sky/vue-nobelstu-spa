<template>
  <div id="app">
    <!--顶部-->
    <div style="height: 46px;">
      <mu-appbar style="width: 100%; height:100%; text-align: center;" color="primary">
        NobelEdu
      </mu-appbar>
    </div>

    <router-view></router-view>

    <!--底部导航-->
    <div style="position: fixed;bottom: 0;width: 100%;z-index: 999;">
      <mu-container>
        <mu-bottom-nav :value.sync="shift">
          <router-link to="/index">
            <mu-bottom-nav-item value="recommend" title="推荐" icon="home"></mu-bottom-nav-item>
          </router-link>
          <router-link to="/search">
            <mu-bottom-nav-item value="search" title="搜索" icon="search"></mu-bottom-nav-item>
          </router-link>
          <router-link to="/record">
            <mu-bottom-nav-item value="record" title="约课记录" icon="history"></mu-bottom-nav-item>
          </router-link>
          <router-link to="/user">
            <mu-bottom-nav-item value="user" title="账号" icon="person"></mu-bottom-nav-item>
          </router-link>
        </mu-bottom-nav>
      </mu-container>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {shift: 'recommend'}
    },
    methods: {
    },
    mounted(){

    }
  }
</script>
<style>
  @import '//fonts.useso.com/css?family=Roboto:300,400,500,700,400italic';
  @import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';

 img{
    width:100%;
    height: 200px;
  }
  .container{
    padding-right: 2px;
    padding-left: 2px;
  }
</style>
