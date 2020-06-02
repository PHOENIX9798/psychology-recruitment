<template>
  <div>
    <div style="min-height: 500px">
      <div style="width: 80%;margin:0 auto;">
        <el-row>
          <el-col :span=11 :offset="1">
            <el-menu default-active="1" mode="horizontal" @select="handleSelect" style="background-color: #f6f6f6">
              <el-menu-item index="1">所有实验</el-menu-item>
              <el-menu-item index="3">报名成功</el-menu-item>
              <el-menu-item index="2">被拒绝</el-menu-item>
              <el-menu-item index="4">已举报/被举报</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div>
        <div style="padding: 0;border: 0;margin: 1% 1% 0 0;display: inline-block;text-align: left" v-for="item in subjectTest" :key="item.id">
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
              <span @click="showAllComment"><i class="el-icon-chat-dot-square"></i></span>
            </div>
          </el-card>
        </div>
        <el-dialog :title='test.title' :visible.sync="dialogTableVisible" :before-close="handleClose">
          <div class="dia-box1">
            <div class="details">
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
              <el-button type="primary" round @click="reported" class="button-box">我要举报</el-button>
              <el-button type="primary" round @click="chat" class="button-box">评价实验</el-button>
              <el-button type="primary" round @click="completed" class="button-box">完成实验</el-button>
              <el-button type="danger" round @click="del" class="button-box">放弃报名</el-button>
            </div>
          </div>
        </el-dialog>
        <el-dialog title="填写举报信息" :visible.sync="dialogTableVisible1">
          <div class="dia-box2">
            <el-row>
              <el-col :span=6>选择类别：</el-col>
              <el-col :span=18>
                <el-checkbox-group
                  v-model="checkedCities"
                  :min="1"
                  :max="2">
                  <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row style="margin:20px 0 20px 0">
              <el-col :span=6>具体描述：</el-col>
              <el-col :span=18>
                <el-input type="textarea" v-model="report" placeholder="为什么要举报这个实验呢？请根据您选择的类别具体描述此次实验的不合理行为"></el-input>
              </el-col>
            </el-row>
            <div><el-button type="primary">提交</el-button></div>
          </div>
        </el-dialog>
        <el-dialog title="评价实验" :visible.sync="dialogTableVisible2">
          <el-row style="margin:20px 0 20px 0">
            <el-col :span=5>评价实验：</el-col>
            <el-col :span=18>
              <el-input type="textarea" v-model="chatted" placeholder="评价本次实验，如是否超时，报酬是否合理等，注意不要透露本次实验的实验内容~"></el-input>
            </el-col>
          </el-row>
          <div><el-button type="primary">提交</el-button></div>
        </el-dialog>
      </div>
    </div>
    <div class="block-page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="9"
        layout="total, prev, pager, next"
        :total="10">
      </el-pagination>
    </div>
  </div>

</template>

<script>
    import { fakeData } from '../../request/index'
    import { viewTest,viewLabel } from '@/request/api';// 导入我们的api接口

  const cityOptions = ['超时', '与实验描述不符', '受到骚扰', '酬劳未付', '其他'];
  export default {
    name: "subjectPerson",
    data(){
      return {
        circleUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        input1:'',
        report:'',
        chatted:'',
        active:'1',
        formLabelWidth:'120px',
        currentPage1: 5,
        dialogTableVisible:false,
        dialogTableVisible1:false,
        dialogTableVisible2:false,
        dialogTableVisibleEdit:false,
        checkedCities: [],
        cities: cityOptions,
        form: {
          name: '',
          character: '线下实验',
          time: '',
          howlong: '',
          address: '',
          type: [],
          money:'',
          more:'',
          desc: '',
          number:'',
          lianjie:'',
        },
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
          test:{
              title:'',
              category:'',
              duration:'',
              introduction:'',
              number:0,
              person:0,
              money:'',
              state:'',
              form:'',
              label:[]
          },//实验详情内容
          subjectTest:[],//主试个人中心正在显示的实验
          currentTestId:0,//当前正在操作的实验id
          radio:true,
      }
    },
    methods:{
      details(id){
          //this.currentTestId=id;
          //this.viewTestLabel(id);
          viewTest({
              //testId:id,
              operation:-3,
              result:fakeData.currentTest
          }).then(res=>{
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
      reported(){
        this.dialogTableVisible1 = true;
      },
      chat(){
        this.dialogTableVisible2 = true;
      },
      completed(){
        this.$confirm('完成实验后将不能举报, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      },
      del(){
        this.$confirm('此操作将永久删除该实验记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleSelect(key){
        if(key==='1'){
            this.showSubjectTest(3);
        }else if(key==='2'){
            this.showSubjectTest(4);
        }else if(key==='3'){
            this.showSubjectTest(5);
        }else if(key==='4'){
            this.showSubjectTest(6);
        }
      },
      handleClose(){
          this.dialogTableVisible=false;
      },
      //开始修改
        showSubjectTest(operation){
            viewTest({
                operation:operation,
                participateId:1,//需修改从store中获取
                result:fakeData.showTest
            }).then(res=>{
                if(res.code===1){
                    this.subjectTest=res.test;
                }else{
                    this.$alert('数据错误', '提示', {
                        confirmButtonText: '确定'
                    });
                }
            });
        },
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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      nihao(){
        this.$prompt('请输入您的评价', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '评价成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消本次评价'
          });
        });
      },
        showAllComment(){
            this.dialogTableVisible1 = true;
        },
    },
      mounted(){
          this.showSubjectTest(3);
      }
  }
</script>

<style scoped>
  .tag-box{
    float: left;
  }
  /*.tag-box1{*/
  /*  float: right;*/
  /*  margin: -10px -10px 0 0;*/
  /*  z-index: 1000;*/
  /*}*/
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
    /*min-width: 600px;*/
    max-height: 500px;
    overflow: auto;
  }

  .chat{
    border: 1px solid #dddddd;
    border-radius: 3px;
    width: 95%;
    text-align: left;
    margin: 0 0 15px 0;
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
  .block-page{
    text-align: right;
    margin-right: 15%;
  }

</style>
