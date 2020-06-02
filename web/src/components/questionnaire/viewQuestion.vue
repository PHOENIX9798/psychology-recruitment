<template>
  <div class="question-box">
    <div style="font-size: 18px;margin-bottom: 10px"><strong>{{questionView.questionNaireTitle}}</strong></div>
    <div class="view">
      <div v-for="(i,num) in questionView.questionList" :key="num">
        <div class="question-content">{{num+1}}、 {{i.title}}</div>
        <el-radio v-model="i.answer"
                  v-if="i.type === '单选'"
                  v-for="(chose,indexChoce) in i.chose"
                  :label="chose.item"
                  :key="indexChoce"
                  :value="chose.item"
                  class="question-item">
          {{chose.item}}
        </el-radio>
        <el-checkbox-group v-model="i.answer">
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
          v-model="i.answer"
          v-if="i.type === '填空'">
        </el-input>
      </div>
    </div>
    <el-button @click="back">返回列表</el-button><el-button>编辑此问卷</el-button>
  </div>
</template>

<script>
  export default {
    name: "viewQuestion",
    data(){
      return{
        questionView:{
          questionNaireTitle:'默认标题为空哦',
          questionList: [
            {
              title:'你的题目还没写好,这只是个模板问题噢！',
              type:'单选',
              check:true,
              chose:[{item:'选项一'},{item:'选项二'},{item:'选项三'}],
              answer:''
            },
            {
              title:'你的题目还没写好,这只是个模板问题噢！',
              type:'多选',
              check:true,
              chose:[{item:'选项一'},{item:'选项二'},{item:'选项三'}],
              answer:[]
            },
            {
              title:'你的题目还没写好,这只是个模板问题噢！',
              type:'填空',
              check:true,
              chose:[{item:'选项一'},{item:'选项二'},{item:'选项三'}],
              answer:''
            },
          ]
        },
      }
    },
    created(){
      
    },
    methods:{
      back(){
        this.$store.commit('setComponent','question');
      }
    }
  }
</script>

<style scoped>
  .question-box{
    padding: 15px 0 10px 0;
    width: 70%;
    margin: 2% auto;
    border: solid 1px gainsboro;
    background-color: white;
  }
  .view{
    text-align: left;
  }
  .view{
    text-align: left;
    margin: 10px;
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
