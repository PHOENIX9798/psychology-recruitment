<template>
  <div>
    <lunbo></lunbo>
    <div class="title">
      <strong>你所不知道的心理学科普~</strong>
    </div>
      <div class="container">
        <div class="text" v-for="(item,index) in knowledge" :key="index" ><el-link :href="item.content">{{item.content}}</el-link></div>
      </div>
  </div>
</template>

<script>
    import { viewPublic } from '@/request/api';// 导入我们的api接口
    import lunbo from '../components/index/index'
    export default {
      name: "knowledge",
      components:{lunbo},
      data(){
        return{
          knowledge:[],
        }
      },
      mounted(){
        viewPublic({
        }).then(res=>{
          if(res.code===1){
            this.knowledge=res.data;
          }else{
            this.$alert('科普信息数据错误', '提示', {
              confirmButtonText: '确定'
            });
          }
        });
      },
    }
</script>

<style scoped>
  .title{
    display: inline-flex;
    width: 75%;
    margin: 2% 0 0 0;
    padding-bottom: 1%;
    border-bottom: 1px solid rgb(210,210,210);
  }
  .container{
    margin-top: 1%;
    min-height: 300px;

  }
  .text {
    display: inline-flex;
    width: 75%;
    font-size: 20px;
    text-align: left;
    padding: 5px;
  }
  .text:hover{
    background-color: #F2F6FC;
  }
  .item {

  }

  .box-card {
    width: 75%;
    margin: 1% auto auto auto;
    background-color: #DCDFFF;
  }
  .box-card:hover{
    background-color: #C0C5FD;
  }

</style>
