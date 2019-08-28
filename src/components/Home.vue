<template>
    <div class="bg">
        <el-tag size='medium' type="danger">公司通知</el-tag>
        <el-carousel indicator-position="outside" type='card' height="200px">
            <el-carousel-item v-for="item in notices" :key="item">
                <h1 class="medium">{{item}}</h1>
            </el-carousel-item>
        </el-carousel>
        <el-divider></el-divider>
        <el-tag size='medium' type="warning">个人消息</el-tag>
        
        <el-table
            :data="personNotices"
            style="width:100%"
            max-height="200px"
            :highlight-current-row='true'
            >
            <el-table-column
                prop="date"
                label="通知发布日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="content"
                label="事项"
                width="1350">
            </el-table-column>
        </el-table>
        <!-- <el-pagination
            :background='true'
            layout="prev, pager, next"
            :total="personNotices.length"
            :page-size='4'>
        </el-pagination> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            notices: [  // 公司通知
                '中秋放假通知：xxxxxxx开始放假',
                '国庆放假通知：xxxxxxx开始放假',
                '今日天气：晴，23°-30°',
            ],
            personNotices:[ // 个人通知
                {
                    date:'20190701',content:'ILF作业纳品日：本周五'
                },{
                    date:'20190702',content:'Handler作业纳品日：本周三'
                },{
                    date:'20190702',content:'客户来访：屉山又来了(⊙o⊙)'
                },{
                    date:'20190703',content:'ILF0568指摘需要对应'
                },{
                    date:'20190704',content:'测试式样书格式修正'
                }
            ],
            st:null,    // 计时器
        }
    },
    methods:{
        
    },
    created:()=>{
    },
    mounted: function(){
        console.log(this.personNotices);
        this.st = setInterval(()=>{
            var lastObj = this.personNotices.pop();         // 取得，并删除数组中最后一个元素
            this.personNotices.unshift(lastObj);            // 向数组头部插入一个元素
        },1000);
    },
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .bg {
      height: 560px;
  }
</style>
