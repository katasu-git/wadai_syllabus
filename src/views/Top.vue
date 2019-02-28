<template>
<div id="top">
  <div class="l-justify-center">
    ここはトップページ
  </div>
  <div class="l-justify-center">
    <el-date-picker
      v-model="datetime"
      type="datetime"
      placeholder="Select!">
    </el-date-picker>
  </div>
</div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {datetime:''}
  },
};
</script>

<style lang="scss" scoped>
</style>
