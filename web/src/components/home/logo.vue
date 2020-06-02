<template>
     <div class="logo">
       <el-avatar src="../../../src/assets/userImg">

       </el-avatar>
       <el-card class="card">
           <el-upload
             class="avatar-uploader"
             action="https://jsonplaceholder.typicode.com/posts/"
             :show-file-list="false"
             :on-success="handleAvatarSuccess"
             :before-upload="beforeAvatarUpload">
             <img v-if="imageUrl" :src="imageUrl" class="avatar">
             <div v-else>
               <i class="el-icon-plus avatar-uploader-icon"></i>
             </div>
           </el-upload>
       </el-card>
       <el-button type="primary" v-if="!imageUrl" class="upload_button">上传至服务器</el-button>
     </div>
</template>

<script>
    export default {
        name: "logo",
        data(){
            return{
                haveLogo:false
            }
        }
    }
</script>

<style scoped>
    .logo{
      width:30%;
      margin:0 auto 0 auto;
      min-height:420px;
    }
    .card{
      margin-top:100px;
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .upload_button{
      margin-top:20px;
    }
</style>
