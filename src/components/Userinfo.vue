<template>
  <div>
    <mu-paper :z-depth="1">
      <mu-list textline="two-line">
        <mu-list-item avatar>
          <mu-list-item-content>
            <mu-list-item-title>头像</mu-list-item-title>
          </mu-list-item-content>
          <mu-list-item-action style="margin-right: 25px;">
            <mu-avatar>
              <img id="img" :src="user.imgUrl" />
              <input class="fileInput" type="file" accept="image/png,image/jpg,image/jpeg" @change="change($event)" />
            </mu-avatar>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>姓名</mu-list-item-title>
            {{user.name}}
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>账号</mu-list-item-title>
            {{user.email}}
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>性别</mu-list-item-title>
            {{user.sex}}
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>年龄</mu-list-item-title>
            {{user.age}}
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
      <mu-divider></mu-divider>
      <mu-button @click='openModal' full-width color="primary">
        修改
      </mu-button>
    </mu-paper>

  <!--页面主内容区结束-->
  <!-- 修改信息模态框 -->
  <div id="modal" class="mui-modal bm_modal">
    <div style="margin-top: 2px;">
      <mu-paper :z-depth="1">
      <mu-form :model="user" class="mu-demo-form" label-position="left" label-width="100">
        <input name="stuid" type="hidden" v-model="user.id"/>
          <mu-list textline="two-line">
            <mu-list-item>
              <mu-form-item prop="input" label="姓名：">
                <mu-text-field v-model="user.name"></mu-text-field>
              </mu-form-item>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item>
                <mu-form-item prop="input" label="账号：">
                  <mu-text-field v-model="user.email" disabled></mu-text-field>
                </mu-form-item>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item>
              <mu-form-item prop="radio" label="性别：">
                <mu-radio v-model="user.sex" value="男" label="男"></mu-radio>
                <mu-radio v-model="user.sex" value="女" label="女"></mu-radio>
              </mu-form-item>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item>
              <mu-form-item prop="select" label="年龄：">
                <mu-select v-model="user.age">
                  <mu-option v-for="(option,index) in options" :key="index" :label="option+''" :value="option"></mu-option>
                </mu-select>
              </mu-form-item>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item>
              <mu-form-item prop="input" label="家庭地址：">
                <mu-text-field v-model="user.address"></mu-text-field>
              </mu-form-item>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item>
              <mu-form-item prop="input" label="联系电话：">
                <mu-text-field v-model="user.tel"></mu-text-field>
              </mu-form-item>
            </mu-list-item>
          </mu-list>
          <mu-button @click="closeModal" style="margin-left: 10px;margin-top: 10px;" class="mui-pull-left" color="error">取消</mu-button>
          <mu-button style="margin-right: 10px;margin-top: 10px;" class="mui-pull-right" color="primary">确认</mu-button>
        </mu-form>
      </mu-paper>
    </div>
  </div>
  <!-- 修改信息模态框 -->
  </div>
</template>
<script>
  // import loadImg from '../assets/clipper/loading.gif'
   import headImg from '../assets/images/hnsoftedu.jpg'
  export default {
    data () {
      return {
        loadImg: '../assets/clipper/loading.gif',
        user: {
          id: 0,
          name: 'xxx',
          email: '123@test.com',
          imgUrl: headImg,
          sex: '男',
          age: 18,
          address: 'test',
          tel: '123456789'
        },
        options: []
      }
    },
    created (){
      for(let i=1; i<=70; i++){
        this.options.push(i);
      }
    },
    methods: {
      change( event ) {
        let image = document.getElementById('img'); //预览对象
        this.clip(event , {
          resultObj : image,
          aspectRatio : 1
        })
      },
      openModal () {
        document.getElementById("modal").classList.add("mui-active");
      },
      closeModal () {
        document.getElementById("modal").classList.remove("mui-active");
      }
    },
    mounted () {
    }
  }
</script>
<style scoped>
  .fileInput{
    height:256px;
    overflow: hidden;
    font-size: 300px;
    position:absolute;
    right:0;
    top:0;
    opacity: 0;
    filter:alpha(opacity=0);
    cursor:pointer;
  }
  .mu-list-two-line .mu-item{
    height: 60px;
  }
  .mui-modal{
    top: 48px;
    color: black;
  }
  h3{
    text-align: center;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
    width: 100%;
  }

  a {
    color: #42b983;
  }
</style>
