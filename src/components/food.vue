<template>
<session class="bg">
    
    <el-button>{{msg}}</el-button>
</session>
</template>

<script>
export default {
    name:'food',
    data(){
        return{
            msg: 'this is food button',
        }
    },
}
</script>

<style scoped>
.bg {
    background-color: coral;
}
</style>
