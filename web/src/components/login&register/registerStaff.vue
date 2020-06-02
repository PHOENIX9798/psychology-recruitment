<template>
  <div style="background-color: rgb(243,243,243)">
    <el-row>
      <el-col :span=12><div :style="backgroundDiv" class="middle"></div></el-col>
      <el-col :span=12>
        <div>
          <div>
            <el-card class="login-box">
              <h2 style="margin: 0px">管理员登录</h2><br>
              用户名：<el-input v-model="username" placeholder="请输入您的用户名" class="select-box2"></el-input>
              <br>
              密 码 ： <el-input v-model="password" placeholder="请输入您的密码" type="password" class="select-box2"></el-input>
              <el-button type="primary" class="select-box1" @click="login">确认登录</el-button>
              <el-button class="select-box3" @click="back">后悔了？返回首页</el-button>
              <el-button class="select-box4" @click="toMan" type="text" size="small">返回普通用户登录<i class="el-icon-right"></i></el-button>
              <div><i class="el-icon-question"></i></div>
<!--              <el-tabs v-model="activeName" @tab-click="handleClick">-->
<!--                <el-tab-pane label="主试注册" name="first">-->
<!--                  <div style="margin: 6% 0 0 0">是否通过伦理考试：<el-radio v-model="yesOrNo" label="是">是</el-radio><el-radio v-model="yesOrNo" label="否">否</el-radio></div>-->
<!--                  <el-upload-->
<!--                    class="avatar-uploader"-->
<!--                    action="https://jsonplaceholder.typicode.com/posts/"-->
<!--                    :show-file-list="false"-->
<!--                    :on-success="handleAvatarSuccess"-->
<!--                    :before-upload="beforeAvatarUpload">-->
<!--                    <img v-if="imageUrl" :src="imageUrl" class="avatar">-->
<!--                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
<!--                  </el-upload>-->
<!--                  <div class="font-size">若通过正规心理学伦理考试，点击上方上传考试凭证</div>-->
<!--                  <el-button type="primary" class="select-box2">注册主试</el-button>-->
<!--                  <el-button class="select-box3" @click="back">后悔了?返回主页</el-button>-->
<!--                  <div><el-tooltip class="item" effect="dark" content="上传时要求图片清晰，能明确看出通过伦理考试；若没有伦理考试凭证，注册成为主试后只能发布线上实验；" placement="top"><i class="el-icon-question"></i></el-tooltip></div>-->
<!--                </el-tab-pane>-->
<!--                <el-tab-pane label="被试注册" name="second">-->
<!--                  <div class="block">-->
<!--                  <span>生 日 ：</span>-->
<!--                  <el-date-picker-->
<!--                    class="select-box3"-->
<!--                    v-model="date"-->
<!--                    type="date"-->
<!--                    placeholder="选择出生日期">-->
<!--                  </el-date-picker>-->
<!--                    <div class="pic-font">欢迎成为被试~</div>-->
<!--                    <img src="../../assets/pic.png" alt="" class="pic">-->
<!--                </div>-->
<!--                  <el-button type="primary" class="select-box2">确认注册</el-button>-->
<!--                  <div><el-tooltip class="item" effect="dark" content="选择出生日期后帮您计算年龄噢~" placement="top"><i class="el-icon-question"></i></el-tooltip></div>-->
<!--                </el-tab-pane>-->
<!--              </el-tabs>-->
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return{
        backgroundDiv: {
          backgroundImage:'url(' + require('../../assets/register.jpg') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'100% 100%',
        },
        activeName: 'first',
        imageUrl: '',
        yesOrNo:'',
        date:'',
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      back(){
        this.$router.push({path:'/'});
      },
      toMan(){
        this.$router.push({path:'/login'});
      },
      login(){

      },
      // beforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg';
      //   const isLt2M = file.size / 1024 / 1024 < 2;
      //
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      //   if (!isLt2M) {
      //     this.$message.error('上传头像图片大小不能超过 2MB!');
      //   }
      //   return isJPG && isLt2M;
      // },
    }
  }
</script>

<style scoped>
  .middle {
    height: 49vw;
    width: 49vw;
    min-height: 650px;
    min-width: 650px;
    background: no-repeat center top;
    background-size: contain;
  }
  .login-box{
    text-align: center;
    width: 280px;
    height: 450px;
    margin: 15% auto auto auto;
    padding: 30px 60px 20px 60px;
  }
  .select-box1{
    text-align: center;
    width: 70%;
    margin: 18% auto auto auto;
  }
  .select-box2{
    text-align: center;
    width: 70%;
    margin: 10% auto auto auto;
  }
  .select-box3{
    text-align: center;
    width: 70%;
    margin: 8% auto auto auto;
  }
  i{
    float: right;
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
  .select-box1{
    text-align: center;
    width: 70%;
    margin: 18% auto auto auto;
  }
  .select-box2{
    text-align: center;
    width: 70%;
    margin: 10% auto auto auto;
  }
  .select-box3{
    text-align: center;
    width: 70%;
    margin: 8% auto auto auto;
  }
  .select-box4{
    text-align: right;
    width: 70%;
    /*margin: 2%;*/
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
  .font-size{
    font-size: 10px;
    color: red;
  }
  .pic{
    width: 250px;
  }
  .pic-font{
    color: #99a9bf;
    margin: 10% 0 0 0;
  }


</style>
