<template>
  <div class="big-container">
    <div>
<!--      <div><img src="../../assets/per1.jpg" alt="" class="first-pic"></div>-->
      <el-row :gutter=30>
        <el-col :span=6>
          <div class="user-inf">
            <div><img src="../../assets/userImg.jpg" alt="" class="user-img"></div><div>w</div>
          </div>
          <div>
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @select="handleOpen"
              @close="handleClose">
              <el-menu-item index=1>
                <i class="el-icon-user"></i>
                <span slot="title">个人信息</span>
              </el-menu-item>
              <el-menu-item index=2>
                <i class="el-icon-edit-outline"></i>
                <span slot="title">修改头像</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span=18>
          <div class="user-box" v-show="ind">
            <userInformation></userInformation>
            <staffInformation></staffInformation>
            <subjectInformation></subjectInformation>
          </div>
          <div class="user-box" v-show="!ind"><change></change></div>
        </el-col>
      </el-row>
    </div>
  </div>


</template>

<script>
  import userInformation from '../../components/personal/userInformation'
  import staffInformation from '../../components/personal/staffInformation'
  import subjectInformation from '../../components/personal/subjectInformation'
  import change from '../../components/personal/changeInfo'

    export default {
      name: "userNav",
      data(){
        return{
          ind:true
        }
      },
      components:{
        staffInformation,subjectInformation,userInformation,change
      },
      methods:{
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
          if(key === '2'){
            this.ind = false;
          }
          if(key === '1'){
            this.ind = true;
          }

        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .first-pic{
    width: 100%;
  }
  .user-inf{
    border:1px solid rgb(200,200,200);
    /*padding: 1%;*/
  }
  .user-img{
    width: 90%;
  }
  .big-container{
    margin: 2vw auto;
    width: 70%;
    /*min-height: 600px;*/
    /*background-color: #DBDDBA;*/
  }
  .user-box{
    /*height: 100%;*/
    width: 100%;
    text-align: left;
    /*border: 1px solid red;*/
  }

</style>
