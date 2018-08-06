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
                <mu-list-item-title>Ali Connors</mu-list-item-title>
                <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Brunch this weekend?</mu-list-item-sub-title>
                <mu-list-item-sub-title>
                  I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action >
                <mu-list-item-after-text>15 min</mu-list-item-after-text>
                <mu-checkbox color="yellow700" v-model="selects" value="value1" uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item avatar :ripple="false" button>
              <mu-list-item-content>
                <mu-list-item-title>me, Scrott, Jennifer</mu-list-item-title>
                <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Summer BBQ</mu-list-item-sub-title>
                <mu-list-item-sub-title>
                  Wish I could come, but I'm out of town this weekend.
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action >
                <mu-list-item-after-text>2 hr</mu-list-item-after-text>
                <mu-checkbox color="yellow700" v-model="selects" value="value2"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
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
                <mu-list-item-title>Ali Connors</mu-list-item-title>
                <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Brunch this weekend?</mu-list-item-sub-title>
                <mu-list-item-sub-title>
                  I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action >
                <mu-list-item-after-text>15 min</mu-list-item-after-text>
                <mu-checkbox color="yellow700" v-model="selects" value="value1" uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item avatar :ripple="false" button>
              <mu-list-item-content>
                <mu-list-item-title>me, Scrott, Jennifer</mu-list-item-title>
                <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Summer BBQ</mu-list-item-sub-title>
                <mu-list-item-sub-title>
                  Wish I could come, but I'm out of town this weekend.
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action >
                <mu-list-item-after-text>2 hr</mu-list-item-after-text>
                <mu-checkbox color="yellow700" v-model="selects" value="value2"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
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
                <mu-list-item-title>Ali Connors</mu-list-item-title>
                <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Brunch this weekend?</mu-list-item-sub-title>
                <mu-list-item-sub-title>
                  I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action >
                <mu-list-item-after-text>15 min</mu-list-item-after-text>
                <mu-checkbox color="yellow700" v-model="selects" value="value1" uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item avatar :ripple="false" button>
              <mu-list-item-content>
                <mu-list-item-title>me, Scrott, Jennifer</mu-list-item-title>
                <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Summer BBQ</mu-list-item-sub-title>
                <mu-list-item-sub-title>
                  Wish I could come, but I'm out of town this weekend.
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action >
                <mu-list-item-after-text>2 hr</mu-list-item-after-text>
                <mu-checkbox color="yellow700" v-model="selects" value="value2"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
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
