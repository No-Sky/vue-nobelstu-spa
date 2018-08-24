<template>
  <div>
    <!--<div class="mui-content">
      <div id='list' style="height: 100%" class="mui-indexed-list">
        <div class="mui-indexed-list-search mui-input-row mui-search">
          <input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="搜索老师和课程">
        </div>
        &lt;!&ndash; 没有这个div，整个网页就无法滚动!!!!!! &ndash;&gt;
        <div style="display: none;" class="mui-indexed-list-bar" id="list-bar"></div>
        <div style="display: none;" class="mui-indexed-list-alert"></div>
        <div class="mui-indexed-list-inner">
          <div class="mui-indexed-list-empty-alert">没有数据</div>
          <ul class="mui-table-view">
            &lt;!&ndash;<li data-group="teacher" class="mui-table-view-divider mui-indexed-list-group">教师</li>
              <li  @click="toTeacherinfo(1)" :data-value="马某" data-tags="" class="mui-table-view-cell mui-indexed-list-item">马某</li>
            <li data-group="course" class="mui-table-view-divider mui-indexed-list-group">课程</li>
              <li   @click="toTeacherinfo(1)" data-value="java" data-tags="" class="mui-table-view-cell mui-indexed-list-item">Java<span class="mui-pull-right" style="font-size: 12px;">授课教师：马某</span></li>&ndash;&gt;
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
    </div>-->

    <mt-search
      style="height: 45px;"
      cancel-text="取消"
      v-model="value">
    </mt-search>

    <div ref="resultList" :style="{height: resultListHeight + 'px'}">
      <mt-index-list>
        <mt-index-section index="教师" v-show="regTeacherListItem(teachers)">
          <mt-cell v-for="(teacher,index) in teachers" :key="index" :title="teacher.teachername"
                   v-show="regItem(teacher.teachername)"
                   @click.native="toTeacherinfo(teacher.teacherid)">
          </mt-cell>
        </mt-index-section>
        <mt-index-section index="课程" v-show="regCourseListItem(courses)">
          <mt-cell v-for="(course,index) in courses" :key="index" :title="course.coursename"
                   :value="course.teacher.teachername" v-show="regItem(course.coursename) || regItem(course.teacher.teachername)"
                   @click.native="toTeacherinfo(course.teacher.teacherid)">
          </mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>

    </div>
</template>
<script>
  import bus from '../common/eventBus.js'
  import 'mint-ui/lib/style.css'

  export default {
    name: 'Search',
    data () {
      return {
        teachers: [],
        courses: [],
        value: "",
        resultListHeight: 0
      }
    },
    created () {
      this.getData();
    },
    methods: {
      //模糊搜索规则
      regTeacherListItem: function(value){
        let regVal = new RegExp(this.value.toLowerCase());
        for (let i=0;i<value.length;i++){
          if (regVal.test(value[i].teachername.toLowerCase())){
            return true;
          }
        }
      },
      regCourseListItem: function(value){
        let regVal = new RegExp(this.value.toLowerCase());
        for (let i=0;i<value.length;i++){
          if (regVal.test(value[i].coursename.toLowerCase()) || regVal.test(value[i].teacher.teachername.toLowerCase())){
            return true;
          }
        }
      },
      regItem: function(value){
        let regVal = new RegExp(this.value.toLowerCase());
        return regVal.test(value.toLowerCase());
      },
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
      // 计算resultList的高度
      let winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      this.resultListHeight  = winHeight  - this.$refs.resultList.getBoundingClientRect().top
    },
    computed: {
    },
    beforeDestroy () {
      bus.$off("reloadEvent");
    }
  }
</script>
<style >
  .mint-indexlist-nav {
    display: none !important;
  }
  .mint-searchbar-core {
    height: 26px !important;
    margin-bottom: 0px !important;
  }
 /* .mui-bar {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
ul{
  height: 100%;
}*/

</style>
