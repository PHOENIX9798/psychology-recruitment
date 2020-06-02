<template>
  <div class="select">
    <box></box>
  </div>
</template>

<script>
  import box from '../../components/box'
    export default {
      name: "selectTest",
      components:{box},
      data(){
        return{
          select:'',
          input:''
        }
      }
    }
</script>

<style scoped>
    .select{
      min-height:520px;
    }
    .el-select .el-input {
      width: 120px;
    }
    .input-with-select .el-input-group__prepend {
      background-color: #fff;
    }
</style>
