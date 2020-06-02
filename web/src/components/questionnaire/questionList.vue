<template>
  <div class="questionList">
    <div class="container">
      <el-row>
        <el-col :span=8 :offset=1>
          <div class="buttons-box">
            <el-tabs style="height: 20px;margin-left:150px;">
              <el-tab-pane label="全部问卷"></el-tab-pane>
              <el-tab-pane label="回收站"></el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
        <el-input
          placeholder="搜索问卷标题"
          v-model="input4"
          style="width:300px;margin-left:135px;"
          @keyup.enter.native="query">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button class="button1" type="primary" v-if="test" @click="newQuestion">创建新问卷</el-button>
        <el-button class="button1" type="primary" v-else>恢复问卷</el-button>
      </el-row>
    </div>
    <div class="questionList-box">
      <div class="question-box" v-for="(i,index) in questionLibrary" :key="index">
        <el-row>
          <el-col :span=12><div class="title"><el-link style="font-size: 18px" @click="view(i.id)">{{i.title}}</el-link></div></el-col>
          <el-col :span=12>
            <span v-show="!i.state" :class="!i.state ? 'status' : 'statusnew'">未发布 &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span v-show="i.state" :class="!i.state ? 'status' : 'statusnew'">已发布 &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="number">答卷:{{i.num}}&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="time">创建时间：{{i.createTime}}</span></el-col>
        </el-row>
        <div class="button-box">
          <el-row>
            <el-col :span=14 style="text-align: left;">
              <el-button icon="el-icon-edit-outline" size="medium" style="margin-left: 20px">编辑问卷</el-button> &nbsp;&nbsp;&nbsp;&nbsp;
              <el-button icon="el-icon-s-data" size="medium" @click="computeNum">统计分析</el-button>
              <el-dropdown>
                <el-button type="primary" style="margin-left: 30px" size="medium">
                  分享问卷题目<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>指定人</el-dropdown-item>
                  <el-dropdown-item>本单位</el-dropdown-item>
                  <el-dropdown-item>所有人</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span=10><el-button type="text" icon="el-icon-video-play" v-show="index === 2">发布</el-button><el-button type="text" icon="el-icon-video-pause" v-show="index !== 3">停止</el-button> <el-button icon="el-icon-delete" type="text">删除</el-button></el-col>
          </el-row>
        </div>
      </div>
<!--      <div class="page">-->
<!--        <el-button v-if="isAll" style="float:left" type="primary">全选</el-button>-->
<!--        <el-pagination-->
<!--          :page-size="10"-->
<!--          :pager-count="7"-->
<!--          layout="prev, pager, next"-->
<!--          :total="100">-->
<!--        </el-pagination>-->
<!--      </div>-->
    </div>
  </div>

</template>

<script>
  import {viewQuestionnaireList} from '../../request/api'
    export default {
      name: "questionList",
      data(){
        return{
          isAll:false,
          test:true,
          input4:'',
            questionLibrary:[{
                id:1,
                title:'大学生消费情况',
                questionList:[
                    {
                        id:1,
                        title:'您的性别',
                        choice:[{answer:'男'},{answer:'女'}],
                    },
                    {
                        id:2,
                        title:'您的年级',
                        choice:[{answer:'大一'},{answer:'大二'},{answer:'大三'},{answer:'大四'}],
                    },
                    {
                        id:3,
                        title:'在校期间的平均月消费',
                        choice:[{answer:'男'},{answer:'女'}],
                    }
                ]
            },{
                id:2,
                title:'心理学被试招募被试需求调研',
                questionList:[
                    {
                        id:4,
                        title:'您的性别',
                        choice:[{answer:'男'},{answer:'女'}],
                    },
                    {
                        id:5,
                        title:'您的年级',
                        choice:[{answer:'大一'},{answer:'大二'},{answer:'大三'},{answer:'大四'}],
                    },
                    {
                        id:6,
                        title:'在校期间的平均月消费',
                        choice:[{answer:'男'},{answer:'女'}],
                    }
                ]
            }]
        }
      },
      created(){
        viewQuestionnaireList({
          id: this.$store.state.userID,
          title: ''
        }).then(res => {
          this.questionLibrary = res.data;
          console.log(this.questionList);
        })
      },
      methods:{
        computeNum(){
          this.$router.push({path:'/computeAnswer'});
        },
        view(id){
          this.$store.commit("getQuestionnaireId", id);
          this.$store.commit('setComponent','viewQuestionnaire');
        },
        toAdd(){
          this.$router.push({path:'/questionAdd'});
        },
        back(){
          this.$router.push({path:'/question'});
        },
        newQuestion(){
          this.$store.commit('setComponent','newQuestion');
        },
        query(){
          viewQuestionnaireList({
            id: this.$store.state.userID,
            title: this.input4
          }).then(res => {
            this.questionLibrary = res.data;
            console.log(this.questionList);
          })
        }
      }
    }
</script>

<style scoped>
  .status,.number,.time{
    text-align: right;
    font-size: 13px;
    color: rgb(180,180,180);
  }
  .title{
    text-align: left;
    margin: 0 0 0 20px;
    font-size: 18px;
  }
  .question-box{
    padding: 15px 0 10px 0;
    width: 70%;
    margin: 2% auto;
    border: solid 1px gainsboro;
    background-color: white;
  }
  .question-box:hover{
    background-color: #F2F6FC;
  }
  .button-box{
    margin: 15px 0 0 0;
  }
  /*.questionList-box{*/
  /*  background-color: rgb(230,230,240);*/
  /*}*/
  .page{
    width: 70%;
    margin: 0 auto 20px auto;
    text-align: right;
  }
  .statusnew{
    color: #67C23A;
    font-size: 13px;
  }
  .questionList{
    min-height:350px;
  }
  .container{
    margin-top:15px;
    text-align: left;
    height: 34px;
  }
  img{
    width: 55px;
  }
  .buttons-box{
    text-align: right;
    margin-bottom: 0px;

  }
  .button1{
    margin-left: 30px;
    border:white;
    text-align: left;
    /*vertical-align: center;*/
  }
  .button2,.button3{
    border: white;
    margin-top: 17px;
    margin-right: 0px;
    margin-left: 0px;
    border-radius: 0px;
  }

</style>
