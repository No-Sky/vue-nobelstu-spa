<template>
  <div>
    <div class="mui-content">
      <table width="100%" class="table">
        <tr>
          <th width="35%">订单编号</th>
          <td>123456</td>
        </tr>
        <tr>
          <th>教师名称</th>
          <td>马某</td>
        </tr>
        <tr>
          <th>课程名称</th>
          <td>C语言</td>
        </tr>
        <tr>
          <th>开始时间</th>
          <td>2018-08-07 13:00</td>
        </tr>

        <tr>
          <th>课程时长</th>
          <td>2小时</td>
        </tr>
        <tr>
          <th>订单状态</th>
          <td>
            已同意
          </td>
        </tr>
        <tr>
          <th>课程状态</th>
          <td>
            未上课
          </td>
        </tr>
          <tr>
            <th>留言</th>
            <td><div style="width:200px;word-wrap: break-word;">和交话费按实际发我的口岸我怕gjiseofjsoijfnsioefhseiofhnsiofhnsioefjnseiojfseio</div></td>
          </tr>
          <tr>
            <th>评分</th>
            <td>
              <div id="star" class="icons mui-inline" style="margin-left: 6px;">
                <i data-index="1" class="mui-icon mui-icon-star"></i>
                <i data-index="2" class="mui-icon mui-icon-star"></i>
                <i data-index="3" class="mui-icon mui-icon-star"></i>
                <i data-index="4" class="mui-icon mui-icon-star"></i>
                <i data-index="5" class="mui-icon mui-icon-star"></i>
              </div>
            </td>
          </tr>
      </table>
      <!--留言按钮 评价打分按钮-->
        <div class="btn-box">
          <mu-button full-width color="primary" to="/grade">留言评分</mu-button>
          <mu-button full-width color="primary" >确认上课</mu-button>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        score: 3
      }
    },
    mounted () {
      let parent = document.getElementById("star");
      let children = parent.children;
      let _score = this.score;
      for(let i=0;i<_score;i++){
        children[i].classList.add('mui-icon-star-filled');
      }
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
