<template>
    <div class="organization">
      <el-table
        :data="organization.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        border
        :default-sort = "{prop: 'createTime', order: 'descending'}"
        v-el-table-infinite-scroll="load"
        @selection-change="handleSelectionChange"
        height="425"
        class="table">
        <el-table-column
          type="selection"
          fit>
        </el-table-column>
        <el-table-column
          prop="name"
          label="单位名称"
          fit
        >
          <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                {{ scope.row.name }}
                <el-button type="text" icon="el-icon-edit" @click="edit(scope.$index,scope.row)"></el-button>
              </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="userName"
          label="管理员">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          fit
          :filters="[{text: '使用中', value: '使用中' },{text: '未使用', value: '未使用' }]"
          :filter-method="filterHandler"
        >
        </el-table-column>
      </el-table>
      <el-input
        v-model="search"
        class="input"
        placeholder="输入单位关键字搜索"/>
      <div class="button-box">
        <el-button type="primary" @click="add">增加单位</el-button>
        <el-button type="primary" @click="stop">停用单位</el-button>
        <el-button type="primary" @click="start">使用单位</el-button>
        <el-button type="primary" @click="remove">删除单位</el-button>
      </div>
      <el-dialog title="增加单位" :visible.sync="dialogTableVisible">
        <div v-for="(item,index) in addOrganization" :key="index">
              <div class="input-box">
                <el-input v-model="item.name" placeholder="请输入单位名称" class="name"></el-input>
                <el-input v-model="item.userName" placeholder="请输入管理员用户名" class="userName"></el-input>
                <el-input v-model="item.phone" placeholder="请输入管理员联系方式" class="phone"></el-input>
              </div>
              <el-button  icon="el-icon-delete" circle @click="delItem(index)" class="del-button"></el-button>
        </div>
        <el-button icon="el-icon-plus" circle @click="addItem"></el-button>
        <el-button type="primary" @click="save">确认</el-button>
      </el-dialog>
    </div>
</template>

<script>
    import {fakeData} from '../../request/index'
    import {countOrganization, viewOrganization,addOrganization,stopOrganization,removeOrganization,startOrganization,loadOrganization} from "../../request/api";
    export default {
        name: "organization",
        data(){
            return{
                total:0,
                search:'',
                num:1,
                multipleSelection: [],
                organization:[],
                addOrganization:[{id:0, name: '', userName:'', phone:'', state:''}],
                dialogTableVisible:false
            }
        },
        methods: {
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleChange(value) {
                console.log(value);
            },
            filterHandler(value, row, column) {
                console.log(value);
                console.log(row);
                console.log(column);
                const property = column['property'];
                return row[property] === value;
            },
            count(){
                countOrganization({
                    result:fakeData.countOrganization
                }).then(res=>{
                    if(res.data.code===1){
                        this.total=res.data.total;
                    }
                });
            },
            view(){
                viewOrganization({
                    result:fakeData.viewOrganization
                }).then(res=>{
                    if(res.data.code===1){
                        this.organization=res.data.organization;
                    }
                });
            },
            add(){
                this.dialogTableVisible=true;
                    addOrganization({
                        name:value,
                        result:fakeData.addOrganization
                    }).then(res=>{
                        if(res.data.code===1){
                            this.organization.push({name:value,createTime:res.data.createTime,state:'使用中'});
                        }else if(res.data.code===2){
                            this.$alert('添加失败，此单位已存在', '提示', {
                                confirmButtonText: '确定'
                            });
                        }
                    });
            },
            stop(){
               for(let i=0;i<this.multipleSelection.length;i++){
                   stopOrganization({
                       id:this.multipleSelection[i].id,
                       result:fakeData.stopOrganization
                   }).then(res=>{
                       if(res.data.code!==1){
                           this.$alert(this.multipleSelection[i].name+'停用失败', '提示', {
                               confirmButtonText: '确定'
                           });
                       }else{
                           for(let j=0;j<this.organization.length;j++){
                               if(this.multipleSelection[i].id===this.organization[j].id){
                                   this.organization[j].state='未使用'
                               }
                           }
                       }

                   })
               }
            },
            start(){
                for(let i=0;i<this.multipleSelection.length;i++){
                    startOrganization({
                        id:this.multipleSelection[i].id,
                        result:fakeData.stopOrganization
                    }).then(res=>{
                        if(res.data.code!==1){
                            this.$alert(this.multipleSelection[i].name+'开始失败', '提示', {
                                confirmButtonText: '确定'
                            });
                        }else{
                            for(let j=0;j<this.organization.length;j++){
                                if(this.multipleSelection[i].id===this.organization[j].id){
                                    this.organization[j].state='使用中'
                                }
                            }
                        }

                    })
                }

            },
            remove(){
                for(let i=0;i<this.multipleSelection.length;i++){
                    if(this.multipleSelection[i].state==='使用中'){
                        this.$notify({
                            title: '提示',
                            message: this.multipleSelection[i].name+'尚在使用，删除失败',
                            duration: 0
                        });
                        continue;
                    }
                    removeOrganization({
                        id:this.multipleSelection[i].id,
                        result:fakeData.stopOrganization
                    }).then(res=>{
                        if(res.data.code!==1){
                            this.$alert(this.multipleSelection[i].name+'移除失败', '提示', {
                                confirmButtonText: '确定'
                            });
                        }else{
                            for(let j=0;j<this.organization.length;j++){
                                if(this.multipleSelection[i].id===this.organization[j].id){
                                    this.organization.splice(j,1);
                                }
                            }
                        }

                    })
                }
            },
            edit(index,row){
                this.$prompt('单位名称修改为', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    this.organization[index].name=value;
                });
            },
            load(){
                loadOrganization({
                    result:fakeData.loadOrganization
                }).then(res=>{
                    if(res.data.code===1){
                        this.organization = this.organization.concat(res.data.organization);
                    }
                });
            },
            delItem(index){
               this.addOrganization.splice(index,1);
            },
            addItem(){
                this.addOrganization.push({id:0, name: '', userName:'', phone:'', state:''});
            },
            save(){
                console.log(this.addOrganization);
                this.dialogTableVisible=false;
                for(let i=0;i<this.addOrganization.length;i++){
                    addOrganization({
                        result:fakeData.addOrganization
                    }).then(res=>{
                        if(res.data.code===1){
                            this.$alert('添加成功');
                            this.organization.splice(0,1,{id:res.data.id,name:this.addOrganization[i].name,userName:this.addOrganization[i].userName,
                            phone:this.addOrganization[i].phone,state:'未使用'});
                        }
                    });
                }
            }

        },
        mounted(){
            this.count();
            this.view();
        }
    }
</script>

<style scoped>
    .input{
      margin-bottom:0.5%;
      width:30%;
      float:left;
    }
    .button-box{
      float:right;
    }
    .input-box{
      width:93%;
      float:left;
    }
    .name{
      width:90%;
      float:left;
    }
    .userName{
      margin-top:1%;
      float:left;
      width:40%;
    }
    .phone{
      margin-top:1%;
      width:40%;
    }
    .table{
      margin-top:15px;
      margin-bottom:1%;
      height:400px;
    }
    .organization{
      width:80%;
      margin:0 auto 0 auto;
      min-height:505px;
    }
</style>
