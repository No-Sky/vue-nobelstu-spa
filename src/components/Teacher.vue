<template>
  <div>
    <mu-container :style="avatarStyle">
      <mu-row justify-content="center">
        <mu-avatar :size="size">
          <img src="../assets/images/logoimg.png">
        </mu-avatar>
      </mu-row>
    </mu-container>
    <mu-paper :z-depth="1">
      <mu-list toggle-nested>
        <mu-list-item >
          hello everyone
        </mu-list-item>
        <mu-divider></mu-divider>
        <div style="margin-left: 5%;font-size: 16px; ">
          <div>
            <mu-icon value="person" color="blue"></mu-icon>&nbsp;&nbsp;<span>某某某</span>
          </div>
          <div>
            <mu-icon value="call" color="blue"></mu-icon>&nbsp;&nbsp;<span>1234567898</span>
          </div>
          <div>
            <mu-icon value="mail" color="blue"></mu-icon>&nbsp;&nbsp;<span>123@teacher.com</span>
          </div>
        </div>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="true" nested :open="toggle === 'class'" @toggle-nested="toggle = arguments[0] ? 'class' : ''">
          <mu-list-item-action>
            <mu-icon value="class" color="primary"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>教授课程</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 3</mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
            <mu-button style="margin: 0 auto;" color="primary" to="/freetime">预定课程</mu-button>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>
<script>
  import bg from '../assets/images/4.jpg'
  export default {
    name: 'User',
    data () {
      return {
        toggle: '',
        size: 165,
        avatarStyle: {
          padding: '10px 0',
          backgroundImage: 'url("'+bg+'")'
        }
      }
    },
    created: function () {
      let obj = this.$route.query;
      console.log(obj);
    }
  }
</script>
<style scoped>
  .material-icons{
    font-size: 18px;
  }
</style>
