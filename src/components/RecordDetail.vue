<template>
  <div>
    <div class="mui-content">
      <table width="100%" class="table">
        <tr>
          <th width="35%">订单编号</th>
          <td>{{notice.order.orderid}}</td>
        </tr>
        <tr>
          <th>教师名称</th>
          <td>{{notice.order.teacher.teachername}}</td>
        </tr>
        <tr>
          <th>课程名称</th>
          <td>{{notice.order.course.coursename}}</td>
        </tr>
        <tr>
          <th>开始时间</th>
          <td>{{notice.order.starttime | date}}</td>
        </tr>

        <tr>
          <th>课程时长</th>
          <td>{{notice.order.duration}}</td>
        </tr>
        <tr>
          <th>订单状态</th>
          <td>
            {{notice.status?"已同意":"未同意"}}
          </td>
        </tr>
        <tr>
          <th>课程状态</th>
          <td>
            {{notice.order.coursestatus?"已上课":"未上课"}}
          </td>
        </tr>
          <tr v-show="notice.order.message!=null">
            <th>留言</th>
            <td><div style="width:200px;word-wrap: break-word;">{{notice.order.message}}</div></td>
          </tr>
          <tr v-show="notice.order.score!=null">
            <th>评分</th>
            <td>
              <div id="star" class="icons mui-inline" style="margin-left: 6px;">
                <i :data-index="i" v-for="i in notice.order.score" :key="i" :class="filledStar"></i>
                <i :data-index="i" v-for="i in 5-notice.order.score" :key="i" :class="star"></i>
              </div>
            </td>
          </tr>
        <tr v-show="notice.order.multiple">
          <th>提示</th>
          <td>此课程为多人课程尚不支持确认上课和留言评价功能</td>
        </tr>
      </table>
      <!--留言按钮 评价打分按钮-->
        <div  class="btn-box">
          <mu-button v-if="notice.status && notice.order.coursestatus && notice.order.message==null && (notice.order.score==null || notice.order.score==0)" full-width color="primary" :to="{name: 'grade',query: {id: notice.order.orderid}}">留言评分</mu-button>
          <mu-button v-if="notice.status && !notice.order.coursestatus && !notice.order.multiple" full-width color="primary" @click="confirmClass(notice.order.orderid)" >确认上课</mu-button>
        </div>
    </div>
  </div>
</template>
<script>
  import bus from '../common/eventBus.js'
  export default {
    data () {
      return {
        notice: {
          order: {
            'orderid': '',
            'teachername': ''
          },
          course: {
            'coursename': ''
          }
        },
        star: 'mui-icon mui-icon-star',
        filledStar: 'mui-icon mui-icon-star mui-icon-star-filled'
      }
    },
    created: function(){
      let nid = this.$route.query.id;
      this.getRecordDetail(nid);
      /*bus.$on('recordDetailEvent', val => {
        this.getRecordDetail(val);
      });*/
    },
    methods: {
       getRecordDetail: function (nid) {
        this.$http.get(this.$api.recorddetail+nid).then( res => {
          console.log(res.data);
          if(res.data.code==0){
            this.notice = res.data.data;
          }else{
            this.$alert("加载错误");
          }
        })
      },
      confirmClass: function (orderid) {
          this.$http.get(this.$api.confirmclass+orderid).then(res => {
            console.log(res.data);
            if (res.data.code==0){
              this.$toast.success("确认成功");
              this.$router.push({name: 'grade',query: {id: orderid}});
            }else{
              this.$toast.warning("确认失败");
            }
          })
      }
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
