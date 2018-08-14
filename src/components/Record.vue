<template>
  <div>
    <mu-container>
      <mu-tabs :value.sync="active" color="green" indicator-color="yellow" full-width>
        <mu-tab>等待中</mu-tab>
        <mu-tab>已确认</mu-tab>
        <mu-tab>已拒绝</mu-tab>
      </mu-tabs>
      <div v-if="active === 0">
        <mu-paper :z-depth="1">
          <mu-alert v-if="doEmpty">您还没有预约课程</mu-alert>
          <mu-list v-else textline="two-line">
            <div v-for="notice in notice_do" :key="notice.noticeid">
            <mu-list-item  :ripple="true" button>
              <mu-list-item-content>
                <mu-list-item-title>课程名： {{notice.course.coursename}}</mu-list-item-title>
                <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">开始时间：{{notice.order.starttime | date}}</mu-list-item-sub-title>
                <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
                  课程时长: {{notice.order.duration}}
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action >
                <mu-list-item-after-text >{{notice.selectivetime | date}}</mu-list-item-after-text>
                <mu-button small color="warning">取消订单</mu-button>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
            </div>
          </mu-list>
        </mu-paper>
      </div>
      <div v-if="active === 1">
        <mu-paper :z-depth="1" >
          <mu-alert v-if="yesEmpty">您还没有已同意课程</mu-alert>
          <mu-list v-else textline="two-line">
            <div v-for="notice in notice_Y" :key="notice.noticeid">
            <mu-list-item  :ripple="true" button>
              <mu-list-item-content>
                <mu-list-item-title>课程名： {{notice.order.course.coursename}}</mu-list-item-title>
                <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">开始时间：2098981</mu-list-item-sub-title>
                <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
                  课程时长: {{notice.order.duration}}
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action >
                <mu-list-item-after-text>2 min</mu-list-item-after-text>
                <mu-button small color="primary" @click="toRecordDetail(notice.order.orderid)">详情</mu-button>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
            </div>
          </mu-list>
        </mu-paper>
      </div>
      <div v-if="active === 2">
        <mu-paper :z-depth="1">
          <mu-alert v-if="noEmpty">您还没有已拒绝课程</mu-alert>
          <mu-list v-else textline="two-line">
            <div v-for="notice in notice_N" :key="notice.noticeid">
            <mu-list-item  :ripple="true" button>
              <mu-list-item-content>
                <mu-list-item-title>课程名： {{notice.course.coursename}}</mu-list-item-title>
                <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">开始时间：{{notice.order.starttime | date}}</mu-list-item-sub-title>
                <mu-list-item-sub-title>
                  课程时长: {{notice.order.duration}}
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action >
                <mu-list-item-after-text>{{notice.order.selectivetime | date}}</mu-list-item-after-text>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
          </div>
          </mu-list>
        </mu-paper>
      </div>
    </mu-container>
  </div>
</template>
<script>
  import bus from '../common/eventBus.js'
  export default {
    name: 'Record',
    data () {
      return {
        active: 0,
        notice_do: [],
        notice_Y: [],
        Notice_N: [],
        doEmpty: true,
        yesEmpty: true,
        noEmpty: true
      };
    },
    created: function () {
      this.getRecords();
    },
    methods: {
      getRecords: function () {
        this.$http.get(this.$api.records).then(res => {
          console.log(res.data);
          if(res.data.code==0){
            this.notice_do = res.data.data.notice_do;
            this.notice_Y = res.data.data.notice_Y;
            this.notice_N = res.data.data.notice_N;
            this.doEmpty = this.notice_do[0].noticeid!=null;
            this.yesEmpty = this.notice_Y[0].noticeid!=null;
            this.noEmpty = this.notice_N[0].noticeid!=null;
          }else{
            this.$alert("加载错误");
          }
        })
      },
      toRecordDetail: function (orderid) {
        setTimeout(()=> {
          bus.$emit('recordDetailEvent',orderid);
        }, 200);
        this.$router.push({path: 'recorddetail',query: {id: orderid}});
      }
    }
  }
</script>
<style scoped>
  .mu-alert {
    color: black;
  }
  .container{
    padding-right: 0px;
    padding-left: 0px;
  }
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
  .btn-box{
    margin-top: 5px;
    text-align: center;
  }
</style>
