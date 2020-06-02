<template>
  <div>
    <div class="big-container">
      <el-divider content-position="left"><strong>被试信息</strong></el-divider>
      <div style="margin-bottom:10px;">
        <span class="UserInfo">身份：</span>{{identity}}<i class="el-icon-edit"></i>
      </div>
      <div style="margin-bottom:10px;">
        <span class="UserInfo">性别：</span>{{sex}}<i class="el-icon-edit"></i>
      </div>
      <div style="margin-bottom:10px;">
        <span class="UserInfo">利手：</span>{{foot}}<i class="el-icon-edit"></i>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "subjectInformation",
      data(){
          return{
            day:'2000.05.20',
            foot:'右' ,
            identity:'在校生',
            sex:'女'
          }
      }
    }
</script>

<style scoped>
  .big-container{
    margin-top: 3vw;
  }
  .UserInfo{
    font-weight: bold;
    color: #6d6d6d;
  }
  .el-icon-edit{
    margin-left:15px;
  }
</style>
