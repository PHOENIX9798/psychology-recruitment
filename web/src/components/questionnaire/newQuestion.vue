<template>
  <div class="newQuestion">
    <div :class="choseQestion.change">
      <div class="chose">
        <div style="font-size: 18px;margin: 15px 0 20px 0">
          <strong>选择题型：</strong>
        </div>
        <el-button @click="addone" class="button-box" round type="primary">单选题</el-button><br>
        <el-button @click="addmore" class="button-box" round type="primary">多选题</el-button><br>
        <el-button @click="addwrite" class="button-box" round type="primary">填空题</el-button>
        <el-button class="button-box" round @click="test" v-show="choseQestion.check%2 === 0">使用题库</el-button>
        <el-button class="button-box" round @click="test" v-show="choseQestion.check%2 === 1">关闭题库</el-button>
      </div>
      <div class="choseQestion" v-show="choseQestion.check % 2 === 1">
        <div style="font-size: 18px;margin: 15px 0 10px 0">
          <span></span>
          <strong>题库：</strong>
          <el-input
            placeholder="请输入关键字"
            prefix-icon="el-icon-search"
            style="width:80%;margin-left:10%;margin-right:10%;margin-top:1%;"
            v-model="point">
          </el-input>
        </div>
        <div class="use-question">
          <el-collapse accordion>
            <el-collapse-item v-for="(item,index) in questionLibrary" :key="index">
              <template slot="title">
                {{item.title}}
              </template>
              <div v-for="(tmp,index) in item.questionList" :key="index">
                <el-checkbox v-model="tmp.check"></el-checkbox>
                {{tmp.title}}
                <div v-for="(answer,index) in tmp.choice" :key="index">
                  {{answer.answer}}
                </div>
              </div>
              <div>
                <el-button size="mini" type="primary">使用该模板</el-button>
                <el-button size="mini">加入</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
      <div class="question-box">
        <div style="font-size: 18px;margin-bottom: 10px"><strong>问卷标题：</strong></div>
        <el-input placeholder="点击填写问卷标题" v-model="questionNaireTitle"></el-input>
        <div style="font-size: 18px;margin:10px 0"><strong>问卷说明：</strong></div>
        <el-input placeholder="点击填写问卷标题" v-model="questionNaireRemark"></el-input>
        <div v-for="(i,index) in question" :key="index">
          <div class="title-box">
            <div style="float:left;width:100%;text-align:left; margin-bottom:5px;">
              <el-tooltip class="item" effect="dark" content="是否必填" placement="top">
                <el-checkbox v-model="question[index].check" @change="handleCheckedCitiesChange"></el-checkbox>
              </el-tooltip>
              <strong>题目{{index+1}}:</strong>
            </div>
            <el-input v-model="question[index].title" style="float:left;width:80%;"></el-input>
            <el-button icon="el-icon-delete" circle size="medium" @click="delQues(index)"></el-button>
          </div>
          <div>
            <div class="input-items" v-for="(item,ind) in i.chose" :key="ind">
              <el-row>
                <el-col :span=12>
                  <div><span style="margin-bottom:5px;"><strong>选项{{ind+1}}:</strong></span><el-input placeholder="选项填写" v-model="i.chose[ind].item"></el-input></div>
                </el-col>
                <el-col :span=8>
                  <el-button icon="el-icon-top" circle class="button-circle" size="medium" @click="up(index,ind)"></el-button>
                  <el-button icon="el-icon-bottom" circle class="button-circle" size="medium" @click="down(index,ind)"></el-button>
                  <el-button icon="el-icon-delete" circle class="button-circle" size="medium" @click="del(index,ind)"></el-button>
                </el-col>
              </el-row>
            </div>
            <el-button v-show="question[index].type !== '填空'" type="primary" @click="addItem(index)">添加选项</el-button>
          </div>
        </div>
      </div>
      <el-button type="primary" style="margin: 0 0 20px 0" @click="opendia"><strong> 预 览 问 卷 </strong></el-button>
      <el-button type="success" style="margin: 0 0 20px 0" @click="ok"><strong> 完 成 问 卷 </strong></el-button>

      <div>

        <el-dialog
          :title="questionNaireTitle"
          :visible.sync="dialogVisible"
          width="60%"
          :before-close="handleClose">
          <div class="view">
            <div v-for="(i,num) in questionView" :key="num">
              <div class="question-content">{{num+1}}、 {{i.title}}</div>
              <el-radio v-model="choseItem[num].answer"
                        v-if="i.type === '单选'"
                        v-for="(chose,indexChoce) in i.chose"
                        :label="chose.item"
                        :key="indexChoce"
                        :value="chose.item"
                        class="question-item">
                {{chose.item}}
              </el-radio>
              <el-checkbox-group v-model="choseItem[num].answer">
                <el-checkbox v-if="i.type === '多选'"
                             v-for="(chose,indexChoce) in i.chose"
                             :label="chose.item"
                             :key="indexChoce"
                             :value="chose.item"
                             class="question-item"></el-checkbox>
              </el-checkbox-group>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入您的答案"
                v-model="choseItem[num].answer"
                v-if="i.type === '填空'">
              </el-input>
            </div>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
  import { addQuestionnaire,addQuestion } from '@/request/api'
    export default {
      name: "newQuestion",
      data(){
        return{
          choseQestion:{
            change:'container',
            check:0,
          },
          questionNaireTitle:'给您的问卷起个标题吧~',
          questionNaireRemark:'想对填写问卷的小伙伴说些什么呢？',
          question:[],
          questionNumber:0,
          questionNaireId:'',
          questionView:[{title:'你的题目还没写好,这只是个模板问题噢！',type:'模板',check:true,chose:[{item:'选项一'},{item:'选项二'},{item:'选项三'}]}],
          dialogVisible:false,
          choseItem:[{answer:'7926494'},{answer:[]},{answer:''}],
          radio:'',
          questionLibrary:[
              {
                  id:1,
                  title:'大学生消费情况',
                  questionList:[
                      {
                        id:1,
                        title:'您的性别',
                        choice:[{answer:'男'},{answer:'女'}],
                        check:true,
                      },
                      {
                        id:2,
                        title:'您的年级',
                        choice:[{answer:'大一'},{answer:'大二'},{answer:'大三'},{answer:'大四'}],
                        check:true,
                      },
                      {
                        id:3,
                        title:'在校期间的平均月消费',
                        choice:[{answer:'男'},{answer:'女'}],
                        check:true,
                      }
                  ]
              },
              {
                  id:2,
                  title:'心理学被试招募被试需求调研',
                  questionList:[
                      {
                        id:4,
                        title:'您的性别',
                        choice:[{answer:'男'},{answer:'女'}],
                        check:true,
                      },
                      {
                        id:5,
                        title:'您的年级',
                        choice:[{answer:'大一'},{answer:'大二'},{answer:'大三'},{answer:'大四'}],
                        check:true,
                      },
                      {
                        id:6,
                        title:'在校期间的平均月消费',
                        choice:[{answer:'男'},{answer:'女'}],
                        check:true,
                      }
                  ]
              }
          ],
           point:'',
        }
      },
      watch:{
        questionNaireId:{
          handler(questionNaireId){
            for(let i = 1;i <= this.questionNumber;i++){
              addQuestion({
                questionnaireId: questionNaireId,
                rank: i,
                category: this.question[i-1].type,
                remark: this.question[i-1].title,
                necessity: this.question[i-1].check === true ? 1 : 0,
                creatorId: this.$store.state.userID,
                number: this.question[i-1].type === 'FillInBlanks' ? '' : this.question[i-1].chose.length,
                content: this.question[i-1].type === 'FillInBlanks' ? '' : this.question[i-1].chose.map(item => {
                                                                             return item.item;
                                                                           })
              })
            }
            // console.log(content);
          }
        }
      },
      methods:{
        addone(){
          this.question.push({title:'', check:true, type:'SingleChoice',chose:[{item:''},{item:''}]});
          if(this.choseItem[0].answer === '7926494'){
            this.choseItem = [];
          }
          this.choseItem.push({answer:''});
        },
        addmore(){
          this.question.push({title:'',check:true,type:'MultipleChoice',chose:[{item:''},{item:''},{item:''}]});
          if(this.choseItem[0].answer === '7926494'){
            this.choseItem = [];
          }
          this.choseItem.push({answer:[]});
        },
        addwrite(){
          this.question.push({title:'',check:true,type:'FillInBlanks',});
          if(this.choseItem[0].answer === '7926494'){
            this.choseItem = [];
          }
          this.choseItem.push({answer:''});
        },
        addItem(index){
          this.question[index].chose.push({item:''});
        },
        del(index,ind){
          this.question[index].chose.splice(ind,1);
        },
        delQues(index){
          this.question.splice(index,1);
        },
        handleClose(done) {
          done();
        },
        opendia(){
          this.questionView = this.question;
          this.dialogVisible = true;
        },
        up(index,ind){
          if(ind !== 0){
            let tmp = '';
            tmp = this.question[index].chose[ind].item;
            this.question[index].chose[ind].item = this.question[index].chose[ind-1].item;
            this.question[index].chose[ind-1].item = tmp;
          }
        },
        down(index,ind){
          if(ind !== this.question[index].chose.length-1){
            let tmp = '';
            tmp = this.question[index].chose[ind].item;
            this.question[index].chose[ind].item = this.question[index].chose[ind+1].item;
            this.question[index].chose[ind+1].item = tmp;
          }
        },
        ok(){
          this.$confirm('您希望您的问卷被公开吗', '提示', {
              distinguishCancelAndClose: true,
              confirmButtonText: '公开',
              cancelButtonText: '私人用途，确认保存'
            })
            .then(() => {
              addQuestionnaire({
                title:this.questionNaireTitle,
                remark:this.questionNaireRemark,
                model:1,
                creatorId:this.$store.state.userID
              }).then( res => {
                this.questionNaireId = res.data.id;
                this.questionNumber = this.question.length;
              })
              this.$message({
                type: 'info',
                message: '已公开并保存问卷'
              });
              this.$store.commit('setComponent','question');
            })
            .catch(() => {
              addQuestionnaire({
                title:this.questionNaireTitle,
                remark:this.questionNaireRemark,
                model:0,
                creatorId:this.$store.state.userID
              }).then( res => {
                this.questionNaireId = res.data.id;
                this.questionNumber = this.question.length;
              })
              this.$message({
                type: 'info',
                message: '已保存问卷'
              })
              this.$store.commit('setComponent','question');
            });

        },
        handleCheckedCitiesChange(){

        },
        test(){
          this.choseQestion.check++;
          if(this.choseQestion.check % 2 === 1){
            this.choseQestion.change = 'containerChange';
          }else{
            this.choseQestion.change = 'container';
          }
        }
      }
    }
