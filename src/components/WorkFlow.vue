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
                            菜单<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command=1>添加</el-dropdown-item>
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
                        <el-popover v-for="(item, index) in scope.row.hasTodo" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                            <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                            <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                            <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                            <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                            <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                        </el-popover>
                    </template>
                </el-table-column>

                <el-table-column prop="inquiry" label="调查" :width="tableWidth">
                    <el-table-column prop="doing" label="实施" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.inquiry.doing.length > 0">
                            <el-popover v-for="(item, index) in scope.row.inquiry.doing" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column prop="outsideRV" label="外部RV" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.inquiry.outsideRV.length > 0">
                            <el-popover v-for="(item, index) in scope.row.inquiry.outsideRV" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column prop="insideRV" label="内部RV" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.inquiry.insideRV.length > 0">
                            <el-popover v-for="(item, index) in scope.row.inquiry.insideRV" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                </el-table-column>

                <el-table-column prop="" label="详细设计书" :width="tableWidth">
                    <el-table-column prop="" label="实施" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.fullDesign.doing.length > 0">
                            <el-popover v-for="(item, index) in scope.row.fullDesign.doing" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="外部RV" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.fullDesign.outsideRV.length > 0">
                            <el-popover v-for="(item, index) in scope.row.fullDesign.outsideRV" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="内部RV" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.fullDesign.insideRV.length > 0">
                            <el-popover v-for="(item, index) in scope.row.fullDesign.insideRV" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                </el-table-column>

                <el-table-column prop="" label="测试式样书" :width="tableWidth">
                    <el-table-column prop="" label="实施" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.testDesign.doing.length > 0">
                            <el-popover v-for="(item, index) in scope.row.testDesign.doing" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="外部RV" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.testDesign.outsideRV.length > 0">
                            <el-popover v-for="(item, index) in scope.row.testDesign.outsideRV" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="内部RV" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.testDesign.insideRV.length > 0">
                            <el-popover v-for="(item, index) in scope.row.testDesign.insideRV" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                </el-table-column>

                <el-table-column prop="" label="代码实装" :width="tableWidth">
                    <el-table-column prop="" label="实施" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.coding.doing.length > 0">
                            <el-popover v-for="(item, index) in scope.row.coding.doing" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="外部RV" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.coding.outsideRV.length > 0">
                            <el-popover v-for="(item, index) in scope.row.coding.outsideRV" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="内部RV" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.coding.insideRV.length > 0">
                            <el-popover v-for="(item, index) in scope.row.coding.insideRV" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                </el-table-column>
                
                <el-table-column prop="" label="测试" :width="tableWidth">
                    <el-table-column prop="" label="实施" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.test.doing.length > 0">
                            <el-popover v-for="(item, index) in scope.row.test.doing" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="外部RV" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.test.outsideRV.length > 0">
                            <el-popover v-for="(item, index) in scope.row.test.outsideRV" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="内部RV" :width="tableWidth">
                        <template slot-scope="scope" v-if="scope.row.test.insideRV.length > 0">
                            <el-popover v-for="(item, index) in scope.row.test.insideRV" :key="index" placement="right" :title="item.title" width="150" trigger="click" v-model="item.tipVisible">
                                <p><span style="color:blue">简述：</span>{{item.detail}}</p>
                                <p><span style="color:blue">期间：</span>{{item.needTime | filterPeriod}}</p>
                                <el-button size="mini" type="primary" @click="tipChange(item)">変更</el-button>
                                <el-button size="mini" type="danger" @click="tipDelete(item)">削除</el-button>
                                <el-button slot="reference" type="primary" icon="el-icon-star-off" circle></el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>

            <!-- 隐藏的弹窗放这里 -->
            <!-- 作业对话框 - add -->
            <el-dialog title="新建作业" :visible.sync="dialogEventAdd.displayFlag" width="30%" :before-close="dialogEventAdd.displayFlag">
                <el-form label-position="right" label-width="120px">
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
                    <el-button @click="cancel(dialogEventAdd)">取 消</el-button>
                    <el-button type="primary" @click="confirm">{{dialogEventAdd.recordMsg}}</el-button>
                </span>
            </el-dialog>

            <!-- 作业对话框 - change -->
            <el-dialog title="变更作业" :visible.sync="dialogEventChange.displayFlag" width="40%" :before-close="dialogEventChange.displayFlag">

                <el-form label-position="right" label-width="120px" disabled>
                    <el-form-item label="作业所属：">
                        <el-cascader v-model="dialogEventChange.workTypeBefore" :options="dialogEventChange.options" :props="{expandTrigger: 'hover'}"></el-cascader>
                    </el-form-item>
                    <el-form-item label="Title：">
                        <el-input v-model="dialogEventChange.titleBefore"></el-input>
                    </el-form-item>
                    <el-form-item label="简述：">
                        <el-input v-model="dialogEventChange.detailBefore"></el-input>
                    </el-form-item>
                    <el-form-item label="工数：">
                        <el-input v-model="dialogEventChange.needTimeBefore"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary" icon="el-icon-arrow-down" circle></el-button>
                <el-form label-position="right" label-width="120px">
                    <el-form-item label="作业所属：">
                        <el-cascader v-model="dialogEventChange.workTypeAfter" :options="dialogEventChange.options" :props="{expandTrigger: 'hover'}"></el-cascader>
                    </el-form-item>
                    <el-form-item label="写入Title：">
                        <el-input v-model="dialogEventChange.titleAfter"></el-input>
                    </el-form-item>
                    <el-form-item label="写入简述：">
                        <el-input v-model="dialogEventChange.detailAfter"></el-input>
                    </el-form-item>
                    <el-form-item label="写入工数：">
                        <el-input v-model="dialogEventChange.needTimeAfter"></el-input>
                    </el-form-item>
                </el-form>

                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancel(dialogEventChange)">取 消</el-button>
                    <el-button type="danger" @click="confirm">{{dialogEventChange.recordMsg}}</el-button>
                </span>
            </el-dialog>

        </div>
    </div>
