<template>
    <div class="comment">
      <div>
        <span class="point">
          <span class="select">
            自动筛选关键字：
          </span>
          <span class="tag">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
            {{tag}}
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
          </span>
        </span>
          <el-checkbox v-model="checked" class="automatic">是否默认通过</el-checkbox>
        <div>
          <el-table
            :data="comment"
            border
            height="400"
            class="table">
            <el-table-column
              type="selection">
            </el-table-column>
            <el-table-column
              prop="title"
              label="实验名称">
              <template slot-scope="scope">
                <span>{{ scope.row.title }}</span>
                <i class="el-icon-paperclip" @click="handleEdit(scope.$index, scope.row)"></i>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="被试昵称">
              <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
                <i class="el-icon-user" @click="handleEdit(scope.$index, scope.row)"></i>
            </template>
            </el-table-column>
            <el-table-column
              prop="content"
              label="评价内容"
              width="600px">
            </el-table-column>
            <el-table-column
              prop="state"
              label="审核"
              width="50px">
            </el-table-column>
          </el-table>
          <div class="button-box">
            <el-button type="primary">审核通过</el-button>
            <el-button type="primary">审核失败</el-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import {fakeData} from '../../request/index'
    import { viewComment } from '@/request/api';// 导入我们的api接口
    export default {
        name: "comment",
        data(){
            return{
                dynamicTags: ['..', '标签二', '标签三'],
                inputVisible: false,
                inputValue: '',
                comment:[]
            }
        },
        methods: {
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
            view(){
                viewComment({
                    result:fakeData.viewComment
                }).then(res=>{
                    if(res.code===1){
                        this.comment=res.comment;
                    }
                });
            }
        },
        mounted(){
            this.view();
        }
    }
</script>

<style scoped>
  .comment{
    width:80%;
    margin:0 auto 0 auto;
    min-height:520px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
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
  .point{
    margin-top:15px;
    margin-bottom:15px;
    float:left;
  }
  .tag{
    overflow-y:scroll;
    width:350px;
    height:5px;
  }
  .automatic{
    float:right;
    margin-top:20px;
  }
  .table{
    margin-top:15px;
    margin-bottom:1%;
    height:400px;
  }
  .select{
    float:left;
  }
</style>
