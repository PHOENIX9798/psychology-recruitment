<template>
  <div>
    <div>
      <el-row>
        <el-col :span=4><div class="title">评论管理</div></el-col>
        <el-col :span=8 offset=4><div class="search-box"><el-input size="small" placeholder="输入关键字搜索"></el-input></div></el-col>
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
          label="评论人"
          width="200">
        </el-table-column>
        <el-table-column
          prop="province"
          label="评论内容"
          width="220">
        </el-table-column>
        <el-table-column
          prop="province"
          label="审核状态"
          width="220">
        </el-table-column>
        <el-table-column
          prop="city"
          label="审核人"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="审核时间"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="130">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="pass">审核</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "onlineTest",
    methods: {
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
    },
    data() {
      return {
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