</script>

<style scoped>
  .chose{
    border: solid 1px gainsboro;
    margin: 0 0 0 -13%;
    position: fixed;
    width: 12%;
    background-color:#fff;
  }
  .choseQestion{
    border: solid 1px gainsboro;
    margin: 0 0 0 56%;
    position: fixed;
    width: 28%;
    background-color:#fff;
  }
  .container{
    margin: 0 auto;
    width: 55%;
  }
  .containerChange{
    margin: 0 0 0 15%;
    width: 52%;
  }
  .question-box{
    border: solid 1px gainsboro;
    padding: 20px;
    margin: 20px 0 20px 0;
    background-color:#fff;
  }
  .button-box{
    width: 90%;
    font-size: 17px;
    margin: 0 0 10% 0;
  }
  span{
    float: left;
  }
  .title-box{
    margin: 4% 0 2% 0;
  }
  .input-items{
    margin-bottom: 1%;
  }
  .button-circle{
    margin-top: 22px;
  }
  .view{
    text-align: left;
  }
  .question-content,.question-item{
    margin: 0 0 0 15px;
    padding-right: 20px;
    font-size: 16px;
  }
  .question-content{
    margin:  15px 0 5px 12px;
  }
  .question-item{
    margin: 3px 0 0 15px;
  }
  .use-question{
    text-align: left;
    padding-right: 15px;
    max-height:36em;
    overflow-y: auto;
    width:80%;
    margin-left:37px;
  }
  .use-question li{
    margin-top: 15px;
  }
  .newQuestion{
    min-height:500px;
  }


</style>
