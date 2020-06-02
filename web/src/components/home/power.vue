<template>
   <div class="power">
     <el-table
       :data="power"
       border
       height="450"
       class="table">
       <el-table-column
         type="selection"
         fit>
       </el-table-column>
       <el-table-column
         prop="id"
         label="ID"
         fit>
       </el-table-column>
       <el-table-column
         prop="realName"
         label="真实姓名">
       </el-table-column>
<!--       <el-table-column
         prop="phone"
         label="联系方式">
       </el-table-column>-->
       <el-table-column
         prop="staff"
         label="管理主试">
       </el-table-column>
       <el-table-column
         prop="report"
         label="管理举报">
       </el-table-column>
       <el-table-column
         prop="comment"
         label="管理评论">
       </el-table-column>
<!--       <el-table-column
         prop="knowledge"
         label="管理科普">
       </el-table-column>
       <el-table-column
         prop="logo"
         label="上传logo">
       </el-table-column>-->
       <el-table-column
         prop="power"
         label="权限管理">
       </el-table-column>
     </el-table>
     <div class="button-box">
       <el-button type="primary" @click="addManager">增加管理员</el-button>
       <el-button type="primary">删除管理员</el-button>
     </div>
     <el-dialog title="增加管理员" :visible.sync="dialogTableVisible">
       <div class="add_box">
          <span class="id">
                  <el-input v-model="addOrganization" placeholder="请输入本单位主试id" class="id"></el-input>
                  <el-button icon="el-icon-search" circle @click="searchStaff"></el-button>
                </span>
         <span>{{newStaff}}</span>
         <div>
           <el-checkbox v-model="checked">管理主试</el-checkbox>
           <el-checkbox v-model="checked">管理举报</el-checkbox>
           <el-checkbox v-model="checked">管理评论</el-checkbox>
           <el-checkbox v-model="checked">分配权限</el-checkbox>
         </div>
       </div>
       <el-button>添加新的管理员</el-button>
       <el-button type="primary" style="margin-top:10px;">确认</el-button>
     </el-dialog>
   </div>
</template>

<script>
    export default {
        name: "power",
        data(){
             return{
                 newStaff:'',
                 dialogTableVisible:false,
                 addOrganization:'',
                 power:[
                     {
                         id:1,
                         realName:'马惠昕',
                         phone:'18916582201',
                         staff:'能',
                         report:'能',
                         comment:'能',
                         knowledge:'能',
                         power:'能'
                     },
                     {
                         id:2,
                         realName:'海日',
                         phone:'18916582201',
                         staff:'能',
                         report:'能',
                         comment:'能',
                         knowledge:'能',
                         power:'能'
                     },
                     {
                         id:3,
                         realName:'刘庥秀',
                         phone:'18916582201',
                         staff:'能',
                         report:'能',
                         comment:'能',
                         knowledge:'能',
                         power:'能'
                     },
                     {
                         id:4,
                         realName:'司泽君',
                         phone:'18916582201',
                         staff:'能',
                         report:'能',
                         comment:'能',
                         knowledge:'能',
                         power:'能'
                     },
                     {
                         id:5,
                         realName:'陈志鹏',
                         phone:'18916582201',
                         staff:'能',
                         report:'能',
                         comment:'能',
                         knowledge:'能',
                         power:'能'
                     },
                     {
                         id:6,
                         realName:'金健',
                         phone:'18916582201',
                         staff:'能',
                         report:'能',
                         comment:'能',
                         knowledge:'能',
                         power:'能'
                     }, {
                         id:7,
                         realName:'孙溥晗',
                         phone:'18916582201',
                         staff:'能',
                         report:'能',
                         comment:'能',
                         knowledge:'能',
                         power:'能'
                     }
                 ],
             }
        },
        methods:{
            addManager(){
                this.dialogTableVisible=true;
            },
            view(){
                viewPower({
                    result:fakeData.viewPower
                }).then(res=>{
                   if(res.code===1){
                       this.power=res.power;
                   }
                });
            }
        }
    }
</script>

<style scoped>
    .power{
      width:80%;
      margin:0 auto 0 auto;
      min-height:495px;
    }
    .table{
      margin-top:15px;
    }
    .button-box{
      margin-top:10px;
    }
    .id{
      width:350px;
      margin-bottom:20px;
    }
    .add_box{
      padding:10px;
      margin-top:-18px;
    }
</style>
