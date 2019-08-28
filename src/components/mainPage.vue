<template>
<el-container>
  <el-header>
    <navigatorBar></navigatorBar>
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
  <el-footer>Footer</el-footer>
</el-container>
</template>

<script scoped>
  import navigatorBar from '@/components/navigatorBar'
  
  export default {
    components:{
      navigatorBar
    },
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 560px; */
  }
  /* body > .el-container {
    margin-bottom: 40px;
  } */
</style>
