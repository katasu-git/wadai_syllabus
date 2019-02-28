<template>
<div id="top">
  <div class="l-justify-center">
    ここはトップページ
    <HeadParts></HeadParts>
  </div>
  <div class="l-justify-center u-mt5">
    <el-date-picker
      v-model="datetime"
      type="datetime"
      placeholder="Select!">
    </el-date-picker>
  </div>

</div>
</template>

<script>
import HeadParts from "../components/HeadParts.vue";
export default {
  name: 'top',
  data () {
    return {datetime:''}
  },
  components: {
    HeadParts: HeadParts,
  }
};
</script>

<style lang="scss" scoped>
</style>
