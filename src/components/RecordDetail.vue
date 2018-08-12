<template>
  <div>
    <div class="mui-content">
      <table width="100%" class="table">
        <tr>
          <th width="35%">订单编号</th>
          <td>{{order.orderid}}</td>
        </tr>
        <tr>
          <th>教师名称</th>
          <td>{{order.teacher.teachername}}</td>
        </tr>
        <tr>
          <th>课程名称</th>
          <td>{{order.course.coursename}}</td>
        </tr>
        <tr>
          <th>开始时间</th>
          <td>{{order.starttime | date}}</td>
        </tr>

        <tr>
          <th>课程时长</th>
          <td>{{order.duration}}</td>
        </tr>
        <tr>
          <th>订单状态</th>
          <td>
            {{order.orderstatus}}
          </td>
        </tr>
        <tr>
          <th>课程状态</th>
          <td>
            {{order.coursestatus}}
          </td>
        </tr>
          <tr>
            <th>留言</th>
            <td><div style="width:200px;word-wrap: break-word;">{{order.message}}</div></td>
          </tr>
          <tr>
            <th>评分</th>
            <td>
              <div id="star" class="icons mui-inline" style="margin-left: 6px;">
                <i :data-index="i" v-for="i in order.score" :key="i" :class="filledStar"></i>
                <i :data-index="i" v-for="i in 5-order.score" :key="i" :class="star"></i>
              </div>
            </td>
          </tr>
      </table>
      <!--留言按钮 评价打分按钮-->
        <div  class="btn-box">
          <mu-button v-if="order.orderstatus==2 && order.coursestatus && order.message==null && (order.score==null || order.score==0)" full-width color="primary" to="/grade">留言评分</mu-button>
          <mu-button v-if="order.orderstatus==2 && order.coursestatus==false" full-width color="primary" >确认上课</mu-button>
        </div>
    </div>
  </div>
</template>
<script>
  import bus from '../common/eventBus.js'
  export default {
    data () {
      return {
        order: {
          score: 0,
          course: {
            coursename: ''
          },
          teacher: {
            teachername: ''
          }
        },
        star: 'mui-icon mui-icon-star',
        filledStar: 'mui-icon mui-icon-star mui-icon-star-filled'
      }
    },
    created: function(){
      let orderid = this.$route.query.id;
      this.getRecordDetail(orderid);
      /*bus.$on('recordDetailEvent', val => {
        this.getRecordDetail(val);
      });*/
    },
    methods: {
       getRecordDetail: function (orderid) {
        this.$http.get(this.$api.recorddetail+orderid).then( res => {
          console.log(res.data);
          if(res.data.code==0){
            this.order = res.data.data;
          }else{
            this.$alert("加载错误");
          }
        })
      },
      /*showStar: function (score) {
        console.log("score:"+score)
        let parent = document.getElementById('star');
        let children = parent.childNodes;
        for(let i=0;i<score;i++){
          children[i].classList.add(this.filledStar);
        }
      }*/
    },
    mounted () {
    },
    beforeDestroy () {
      bus.$off('recordDetailEvent');
    }
  }
</script>
<style>
  .table {
    font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
    margin-top: 5px;
    border: 1px solid #cad9ea;
    color: #666;
  }

  .table th {
    background-repeat: repeat-x;
    height: 30px;
  }

  .table td,
  .table th {
    border: 1px solid #cad9ea;
    padding: 0 1em 0;
  }

  .table tr.alter {
    background-color: #f5fafe;
  }
  .table th{
    background-color: navajowhite;
  }
  .table tr{
    background-color: wheat;
  }
  .mui-icon-star-filled:before{
    color: yellow;;
  }
</style>
