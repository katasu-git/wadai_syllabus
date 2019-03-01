<template>
<div id="top">

  <HeadParts></HeadParts>
  <div class="l-justify-center u-mt8">
    <Department></Department>
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
import Department from "../components/Department.vue";

export default {
  name: 'top',
  data () {
    return {datetime:''}
  },
  components: {
    HeadParts: HeadParts,
    Department: Department,
  }
};
</script>

<style lang="scss" scoped>
</style>
