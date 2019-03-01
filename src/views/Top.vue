<template>
<div id="top">

  <HeadParts></HeadParts>
  <div class="l-justify-center u-mt8">
    <Department></Department>
  </div>
  <div class="searchBar u-mt5 u-width090">
    <el-input v-model="search" placeholder="科目名で検索" clearable>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>

</div>
</template>

<script>
import HeadParts from "../components/HeadParts.vue";
import Department from "../components/Department.vue";

export default {
  name: 'top',
  data () {
    return {
      datetime:'',
      search:''
    }
  },
  components: {
    HeadParts: HeadParts,
    Department: Department,
  }
};
</script>

<style lang="scss" scoped>

.searchBar {
  position: absolute;
  left: 5%;
}

</style>
