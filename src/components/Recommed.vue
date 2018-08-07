<template>
  <div>
    <!--侧边栏-->
    <!--<mu-container >
      <mu-drawer :open.sync="open" :docked="false" >
        <mu-list>
          <router-link :to="{'name':'login'}" v-if="!userinfo">
            <mu-list-item button :ripple="false">
              <mu-list-item-action title="登陆">
                <mu-icon value="person_outline"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>登陆</mu-list-item-title>
            </mu-list-item>
          </router-link>
          <router-link :to="{'name':'person'}" v-if="userinfo">
            <mu-list-item button :ripple="false">
              <mu-list-item-action title="个人中心">
                <mu-avatar>
                  <img  v-bind:src="userinfo.PicUrl">
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-title>{{userinfo.UsereName}}</mu-list-item-title>

            </mu-list-item>
          </router-link>
          <mu-divider />
          <router-link :to="{'name':'index'}">
            <mu-list-item button :ripple="false">
              <mu-list-item-action title="阅读历史">
                <mu-icon value="import_contacts"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>阅读历史</mu-list-item-title>
            </mu-list-item>
          </router-link>
          <router-link :to="{'name':'login'}">
            <mu-list-item button :ripple="false">
              <mu-list-item-action title="关于">
                <mu-icon value="priority_high"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>关于</mu-list-item-title>
            </mu-list-item>
          </router-link>
        </mu-list>
      </mu-drawer>
    </mu-container>-->

    <!--轮播图-->
    <mu-carousel transition="fade" style="width:100%;height: 200px;" >
      <mu-carousel-item>
        <img :src="carouselImg1">
      </mu-carousel-item>
      <mu-carousel-item>
        <img :src="carouselImg2">
      </mu-carousel-item>
      <mu-carousel-item>
        <img :src="carouselImg3">
      </mu-carousel-item>
      <mu-carousel-item>
        <img :src="carouselImg4">
      </mu-carousel-item>
    </mu-carousel>

    <!--推荐教师-->
    <mu-container>
      <mu-flex justify-content="center">
        <mu-paper>
          <mu-grid-list>
              <mu-grid-tile v-for="(tile, index) in list" :key="index">
                  <!--<router-link :to="'/teacher?id='+index">-->
                    <img :src="tile.image" >
                    <span slot="title">{{tile.title}}</span>
                    <!--<span slot="subTitle">by <b>{{tile.author}}</b></span>-->
                    <mu-button slot="action" @click="toTeacherinfo(index)" icon>
                      <mu-icon value="visibility" color="lightblue"></mu-icon>
                    </mu-button>
                  <!--</router-link>-->
              </mu-grid-tile>
          </mu-grid-list>
        </mu-paper>
      </mu-flex>
    </mu-container>
  </div>
</template>

<script>
  import carouselImg1 from '../assets/images/1.jpg';
  import carouselImg2 from '../assets/images/2.jpg';
  import carouselImg3 from '../assets/images/3.jpg';
  import carouselImg4 from '../assets/images/4.jpg';

  export default {
    name: 'Recommend',
    data () {
      return {
        carouselImg1,
        carouselImg2,
        carouselImg3,
        carouselImg4,
        list: [{
          title: 'awdawd',
          image: 'https://images.pexels.com/photos/6803/light-rocks-pot-white.jpg',
          auther: 'fjawdjwapdjo'
        },{
          title: 'awdawd',
          image: 'https://images.pexels.com/photos/6803/light-rocks-pot-white.jpg',
          auther: 'fjawdjwapdjo'
        },{
          title: 'awdawd',
          image: 'https://images.pexels.com/photos/6803/light-rocks-pot-white.jpg',
          auther: 'fjawdjwapdjo'
        }
        ]
      }
    },
    methods: {
      toTeacherinfo: function (id) {
        this.$router.push({path: 'teacher',query: {id: id}});
      }
    },
    mounted(){

    }
  }
</script>
<style scoped>
  /*@import '//fonts.useso.com/css?family=Roboto:300,400,500,700,400italic';*/
  /*@import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';*/
  img{
    width:100%;
    height: 200px;
  }
  .container{
    padding-right: 2px;
    padding-left: 2px;
  }
  .mu-grid-tile-titlebar{
    height: 20%;
  }
</style>
