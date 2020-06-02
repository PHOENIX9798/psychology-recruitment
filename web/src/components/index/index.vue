<template>
  <div>
    <div class="show">
      <el-carousel height="200px" direction="vertical" :autoplay="true">
        <el-carousel-item  v-for="(img,index) in imglist" :key="index">
          <img class="img-box" v-bind:src="img.url">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>


</template>

<script>
    import { logout } from '@/request/api';// 导入我们的api接口
  export default {
    name: "Nav",
    data(){
      return{
        imglist:[
          {url:require('../../assets/8.png')},
          {url:require('../../assets/6.jpg')},
          {url:require('../../assets/9.jpg')},
        ]
      }
    },
    methods:{
      login(){
        this.$router.push({path: '/login'});
      },
      logout(){
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
        this.$router.push({path: '/information'});
      },
      personalZHome(){
        this.$router.push({path: '/person'});
      },
      personalBHome(){
        this.$router.push({path: '/personSubject'});
      },
    }
  }
</script>

<style scoped>
  .container{
    background-color: white;
    /*height: 55px;*/
    border-bottom: 1px solid rgb(230,230,230);
  }
  .login-button{
    /*margin-left: 5%;*/
    margin: 0.6vw 30px 0 0 ;
    float: right;
  }
  .img-logo{
    width: 55px;
    /*max-height: 62px;*/
    /*min-height: 61px;*/
    /*min-width: 367px;*/
    /*max-width: 369px;*/
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
  .el-menu-demo{
    width: 100%;
  }
  /*.show{*/
  /*  width: 100%;*/
  /*  height: 250px;*/
  /*  background-color: white;*/
  /*  border: 1px solid rgb(230,230,230);*/
  /*  margin:auto auto 1% auto;*/
  /*}*/
  .knowledge {
    width: 70%;
    height: 500px;
    background-color: white;
    border: 1px solid rgb(230, 230, 230);
    margin: 2% auto auto auto;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .img-box{
    width: 100%;
    overflow: hidden;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
