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
                        <el-popover v-for="(item, index) in scope.row.hasTodo" :key="index" placement="right" :title="item.title" width="150" trigger="click">
                            <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                            <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                            <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                        </el-popover>
                    </template>
                </el-table-column>

                <el-table-column prop="inquiry" label="调查" :width="tableWidth">
                    <el-table-column prop="doing" label="实施" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.inquiry.doing.length > 0">
                            <el-popover v-for="(item, index) in scope.row.inquiry.doing" :key="index" placement="right" :title="item.title" width="150" trigger="click">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                    
                    <el-table-column prop="outsideRV" label="外部RV" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.inquiry.outsideRV.length > 0">
                            <el-popover v-for="(item, index) in scope.row.inquiry.outsideRV" :key="index" placement="right" :title="item.title" width="150" trigger="click">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>

                    <el-table-column prop="insideRV" label="内部RV" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.inquiry.insideRV.length > 0">
                            <el-popover v-for="(item, index) in scope.row.inquiry.insideRV" :key="index" placement="right" :title="item.title" width="150" trigger="click">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
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
                <el-dialog title="信息操作" :visible.sync="dialogEventAdd.displayFlag" width="30%" :before-close="handleClose">
                    <el-form label-position="right" label-width="120px" :model="dialogEventAdd.formLabelAlign">
                        <el-form-item label="作业所属：">
                            <el-cascader v-model="dialogEventAdd.workType" :options="dialogEventAdd.options" :props="{expandTrigger: 'hover'}"></el-cascader>
                        </el-form-item>
                        <el-form-item label="写入Title：">
                            <el-input v-model="dialogEventAdd.title"></el-input>
                        </el-form-item>
                        <el-form-item label="写入简述：">
                            <el-input v-model="dialogEventAdd.detail"></el-input>
                        </el-form-item>
                        <el-form-item label="写入工数：">
                            <el-input v-model="dialogEventAdd.needTime"></el-input>
                        </el-form-item>
                    </el-form>
                    
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="addCancel">取 消</el-button>
                        <el-button type="primary" @click="addConfirm">{{dialogEventAdd.recordMsg}}</el-button>
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
            msg:'dddddddd',                     // test

            dialogEventAdd:{                 // 事项变动对话框对应数据
                displayFlag: false,             // 控制弹窗flag
                recordMsg:'进击',               // 弹窗右下角显示的msg
                options:[
                    {value:'待办事项', label:'待办事项'},
                    {value:'调查', label:'调查', children:[
                            {value:'实施', label:'实施'},
                            {value:'外部review', label:'外部review'},
                            {value:'内部review', label:'内部review'}
                        ]
                    },
                    {value:'详细设计书', label:'详细设计书', children:[
                            {value:'实施', label:'实施'},
                            {value:'外部review', label:'外部review'},
                            {value:'内部review', label:'内部review'}
                        ]
                    },
                    {value:'测试式样书', label:'测试式样书', children:[
                            {value:'实施', label:'实施'},
                            {value:'外部review', label:'外部review'},
                            {value:'内部review', label:'内部review'}
                        ]
                    },
                    {value:'代码实装', label:'代码实装', children:[
                            {value:'实施', label:'实施'},
                            {value:'外部review', label:'外部review'},
                            {value:'内部review', label:'内部review'}
                        ]
                    },
                    {value:'测试', label:'测试', children:[
                            {value:'实施', label:'实施'},
                            {value:'外部review', label:'外部review'},
                            {value:'内部review', label:'内部review'}
                        ]
                    },
                ],
                workType:'',
                title:'',
                detail:'',
                needTime:'',
            },

            tableWidth: '100',                  // 表格的宽设置
            tableData:[                         // 表格数据
                {
                    name:'马茹',                    // 人员姓名
                    hasTodo:[                       // 待办事项
                        {
                            title:'测试',
                            detail:'今天要在xxx点之前做完吃晚饭接着看电视啊啊啊啊啊啊啊\n周末约会走起啊',
                            needTime:2,
                        },{
                            title:'coding',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        },{
                            title:'式样书作成',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        },{
                            title:'调查',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        }
                    ],
                    inquiry:{           // 调查
                        doing:[         // 实施
                            {
                                title:'调查_实施',
                                detail:'今天要在xxx点之前做完吃晚饭接着看电视啊啊啊啊啊啊啊\n周末约会走起啊',
                                needTime:2,
                            },{
                                title:'coding',
                                detail:'客户紧急需求，明天上午需要做完',
                                needTime:1,
                            },{
                                title:'式样书作成',
                                detail:'客户紧急需求，明天上午需要做完',
                                needTime:1,
                            },{
                                title:'调查',
                                detail:'客户紧急需求，明天上午需要做完',
                                needTime:1,
                            }
                        ],
                        outsideRV:[     // 外部RV
                            {
                                title:'调查_外部RV',
                                detail:'今天要在xxx点之前做完吃晚饭接着看电视啊啊啊啊啊啊啊\n周末约会走起啊',
                                needTime:2,
                            }
                        ],
                        insideRV:[      // 内部RV
                            {
                                title:'调查_内部RV',
                                detail:'今天要在xxx点之前做完吃晚饭接着看电视啊啊啊啊啊啊啊\n周末约会走起啊',
                                needTime:2,
                            }
                        ],
                    }
                },{
                    name:'秋香',
                    hasTodo:[
                        {
                            title:'调查',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        }
                    ],
                    inquiryDoing:[],
                    inquiry:{
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    }
                },{
                    name:'唐品',
                    hasTodo:[
                        {
                            title:'调查',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        },
                        {
                            title:'调查',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                        }
                    ],
                    inquiryDoing:[],
                    inquiry:{
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    }
                },{
                    name:'沈万强',
                    hasTodo:[],
                    inquiryDoing:[],
                    inquiry:{
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    }
                }
            ],

        }
    },
    methods:{
        handleCommand(command){     // 对应下拉菜单的数据操作，false：隐藏， 1：添加， 2：删除， 3：更新
            if(command == 1){
                this.dialogEventAdd.displayFlag = true;
            }else if(command == 2){
                
            }else if(command == 3){
                
            }else{

            }
        },
        handleClose(){              // 【添加】对话框关闭前的操作函数
            // todo
        },
        addCancel(){                // 【添加】对话框点击【取消】的操作函数
            this.dialogEventAdd.displayFlag = false;
        },
        addConfirm(){               // 【添加】对话框点击【确定】的操作函数
            // 先判断本组中有没有这个人 todo
            var flag = false;
            // 获取数据
            for(var i = 0; i < this.tableData.length; i++){
                if(this.tableData[i].name == this.$store.state.name){
                    // 找到所属分类
                    if(this.dialogEventAdd.workType[0] == 'hasTodo'){
                        this.tableData[i].hasTodo.push({
                            title: this.dialogEventAdd.title,
                            detail: this.dialogEventAdd.detail,
                            needTime: this.dialogEventAdd.needTime,
                        });
                    }
                    flag = true;
                    break;
                }
            }
            // 关闭对话框
            this.dialogEventAdd.displayFlag = false;
            // 没这个人时，跳出错误框
            if(!flag){
                alert('没这个人，无法新建');
            }
            console.log(this.tableData);
        },
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
