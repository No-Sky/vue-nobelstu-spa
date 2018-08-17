<template>
  <div>
    <mu-paper  style="position: fixed;height: 100%;width: 100%;" v-if="orders.length==0" :z-depth="1">
        <div  style="width: 215px; height: 230px;margin-top: 30%;margin-left: auto;margin-right: auto;">
          <img src="../assets/images/empty.png" />
          <span style="margin-left: 30px;font-size: 16px;">还没有添加空闲时间哦</span>
        </div>
    </mu-paper>
    <mu-paper :z-depth="1" >
      <mu-list textline="three-line">
        <div v-for="order in orders" :key="order.orderid">
        <mu-list-item :ripple="false"  >
          <mu-list-item-content>
            <mu-list-item-title>课程名： {{order.course.coursename}}</mu-list-item-title>
            <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">开始时间：{{order.starttime | date}}</mu-list-item-sub-title>
            <mu-list-item-sub-title style="color: rgba(0, 0, 0, 0.87);">
              课程时长: {{order.duration}}
            </mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action >
            <mu-list-item-after-text>{{order.multiple?'多人':''}}</mu-list-item-after-text>
            <mu-button v-if="order.stu" small color="error">已被抢</mu-button>
            <mu-button v-else small color="primary" @click="toOrder(order.orderid)">去预定</mu-button>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider></mu-divider>
        </div>
      </mu-list>
    </mu-paper>
  </div>
</template>
<script>
  import bus from '../common/eventBus.js'
  export default {
    name: 'freetime',
    data () {
      return {
        orders: []
      }
    },
    created: function () {
     bus.$on("freetimeEvent",id => {
        this.getFreetimes(id);
      })
      if (this.orders.length==0) {
        let id = this.$route.query.id;
        this.getFreetimes(id);
      }
    },
    methods: {
      getFreetimes: function (id) {
        this.$http.get(this.$api.orders+id).then( res => {
          console.log(res.data);
          if(res.data){
            this.orders = res.data;
          }else{
            this.$alert("加载失败");
          }
        })
      },
      toOrder: function (id) {
        setTimeout(()=>{
          bus.$emit("orderEvent",id);
        },200);
        this.$router.push({path: 'order',query: {id: id}});
      }
    },
    beforeDestroy () {
      bus.$off('freetimeEvent');
    }
  }
</script>
<style scoped>

</style>
