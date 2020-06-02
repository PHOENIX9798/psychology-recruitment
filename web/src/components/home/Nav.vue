<template>
  <div>
    <div class="container">
      <div>
        <span class="logo">PSYCHOLOGY</span>
        <span>
          <img src="../../../src/assets/logo1.png" alt="" class="img">
        </span>
        <div class="test" v-if="identity === 'user' || identity ==='staff'">
          <span class="title">
            <span>
              <i class="el-icon-location-outline"></i>
            </span>
            <span>
              {{this.currentOrganization}}
              <span class="change">
                [切换地点]
              </span>
            </span>
          </span>
        </div>
        <div v-if="isLogin" class="interface">
          <el-dropdown class="avatar">
            <span>
             <span>
               <el-avatar :src="path"></el-avatar>
             </span>
              <span style="margin-top: 10px">
               {{this.$store.state.userName}}
             </span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-if="identity === 'user' || identity ==='staff'" @click.native="toPerson">个人信息</el-dropdown-item>
              <el-dropdown-item v-if="identity === 'manager' || identity ==='super'" @click.native="toPeople">切换为普通用户</el-dropdown-item>
              <el-dropdown-item v-else @click.native="toManage">切换为管理员</el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出账户</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span v-if="identity === 'super'">
            <span class="title" @click="manageOrg">管理单位</span>
            <span class="title" @click="manageRule">管理规则</span>
          </span>
          <span v-else-if="identity === 'manager'">
            <span class="title">
              <i class="el-icon-wind-power" @click="manageStaff"></i>
              {{this.currentOrg}}
              <span class="change">
                [切换单位]
              </span>
            </span>
            <span style="float:right;margin-right:15px;">
              <span class="title" @click="manageStaff">管理主试</span>
              <span class="title" @click="manageReport">管理举报</span>
              <span class="title" @click="manageChat">管理评论</span>
<!--              <span class="title" @click="manageKnow">管理科普</span>
              <span class="title" @click="manageLogo">上传logo</span>-->
              <span class="title" @click="managePower">分配权限</span>
            </span>
          </span>
          <span v-else>
            <span class="nav" @click="toQuestion">问卷中心</span>
            <span class="nav" @click="manageLab">我管理的实验</span>
            <span class="nav" @click="joinLab">我参与的实验</span>
            <span class="nav" @click="nihao">首页</span>
          </span>
        </div>
        <el-button type="primary" @click="login()" class="login" v-else>登录 | 注册</el-button>
      </div>
    </div>
  </div>


</template>

<script>
    import {fakeData} from '../../request/index'
    import { logout } from '@/request/api';// 导入我们的api接口
    export default {
        name: "Nav",
        computed:{
            isLogin:function(){
              //userId没存
                if(this.$store.state.userName !=='' && this.$store.state.userID !==0){
                    return 1;
                }else{
                    return 0;
                }
            }
        },
        data(){
            return{
                isSuper: false,
                identity: 'user',
                currentOrganization:'敦化市',
                currentOrg:'华东师范大学',
                path:require("../../../src/assets/userImg.jpg")
            }
        },

        methods:{
          login(){
            this.$router.push({path: '/login'});
          },
          logout(){
            logout({
              id:1,
              result:fakeData.logout
            }).then(res=>{
              if(res.code===1){
                this.$store.commit('setuserInfo','');
                this.$store.commit('setIDInfo','');
                this.$alert('已取消登陆状态', '提示', {
                  confirmButtonText: '确定'
                }).then(()=>{
                  this.$router.push({path:'/'});
                });
              }else{
                this.$alert('取消登陆状态失败', '提示', {
                  confirmButtonText: '确定'
                });
              }
            })
          },
          select(){
            this.$store.commit('setComponent','selectTest');
          },
          toManage(){
            this.identity='manager';
            this.$store.commit('setComponent','staff');
          },
          manageOrg(){
            this.$store.commit('setComponent','organization');
          },
          knowledge(){
              this.$store.commit('setComponent','knowledge');
          },
          toQuestion(){
            this.$store.commit('setComponent','question')
          },
          manageLab(){
              this.$store.commit('setComponent','staffPerson');
          },
          joinLab(){
            this.$store.commit('setComponent','subjectPerson');
          },
          toPerson(){
            this.$store.commit('setComponent','information');
          },
          toPeople(){
            this.$router.push({path:'/'});
            this.identity='user';
            this.$store.commit('setComponent','box');
          },
          manageStaff(){
            this.$store.commit('setComponent','staff');
          },
          manageReport(){
            this.$store.commit('setComponent','report');
          },
          manageChat(){
            this.$store.commit('setComponent','comment');
          },
          manageRule(){
            this.$store.commit('setComponent','rule');
          },
          manageKnow(){
            this.$store.commit('setComponent','manageKnowledge');
          },
          manageLogo(){
            this.$store.commit('setComponent','logo');
          },
          managePower(){
            this.$store.commit('setComponent','power');
          },
          nihao(){
            this.$store.commit('setComponent','box');
          }
        },
        mounted(){
            this.path=require("../../../src/assets/userImg.jpg");
            /*requireAvater({
                result:fakeData.avater
            }).then(res=>{
               if(res.code===1){
                   this.path=require("../../../src/assets/userImg.jpg");
               }
            });*/
        }
    }
</script>

<style scoped>
  .container{
    background-color: #FFFFFF;
    height:49px;
  }
  .logo{
    color:#409EFF;
    float:left;
    font-size:23px;
    font-weight:900;
    margin-top:7px;
    margin-left:30px;
  }
  .img{
    float:left;
    margin-top:7px;
    width:30px;
  }
  .title{
    margin-top:13px;
    margin-left:30px;
    font-size:14px;
    color:#909399;
    float:left;
    cursor:pointer;
  }
  .title:hover{
    color:#409EFF;
  }
  .interface{
  }
  .nav{
    margin-top:13px;
    margin-right:30px;
    font-size:14px;
    color:#909399;
    float:right;
    cursor:pointer;
  }
  .nav:hover{
    color:#409EFF;
  }
  .login{
    margin:5px 30px 5px 0px;
    float:right;
  }
  .avatar{
     float:right;
     margin-right:30px;
     font-size:14px;
     color:#909399;
     cursor:pointer;
  }
  .avatar:hover{
    color:#409EFF;
  }
  .change{
    font-size:10px;
  }
</style>
