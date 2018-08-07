<template>
  <div>
    <mu-paper :z-depth="1" >
      <mu-list textline="two-line">
        <mu-list-item avatar :ripple="false" button>
          <mu-list-item-content>
            <mu-list-item-title>课程名： dmiaodm</mu-list-item-title>
            <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">开始时间：2018-08-12 12:30</mu-list-item-sub-title>
            <mu-list-item-sub-title>
              课程时长: 2小时
            </mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action >
            <mu-list-item-after-text>15 min</mu-list-item-after-text>
            <mu-button small color="primary" to="/order">去预定</mu-button>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item avatar :ripple="false" button>
          <mu-list-item-content>
            <mu-list-item-title>课程名： dmiaodm</mu-list-item-title>
            <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">开始时间：2018-08-12 12:30</mu-list-item-sub-title>
            <mu-list-item-sub-title>
              课程时长: 2小时
            </mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action >
            <mu-list-item-after-text>15 min</mu-list-item-after-text>
            <mu-button small color="primary">去预定</mu-button>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider></mu-divider>
      </mu-list>
    </mu-paper>
  </div>
</template>
<script>
  export default {
    name: 'freetime',
    data () {
      return {}
    },
    methods: {
    }
  }
</script>
<style>

</style>
