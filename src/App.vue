<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.l-justify-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
