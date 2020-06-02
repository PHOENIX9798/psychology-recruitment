<template>
  <div>
    <div class="box">
      <div>
        <div style="padding: 0;border: 0;margin: 1% 1% 0 0;display: inline-block" v-for="item in allTest" :key="item.id">
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
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="20">
      </el-pagination>
      <el-dialog title="实验详情" :visible.sync="dialogTableVisible" >
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
                <span v-for="time in item.time" :key="item.id">
                  开始：{{time.start}} 所需人数：{{time.people}} 已报名人数：{{time.sign}}
                </span>
              </div>
            </div>
          </div>
          <div>
            <el-button type="primary" round @click="joinUs" class="button-box">我要报名</el-button>
          </div>
        </div>
      </el-dialog>
      <el-dialog title="选择时间地点" :visible.sync="dialogTableVisible2">
        <el-form :model="form">
          <el-form-item label="选择地点" :label-width="formLabelWidth">
            <el-select v-model="form.address" placeholder="请选择实验地点" style="width: 100%;">
              <el-option label="华东师范大学中山校区教书院" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择时间" :label-width="formLabelWidth">
            <el-select v-model="form.time" placeholder="请选择您方便的实验时间" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogTableVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="dialogTableVisible2 = false">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog title="评价情况" fullscreen :visible.sync="dialogTableVisible3">
        <div class="dia-box2">
          <div class="chat" v-for="item in 12" :key="item">
            <div class="size"><span>（用户名）我是被试 </span>&nbsp;&nbsp;&nbsp;<span> 2019.1.16 15：00 </span></div>
            <br>
            <span style="margin-top: 10px;">（评价内容）xxxxxdfgsdfgsdfgsfgsfsgdfgsdfgsdfgsdfgsxxxxxxxxbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbxxxrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrxxx</span></div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
    import {fakeData} from '../request/index'
    import selectTest from './selectTest'
    import { viewTest,showTest } from '@/request/api';// 导入我们的api接口
    export default {
        name: "box",
        components:{selectTest},
      data(){
          return {
            circleUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            dialogTableVisible:false,
            dialogTableVisible1:false,
            dialogTableVisible2:false,
            dialogTableVisible3:false,
            form: {
              time:'',
              address: '',
            },
            formLabelWidth:'200px',
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
              test:{
                  title:'',
                  category:'',
                  form:'',
                  HR:'',
                  duration:'',
                  introduction:'',
                  number:0,
                  person:0,
                  money:'',
                  state:'',
              },//实验详情内容
              allTest:[],//主试个人中心正在显示的实验
              currentTestId:0,//当前正在操作的实验id
              input1: '',
              input2: '',
              input3: '',
              select: '',
              drawer: false,
              direction: 'rtl',
              pickerOptions: {
                  shortcuts: [{
                      text: '最近一周',
                      onClick(picker) {
                          const end = new Date();
                          const start = new Date();
                          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                          picker.$emit('pick', [start, end]);
                      }
                  }, {
                      text: '最近一个月',
                      onClick(picker) {
                          const end = new Date();
                          const start = new Date();
                          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                          picker.$emit('pick', [start, end]);
                      }
                  }, {
                      text: '最近三个月',
                      onClick(picker) {
                          const end = new Date();
                          const start = new Date();
                          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                          picker.$emit('pick', [start, end]);
                      }
                  }]
              },
              value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
              value2: '',
          }
      },
      mounted(){
          this.show(-2);
      },
      methods:{
          details(id){
              this.currentTestId=id;
              viewTest({
                  testId:id,
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
        joinUs(){
            //this.dialogTableVisible2 = true;
        },
        //正在修改
          show(operation){
              showTest({
                  operation:operation,
                  result:fakeData.showTest
              }).then(res=>{
                  if(res.code===1){
                      this.allTest=res.test;
                  }else{
                      this.$alert('数据错误', '提示', {
                          confirmButtonText: '确定'
                      });
                  }
              });
          },
        lookchat(){
          this.dialogTableVisible3 = true;
        },
      }
    }
</script>

<style scoped>
   .box{
     width: 80%;
     min-height:500px;
     margin: auto auto auto auto;
   }
   .more{
      margin-top:10px;
      margin-right:18px;
      width:30%;
   }
   .tag-box{
     float: left;
   }
   .title-box{
     font-size: 16px;
     max-width: 14vw;
     border: none;
     color: #444444;
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
   .el-icon-chat-dot-square{
     float: right;
     margin-top: -8px;
     cursor:pointer;
   }
   .el-icon-chat-dot-square:hover{
     color: #409EFF;
   }


  .clearFix:before,
  .clearFix:after {
    display: table;
    content: "";
  }
  .clearFix:after {
    clear: both
  }

  .box-card {
    width: 25vw;

    /*height:10vw;*/
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
  .button-box{
    margin-bottom: 1%;
  }
   .chat{
     border: 1px solid #dddddd;
     border-radius: 3px;
     width: 65%;
     text-align: left;
     margin: auto auto 3% auto;
     padding: 15px;
     /*max-height: 200px;*/

   }
   .size{
     font-size: 13px;
     color: #303030;
     margin-bottom: -10px;
   }
   .border{
     font-size: 24px;
     text-align: center;
     position: center;
     margin-bottom: 1%;
     margin-top:1%;
   }
   .border::after,.border::before{
     content: '';
     display: inline-block;
     vertical-align: 8px;
     margin: 0 10px;
     width: 50px;
     height: 1px;
     background: #d1d4db;
   }
</style>
