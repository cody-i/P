<template>
<el-row class="tac">
  <el-col :span="88">
    <el-menu
      mode='horizontal'
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router='true'>
      <el-menu-item index="home">
        <!-- <el-avatar shape="circle" :size="40" :fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar> -->
        Home
      </el-menu-item>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span>我的工作台</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="WorkFlow">作业流管理页面</el-menu-item>
          <el-menu-item index="seller">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2" :span="3">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<script scoped>
export default {
    name:'navigatorBar',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
}
</script>

<style scoped>

</style>
