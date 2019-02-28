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
//全体に適応するcssはここで
html, body {
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #FAFAFA;
}

.d-1 {
  /*普通のテキスト*/
  color: rgba(0,0,0,0.87);
}

.d-2 {
  /*サブテキスト*/
  color: rgba(0,0,0,0.54);
}

.d-3 {
  /*使えない、押せない、存在感薄*/
  color: rgba(0,0,0,0.26);
}

.d-4 {
  /*この世のすべてのボーダー*/
  color: rgba(0,0,0,0.12);
}

.l-1 {
  color: rgba(255,255,255,1.00);
}

.l-2 {
  color: rgba(255,255,255,0.70);
}

.l-3 {
  color: rgba(255,255,255,0.30);
}

.l-4 {
  color: rgba(255,255,255,0.12);
}

.l-0 {
  color: rgba(255,255,255,0);
}

.l-justify-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.u-mt1 {
  margin-top: 1vh;
}

.u-mt2 {
  margin-top: 2vh;
}

.u-mt3 {
  margin-top: 3vh;
}

.u-mt4 {
  margin-top: 4vh;
}

.u-mt5 {
  margin-top: 5vh;
}

.u-mt6 {
  margin-top: 6vh;
}

.u-mt7 {
  margin-top: 7vh;
}

.u-mt8 {
  margin-top: 8vh;
}

.u-mt9 {
  margin-top: 9vh;
}

.u-mt10 {
  margin-top: 10vh;
}
</style>
