<template>
  <div>
    <div class="container-box">
      <userNav></userNav>
    </div>
  </div>
</template>

<script>

  import userNav from '../components/personal/userNav'

    export default {
      name: "personal",
      components:{userNav}
    }
</script>

<style scoped>
  .container-box{
    min-height: 450px;
  }

</style>
