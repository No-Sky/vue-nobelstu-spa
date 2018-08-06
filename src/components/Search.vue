<template>
  <div>
    <!--搜索框-->
    <mt-search style="height: 20%;" v-model="value" :result.sync="result" cancel-text="取消" placeholder="搜索"></mt-search>
    <!--<mt-search v-model="value" autofocus cancel-text="取消" placeholder="搜索">-->
      <!--<mt-cell-->
        <!--v-for="item in result"-->
        <!--:title="item.title"-->
        <!--:value="item.value">-->
      <!--</mt-cell>-->
    <!--</mt-search>-->
    <!--indexList-->
    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron">Aaron</mt-cell>
        <mt-cell title="Alden">Alden</mt-cell>
        <mt-cell title="Austin">Austin</mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin">Baldwin</mt-cell>
        <mt-cell title="Braden">Braden</mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="Zack">Zack</mt-cell>
        <mt-cell title="Zane">Zane</mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
  export default {
    name: 'Search',
    data () {
      return {
        value: '',
          result: [
            'dandaio',
            'todo',
            'auto'
          ]
      }
    }
  }
</script>
<style>
ul{
  height: 100%;
}
.mint-search-list{
  top: 90px;
  bottom: 60px;
  color: black;
  z-index: 222;
  background-color: white;
}
.mint-search-list-warp{
  margin-top: -45px;
}
</style>
