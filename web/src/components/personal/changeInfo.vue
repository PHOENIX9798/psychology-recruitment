<template>
  <div>
    <el-form :label-position="right" label-width="80px">
      <div class="big-container">
        <el-divider content-position="left"><strong>基本信息</strong></el-divider>
        <el-form-item label="用户名"><el-input placeholder="请输入用户名" v-model="userName"></el-input></el-form-item>
        <el-form-item label="昵称"><el-input placeholder="请输入昵称" v-model="nickName"></el-input></el-form-item>
        <el-form-item label="真实姓名"><el-input placeholder="请输入真实姓名" v-model="realName"></el-input></el-form-item>
        <el-form-item label="手机号码"><el-input v-model="phone"></el-input></el-form-item>
        <el-form-item label="邮箱"><el-input v-model="mail"></el-input></el-form-item>
        <el-button>保存信息</el-button>
      </div>
      <div class="big-container">
        <el-divider content-position="left"><strong>主试信息</strong></el-divider>
        <el-row>
          <el-col :span=9><div>伦理考试通过证明：</div></el-col>
          <el-col :span=14>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-button>保存主试信息</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="big-container">
        <el-divider content-position="left"><strong>被试信息</strong></el-divider>

          <el-button style="text-align: left">保存被试信息</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
    export default {
      name: "changeInfo",
      data() {
        return {
            imageUrl: '',
            userName:'夏天的咕咕',
            nickName:'夏天的咕咕',
            realName:'海日',
            mail:'10185102251@stu.edu.ecnu.cn',
            phone:'15621927126',
        };
      },
      methods:{
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        }
      }
    }
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #6d6d6d;
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
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .big-container{
    /*margin-top: 3vw;*/
  }
</style>
