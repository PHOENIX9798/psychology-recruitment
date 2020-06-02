<template>
  <div>
    <div class="top">
      <el-row>
         <top></top>
      </el-row>
    </div>
    <div>
      <div class="menu-box">
        <el-menu
          router
          text-color="/manage/user"
          default-active=""
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="/manage/user">
            <i class="el-icon-user-solid"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-mouse"></i>
              <span>实验管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/manage/onlineTest">线上实验</el-menu-item>
              <el-menu-item index="/manage/test">线下实验</el-menu-item>
              <el-menu-item index="/manage/location">地点管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/manage/report">
            <i class="el-icon-thumb"></i>
            <span slot="title">举报管理</span>
          </el-menu-item>
          <el-menu-item index="/manage/tag">
            <i class="el-icon-collection-tag"></i>
            <span slot="title">标签管理</span>
          </el-menu-item>
          <el-menu-item index="/manage/discuss">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">评论管理</span>
          </el-menu-item>
          <el-menu-item index="/manage/reputation">
            <i class="el-icon-set-up"></i>
            <span slot="title">信誉规则</span>
          </el-menu-item>
          <el-menu-item index="/manage/knowledge">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">科普信息管理</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="table-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    import top from '../../components/nav'
    export default {
        name: "Nav",
        components:{top},
      methods:{
        handleOpen(){

        },
        handleClose(){

        },
        open(){

        },
        close(){

        },

      }
    }
</script>

<style scoped>
  .top{
    height: 60px;
  }
  .top img{
    height: 60px;
  }
  .manager{
    margin-top: 20px;
    color: white;
  }
  .menu-box{
    position: absolute;
    left: 0;
    width: 250px;
  }
  .table-box{
    position: absolute;
    left: 300px;
    width: 70%;
  }

</style>
