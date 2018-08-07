<template>
  <div>
    <mu-container>
      <mu-form :model="form" :label-position="left" label-width="100">
        <mu-form-item prop="input" label="授课教师">
          <mu-text-field v-model="form.teacher"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="input" label="开始时间">
          <mu-text-field v-model="form.starttime"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="input" label="课程时长">
          <mu-text-field v-model="form.duration"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="select" label="选择课程">
          <mu-select v-model="form.course">
            <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
          </mu-select>
        </mu-form-item>
      </mu-form>
      <mu-button full-width color="primary" to="/">确定预约</mu-button>
    </mu-container>
  </div>
</template>
<script>
  export default {
    name: 'Order',
    data () {
      return {
        form: {
          teacher: '马某',
          starttime: '2018-08-07：13:00',
          duration: '2小时',
          course: ''
        },
        options: ['C语言','Java']
      }
    }
  }
</script>
<style></style>
