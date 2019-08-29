<template>
<session>
    <div class="header">
        这里是通知区域
    </div>
    <div>
        这里是表格区域
        <el-table :data="tableData" style="width:100%" border max-height="600px" :highlight-current-row='true'>
            <el-table-column prop="name" label="组员姓名" :width="tableWidth">
            </el-table-column>
            <el-table-column prop="hasTodo" label="待办事项" :width="tableWidth">
　　　　　　　　<template slot-scope="scope">
　　　　　　　　　　<span v-if="scope.row.hasTodo">输入</span>
　　　　　　　　</template>
            </el-table-column>
            <el-table-column prop="" label="调查" :width="tableWidth">
                <el-table-column prop="" label="实施" :width="tableWidth"></el-table-column>
                <el-table-column prop="" label="外部RV" :width="tableWidth"></el-table-column>
                <el-table-column prop="" label="内部RV" :width="tableWidth"></el-table-column>
            </el-table-column>
            <el-table-column prop="" label="详细设计书" :width="tableWidth">
                <el-table-column prop="" label="实施" :width="tableWidth"></el-table-column>
                <el-table-column prop="" label="外部RV" :width="tableWidth"></el-table-column>
                <el-table-column prop="" label="内部RV" :width="tableWidth"></el-table-column>
            </el-table-column>
            <el-table-column prop="" label="テスト式样书" :width="tableWidth">
                <el-table-column prop="" label="实施" :width="tableWidth"></el-table-column>
                <el-table-column prop="" label="外部RV" :width="tableWidth"></el-table-column>
                <el-table-column prop="" label="内部RV" :width="tableWidth"></el-table-column>
            </el-table-column>
            <el-table-column prop="" label="代码实装" :width="tableWidth">
                <el-table-column prop="" label="实施" :width="tableWidth"></el-table-column>
                <el-table-column prop="" label="外部RV" :width="tableWidth"></el-table-column>
                <el-table-column prop="" label="内部RV" :width="tableWidth"></el-table-column>
            </el-table-column>
            <el-table-column prop="" label="测试" :width="tableWidth">
                <el-table-column prop="" label="实施" :width="tableWidth"></el-table-column>
                <el-table-column prop="" label="外部RV" :width="tableWidth"></el-table-column>
                <el-table-column prop="" label="内部RV" :width="tableWidth"></el-table-column>
            </el-table-column>
        </el-table>
        尾巴
    </div>
    
</session>
</template>

<script>
export default {
    name:'WorkFlow',
    data(){
        return{
            tableWidth: '100',                  // 表格的宽设置
            tableData:[
                {
                    name:'马茹',
                    hasTodo:0,
                },{
                    name:'秋香',
                    hasTodo:0,
                },{
                    name:'唐品',
                    hasTodo:0,
                },{
                    name:'沈万强',
                    hasTodo:1,
                }
            ],
        }
    },
}
</script>

<style scoped>
.header {
    background-color: coral;
    height: 100px;
}
</style>
