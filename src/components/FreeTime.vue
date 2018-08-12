<template>
  <div>
    <mu-paper :z-depth="1" >
      <mu-list textline="three-line">
        <mu-list-item :ripple="false" v-for="order in orders" :key="order.orderid" >
          <mu-list-item-content>
            <mu-list-item-title>课程名： {{order.course.coursename}}</mu-list-item-title>
            <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">开始时间：{{order.starttime | date}}</mu-list-item-sub-title>
            <mu-list-item-sub-title style="color: rgba(0, 0, 0, 0.87);">
              课程时长: {{order.duration}}
            </mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action >
            <mu-button v-if="order.stu" small color="error">已被抢</mu-button>
            <mu-button v-else small color="primary" @click="toOrder(order.orderid)">去预定</mu-button>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider></mu-divider>
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
<style>

</style>
