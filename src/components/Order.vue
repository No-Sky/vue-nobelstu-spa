<template>
  <div>
    <mu-container>
      <mu-form :model="order" label-position="left" label-width="100">
        <mu-form-item prop="input" label="授课教师">
          <mu-text-field v-model="order.teacher.teachername" disabled></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="input" label="开始时间">
          <mu-text-field v-model="order.starttime"  disabled></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="input" label="课程时长">
          <mu-text-field v-model="order.duration" disabled></mu-text-field>
        </mu-form-item>
        <mu-form-item v-if="order.course.courseid!=-1" prop="input" label="选择课程">
          <mu-text-field v-model="order.course.coursename" disabled></mu-text-field>
        </mu-form-item>
        <mu-form-item v-else prop="select" label="选择课程">
          <mu-select v-model="courseid">
            <mu-option v-for="option in options" :key="option.courseid" :label="option.coursename" :value="option.courseid">
              <mu-list-item-action avatar>
                <mu-avatar :size="36" color="primary">
                  {{option.coursename.substring(0, 1)}}
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-list-item-title>{{option.coursename}}</mu-list-item-title>
              </mu-list-item-content>
            </mu-option>
          </mu-select>
        </mu-form-item>
      </mu-form>
      <mu-button full-width color="primary" @click="confirmOrder">确定预约</mu-button>
    </mu-container>
  </div>
</template>
<script>
  import bus from '../common/eventBus.js'
  import {dateFormat} from "../utils";

  export default {
    name: 'Order',
    data () {
      return {
        order: {
          teacher: {
            teachername: ''
          },
          course: {}
        },
        options: [],
        courseid: null
      }
    },
    created () {
      let id = this.$route.query.id;
      this.getOrder(id);
      /*bus.$on("orderEvent", id => {
        this.getOrder(id);
      })*/
    },
    methods: {
      getOrder: function (orderid) {
        this.$http.get(this.$api.orderdetail+orderid).then(res => {
          console.log(res.data);
          if(res.data.code==0){
            this.order = res.data.data;
            this.order.starttime = dateFormat(this.order.starttime)
            if(this.order.course.courseid==-1){
              this.getCourse(this.order.teacher.teacherid);
            }
          }
        })
      },
      getCourse: function(teacherid){
          this.$http.get(this.$api.teacher+teacherid).then(res => {
            console.log(res.data)
            if(res.data.code==0){
              this.options = res.data.data.courses;
            }else{
              this.$toast.error("获取课程失败，请重试");
            }
          })
      },
      confirmOrder: function () {
        let stu = JSON.parse(localStorage.getItem("user"));
        let params = new URLSearchParams();
        params.append("order.orderid",this.order.orderid);
        params.append("teacher.teacherid", this.order.teacher.teacherid);
        params.append("stu.stuid",stu.stuid);
        params.append("course.courseid",this.options.length!=0?this.courseid:this.order.course.courseid);
        this.$http.post(this.$api.choiceOrder, params).then(res => {
          console.log(res.data);
          if(res.data.isChoice){
            this.$toast.success("预约成功");
            this.$router.push("/")
          }else{
            this.$toast.warning(res.data.errmsg)
          }
        })
      }
    },
    beforeDestroy () {
      bus.$off('orderEvent');
    }
  }
</script>
<style>
  .mu-form-item-label {
    padding-left: 5%;
    padding-top: 1%;
  }
  .mu-text-field-input{

  }
  .mu-form {
    width: 90%;
  }
  .mu-raised-button.mu-button-full-width {
    width: 40%;
    left: 30%;
  }
  .container {
    padding-right: 2px;
    padding-left: 2px;
    padding-top: 2%;
  }
</style>
