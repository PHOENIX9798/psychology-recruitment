<template>
  <div class="select">
     <!--<div class="select_label">
       <div v-for="item in pointLabel" :key="item.id" class="point_label">
         <strong>{{item.point}}</strong>
         <span v-for="tmp in item.label" :key="tmp.id" style="margin-left:10px;">{{tmp.title}}</span>
       </div>
     </div>-->
    <el-input class="select_input"></el-input>
    <el-button icon="el-icon-search">搜索</el-button>
    <span class="menu" v-for="(item,index) in pointLabel" :key="index">
      <el-dropdown>
      <span class="el-dropdown-link">
      {{item.point}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
         <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="tmp in item.label" :key="tmp.id">{{tmp.title}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </div>
</template>

<script>
    export default {
        name: "select",
        data(){
            return{
                time:'最近一周',
                input3:'',
                pointLabel:[
                    {
                        id:1,
                        point:'利手',
                        label:[{
                            id:1,
                            title:'左'
                        }, {
                            id:2,
                            title:'右'
                        }]

                    },{
                        id:2,
                        point:'性别',
                        label:[{
                            id:3,
                            title:'男'
                        }, {
                            id:4,
                            title:'女'
                        }]
                    },{
                        id:3,
                        point:'身份',
                        label:[{
                            id:4,
                            title:'在校生'
                        }, {
                            id:5,
                            title:'非在校生'
                        }]
                    },{
                        id:4,
                        point:'类别',
                        label:[{
                            id:6,
                            title:'本网问卷'
                        }, {
                            id:7,
                            title:'问卷星'
                        }, {
                            id:8,
                            title:'线下'
                        }]
                    },
                    {
                        id:5,
                        point:'时间',
                        label:[{
                            id:9,
                            title:'最近三月'
                        }, {
                            id:10,
                            title:'最近一月'
                        }, {
                            id:8,
                            title:'最近一周'
                        }]
                    }
                ],
                selectedLabel:[{
                    id:1,
                    title:'左'
                }]
            }
        }
    }
</script>

<style scoped>
    .select_input{
      width:140px;
    }
    .input-with-select{
       width:80%;
       float:right;
       margin-top:10px;
    }
    .select_place{
      width:150px;
    }
    .select_card{
      width:80%;
      text-align:left;
      margin-left:10%;
    }
    .select{
      background-color:#409EFF;
      width:100%;
      height:130px;
      margin:0 auto 0 auto;
      color:#fff;
      text-align:left;
    }
    .select_input{
      margin-top:30px;
      margin-left:145px;
      width:71%;

    }
   .select_label{
     float:left;
     margin-left:200px;
     margin-top:30px;
   }
   .selected{

   }
   .menu{

     margin-top:20px;
     margin-left:175px;
   }
    .el-dropdown-link{
      color:#FFF;
    }
</style>
