<template>
   <div>
     <el-table
       :data="tableData"
       border
       style="width: 100%;margin-bottom:1%;">
       <el-table-column
         prop="name"
         label="单位名称"
         width="180">
       </el-table-column>
       <el-table-column
         prop="createTime"
         label="创建时间"
         width="180">
       </el-table-column>
     </el-table>
   </div>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped>

</style>
