<template>
  <div class="big-container" >
    <el-divider content-position="left"><strong>基本信息</strong></el-divider>
    <div class="UserInfoSize"><span class="UserInfo" >用户名：</span>{{username}}<i class="el-icon-edit"></i>
      <el-button type="primary" size="mini" style="float:right;margin-left:10px;">实名认证</el-button>
      <el-button type="primary" size="mini" style="float:right">修改密码</el-button>
    </div>
    <div class="UserInfoSize"><span class="UserInfo" >昵称：</span>{{username}}<i class="el-icon-edit"></i></div>
    <div class="UserInfoSize"><span class="UserInfo" >手机号码：</span>{{phone}}<i class="el-icon-edit"></i></div>
    <div class="UserInfoSize"><span class="UserInfo" >邮箱：</span>{{email}}<i class="el-icon-edit"></i></div>
    <div class="UserInfoSize"><span class="UserInfo" >信誉值：</span>100<i class="el-icon-edit"></i></div>
</div>
</template>

<script>
    import { showUser } from '@/request/api';// 导入我们的api接口
    export default {
        name: "userInformation",
        data(){
            return{
              username:'夏天的咕咕',
              realName:'海*',
              password:'密码',
              phone:'15621927126',
              email:'10185102251@stu.edu.ecnu.cn',
              workPlace:'华东师范大学',
            }
        },
      /*mounted(){
        showUser({
          userId:1  //加入store后传入真实的值
        }).then(res=>{
          this.username=res.username;
          this.password=res.password;
          this.phone=res.phone;
          this.email=res.email;
        });
      },
       */
    }
</script>

<style scoped>
  .big-container{
    width: 100%;
    margin-top:-20px;
  }
  .UserInfo{
    font-weight: bold;
    color: #6d6d6d;
  }
  .UserInfoSize{
    margin-bottom: 10px;
  }
  .el-icon-edit{
    margin-left:15px;
  }
</style>
