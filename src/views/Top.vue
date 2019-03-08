<template>
<div id="top">

  <HeadParts></HeadParts>
  <div class="l-justify-center u-mt10">
    <Department v-model="btnData"></Department>
  </div>
  <div class="searchBar u-mt5 u-width090">
    <!-- search に入力された値が格納される -->
    <el-input v-model="search" placeholder="科目名で検索" clearable>
      <!-- month に value の値が格納される -->
      <!--
      <el-select v-model="month" slot="prepend" placeholder="Select">
        <el-option label="月曜" value="mon"></el-option>
        <el-option label="火曜" value="tue"></el-option>
        <el-option label="水曜" value="wed"></el-option>
        <el-option label="木曜" value="thu"></el-option>
        <el-option label="金曜" value="fri"></el-option>
        <el-option label="すべて" value="all"></el-option>
      </el-select>
      -->
      <el-button slot="append" v-on:click="wakeRouter" icon="el-icon-search"></el-button>
    </el-input>
  </div>
  <div> {{ btnData }} </div>

</div>
</template>

<script>
import HeadParts from "../components/HeadParts.vue";
import Department from "../components/Department.vue";

export default {
  name: 'top',
  data () {
    return {
        btnData: {
          libOn: 0,
          ecoOn: 0,
          sysOn: 0,
          eduOn: 0,
          touOn: 0,
        },
        search:'',
    }
  },
  created: function() {
    // Initialize Cloud Firestore through Firebase
    var db = firebase.firestore();
    //test code
    /*db.collection("users").get()
      .then(
        (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        }
      );*/
      //const docRef = db.collection("info").get();
      db.collection("info")
        .where("target", "==", "1年")
        //テンプレートリテラルも埋め込み可能
        //.where(`${this.test}`, "==", "後期")
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
        });
      });
  },
  methods: {
    wakeRouter: function() {
      this.$router.push({ path: 'result' });
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
