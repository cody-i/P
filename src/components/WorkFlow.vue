<template>
    <div>
        <div class="header"><!-- 通知栏 -->
            这里是通知区域
            <p>课题1：怎么让JS数据换行</p>
        </div>
        <div><!-- 主体部分 -->
            <el-row :gutter="20">   <!-- 工具栏 -->
                <el-col :span="1">
                    <el-dropdown trigger="click" @command='handleCommand'>
                        <el-button type="primary">
                            事项变动<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command=1>添加</el-dropdown-item>
                            <el-dropdown-item command=2>删除</el-dropdown-item>
                            <el-dropdown-item command=3>更新</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                <el-col :span="1" :offset="1">
                    <el-dropdown trigger="click">
                    <el-button type="primary">
                        更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item>双皮奶</el-dropdown-item>
                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>

            <el-table :data="tableData" style="width:100%" border max-height="400px" :highlight-current-row='true'> <!-- 表格显示 -->
                <el-table-column prop="name" label="组员姓名" :width="tableWidth">
                </el-table-column>
                <el-table-column prop="hasTodo" label="待办事项" :width="tableWidth">
                    <template slot-scope="scope" v-if="scope.row.hasTodo.length > 0">
                        <el-popover v-for="item in scope.row.hasTodo" :key="item.sequence" placement="right" :title="item.title" width="150" trigger="click">
                            <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                            <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                            <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="" label="调查" :width="tableWidth">
                    <template slot-scope="scope" v-if="scope.row.inquiry.length > 0">
                        <el-table-column prop="" label="实施" :width="tableWidth">
                            <el-popover v-for="item in scope.row.inquiry.doing" :key="item.sequence" placement="right" :title="item.title" width="150" trigger="click">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </el-table-column>
                    </template>
                    <el-table-column prop="" label="外部RV" :width="tableWidth">

                    </el-table-column>
                    <el-table-column prop="" label="内部RV" :width="tableWidth">

                    </el-table-column>
                </el-table-column>
                <el-table-column prop="" label="详细设计书" :width="tableWidth">
                    <el-table-column prop="" label="实施" :width="tableWidth"></el-table-column>
                    <el-table-column prop="" label="外部RV" :width="tableWidth"></el-table-column>
                    <el-table-column prop="" label="内部RV" :width="tableWidth"></el-table-column>
                </el-table-column>
                <el-table-column prop="" label="测试式样书" :width="tableWidth">
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
            
            <template>      <!-- 隐藏的弹窗放这里 -->
                <el-dialog title="信息操作" :visible.sync="recordType" width="30%" :before-close="handleClose">
                    <el-form label-position="right" label-width="80px" :model="formLabelAlign">
                    <el-form-item label="名称">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="recordType = false">取 消</el-button>
                        <el-button type="primary" @click="recordType = false">{{recordMsg}}</el-button>
                    </span>
                </el-dialog>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name:'WorkFlow',
    data(){
        return{
            msg:'dddddddd',
            recordType: false,                  // record-控制弹窗flag
            recordMsg:'',                       // record-弹窗msg
            formLabelAlign: {                   // record-提交表单信息
                name:'',
                region:'',
                type:'',
            },

            tableWidth: '100',                  // 表格的宽设置
            tableData:[                         // 表格数据
                {
                    name:'马茹',                // 人员姓名
                    hasTodo:[                   // 待办事项
                        {
                            sequence: 1,        // 序列号，拿来放循环渲染的ID
                            title:'测试',
                            detail:'今天要在xxx点之前做完吃晚饭接着看电视啊啊啊啊啊啊啊\n周末约会走起啊',
                            needTime:2,
                        },{
                            sequence: 2,
                            title:'coding',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        },{
                            sequence: 3,
                            title:'式样书作成',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        },{
                            sequence: 4,
                            title:'调查',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        }
                    ],
                    inquiry:{           // 调查
                        doing:[
                            {
                                sequence: 1,
                                title:'测试',
                                detail:'今天要在xxx点之前做完吃晚饭接着看电视啊啊啊啊啊啊啊\n周末约会走起啊',
                                needTime:2,
                            },{
                                sequence: 2,
                                title:'coding',
                                detail:'客户紧急需求，明天上午需要做完',
                                needTime:1,
                            },{
                                sequence: 3,
                                title:'式样书作成',
                                detail:'客户紧急需求，明天上午需要做完',
                                needTime:1,
                            },{
                                sequence: 4,
                                title:'调查',
                                detail:'客户紧急需求，明天上午需要做完',
                                needTime:1,
                            }
                        ],       // 实施
                        outsideRV:[],   // 外部review
                        insideRV:[],    // 内部review
                    },
                },{
                    name:'秋香',
                    hasTodo:[
                        {
                            sequence: 1,
                            title:'调查',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        }
                    ],
                },{
                    name:'唐品',
                    hasTodo:[
                        {
                            sequence: 1,
                            title:'调查',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        },
                        {
                            sequence: 2,
                            title:'调查',
                            detail:'客户紧急需求，明天上午需要做完',
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
        handleCommand(command){     // 对应下拉菜单的数据操作，false：隐藏， 1：添加， 2：删除， 3：更新
            if(command == 1){
                this.recordMsg = '添加';
                this.recordType = 1;
            }else if(command == 2){
                this.recordMsg = '删除';
                this.recordType = 2;
            }else if(command == 3){
                this.recordMsg = '更新';
                this.recordType = 3;
            }else{
                this.recordMsg = '';
                this.recordType = false;
            }
        },
        handleClose(){              // 添加，删除，更新菜单点击确定后的操作
            // todo
        }
    },
    filters:{
        filterPeriod: (time) => {
            return `${time}人/日`
        },
    }
}
</script>

<style scoped>
.header {
    border: 1px solid red;
    height: 100px;
}


</style>
