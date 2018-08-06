<template>
  <div>
    <mu-container>
      <mu-tabs :value.sync="active3" color="green" indicator-color="yellow" full-width>
        <mu-tab>等待中</mu-tab>
        <mu-tab>已确认</mu-tab>
        <mu-tab>已拒绝</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active3 === 0">
        <mu-paper :z-depth="1" class="demo-list-wrap">
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
                <mu-button small color="warning">取消订单</mu-button>
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
                <mu-button small color="warning">取消订单</mu-button>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
          </mu-list>
        </mu-paper>
      </div>
      <div class="demo-text" v-if="active3 === 1">
        <mu-paper :z-depth="1" class="demo-list-wrap">
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
                <mu-button small color="primary">详情</mu-button>
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
                <mu-button small color="primary">详情</mu-button>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
          </mu-list>
        </mu-paper>
      </div>
      <div class="demo-text" v-if="active3 === 2">
        <mu-paper :z-depth="1" class="demo-list-wrap">
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
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
          </mu-list>
        </mu-paper>
      </div>
    </mu-container>
  </div>
</template>
<script>
  export default {
    name: 'Record',
    data () {
      return {
        active3: 0
      };
    }
  }
</script>
<style>

</style>
