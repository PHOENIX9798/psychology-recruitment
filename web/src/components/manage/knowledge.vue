<template>
  <div>
    <div>
      <el-row>
        <el-col :span=4><div class="title">话题管理</div></el-col>
        <el-col :span=4><div class="add-box"><el-button type="primary" size="small" @click="addUser">添加话题</el-button></div></el-col>
        <el-col :span=8><div class="search-box"><el-input size="small" placeholder="输入关键字搜索"></el-input></div></el-col>
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
          label="标题"
          width="200">
        </el-table-column>
        <el-table-column
          prop="name"
          label="链接"
          width="200">
        </el-table-column>
        <el-table-column
          prop="province"
          label="操作人"
          width="220">
        </el-table-column>
        <el-table-column
          prop="city"
          label="操作时间"
          width="200">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit">编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-dialog :title= 'ti' :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item v-for="(item,index) in input" :label="item.label" :key="index" :label-width="formLabelWidth" class="input-box">
            <el-input v-model="form[index]" autocomplete="off"></el-input>
          </el-form-item>
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
    name: "knowledge",
    methods: {
      handleClick(row) {
        console.log(row);
        this.$confirm('您确定要将此话题删掉吗?', '提示', {
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
      edit(){
        this.ti = '编辑话题';
        this.dialogFormVisible = true;
      },
      addUser(){
        this.ti = '新增话题';
        this.dialogFormVisible = true;
      },


    },
    data() {
      return {
        input:[
          {label:'标题'},
          {label:'链接'},
        ],
        form:{
          title:'',
          net:'',
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
