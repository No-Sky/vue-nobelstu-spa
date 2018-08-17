<template>
  <div>
    <mu-container :style="avatarStyle">
      <mu-row justify-content="center">
        <mu-avatar :size="size">
          <img :src="(teacher.teacherprofilephoto==''||teacher.teacherprofilephoto==null)?logoImg:this.$api.imgRoot+teacher.teacherprofilephoto">
        </mu-avatar>
      </mu-row>
    </mu-container>
    <mu-paper :z-depth="1">
      <mu-list toggle-nested>
        <mu-list-item >
          {{teacher.teacherinfo}}
        </mu-list-item>
        <mu-divider></mu-divider>
        <div style="margin-left: 5%;font-size: 16px; ">
          <div>
            <mu-icon value="person" color="blue"></mu-icon>&nbsp;&nbsp;<span>{{teacher.teachername}}</span>
          </div>
          <div v-show="teacher.teachertel!=null">
            <mu-icon value="call" color="blue"></mu-icon>&nbsp;&nbsp;<span>{{teacher.teachertel}}</span>
          </div>
          <div v-show="teacher.teacheremail!=null">
            <mu-icon value="mail" color="blue"></mu-icon>&nbsp;&nbsp;<span>{{teacher.teacheremail}}</span>
          </div>
        </div>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="true" nested :open="toggle === 'class'" @toggle-nested="toggle = arguments[0] ? 'class' : ''">
          <mu-list-item-action>
            <mu-icon value="class" color="primary"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>教授课程</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>
          <mu-list-item v-for="course in teacher.courses" :key="course.courseid"  :ripple="false" slot="nested">
            <mu-list-item-content>
              <mu-list-item-title>{{course.coursename}}</mu-list-item-title>
              <mu-list-item-sub-title>{{course.courseinfo}}</mu-list-item-sub-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
            <mu-button style="margin: 0 auto;" color="primary" @click="toFreetime">预定课程</mu-button>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>
<script>
  import bus from '../common/eventBus.js'
  import bg from '../assets/images/4.jpg'
  import logoImg from '../assets/images/logoimg.png'

  export default {
    name: 'Teahcer',
    inject: ['reload'],
    data () {
      return {
        teacher:{
          recommended: false,
          roleid: 0,
          teachercode: 0,
          teacheremail: '',
          teacherid: 0,
          teacherinfo: '',
          teachername: '',
          teacherprofilephoto: '',
          teacherpwd: '',
          teacherstatus: '',
          teachertel: '',
          courses: []
         },
        logoImg,
        toggle: '',
        size: 165,
        avatarStyle: {
          padding: '10px 0',
          backgroundImage: 'url("'+bg+'")'
        }
      }
    },
    created: function () {
     bus.$on("teacherInfoEvent",id => {
        this.getTeacher(id);
      })
      if(this.teacher.teacherid==0){
        let id = this.$route.query.id;
       this.getTeacher(id);
      }
    },
    methods: {
      getTeacher: function(teacherid){
        this.$http.get(this.$api.teacher+teacherid).then(res =>{
          // console.log(res.data);
          if (res.data.code==0) {
            this.teacher = res.data.data;
          }
        })
      },
      toFreetime: function(){
        setTimeout(()=>{
          bus.$emit("freetimeEvent",this.teacher.teacherid);
        },200);
        this.$router.push({path: 'freetime',query: {id: this.teacher.teacherid}});
      }
    },
    mounted () {

    },
    beforeDestroy () {
      bus.$off('teacherInfoEvent');
    }
  }
</script>
<style scoped>
  .material-icons{
    font-size: 18px;
  }
</style>
