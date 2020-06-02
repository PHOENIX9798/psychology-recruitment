<template>
  <div class="knowledge">
    <el-table
      :data="knowledge"
      class="table"
      height="425"
      border>
      <el-table-column
        type="selection"
        fit>
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
    </el-table>
    <el-button type="primary">增加科普</el-button>
    <el-button type="primary">删除科普</el-button>
  </div>
</template>

<script>
    export default {
        name: "knowledge",
        data(){
           return{
               knowledge:[
                   {
                       id:1,
                       title:'',
                   },
                   {
                       id:2,
                       title:'',
                   },
                   {
                       id:3,
                       title:'',
                   },
                   {
                       id:4,
                       title:'',
                   }
               ]
           }
        },
    }
</script>

<style scoped>
    .knowledge{
      width:80%;
      margin:0 auto 0 auto;
      min-height:505px;
    }
    .table{
      margin-top:15px;
      margin-bottom:1%;
      height:400px;
    }
</style>
