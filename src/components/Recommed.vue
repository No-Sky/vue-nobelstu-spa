<template>
  <div>
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
          teacherid: 0,
          teachername: 'awdawd',
          teacherprofilephoto: 'https://images.pexels.com/photos/6803/light-rocks-pot-white.jpg'
        },{
          teacherid: 1,
          teachername: 'awdawd',
          teacherprofilephoto: 'https://images.pexels.com/photos/6803/light-rocks-pot-white.jpg'
        },{
          teacherid: 2,
          teachername: 'awdawd',
          teacherprofilephoto: 'https://images.pexels.com/photos/6803/light-rocks-pot-white.jpg'
        },{
          teacherid: 3,
          teachername: 'awdawd',
          teacherprofilephoto: 'https://images.pexels.com/photos/6803/light-rocks-pot-white.jpg'
        },{
            teacherid: 4,
            teachername: 'awdawd',
            teacherprofilephoto: 'https://images.pexels.com/photos/6803/light-rocks-pot-white.jpg'
          }
        ]
      }
    },
    created () {
      this.getRecommended()
    },
    methods: {
      getRecommended: function(){
        this.$http.get(this.$api.recommend).then(res => {
          console.log(res.data);
          if(res.data){
            this.list = res.data;
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
