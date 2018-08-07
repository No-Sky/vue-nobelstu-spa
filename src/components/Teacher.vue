<template>
  <div>
    <mu-container :style="avatarStyle">
      <mu-row justify-content="center">
        <mu-avatar :size="size">
          <img src="../assets/images/hnsoftedu.jpg">
        </mu-avatar>
      </mu-row>
    </mu-container>
    <mu-paper :z-depth="1">
      <mu-list toggle-nested>
        <mu-list-item >
          hello everyone
        </mu-list-item>
        <mu-divider></mu-divider>
        <div style="margin-left: 20%;font-size: 16px; ">
          <mu-icon value="person" color="blue"></mu-icon>某某某<br/>
          <mu-icon value="phone" color="blue"></mu-icon>111111<br/>
          <mu-icon value="mail" color="blue"></mu-icon>111111<br/>
        </div>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="true" nested :open="toggle === 'class'" @toggle-nested="toggle = arguments[0] ? 'class' : ''">
          <mu-list-item-action>
            <mu-icon value="class"></mu-icon>
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
      var obj = this.$route.query;
      console.log(obj);
    }
  }
</script>
<style>
</style>
