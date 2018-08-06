<template>
  <div>
    <mu-container style="padding: 10px 0;">
      <mu-row justify-content="center">
        <mu-avatar :size="size">
          <img src="../assets/images/hnsoftedu.jpg">
        </mu-avatar>
      </mu-row>
    </mu-container>
    <mu-paper :z-depth="1">
      <mu-list toggle-nested>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="send"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Sent mail</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="drafts"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Drafts</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="inbox"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Inbox</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="grade"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>关于</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>
<script>
  export default {
    name: 'User',
    data () {
      return {
        size: 165
      }
    }
  }
</script>
<style>
</style>
