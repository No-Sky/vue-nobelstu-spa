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
        <mu-form-item v-if="order.course" prop="input" label="课程时长">
          <mu-text-field v-model="order.course.coursename" disabled></mu-text-field>
        </mu-form-item>
        <mu-form-item v-else prop="select" label="选择课程">
          <mu-select re="courseForm.courseid">
            <mu-option v-for="option in options" :key="option.courseid" :label="option.coursename" :value="option.courseid"></mu-option>
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
        coursesForm: {
          orderid: '',
          teacherid: 0,
          stuid: 0,
          courseid: 0
        }
      }
    },
    created () {
      bus.$on("orderEvent", id => {
        this.getOrder(id);
      })
    },
    methods: {
      getOrder: function (orderid) {
        this.$http.get(this.$api.orderdetail+orderid).then(res => {
          console.log(res.data);
          if(res.data.code==0){
            this.order = res.data.data;
            this.order.starttime = dateFormat(this.order.starttime);
            if(!this.order.course){
              this.getCourse();
            }
          }
        })
      },
      getCourse: function(teacherid){
          this.$http.get(this.$api.teacher+teacherid).then(res => {
            if(res.data.code==0){
              this.options = res.data.data.courses;
            }else{
              this.$toast.error("获取课程失败，请重试");
            }
          })
      },
      confirmOrder: function () {
        let form = {
          "order.orderid": this.order.orderid,
          "teacher.teacherid": this.order.teacher.teacherid,
          "stu.stuid": this.order.stu.stuid,
          "course.courseid": this.order.course!=null?this.order.course.courseid:this.coursesForm.courseid
        }
        console.log(form);
        this.$http.post(this.$api.choiceOrder, form).then(res => {
          console.log(res.data);
          if(res.data.isChoice){
            this.$toast.success("预约成功");
            this.$router.push("/")
          }else{
            this.$toast.warning(res.data.errmag)
          }
        })
      }
    },
    beforeDestroy () {
      bus.$off('orderEvent');
    }
  }
</script>
<style></style>
