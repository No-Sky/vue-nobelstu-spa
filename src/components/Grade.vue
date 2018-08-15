<template>
  <div class="mui-content">
    <div>
      <p class="message mui-pull-left">留言</p>
      <br />
      <br />
      <div class="row mui-input-row">
        <textarea rows="3" id="message" v-model="message" name="message" class="mui-input-clear question" placeholder="请根据你的上课情况和老师表现留言哦"></textarea>
      </div>
      <div class="">
        <p class="message-2">评分</p>
      </div>
      <div class="grade">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">
              <div class="mui-inline grade-02">课程评分</div>
              <div class="icons mui-inline" style="margin-left: 6px;">
                <i data-index="1" class="mui-icon mui-icon-star"></i>
                <i data-index="2" class="mui-icon mui-icon-star"></i>
                <i data-index="3" class="mui-icon mui-icon-star"></i>
                <i data-index="4" class="mui-icon mui-icon-star"></i>
                <i data-index="5" class="mui-icon mui-icon-star"></i>
              </div>
            </a>
          </li>
        </ul>
        <div class="box-btn">
          <mu-button full-width color="primary" @click="submitGrade">提交</mu-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        orderid: '',
        message: '',
        score: 0
      }
    },
    created () {
      this.orderid = this.$route.query.id;
    },
    methods: {
      submitGrade: function () {
        let params = new URLSearchParams();
        params.append("orderid",this.orderid);
        params.append("message",this.message);
        params.append("score",this.score);
        this.$http.post(this.$api.grade, params).then(res => {
          console.log(res.data);
          if (res.data.code==0){
            this.$toast.success(res.data.message);
            this.$router.push("/record");
          }else{
            this.$toast.warning(res.data.message);
          }
        })
      }
    },
    mounted () {
      mui('.icons').on('tap', 'i', function() {
        let index = parseInt(this.getAttribute("data-index"));
        let parent = this.parentNode;
        let children = parent.children;
        if(this.classList.contains("mui-icon-star")) { //点击的那个之前如果由空心的星星变成实心的
          for(let i = 0; i < index; i++) {
            children[i].classList.remove('mui-icon-star'); //star是空心的星星
            children[i].classList.add('mui-icon-star-filled'); //filled是实心的黄色星星
          }
        } else {
          for(let i = index; i < 5; i++) { //点击的那个之后由实心的星星变成空心的
            children[i].classList.add('mui-icon-star');
            children[i].classList.remove('mui-icon-star-filled');
          }
        }
        //打了几颗星呢
        console.log(index);
        this.score=index;
      });
    }
  }
</script>
<style>
  .message {
    margin-left: 10px;
    margin-top: 10px;
  }
  .message-2{
    margin-left: 10px;
  }
  .mui-icon-star-filled:before{
    color: yellow;;
  }
  .row{
    margin-right: 0;
  }
</style>
