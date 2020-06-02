<template>
  <div class="container">
    <el-card  class="card" v-if="isSuper">
      <organization></organization>
    </el-card>
    <el-tabs v-else class="card" stretch type="border-card">
      <el-tab-pane label="主试管理">
        <staff></staff>
      </el-tab-pane>
      <el-tab-pane label="举报管理">
        <el-table
          :data="tableData"
          border
          style="width: 100%;margin-bottom:1%;">
          <el-table-column
            prop="data"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          class="pagination"
        >
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="评论审核">
        <el-table
          :data="tableData"
          border
          style="width: 100%;margin-bottom:1%;">
          <el-table-column
            prop="data"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          class="pagination"
        >
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="规则管理">
        <el-table
          :data="tableData"
          border
          style="width: 100%;margin-bottom:1%;">
          <el-table-column
            prop="data"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          class="pagination"
        >
        </el-pagination>
        <el-button type="primary" class="button">增加规则</el-button>
      </el-tab-pane>
      <el-tab-pane label="科普管理">
        <el-table
          :data="tableData"
          border
          style="width: 100%;margin-bottom:1%;">
          <el-table-column
            prop="data"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          class="pagination"
        >
        </el-pagination>
        <el-button type="primary" class="button">增加科普</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import organization from "../home/organization"
    import staff from "../home/staff"
    import test from "../home/test"
    export default {
        name: "index",
        components:{staff,organization,test},
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        data() {
            return {
                isSuper:false,
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                value:[],
                options:[],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>
<style scoped>
  .card{
    margin:1% 10% 1% 10%;
    min-height:477px;
  }
  .pagination{
    margin-bottom:1%;
  }
</style>
