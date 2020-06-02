<template>
  <div class="report">
    <el-table
      :data="report"
      border
      height="425"
      class="table">
      <el-table-column
        type="selection"
        fit>
      </el-table-column>
      <el-table-column
        prop="category"
        label="类型"
        width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            {{ scope.row.category }}
            <el-button type="text" icon="el-icon-user" @click="edit(scope.$index,scope.row)"></el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="content"
        label="举报人说明">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            {{ scope.row.content }}
            <el-button type="text" icon="el-icon-paperclip" @click="edit(scope.$index,scope.row)"></el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="weight"
        label="分值"
        width="50">
      </el-table-column>
      <el-table-column
        prop="state"
        label="审核状态"
        width="100">
      </el-table-column>
    </el-table>
    <div class="button-box">
      <el-button type="primary">审核通过</el-button>
      <el-button type="primary">审核失败</el-button>
    </div>
    <el-dialog title="增加主试" :visible.sync="dialogTableVisible">
      <div v-for="(item,index) in addStaff" :key="index">
        <el-input v-model="item.userName" placeholder="请输入主试用户名"></el-input>
        <el-button  icon="el-icon-delete" circle @click="deleteUser(index)"></el-button>
      </div>
      新增<el-input-number v-model="num" :min="1" :max="10" label="描述文字" size="mini"></el-input-number>用户名输入框
      <el-button icon="el-icon-check" circle @click="addUser"></el-button>
      <el-button type="primary">增加</el-button>
    </el-dialog>
  </div>
</template>

<script>
    import {fakeData} from '../../request/index'
    import { viewReport } from '@/request/api';// 导入我们的api接口
    export default {
        name: "report",
        data(){
            return{
                total:0,
                report:[],
                num:1,
                search:'',
                dialogTableVisible:false,
                addStaff:[{id:0,userName:'',isTest:'',proof:'',inUse:'',state:''}]
            }
        },
        methods:{
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            add(){
                this.dialogTableVisible=true;
                this.num=1;
                this.addStaff=[{id:0,userName:'',isTest:'',proof:'',inUse:'',state:''}];
            },
            addUser(){
                for(let i=0;i<this.num;i++){
                    this.addStaff.push({id:0,userName:'',isTest:'',proof:'',inUse:'',state:''});
                }
            },
            deleteUser(index){
                this.addStaff.splice(index,1);
            },
            view(){
                viewReport({
                    result:fakeData.viewReport
                }).then(res=>{
                    if(res.code===1){
                        this.report=res.report;
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
  .report{
    min-height:505px;
    width:80%;
    margin:0 auto 0 auto;
  }
  .table{
    margin-top:15px;
    margin-bottom:1%;
    height:400px;
  }
</style>
