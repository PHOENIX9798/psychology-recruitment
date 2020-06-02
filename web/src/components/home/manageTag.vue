<template>
  <div class="container">
    <div v-for="(i,index) in tag" :key="index" class="key-box">
      <span class="tag-group__title">{{i.key}}：</span>
      <el-tag
        class="tag-box"
        :key="tag"
        v-for="tag in i.content"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag.tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </div>
    <div class="button-box"><el-button @click="addKey">增加关键字</el-button></div>
  </div>
</template>

<script>
    export default {
      name: "manageTag",
      data(){
        return{
          dynamicTags: ['标签一', '标签二', '标签三'],
          inputVisible: false,
          inputValue: '',
          tag:[
            {key:'类型',content:[{tag:'红外线'},{tag:'行为实验'}]},
            {key:'利手',content:[{tag:'左'},{tag:'右'}]},
            {key:'性别',content:[{tag:'男'},{tag:'女'}]},
            {key:'身份',content:[{tag:'在校生'},{tag:'非在校生'}]},
          ]
        }
      },
      methods:{
        handleClose(tag) {
          this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },
        showInput() {
          this.inputVisible = true;
          this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
          });
        },
        handleInputConfirm() {
          let inputValue = this.inputValue;
          if (inputValue) {
            this.dynamicTags.push(inputValue);
          }
          this.inputVisible = false;
          this.inputValue = '';
        },
    addKey(){
          this.tag.push({key:'',content:[{tag:''}]})
    }
      }
    }
</script>

<style scoped>
  .container{
    width: 80%;
    margin: 0px auto;
    text-align: left;
  }
  .key-box{
    margin-top: 20px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
    margin-top: 5px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .button-box{
    margin-top: 2%;
  }
</style>
