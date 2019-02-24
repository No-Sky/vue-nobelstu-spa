<template>
  <div>
    <!--轮播图-->
    <mu-carousel transition="fade" style="width:100%;height: 200px;" >
      <mu-carousel-item v-for="(ad, index) in ads" :key="index">
        <img :src="ad.pic">
      </mu-carousel-item>
    </mu-carousel>
    <!--推荐教师-->
    <mu-container style="margin-top: 7px; width:98%">
      <mu-flex justify-content="center">
        <mu-paper>
          <mu-grid-list>
              <mu-grid-tile v-for="(tile, index) in list" :key="index">
                    <img :src="tile.teacherprofilephoto" >
                    <span slot="title">{{tile.teachername}}</span>
                    <!--<span slot="subTitle">by <b>{{tile.author}}</b></span>-->
                    <mu-button slot="action" @click="toTeacherinfo(tile.teacherid)" icon>
                      <mu-icon value="visibility" color="lightblue"></mu-icon>
                    </mu-button>
              </mu-grid-tile>
          </mu-grid-list>
        </mu-paper>
      </mu-flex>
    </mu-container>
  </div>
</template>

<script>
  import bus from '../common/eventBus.js'

  export default {
    name: 'Recommend',
    data () {
      return {
        ads: [
          {'pic': 'http://img.htmleaf.com/1502/svg-background-1.jpg'}
        ],
        list: [{
          teacherid: 0,
          teachername: '还没有推荐教师',
          teacherprofilephoto: 'https://images.pexels.com/photos/6803/light-rocks-pot-white.jpg'
        },{
          teacherid: 1,
          teachername: '还没有推荐教师',
          teacherprofilephoto: 'https://images.pexels.com/photos/6803/light-rocks-pot-white.jpg'
        }
        ]
      }
    },
    created () {
      this.getRecommended();
      this.getAds();
    },
    methods: {
      getRecommended: function(){
        this.$http.get(this.$api.recommend).then(res => {
          console.log(res.data);
          if(res.data.lehght != 0){
            this.list = res.data;
          }
        })
      },
      getAds: function () {
        this.$http.get(this.$api.ads).then(res => {
          console.log(res.data);
          if(res.data.lenght != 0){
            this.ads = res.data;
          }
        })
      },
      toTeacherinfo: function (teacherid) {
        setTimeout(()=>{
          bus.$emit("teacherInfoEvent",teacherid);
        },200);
        this.$router.push({path: 'teacher',query: {id: teacherid}});
      }
    },
    mounted(){

    },
    beforeDestroy () {

    }
  }
</script>
<style scoped>
  img{
    width:100%;
    height: 200px;
  }
</style>
<style>
  /*@import '//fonts.useso.com/css?family=Roboto:300,400,500,700,400italic';*/
  /*@import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';*/
  .container{
    padding-right: 2px;
    padding-left: 2px;
    padding-top: 0px;
  }
  .mu-grid-tile-titlebar{
    height: 34px !important;
  }
</style>
