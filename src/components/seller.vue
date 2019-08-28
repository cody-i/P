<template>
<div class="bg">
  <el-button>{{msg}}</el-button>
</div>
</template>

<script>
export default {
    name:'seller',
    data(){
        return{
            msg: 'this is seller button',
        }
    },    
}
</script>

<style scoped>
/* .bg {
    background-color: coral;
} */
</style>
