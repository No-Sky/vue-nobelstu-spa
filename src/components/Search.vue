<template>
  <div>
    <div class="mui-content">
      <div id='list' class="mui-indexed-list">
        <div class="mui-indexed-list-search mui-input-row mui-search">
          <input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="搜索老师和课程">
        </div>
        <!-- 没有这个div，整个网页就无法滚动!!!!!! -->
        <div style="display: none;" class="mui-indexed-list-bar" id="list-bar"></div>
        <div style="display: none;" class="mui-indexed-list-alert"></div>
        <div class="mui-indexed-list-inner">
          <div class="mui-indexed-list-empty-alert">没有数据</div>
          <ul class="mui-table-view">
            <li data-group="teacher" class="mui-table-view-divider mui-indexed-list-group">教师</li>
              <li @click="toTeacherinfo(0)" data-value="马某" data-tags="m" class="mui-table-view-cell mui-indexed-list-item">马某</li>
            <li data-group="course" class="mui-table-view-divider mui-indexed-list-group">课程</li>
              <li @click="toTeacherinfo(0)" data-value="课1" data-tags="k" class="mui-table-view-cell mui-indexed-list-item">课1<span class="mui-pull-right" style="font-size: 12px;">授课教师：马某</span></li>
          </ul>
        </div>
      </div>
    </div>
    <!--搜索框-->
    <!--<mt-search style="width:100%;height: 45px;" v-model="value" :result.sync="result" cancel-text="取消" placeholder="搜索"></mt-search>-->
    <!--<mt-search v-model="value" autofocus cancel-text="取消" placeholder="搜索">-->
      <!--<mt-cell-->
        <!--v-for="item in result"-->
        <!--:title="item.title"-->
        <!--:value="item.value">-->
      <!--</mt-cell>-->
    <!--</mt-search>-->
    <!--indexList-->
    <!--<mt-index-list>
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
    </mt-index-list>-->
  </div>
</template>
<script>
  export default {
    name: 'Search',
    data () {
      return {
      }
    },
    methods: {
      toTeacherinfo (id) {
        this.$router.push({path: 'teacher',query: {id: id}});
      }
    },
    mounted () {
      mui.ready(function () {
        let header = document.getElementById('header');
        let list = document.getElementById('list');
        //calc hieght
        list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
        //create
        window.indexedList = new mui.IndexedList(list);
      });
    }
  }
</script>
<style>

ul{
  height: 100%;
}/*
.mint-search-list{
  top: 90px;
  bottom: 60px;
  color: black;
  z-index: 223;
  background-color: white;
}
.mint-search-list-warp{
  margin-top: -45px;
}*/

</style>