</template>

<script>
export default {
    name:'WorkFlow',
    data(){
        return{
            msg:'dddddddd',                     // test

            dialogEventAdd:{                    // 添加事项 - 对应数据
                displayFlag: false,             // 控制弹窗flag
                recordMsg:'进击',               // 弹窗右下角显示的msg
                options:[                       // 作业类型选择项设定
                    {value:'hasTodo', label:'待办事项'},
                    {value:'inquiry', label:'调查', children:[
                            {value:'doing', label:'实施'},
                            {value:'outsideRV', label:'外部review'},
                            {value:'insideRV', label:'内部review'}
                        ]
                    },
                    {value:'fullDesign', label:'详细设计书', children:[
                            {value:'doing', label:'实施'},
                            {value:'outsideRV', label:'外部review'},
                            {value:'insideRV', label:'内部review'}
                        ]
                    },
                    {value:'testDesign', label:'测试式样书', children:[
                            {value:'doing', label:'实施'},
                            {value:'outsideRV', label:'外部review'},
                            {value:'insideRV', label:'内部review'}
                        ]
                    },
                    {value:'coding', label:'代码实装', children:[
                            {value:'doing', label:'实施'},
                            {value:'outsideRV', label:'外部review'},
                            {value:'insideRV', label:'内部review'}
                        ]
                    },
                    {value:'test', label:'测试', children:[
                            {value:'doing', label:'实施'},
                            {value:'outsideRV', label:'外部review'},
                            {value:'insideRV', label:'内部review'}
                        ]
                    },
                ],
                workType:'',        // 作业类型
                title:'',           // 标题
                detail:'',          // 具体事项
                needTime:'',        // 所需工时
            },
            dialogEventChange:{
                displayFlag: false,             // 控制弹窗flag
                recordMsg:'变更',               // 弹窗右下角显示的msg
                options:[                       // 作业类型选择项设定
                    {value:'hasTodo', label:'待办事项'},
                    {value:'inquiry', label:'调查', children:[
                            {value:'doing', label:'实施'},
                            {value:'outsideRV', label:'外部review'},
                            {value:'insideRV', label:'内部review'}
                        ]
                    },
                    {value:'fullDesign', label:'详细设计书', children:[
                            {value:'doing', label:'实施'},
                            {value:'outsideRV', label:'外部review'},
                            {value:'insideRV', label:'内部review'}
                        ]
                    },
                    {value:'testDesign', label:'测试式样书', children:[
                            {value:'doing', label:'实施'},
                            {value:'outsideRV', label:'外部review'},
                            {value:'insideRV', label:'内部review'}
                        ]
                    },
                    {value:'coding', label:'代码实装', children:[
                            {value:'doing', label:'实施'},
                            {value:'outsideRV', label:'外部review'},
                            {value:'insideRV', label:'内部review'}
                        ]
                    },
                    {value:'test', label:'测试', children:[
                            {value:'doing', label:'实施'},
                            {value:'outsideRV', label:'外部review'},
                            {value:'insideRV', label:'内部review'}
                        ]
                    },
                ],
                workTypeBefore:'',        // 作业类型 - 变更前
                titleBefore:'',           // 标题     - 变更前
                detailBefore:'',          // 具体事项 - 变更前
                needTimeBefore:'',        // 所需工时 - 变更前
                workTypeAfter:'',         // 作业类型 - 变更后
                titleAfter:'',            // 标题     - 变更后
                detailAfter:'',           // 具体事项 - 变更后
                needTimeAfter:'',         // 所需工时 - 变更后
            },

            tableWidth: '100',                  // 表格的宽设置
            tableData:[                         // 表格数据
                {
                    name:'马茹',                    // 人员姓名
                    hasTodo:[                       // 待办事项
                        {
                            title:'测试',           // 标题
                            detail:'今天要在xxx点之前做完吃晚饭接着看电视啊啊啊啊啊啊啊\n周末约会走起啊',       // 具体内容
                            needTime:2,             // 所需工时
                            tipVisible: false       // popover弹出框的显示控制
                        },{
                            title:'coding',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                            tipVisible: false
                        },{
                            title:'式样书作成',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                            tipVisible: false
                        },{
                            title:'调查',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                            tipVisible: false
                        }
                    ],
                    inquiry:{           // 调查
                        doing:[         // 实施
                            {
                                title:'调查_实施',
                                detail:'今天要在xxx点之前做完吃晚饭接着看电视啊啊啊啊啊啊啊\n周末约会走起啊',
                                needTime:2,
                                tipVisible: false
                            },{
                                title:'coding',
                                detail:'客户紧急需求，明天上午需要做完',
                                needTime:1,
                                tipVisible: false
                            },{
                                title:'式样书作成',
                                detail:'客户紧急需求，明天上午需要做完',
                                needTime:1,
                                tipVisible: false
                            },{
                                title:'调查',
                                detail:'客户紧急需求，明天上午需要做完',
                                needTime:1,
                                tipVisible: false
                            }
                        ],
                        outsideRV:[     // 外部RV
                            {
                                title:'调查_外部RV',
                                detail:'今天要在xxx点之前做完吃晚饭接着看电视啊啊啊啊啊啊啊\n周末约会走起啊',
                                needTime:2,
                                tipVisible: false
                            }
                        ],
                        insideRV:[      // 内部RV
                            {
                                title:'调查_内部RV',
                                detail:'今天要在xxx点之前做完吃晚饭接着看电视啊啊啊啊啊啊啊\n周末约会走起啊',
                                needTime:2,
                                tipVisible: false
                            }
                        ],
                    },
                    fullDesign:{        // 详细设计书
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    testDesign:{        // 测试式样书
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    coding:{            // 代码实装
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    test:{              // 测试
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    }
                },{
                    name:'秋香',
                    hasTodo:[
                        {
                            title:'调查',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                            tipVisible: false
                        }
                    ],
                    inquiry:{
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    fullDesign:{        // 详细设计书
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    testDesign:{        // 测试式样书
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    coding:{            // 代码实装
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    test:{              // 测试
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
                            tipVisible: false
                        },
                        {
                            title:'调查',
                            detail:'客户紧急需求，明天上午需要做完',
                            needTime:1,
                            tipVisible: false
                        }
                    ],
                    inquiry:{
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    fullDesign:{        // 详细设计书
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    testDesign:{        // 测试式样书
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    coding:{            // 代码实装
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    test:{              // 测试
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    }
                },{
                    name:'沈万强',
                    hasTodo:[],
                    inquiry:{
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    fullDesign:{        // 详细设计书
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    testDesign:{        // 测试式样书
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    coding:{            // 代码实装
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    },
                    test:{              // 测试
                        doing:[],
                        outsideRV:[],
                        insideRV:[],
                    }
                }
            ],
        }
    },
    methods:{
        handleCommand(command){     // 对应下拉菜单的数据操作，false：隐藏， 1：添加
            if(command == 1){
                this.dialogEventAdd.displayFlag = true;
            }else if(command == 2){
                
            }else if(command == 3){
                
            }else{

            }
        },
        cancel(obj){                // 点击【取消】的操作函数
            obj.displayFlag = false;
        },
        confirm(){               // 【添加】对话框点击【确定】的操作函数
            var flag = false;       // 是否正确的找打对应的分类flag
            var i = 0;
            var workType = 0;
            // 获取数据
            for(; i < this.tableData.length; i++){
                if(this.tableData[i].name == this.$store.state.name){
                    // 找到对应的人
                    flag = true;
                    break;
                }
            }
            // 没这个人时，跳出错误框
            if(!flag){
                this.$message({
                    type: 'info',
                    message: '错误！没找到这个人！',
                });
                // 关闭对话框
                this.dialogEventAdd.displayFlag = false;
                return;
            }

            // 查找所属分类，然后把数据扔进去
            var destObj = [];           // 需要扔进去的arraylist
            if(this.dialogEventAdd.workType[0] == 'hasTodo'){   // 待办事项
                destObj = this.tableData[i].hasTodo;
            }else if(this.dialogEventAdd.workType[0] == 'inquiry'){     // 调查
                if(this.dialogEventAdd.workType[1] == 'doing'){
                    destObj =  this.tableData[i].inquiry.doing;
                }else if(this.dialogEventAdd.workType[1] == 'outsideRV'){
                    destObj =  this.tableData[i].inquiry.outsideRV;
                }else if(this.dialogEventAdd.workType[1] == 'insideRV'){
                    destObj =  this.tableData[i].inquiry.insideRV;
                }else{
                    flag = false;
                }
            }else if(this.dialogEventAdd.workType[0] == 'fullDesign'){     // 详细设计书
                if(this.dialogEventAdd.workType[1] == 'doing'){
                    destObj =  this.tableData[i].fullDesign.doing;
                }else if(this.dialogEventAdd.workType[1] == 'outsideRV'){
                    destObj =  this.tableData[i].fullDesign.outsideRV;
                }else if(this.dialogEventAdd.workType[1] == 'insideRV'){
                    destObj =  this.tableData[i].fullDesign.insideRV;
                }else{
                    flag = false;
                }
            }else if(this.dialogEventAdd.workType[0] == 'testDesign'){     // 测试式样书
                if(this.dialogEventAdd.workType[1] == 'doing'){
                    destObj =  this.tableData[i].testDesign.doing;
                }else if(this.dialogEventAdd.workType[1] == 'outsideRV'){
                    destObj =  this.tableData[i].testDesign.outsideRV;
                }else if(this.dialogEventAdd.workType[1] == 'insideRV'){
                    destObj =  this.tableData[i].testDesign.insideRV;
                }else{
                    flag = false;
                }
            }else if(this.dialogEventAdd.workType[0] == 'coding'){     // 代码实装
                if(this.dialogEventAdd.workType[1] == 'doing'){
                    destObj =  this.tableData[i].coding.doing;
                }else if(this.dialogEventAdd.workType[1] == 'outsideRV'){
                    destObj =  this.tableData[i].coding.outsideRV;
                }else if(this.dialogEventAdd.workType[1] == 'insideRV'){
                    destObj =  this.tableData[i].coding.insideRV;
                }else{
                    flag = false;
                }
            }else if(this.dialogEventAdd.workType[0] == 'test'){     // 测试
                if(this.dialogEventAdd.workType[1] == 'doing'){
                    destObj =  this.tableData[i].test.doing;
                }else if(this.dialogEventAdd.workType[1] == 'outsideRV'){
                    destObj =  this.tableData[i].test.outsideRV;
                }else if(this.dialogEventAdd.workType[1] == 'insideRV'){
                    destObj =  this.tableData[i].test.insideRV;
                }else{
                    flag = false;
                }
            }

            if(!flag){
                this.$message({
                    type: 'info',
                    message: '错误！没找打此作业的分类！',
                });
                // 关闭对话框
                this.dialogEventAdd.displayFlag = false;
                return;
            }
            
            destObj.push({
                title: this.dialogEventAdd.title,
                detail: this.dialogEventAdd.detail,
                needTime: this.dialogEventAdd.needTime,
            });
            // 关闭对话框
            this.dialogEventAdd.displayFlag = false;
        },
        tipChange(item){
            item.tipVisible = false;
            this.dialogEventChange.displayFlag = true;
            // 初始化变更前的数据
            this.dialogEventChange.workTypeBefore = '';
            this.dialogEventChange.titleBefore = '';
            this.dialogEventChange.detailBefore = '';
            this.dialogEventChange.needTimeBefore = '';
            // 写入变更前的数据
            this.dialogEventChange.workTypeBefore = item.workType;
            this.dialogEventChange.titleBefore = item.title;
            this.dialogEventChange.detailBefore = item.detail;
            this.dialogEventChange.needTimeBefore = item.needTime;
        },
        tipDelete(item){
            item.tipVisible = false;
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
