<template>
  <div>
    <div class="container">
      <el-row>
        <el-col :span=2>
          <img src="../assets/logo1.png" alt="" @click="back">
        </el-col>

        <el-col :span=3 :offset=18>
          <div v-show="this.$store.state.userName !== ''">

            <el-tooltip class="item" effect="white" content="个人信息" placement="top">
              <span class="person-box" @click="personInfo">
                <el-avatar style="margin: 8px 0 0 0" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </span>
            </el-tooltip>
            <el-dropdown class="el-dropdown-link">
              <span>
                 {{this.$store.state.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="login">更换账户</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出账户</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-tooltip class="item" effect="white" content="回到首页" placement="top">
              <el-button icon="el-icon-s-home" type="text" class="button-box1" @click="back"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="white" content="主试中心" placement="top">
              <el-button icon="el-icon-user-solid" type="text" class="button-box2" @click="personalZHome"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="white" content="被试中心" placement="top">
              <el-button icon="el-icon-s-platform" type="text" class="button-box3" @click="personalBHome"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="white" content="帮助" placement="top">
              <el-button icon="el-icon-service" type="text" class="button-box4" @click=""></el-button>
            </el-tooltip>
          </div>
        </el-col>
        <el-button type="primary" @click="login()" class="login-button" v-show="this.$store.state.userName === ''">登录 | 注册</el-button>
      </el-row>
    </div>
  </div>


</template>

<script>
  import { logout } from '@/request/api';// 导入我们的api接口
  export default {
    name: "we_nav",
    methods:{
      login(){
        this.$router.push({path: '/login'})
      },
      logout(){
        alert('tuichu');
        logout({
          id:1
        }).then(res=>{
          if(res.code===1){
            this.$store.commit('setuserInfo','');
            this.$alert('已取消登陆状态', '提示', {
              confirmButtonText: '确定'
            }).then(()=>{
              this.$router.push({path:'/'});
            });
            //在store里清空id值
          }else{
            this.$alert('取消登陆状态失败', '提示', {
              confirmButtonText: '确定'
            });
          }
        })
      },
      personInfo(){
        this.$router.push({path: '/information'})
      },
      personalZHome(){
        this.$router.push({path: '/person'})
      },
      personalBHome(){
        this.$router.push({path: '/personSubject'})
      },
      back(){
        this.$router.push({path:'/'})
      }
    }
  }
</script>

<style scoped>
  .container{
    background-color: white;
    height: 55px;
    border-bottom: 1px solid rgb(230,230,230);
  }
  .login-button{
    /*margin-left: 5%;*/
    margin:0.6vw 30px 0 0 ;
    float: right;
  }
  img{
    width: 55px;
  }
  .el-menu-demo{
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .button-box1{
    position: absolute;
    top: 16px;
    right: 310px;
    border: none;
    background-color: white;
  }
  .button-box2{
    position: absolute;
    top: 16px;
    right: 280px;
    border: none;
    background-color: white;
  }
  .button-box3{
    position: absolute;
    top: 16px;
    right: 250px;
    border: none;
    background-color: white;
  }
  .button-box4{
    position: absolute;
    top: 16px;
    right: 220px;
    border: none;
    background-color: white;
  }
  .el-dropdown-link{
    margin-left: 10px;
    vertical-align: super;
  }


</style>
