<template>
  <div>
    <div class="big-container">
      <el-divider content-position="left"><strong>主试信息</strong></el-divider>
      <span class="UserInfo">伦理考试通过证明：</span>
      <img width="200px"   src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2849110658,3154328096&fm=26&gp=0.jpg">
      <i class="el-icon-edit"></i>
      <div class="UserInfoSize"><span class="UserInfo" >单位：</span>{{workPlace}}<span class="change">
                [切换单位]
              </span></div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "staffInformation",
      data(){
        return{
            workPlace:'华东师范大学'
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
.UserInfoSize{
  margin-top:10px;
}
.change{
  font-size:10px;
}
.el-icon-edit{
  margin-left:15px;
}
</style>
