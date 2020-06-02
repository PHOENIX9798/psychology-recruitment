<template>
  <div>
    <div style="min-height: 500px">
      <div class="tagManage" v-show="changeTag"><el-button type="text" @click="tagManage">标签管理</el-button></div>
      <div class="tagManage" v-show="!changeTag"><el-button type="text" @click="tagManage">返回实验管理</el-button></div>
      <div v-show="!changeTag"><manageTag></manageTag></div>
      <div style="width: 80%;margin:0 auto;" v-show="changeTag">
        <el-row>
          <el-col :span=11 :offset="1">
            <el-menu default-active="1" mode= "horizontal" @select="handleSelect" style="background-color: #f6f6f6">
              <el-menu-item index="1">未发布</el-menu-item>
              <el-menu-item index="2">未开始</el-menu-item>
              <el-menu-item index="3">正在进行</el-menu-item>
              <el-menu-item index="4">已结束</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span=2 style="margin: 1% 0 0 0"><el-button type="primary" @click="addTest">发布实验</el-button></el-col>
          <!--        <el-col :span=6 style="margin-top: 1%">-->
          <!--          <el-input-->
          <!--            placeholder="请输入关键字查询"-->
          <!--            v-model="input1"-->
          <!--            >-->
          <!--            <i slot="prefix" class="el-input__icon el-icon-search"></i>-->
          <!--          </el-input>-->
          <!--        </el-col>-->
          <!--        <el-col :span=3 style="margin-top: 1%">-->
          <!--          <el-button type="primary">开始查询</el-button>-->
          <!--        </el-col>-->
        </el-row>
      </div>
      <div v-show="changeTag">
        <div style="padding: 0;border: 0;margin: 1% 1% 0 0 ;display: inline-block;text-align: left" v-for="item in staffTest" :key="item.id">
          <el-card class="box-card" shadow="hover">
            <div class="clearfix">
              <el-tag class="tag-box" size="mini" type="success" effect="dark" v-show="item.category==='本站问卷'">{{item.category}}</el-tag>
              <el-tag class="tag-box" size="mini" type="warning" effect="dark" v-show="item.category==='问卷星'">{{item.category}}</el-tag>
              <el-tag class="tag-box" size="mini" type="danger" effect="dark"  v-show="item.category==='线下'">{{item.category}}</el-tag>
              <el-button class="title-box" @click="details(item.id)" type="text"><strong>{{item.title}}</strong></el-button>
              <br>
              <div class="content-box">内容：{{item.introduction}}</div>
              <span class="block"><el-avatar :size="40" :src="item.logo"  ></el-avatar></span>
              <div class="money-box">报酬：{{item.money + 'rmb' }}</div>
              <div  class="text-box">时长：{{item.duration + 'min'}}</div>
              <span @click="lookchat"><i class="el-icon-chat-dot-square"></i></span>
            </div>
          </el-card>
        </div>
        <el-dialog title="实验详情"
                   :visible.sync="dialogTableVisible"
                   :before-close="handleClose">
          <div class="dia-box1">
            <div class="details">
              <div>实验名称：{{test.title}}</div>
              <div>实验类别：{{test.category}}</div>
              <div>实验进行状态：{{test.state}}</div>
              <div>实验时长：{{test.duration}}分钟左右</div>
              <div>实验报酬：{{test.money}}元</div>
              <div>所需人数：{{test.number}}</div>
              <div>已报名人数：{{test.person}}</div>
              <div>实验描述：{{test.introduction}}</div>
              <div>被试要求：
                <span v-for="item in test.tag" :key="item.id">
                <el-tag>{{item.content}}</el-tag>
              </span>
              </div>
              <div v-show="test.category==='本站问卷'">
                时间地点：
                <div v-for="item in test.placeTime" :key="item.id">
                <span>
                  <el-radio v-model="radio"></el-radio>
                </span>
                  {{item.place}}
                  <span v-for="time in item.time" :key="time.id">
                  开始：{{time.start}} 所需人数：{{time.people}} 已报名人数：{{time.sign}}
                </span>
                </div>
              </div>
            </div>
            <div>
              <el-button type="primary" round @click="edit"  class="button-box" v-show="test.state === '尚未开始/暂停'">编辑实验</el-button>
              <el-button type="primary" round @click="joins" class="button-box">报名情况</el-button>
              <el-button type="primary" round @click="manageStaff" class="button-box">管理其他主试</el-button>
              <br>
              <el-button type="primary" round @click="deal(0)" class="button-box"  v-show="test.state === '正在进行'">暂停实验</el-button>
              <el-button type="warning" round @click="deal(1)"  class="button-box" v-show="test.state === '尚未开始/暂停'">开始实验</el-button>
              <el-button type="warning" round @click="deal(2)"  class="button-box" v-show="test.state === '正在进行'">结束实验</el-button>
              <el-button type="danger"  round @click="deal(3)"  class="button-box" v-show="test.state === '尚未开始/暂停'">删除实验</el-button>
            </div>
          </div>
        </el-dialog>
        <el-dialog title="评价情况" fullscreen :visible.sync="dialogTableVisible1">
          <div class="dia-box2">
            <div class="chat" v-for="item in 12" :key="item">
              <div class="size"><span>（用户名）我是被试 </span>&nbsp;&nbsp;&nbsp;<span> 2019.1.16 15：00 </span></div>
              <br>
              <el-row :gutter="30">
                <el-col :span=20><span style="margin-top: 10px;">（评价内容）xxxxxdfgsdfgsdfgsfgsfsgdfgsdfgsdfgsdfgsxxxxxxxxbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbxxxrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrxxx</span></el-col>
                <el-col :span=4><el-button size="mini" type="warning" plain>举报此评论</el-button></el-col>
              </el-row>
            </div>
          </div>
        </el-dialog>
        <el-dialog title="报名情况" :visible.sync="dialogTableVisible2" fullscreen>
          <div class="table-box">
            <el-table :data="gridData">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column property="name" label="姓名" width="100"></el-table-column>
              <el-table-column property="phone" label="联系方式" width="110"></el-table-column>
              <el-table-column property="date" label="选择时间" width="250" sortable></el-table-column>
              <el-table-column property="danwei" label="单位" width="150"></el-table-column>
              <el-table-column property="age" label="年龄" width="50"></el-table-column>
              <el-table-column property="zhuanye" label="专业" width="100"></el-table-column>
              <el-table-column property="zhuangtai" label="状态" width="120"></el-table-column>
              <el-table-column property="text" label="备注"></el-table-column>
              <el-table-column property="do" label="操作" align="left" width="200">
                <template slot="header" slot-scope="scope">
                  <el-button
                    size="small"
                    type="primary">
                    批量拒绝
                  </el-button>
                  <el-button
                    size="small"
                    type="primary">
                    批量通过
                  </el-button>
                </template>
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small">
                    拒绝
                  </el-button>
                  <el-button
                    type="text"
                    size="small"
                    @click="reported">
                    举报
                  </el-button>
                </template></el-table-column>
            </el-table>
          </div>
        </el-dialog>
        <el-dialog :visible.sync="dialogTableVisibleAddEdit" class="dia-box3" :title="operation">
          <el-form ref="form" :model="test" label-width="80px" class="form-box">
            <el-form-item label="实验性质">
              <el-select v-model="test.form" placeholder="请选择实验性质">
                <el-option label="线上实验" value="线上实验"></el-option>
                <el-option label="线下实验" value="线下实验"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="批准号" v-show="test.form === '线下实验'">
              <el-input v-model="test.HR"></el-input>
            </el-form-item>
            <el-form-item label="实验名称">
              <el-input v-model="test.title"></el-input>
            </el-form-item>
            <el-form-item label="实验类别" v-show="test.form === '线下实验'">
              <el-select v-model="test.category"  placeholder="请选择类别" filterable>
                <el-option
                  v-for="item in optionCategory"
                  :key="item.id"
                  :label="item.content"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="实验时长">
              <el-input v-model="test.duration" placeholder="完成一次实验大致所需要的时间，默认为分钟" type="number"></el-input>
            </el-form-item>
            <div v-for="(item, index) in test.tmp" :key=index>
              <el-form-item label="开始时间">
                <el-date-picker
                  v-model="item.time"
                  type="datetime"
                  placeholder="选择实验开始时间">
                </el-date-picker>
                <el-button icon="el-icon-close" type="text" @click="closeTime(index)" v-show="test.tmp.length > 1" size="small">删掉时间地点人数分组</el-button>
              </el-form-item>
              <el-form-item label="实验地点" v-show="test.form === '线下实验'">
                <el-autocomplete
                  v-model="item.place"
                  class="inline-input"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入地点"
                  @select="handleSelect"
                ></el-autocomplete>
              </el-form-item>
              <el-form-item label="实验人数">
                <el-input placeholder="以上时间段最多能报名的人数" v-model="item.people" type="number"></el-input>
              </el-form-item>
              <!--            <div v-for="(x,y) in item.time" :key="y">-->
              <!--              <el-row>-->
              <!--                <el-col :span=21>-->
              <!--                  shiyanshijian-->
              <!--                </el-col>-->
              <!--              </el-row>-->
              <!--              <el-row :gutter="20">-->
              <!--                <el-col :span=20>-->
              <!--                  -->
              <!--                </el-col>-->
              <!--                <el-col :span=4><el-button icon="el-icon-close" circle size="medium" type="warning" plain @click="closeTime(item.time,y)" v-show="item.time.length-1"></el-button></el-col>-->
              <!--              </el-row>-->
              <!--            </div>-->
              <!--            <el-button type="primary" @click="addTime(test.tmp[index].time)" class="add-button" plain v-show="test.form === '线下实验'"><i class="el-icon-circle-plus-outline" v-show="test.form === '线下实验'"></i> 给当前地点添加时间段</el-button>-->
            </div>
            <el-button type="primary" @click="addAddress" class="add-button" plain v-show="test.form === '线下实验'"><i class="el-icon-circle-plus-outline" v-show="test.form === '线下实验'"></i>新增时间段与地点人数</el-button>
            <!--          <el-button type="warning" @click="delAddress(test.tmp)" class="add-button" plain v-show="test.form === '线下实验'"><i class="el-icon-circle-close" v-show="test.form === '线下实验'"></i> 删除刚刚添加的地点</el-button>-->
            <el-form-item label="实验报酬">
              <el-input v-model="test.money"></el-input>
            </el-form-item>
            <el-form-item label="实验要求">
              <el-select v-model="test.label" multiple placeholder="请选择标签，可自定义" allow-create filterable>
                <el-option
                  v-for="item in optionLabel"
                  :key="item.id"
                  :label="item.content"
                  :value="item.content">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="实验描述">
              <el-input type="textarea" v-model="test.introduction" placeholder="大致描述被试需要做什么"></el-input>
            </el-form-item>
            <el-form-item label="问卷链接" v-show="test.form !== '线下实验'">
              <el-input v-model="test.lianjie"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-if="operation" @click="startCreate">发布实验</el-button>
              <el-button type="primary" v-else @click="startChange">修改完成</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <el-dialog title="管理主试" :visible.sync="dialogTableVisible4">
          <el-table :data="gridData1" style="width: 80%;margin: 0 auto">
            <el-table-column property="name" label="用户名"></el-table-column>
            <el-table-column property="date" label="手机号码"></el-table-column>
            <el-table-column property="address" label="其他信息"></el-table-column>
          </el-table>
          <el-button @click="pullStaff" style="margin-top: 5%" type="primary">拉取主试</el-button>
        </el-dialog>
      </div>
    </div>
    <div class="block-page">
      <el-pagination
        v-show="changeTag"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    import { fakeData } from '../../request/index'
    import {createTest,viewTest,dealTest,changeTest,viewLabel,
        deleteLabel,addTestLabel,addLabel,viewPlace,addQn,viewQn,changeQn,reportAdd} from '@/request/api';// 导入我们的api接口
    import manageTag from '../../components/home/manageTag'
    import circleUrl from '../../../src/assets/用户1.jpg'
  export default {
    name: "staffPerson",
    components:{manageTag},
    watch:{
        dialogTableVisible:function(){
            this.handleSelect(this.currentKey);
        }
    },
    data(){
      return {
        circleUrl: circleUrl,

        input1:'',
        active:'1',
        changeTag:true,
        dialogTableVisible:false,
        dialogTableVisible1:false,
        dialogTableVisible2:false,
        dialogTableVisible4:false,
        dialogTableVisibleAddEdit:false,
        gridData: [
          {
            name: '王小虎',
            danwei:'华东师范大学',
            age:23,
            zhuanye:'jisuaji',
            date: '2016-05-02',
            phone:12369854789,
            text:'我爱吃饭',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            name: '王小虎',
            danwei:'华东师范大学',
            age:23,
            zhuanye:'jisuaji',
            date: '2016-05-02',
            phone:12369854789,
            text:'我爱吃饭',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            name: '王小虎',
            danwei:'华东师范大学',
            age:23,
            zhuanye:'jisuaji',
            date: '2016-05-02',
            phone:12369854789,
            text:'我爱吃饭',
            address: '上海市普陀区金沙江路 1518 弄'
          },
        ],
        gridData1: [
          {
            name: '王小虎',
            date: '14758236594',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            name: '王小虎',
            date: '18825963254',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            name: '王小虎',
            date: '13745962584',
            address: '上海市普陀区金沙江路 1518 弄'
          },
        ],

        value1: '',
        value2: '',
        options: [{
          value: '选项1',
          label: '右利手'
        }, {
          value: '选项2',
          label: '母语中文'
        }, {
          value: '选项3',
          label: '身体健康'
        }, {
          value: '选项4',
          label: '不能化妆'
        }, {
          value: '选项5',
          label: '携带本人真实证件'
        }],
          //正在修改
          optionLabel: [],
          optionCategory:[{id:1,content:'行为'},{id:2,content:'核磁'},{id:3,content:'人体'}],
          operation:'',//发布实验和修改实验的转换
        test:{
              title:'',
              category:'',
              form:'线下实验',
              HR:'',
              duration:'',
              introduction:'',
              number:0,
              person:0,
              money:'',
              state:'',
              tmp:[
                {
                  time:'',
                  place:'',
                  people:'',
                },
              ],
              type:[],
              label:[],
              lianjie:'',
          },//实验详情内容
        staffTest:[],//主试个人中心正在显示的实验
        currentTestId:0,//当前正在操作的实验id
          currentLabelId:0,
          currentKey:1,
      }
    },
    methods:{
      imgSrc(item){
        return require('../../../src/assets/'+item.logo);
      },
      manageStaff(){
        this.dialogTableVisible4 = true;
      },
      tagManage(){
        this.changeTag = !this.changeTag;
      },
      pullStaff(){
        this.$prompt('请输入其他主试的注册手机号码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '拉取成功！'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      reported(){
          this.$prompt('请输入举报理由', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            this.$message({
              type: 'success',
              message: '您的举报已上报到管理员处审核'
            });
            reportAdd({
              category:'SP',
              type:value,
              weight:20,//此处分值不是应该由后端收到‘sp’后自行判断扣多少吗
              creatorId: this.$store.state.userID,
            }).then(()=>alert(value + '  ' + this.$store.state.userID));
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
      },
        loadAll() {
            this.restaurants=[];
            viewPlace({
                operation:0
            }).then(res=>{
                if(res.code===1){
                    for(let i=0;i<res.data.length;i++){
                        this.restaurants.push({value:res.data[i].name,address:res.data[i].id});
                    }
                }
            });
        },
        select(){

        },
        delAddress(tmp){
            if(tmp.length>1){
                tmp.pop();
            }
        },
        addAddress(){
            this.test.tmp.push({time:'',place:'',people:''});
        },
        closeTime(index){
            this.test.tmp.splice(index,1);
        },
        addTime(item){
          console.log(item);
          item.push({time:'',people: ''});
        },
        querySearch(queryString, cb) {
            let restaurants = this.restaurants;
            let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        //开始修改
      details(id){
          this.currentTestId=id;
          this.viewTestLabel(this.currentTestId);
          this.viewTestQn(this.currentTestId);
          viewTest({
              testId:id,
              operation:-3,
              result:fakeData.currentTest
          }).then(res=>{
              this.$alert(res);
              if(res.code===1){
                  this.test.title=res.test.title;
                  this.test.category=res.test.category;//实验类别划分后处理
                  this.test.duration=res.test.duration;//需处理
                  this.test.introduction=res.test.introduction;
                  this.test.number=res.test.number;
                  this.test.person=res.test.person;
                  this.test.money=res.test.money;
                  this.test.placeTime=res.test.placeTime;
                  this.test.tag=res.test.tag;
                  if(res.test.state==='NOTSTARTED'){
                      this.test.state='尚未开始/暂停';
                  }else if(res.test.state==='STARTED'){
                      this.test.state='正在进行';
                  }else if(res.test.state==='ENDED'){
                      this.test.state='已经结束';
                  }
                  if(res.test.HR===''){
                      this.test.form='线上实验';
                      this.test.HR='无';
                  }else{
                      this.test.form='线下实验';
                      this.test.HR=res.HR;
                  }
              }else{
                  this.$alert('数据错误', '提示', {
                      confirmButtonText: '确定'
                  });
              }
          });
          this.dialogTableVisible = true;
      },
      looks(){
          this.dialogTableVisible1 = true;
      },
      joins(){
        this.dialogTableVisible2 = true;
      },
      edit(){
        this.operation='编辑实验';
        this.dialogTableVisibleAddEdit = true;
      },
        startChange() {
            changeTest({
                staffId:1,//需传入store值
                testId:this.currentTestId,
                title:this.test.title,
                introduction:this.test.introduction,
                duration:this.test.duration,
                money:this.test.money,
                number:this.test.number,
                category:this.test.category,
                password:this.test.password,
                HR:this.test.HR
            }).then(res=>{
                if(res.code===1){
                    //更改实验标签
                    this.updateLabel(this.test.label);
                    this.changeTestQn(this.currentTestId);
                    this.$alert('修改成功', '提示', {
                        confirmButtonText: '确定'
                    });
                }else{
                    this.$alert('很抱歉，数据错误', '提示', {
                        confirmButtonText: '确定'
                    });
                }
            });
        },
      handleSelect(key) {
        this.currentKey=key;
        if(key==='1'){
            this.showStaffTest(-1);
        }else if(key==='2'){
            this.showStaffTest(0);
        }else if(key==='3'){
            this.showStaffTest(1);
        }else if(key==='4'){
            this.showStaffTest(2);
        }
      },
      handleClose(){//对话弹出框关闭后调用
          this.dialogTableVisible=false;
      },
        //创建实验
      addTest(){
          this.operation='发布实验';
          this.dialogTableVisibleAddEdit = true;
          this.test.tmp = [
            {
              place:'',
              time:[{time:'',people: ''},]
            },
          ];
      },
        startCreate(){//请求创建实验
            console.log(this.test.tmp);
            createTest({//需传入与输入框绑定的真实值
                staffId:1,//需传入store值
                title:this.test.title,
                introduction:this.test.introduction,
                duration:this.test.duration,
                money:this.test.money,
                number:this.test.number,
                category:this.test.category,
                password:this.test.password,
                HR:this.test.HR
            }).then(res=>{

                if(res.code===1){
                    this.currentTestId=res.id;
                    this.updateLabel(this.test.label);
                    this.dialogTableVisibleAddEdit = false;
                    this.addTestQn( this.currentTestId);
                    this.$alert('创建成功', '提示', {
                        confirmButtonText: '确定'
                    });
                }else{
                    this.$alert('很抱歉，数据错误', '提示', {
                        confirmButtonText: '确定'
                    });
                }
            });
        },
      lookchat(){
        this.dialogTableVisible1 = true;
      },
        //修改实验
      requestDeal(operation){
          dealTest({
              staffId:1,//从store中获取
              testId:this.currentTestId,
              operation:operation
          }).then(res=>{
              if(res.code===1){
                  this.details(this.currentTestId);
                  if(operation===0){
                      this.$alert('该实验已暂停', '提示', {
                          confirmButtonText: '确定'
                      });
                  }else if(operation===2){
                      this.$alert('该实验已结束', '提示', {
                          confirmButtonText: '确定'
                      });
                  }else if(operation===3){
                      this.$alert('该实验已删除', '提示', {
                          confirmButtonText: '确定',
                          callback: action => {
                              this.dialogTableVisible=false;
                          }
                      });
                  }
              }else{
                  this.$alert('数据错误', '提示', {
                      confirmButtonText: '确定'
                  });
              }
          });
      },
      deal(operation){
          if(operation===3){
              this.$confirm('此操作将永久删除该实验, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
              }).then(() => {
                  this.requestDeal(operation);
              }).catch(() => {
                  this.$message({
                      type: 'info',
                      message: '已取消删除'
                  });
              });
          }else{
              this.requestDeal(operation);
          }
      },
        //展示实验
      showStaffTest(operation){
          viewTest({
              operation:operation,
              staffId:1,//需修改从store中获取
              result:fakeData.showTest
          }).then(res=>{
              if(res.code===1){
                  this.staffTest=res.test;
              }else{
                  this.$alert('数据错误', '提示', {
                      confirmButtonText: '确定'
                  });
              }
          });
      },
        //展示实验标签选项
      showLabelOption(){
          viewLabel({
              operation:0
          }).then(res=>{
              if(res.code===1){
                  this.optionLabel=res.data;
              }else{
                  this.$alert('实验标签展示出现数据错误', '提示', {
                      confirmButtonText: '确定'
                  });
              }
          });
      },
        //展示某个实验的标签
        viewTestLabel(testId){
            this.test.label=[];
            viewLabel({
                operation:1,
                testId:testId
            }).then(res=>{
                if(res.code===1){
                    for(let i=0;i<res.data.length;i++){
                        this.test.label.push(res.data[i].content);
                    }
                }else{
                    this.$alert('当前实验实验标签展示出现数据错误', '提示', {
                        confirmButtonText: '确定'
                    });
                }
            });
        },
        //修改实验标签
       updateLabel(newLabel){
            deleteLabel({
               operation:1,
               testId:this.currentTestId,
            }).then(res=>{
                let tag=0;
                if(res.code===1){
                    for(let i=0;i<newLabel.length;i++){
                        for(let j=0;j<this.optionLabel.length;j++){
                            if(newLabel[i]===this.optionLabel[j].content){
                                tag=1;
                                addTestLabel({
                                    staffId:1,
                                    testId:this.currentTestId,
                                    labelId:this.optionLabel[j].id
                                }).then(res=>{
                                    if(res.code===1){
                                        console.log(1)
                                    }else{
                                        console.log(-1);
                                    }
                                });
                            }
                        }
                        if(tag===0){
                            addLabel({
                                creatorId:1,//staffId,从store中传值
                                point:'无分类',//默认无分类，直到管理端进行分类
                                content:newLabel[i]
                            }).then(res=>{
                                if(res.code===1){
                                    addTestLabel({
                                        staffId:1,
                                        testId:this.currentTestId,
                                        labelId:res.data.id
                                    }).then(res=>{
                                        if(res.code===1){
                                            console.log(1)
                                        }else{
                                            console.log(-1);
                                        }
                                    });
                                }else{
                                    console.log(-1);
                                }
                            });
                            tag=1;
                        }
                    }
                }else{
                    this.$alert('实验标签处理时出现数据错误', '提示', {
                        confirmButtonText: '确定'
                    });
                }
            });
       },
        addTestQn(testId){
            addQn({
                userId:1,//传入对应的主试值
                testId:testId,
                link:this.test.lianjie
            }).then(res=>{
                if(res.code===1){
                    console.log('添加问卷成功');
                }else{
                    this.$alert('添加问卷失败', '提示', {
                        confirmButtonText: '确定'
                    });
                }
            });
        },
        viewTestQn(testId){
            viewQn({
                testId:testId,
            }).then(res=>{
                if(res.code===1){
                    this.test.lianjie=res.link;
                }else if(res.code===2){
                    this.test.lianjie='';
                }else{
                    this.$alert('查看问卷有误', '提示', {
                        confirmButtonText: '确定'
                    });
                }
            });
        },
        changeTestQn(testId){
            changeQn({
                testId:testId,
                link:this.test.lianjie,
            }).then(res=>{
                if(res.code===1){
                    console.log('修改问卷成功');
                }else{
                    this.$alert('查看问卷有误', '提示', {
                        confirmButtonText: '确定'
                    });
                }
            });
        }
    },
    mounted(){
        this.showStaffTest(-1);
        this.loadAll();
        this.showLabelOption();
    }
  }
</script>

<style scoped>
  .tag-box{
    float: left;
  }
  .title-box{
    font-size: 16px;
    max-width: 160px;
    border: none;
    color: #444444;
    margin-left: 34px;
  }
  .title-box,.content-box{
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-top: 2px;
  }
  .content-box{
    margin-left: 70px;
    margin-bottom: 15px;
  }
  .el-icon-chat-dot-square{
    float: right;
    margin-top: -8px;
  }
  .el-icon-chat-dot-square:hover{
    color: #409EFF;
    cursor:pointer;
  }
  .block{
    float: left;
    margin-left: 10px;
  }
  .block-page{
    text-align: right;
    margin-right: 15%;
  }
  .text-box,.money-box {
    font-size: 13px;
    margin:4px 0 0 70px;
    text-align: left;
  }
  .money-box{
    margin-top: 20px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 24vw;
    /*background-color: #D4D8FE;*/
  }
  .box-card:hover{
    background-color: #F2F6FC;
  }

  .details{
    text-align: left;
    margin: 0 0 30px 50px;
  }
  .dia-box1{
    max-height: 600px;
    overflow: auto;
  }
  .dia-box2{
    /*min-width: 100%;*/
    /*max-height: 1000px;*/
    overflow: auto;
  }
  .chat{
    border: 1px solid #dddddd;
    border-radius: 3px;
    width: 80%;
    text-align: left;
    margin: auto auto 20px auto;
    padding: 5px;
    /*max-height: 200px;*/

  }
  .size{
    font-size: 13px;
    color: #303030;
  }
  .form-box{
    padding: 0 60px 0 60px;
    overflow: hidden scroll;
    max-height: 400px;
    text-align: left;
  }
  .button-box{
    margin-bottom: 1%;
  }
  .dia-box3{
    overflow: visible;
  }
  .inline-input{
    width: 100%;
  }
  .day-box{
    width: 100%;
  }
  .add-button{
    width: 100%;
    margin: -30px 0 30px 0;
  }
  .table-box{
  }
  .tagManage{
    float: right;
    margin-right: 5%;
  }
</style>
