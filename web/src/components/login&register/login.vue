<template>
  <div style="background-color: rgb(62,140,150)">
    <el-row>
      <el-col :span=12><div :style="backgroundDiv" class="middle"></div></el-col>
      <el-col :span=12>
        <div>
          <div>
            <el-card class="login-box">
              <el-tabs v-model="activeName"  @tab-click="handleClick">
                <el-tab-pane label="用户登录" name="first">
                  用户名：<el-input v-model="username" placeholder="请输入您的用户名" class="select-box1"></el-input>
                  <br>
                  密 码 ： <el-input v-model="password" placeholder="请输入您的密码" type="password" class="select-box2"></el-input>
                  <el-button type="primary" class="select-box1" @click="login">确认登录</el-button>
                  <el-button class="select-box3" @click="toFirst">返回首页</el-button>
                  <div><i class="el-icon-question"></i></div>
                </el-tab-pane>
                <el-tab-pane label="用户注册" name="second">
                  <span>用户名：</span><el-input v-model="user" placeholder="请输入您的用户名" class="select-box3"></el-input>
                  <span>密码：</span><el-input v-model="psw" placeholder="请输入您的密码" type="password" class="select-box4"></el-input>
                  <span>确认密码：</span><el-input v-model="confirmPsw" placeholder="请再次确认您的密码" type="password" class="select-box4"></el-input>
                  <span>手机： </span><el-input v-model="phone" placeholder="请输入您的手机号码" class="select-box4"></el-input>
                  <span>手机： </span><el-input v-model="phone" placeholder="请输入您的手机号码" class="select-box4"></el-input>
                  <el-button type="primary" class="select-box2" @click="reg">注册</el-button>
                  <div><el-tooltip class="item" effect="dark" content="单位指的是您所在的学校或公司等，填写本选项可以更好的帮助您使用本系统" placement="top"><i class="el-icon-question"></i></el-tooltip></div>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import { startReg,startLogin } from '@/request/api'
    import {fakeData} from '../../request/index'
    import store from '../../store'
    export default {
        name: "login",
      data(){
          return{
            backgroundDiv: {
              backgroundImage:'url(' + require('../../assets/login.jpg') + ')',
              backgroundRepeat:'no-repeat',
              backgroundSize:'100% 100%',

            },
            activeName: 'first',
            username:'',
            password:'',
            user:'',
            psw:'',
            confirmPsw:'',
            phone:'',
            mail:'',
            organization:'',
            male:'',
          }
      },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
        reg(){
          alert(this.user+this.psw+this.phone+this.mail+this.organization);
          if(this.user===""||this.psw===""||this.confirmPsw===""||this.phone===""||this.mail===""){
              this.$alert('请补充必填信息', '提示', {
                  confirmButtonText: '确定'
              });
          }
            else if(this.psw!==this.confirmPsw){
                this.$alert('确认密码不一致', '提示', {
                    confirmButtonText: '确定'
                });

            }
            else{
                startReg({
                    user:this.user,
                    psw:this.psw,
                    phone:this.phone,
                    mail:this.mail,
                    organization:this.organization,
                }).then(res=>{
                    console.log(res);
                    if(res.code===1){
                        this.$alert('注册成功，请登录', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.$router.push({path: '/login'});
                            }
                        });
                    }
                    else if(res.code===2||res.code===6){
                        this.$alert('注册失败', '提示', {
                            confirmButtonText: '确定'
                        });
                    }
                    else if(res.code=== 3){
                        this.$alert('该手机号码已存在', '提示', {
                            confirmButtonText: '确定'
                        });
                    }
                    else if(res.code===4){
                        this.$alert('该邮箱已存在', '提示', {
                            confirmButtonText: '确定'
                        });
                    }else{
                        this.$alert('该用户名已存在', '提示', {
                            confirmButtonText: '确定'
                        });
                    }
                });
            }
        },
        login(){
            if(this.username===""||this.password===""){
                this.$alert('用户名或密码未填写', '提示', {
                    confirmButtonText: '确定'
                });
            }
            startLogin({
                username:this.username,
                password:this.password,
                result:fakeData.startLogin
            }).then(res=>{
                if(res.code===1){
                    this.$alert('登陆成功', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$router.push({path: '/'});
                            store.commit('getUserName',this.username);
                            store.commit("setuserInfo", this.username);
                            store.commit("setIDInfo", res.id);
                            store.commit("getId",res.id);
                            store.commit("setComponent", 'box');
                        }
                    });
                }else if(res.code===3){
                    this.$alert('用户名或密码错误', '提示', {
                        confirmButtonText: '确定'
                    });
                }else{
                    this.$alert('登陆失败', '提示', {
                        confirmButtonText: '确定'
                    });
                }
            })
        },
      toFirst(){
        this.$router.push({path:'/'});
      }
    }
    }
</script>

<style scoped>
  .middle {
    height: 775px;
    width: 775px;
    background: no-repeat center top;
    background-size: contain;
  }
  .login-box{
    text-align: center;
    width: 280px;
    height: 510px;
    margin: 10% auto auto auto;
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
  .select-box4{
    text-align: center;
    width: 70%;
    margin: 5% auto auto auto;
  }
  i{
    float: right;
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    z-index: 1;
    margin: auto 5% auto auto;
    width: 480px;
  }

</style>
