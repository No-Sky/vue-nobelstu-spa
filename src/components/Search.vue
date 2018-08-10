<template>
  <div>
    <div class="mui-content">
      <div id='list' style="height: 100%" class="mui-indexed-list">
        <div class="mui-indexed-list-search mui-input-row mui-search">
          <input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="搜索老师和课程">
        </div>
        <!-- 没有这个div，整个网页就无法滚动!!!!!! -->
        <div style="display: none;" class="mui-indexed-list-bar" id="list-bar"></div>
        <div style="display: none;" class="mui-indexed-list-alert"></div>
        <div class="mui-indexed-list-inner">
          <div class="mui-indexed-list-empty-alert">没有数据</div>
          <ul class="mui-table-view">
            <!--<li data-group="teacher" class="mui-table-view-divider mui-indexed-list-group">教师</li>
              <li  @click="toTeacherinfo(1)" :data-value="马某" data-tags="" class="mui-table-view-cell mui-indexed-list-item">马某</li>
            <li data-group="course" class="mui-table-view-divider mui-indexed-list-group">课程</li>
              <li   @click="toTeacherinfo(1)" data-value="java" data-tags="" class="mui-table-view-cell mui-indexed-list-item">Java<span class="mui-pull-right" style="font-size: 12px;">授课教师：马某</span></li>-->
            <li data-group="teacher" class="mui-table-view-divider mui-indexed-list-group">教师</li>
              <li v-for="teacher in teachers" :key="teacher.teacherid" @click="toTeacherinfo(teacher.teacherid)" :data-value="teacher.teachername"
                  data-tags="" class="mui-table-view-cell mui-indexed-list-item">
                {{teacher.teachername}}
              </li>
            <li data-group="course" class="mui-table-view-divider mui-indexed-list-group">课程</li>
              <li v-for="course in courses"  @click="toTeacherinfo(course.teacher.teacherid)" :data-value="course.coursename"
                  data-tags="" class="mui-table-view-cell mui-indexed-list-item">
                 {{course.coursename}}
                 <span class="mui-pull-right" style="font-size: 12px;">授课教师：{{course.teacher.teachername}}</span>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import bus from '../common/eventBus.js'
  export default {
    name: 'Search',
    data () {
      return {
        teachers: [],
        courses: []
      }
    },
    created () {
      this.getData();
    },
    methods: {
      getData: function(){
        this.$http.get(this.$api.search).then( res =>{
          console.log(res.data);
          if(res.data.code==0){
            this.teachers = res.data.data.teachers;
            this.courses = res.data.data.courses;
          }else{
            this.$toast.error(res.data.message)
          }
        })
      },
      toTeacherinfo (id) {
        setTimeout(()=>{
          bus.$emit("teacherInfoEvent",id);
        },200);
        this.$router.push({path: 'teacher',query: {id: id}});
      }
    },
    mounted () {
      mui.ready(function () {
        mui.init();
        let header = document.getElementById('header');
        let list = document.getElementById('list');
        //calc hieght
        list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
        //create
        window.indexedList = new mui.IndexedList(list);
      });
    }
  }
</script>
<style>
  html,
  body {
    height: 100%;
    overflow: hidden;
  }
  .mui-bar {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
ul{
  height: 100%;
}

</style>
