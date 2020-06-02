<template>
  <div class="staff">
    <el-table
      :data="staff"
      border
      height="435"
      v-el-table-infinite-scroll="view"
      class="table">
      <el-table-column
        type="selection"
        fit>
      </el-table-column>
      <el-table-column
        prop="id"
        label="ID"
        width="50">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="realName"
        label="真实姓名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系方式">
      </el-table-column>
      <el-table-column
        prop="inUse"
        label="是否使用">
      </el-table-column>
      <el-table-column
        prop="state"
        label="伦理考试审核">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            {{ scope.row.state }}
            <el-button type="text" icon="el-icon-view" @click="edit(scope.$index,scope.row)"></el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-input
      v-model="search"
      class="input"
      placeholder="输入主试用户名关键字搜索"/>
    <div class="button-box">
      <el-button icon="el-icon-chat-dot-square" circle @click="sign"></el-button>
      <el-button type="primary" @click="add">增加主试</el-button>
      <el-button type="primary">禁用主试</el-button>
      <el-button type="primary">移除主试</el-button>
      <el-button type="primary">审核通过</el-button>
      <el-button type="primary">审核失败</el-button>
    </div>
    <el-dialog title="增加主试" :visible.sync="dialogTableVisible">
                <span class="id">
                  <el-input v-model="addStaff" placeholder="请输入主试id" class="id"></el-input>
                  <el-button icon="el-icon-search" circle @click="searchStaff"></el-button>
                </span>
      <p>{{newStaff}}</p>
      <el-button type="primary">增加</el-button>
    </el-dialog>
    <el-dialog title="主试申请" :visible.sync="dialogTableVisible_sign">
      <el-table
        :data="signStaff"
        class="newStaff"
        v-el-table-infinite-scroll="sign"
        height="300px"
        border>
        <el-table-column
          type="selection"
          fit>
        </el-table-column>
        <el-table-column
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="realName"
          label="真实姓名">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="state"
          label="审核状态">
        </el-table-column>
      </el-table>
      <el-button type="primary">审核通过</el-button>
      <el-button type="primary">审核失败</el-button>
    </el-dialog>
  </div>
</template>

<script>
  import {fakeData} from '../../request/index'
  import { viewStaff,pullStaff,newStaff,loadNewStaff } from '@/request/api';// 导入我们的api接口
  export default {
    name: "staff",
    data(){
      return{
        total:0,
        staff:[],
        num:1,
        search:'',
        dialogTableVisible:false,
        dialogTableVisible_sign:false,
        addStaff:'',
        newStaff:'',
        signStaff:[]
      }
    },
    methods:{
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      add(){
        this.dialogTableVisible=true;
        this.num=1;
        this.addStaff='';
      },
      view(){
        viewStaff({
          result:fakeData.viewStaff
        }).then(res=>{
          if(res.code===1){
            this.staff = this.staff.concat(res.staff);
          }
        });
      },
      searchStaff(){
        pullStaff({
          result:fakeData.pullStaff
        }).then(res=>{
          if(res.code===1){
            this.newStaff=res.newStaff;
          }
        })
      },
      sign(){
        newStaff({
          result:fakeData.newStaff
        }).then((res)=>{
          if(res.code === 1){
            this.signStaff = this.signStaff.concat(res.newStaff);
            this.dialogTableVisible_sign=true;

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
  .staff{
    min-height:505px;
    width:80%;
    margin:0 auto 0 auto;
  }
  .table{
    margin-top:15px;
    margin-bottom:1%;
    height:400px;
  }
  .input{
    margin-bottom:0.5%;
    width:30%;
    float:left;
  }
  .id{
    width:250px;
  }
  .button-box{
    float:right;
  }
  .newStaff{
    height:300px;
    margin-bottom:10px;
  }
</style>
