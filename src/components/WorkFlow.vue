<template>
<session>
    <div class="header">
        这里是通知区域
    </div>
    <div>
        这里是表格区域
        <el-table :data="tableData" style="width:100%" border max-height="400px" :highlight-current-row='true'>
            <el-table-column prop="name" label="组员姓名" :width="tableWidth">
            </el-table-column>
            <el-table-column prop="hasTodo" label="待办事项" :width="tableWidth">
                <template slot-scope="scope" v-if="scope.row.hasTodo.length > 0">
                    <el-popover v-for="item in scope.row.hasTodo" :key="item" placement="right" :title="item.hasTodo_title" width="150" trigger="click">
                        <p>{{item.hasTodo_detail}}</p>
                        <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                    </el-popover>
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
            msg:'dddddddd',
            tableWidth: '100',                  // 表格的宽设置
            tableData:[                         // 表格数据
                {
                    name:'马茹',                // 人员姓名
                    hasTodo:[                   // 待办事项
                        {
                            hasTodo_title:'测试',
                            hasTodo_detail:'今天要在xxx点之前做完吃晚饭接着看电视啊啊啊啊啊啊啊<br>周末约会走起啊',
                            needTime:2,
                        },{
                            hasTodo_title:'coding',
                            hasTodo_detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        },{
                            hasTodo_title:'式样书作成',
                            hasTodo_detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        },{
                            hasTodo_title:'调查',
                            hasTodo_detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        }
                    ],
                },{
                    name:'秋香',
                    hasTodo:[
                        {
                            hasTodo_title:'调查',
                            hasTodo_detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        }
                    ],
                },{
                    name:'唐品',
                    hasTodo:[
                        {
                            hasTodo_title:'调查',
                            hasTodo_detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        },
                        {
                            hasTodo_title:'调查',
                            hasTodo_detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        }
                    ],
                },{
                    name:'沈万强',
                    hasTodo:[],
                }
            ],

        }
    },
    methods:{
        clickTips: (item) =>{
            alert(item.hasTodo_title);

        },
    }
}
</script>

<style scoped>
.header {
    background-color: rgb(214, 223, 200);
    height: 100px;
}

</style>
