<template>
  <div>
    <div class="container" v-for="(item,index) in 5" :key="index">
      <div class="title-box">问题{{index+1}}、 你说你是个什么人？</div>
      <div>
        <el-table
          :data="tableData"
          border
          show-summary
          class="table-box">
          <el-table-column
            prop="date"
            label="选项"
            width="300">
          </el-table-column>
          <el-table-column
            prop="name"
            label="小计"
            width="100">
          </el-table-column>
          <el-table-column
            prop="address"
            label="比例">
            <template slot-scope="scope">
              <el-progress :text-inside="true" :stroke-width="22" :percentage="70"></el-progress>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "compute",
      data() {
        return {
          tableData: [{
            date: '温柔善良',
            name: '56',
            address: ''
          }, {
            date: '恶毒狠辣',
            name: '87',
            address: ''
          },]
        }
      }
    }
</script>

<style scoped>
  .table-box{
    width: 766px;
    margin: 0 auto;
  }
  .title-box{
    width: 766px;
    text-align: left;
    margin: 25px auto 10px auto;
  }

</style>
