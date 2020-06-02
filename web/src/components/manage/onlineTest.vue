<template>
  <div>
    <div>
      <el-row>
        <el-col :span="4"><div class="title">线上实验</div></el-col>
        <el-col :span="4"><div class="add-box"><el-button type="primary" size="small" @click="addUser">添加实验</el-button></div></el-col>
        <el-col :span="8"><div class="search-box"><el-input size="small" placeholder="输入关键字搜索"></el-input></div></el-col>
      </el-row>
    </div>
    <div>
      <el-table
        :data="tableData"
        border
        max-height="500"
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="实验标题"
          width="200">
        </el-table-column>
        <el-table-column
          prop="name"
          label="实验结束时间"
          width="200">
        </el-table-column>
        <el-table-column
          prop="province"
          label="实验简述"
          width="220">
        </el-table-column>
        <el-table-column
          prop="city"
          label="发布人"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="状态"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="审核人"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="操作人"
          width="150">
        </el-table-column>
        <el-table-column
          prop="city"
          label="最近修改时间"
          width="180">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="130">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit">编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small" @click="pass">审核</el-button>
            <el-button type="text" size="small" @click="all">问卷结果</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-dialog :title= 'ti' :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item class="input-box" label="实验结束时间" :label-width="formLabelWidth">
            <el-date-picker
              style="width: 100%"
              v-model="form.time"
              type="datetime">
            </el-date-picker>
          </el-form-item>
          <el-form-item v-for="(item,index) in input" :label="item.label" :key="index" :label-width="formLabelWidth" class="input-box">
            <el-input v-model="form[index]" autocomplete="off"></el-input>
          </el-form-item>
<!--          <el-form-item label="身份" :label-width="formLabelWidth" class="input-box select-box">-->
<!--            <el-select v-model="form.identity" placeholder="请选择用户身份">-->
<!--              <el-option label="普通用户" value="普通用户"></el-option>-->
<!--              <el-option label="主试" value="主试"></el-option>-->
<!--              <el-option label="被试" value="被试"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: "onlineTest",
    methods: {
      handleClick(row) {
        console.log(row);
        this.$confirm('您确定要将此实验删掉吗?', '提示', {
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
      pass(){
        this.$confirm('是否审核通过?', '提示', {
          confirmButtonText: '审核通过',
          cancelButtonText: '审核不通过',
          type: 'primary'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '审核已通过!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '该实验审核不通过！'
          });
        });
      },
      edit(){
        this.ti = '编辑实验';
        this.dialogFormVisible = true;
      },
      addUser(){
        this.ti = '新增实验';
        this.dialogFormVisible = true;
      },


    },
    data() {
      return {
        input:[
          {label:'实验标题'},
          {label:'实验描述'},
          {label:'实验链接'},
          {label:'实验发布者'},
        ],
        form: {
          title: '',
          detail:'',
          network:'',
          user:'',
          time:'',
        },
        ti:'',
        dialogFormVisible : false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],

        formLabelWidth: '150px'
      }
    },

  }
</script>

<style scoped>
  .title{
    font-size: x-large;
    margin: 10% 0 6% 0;
  }
  .add-box{
    margin: 10% 0 0 0;
  }
  .search-box{
    margin: 5% 0 0 0;
  }
  .input-box{
    margin: 0 90px 15px 0;
  }
  .select-box{
    text-align: left;
  }

</style>
