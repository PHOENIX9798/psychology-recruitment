<template>
  <div>
    <div class="container-box">
      <Nav></Nav>
      <el-button type="text" class="question-button" icon="el-icon-guide">问卷中心</el-button>
      <staffPerson class="staff-box"></staffPerson>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import staffPerson from '../components/person/staffPerson'
  import Nav from '../components/nav'
  import Footer from '../components/footer'
    export default {
      name: "person",
      components:{staffPerson,Nav,Footer}
    }
</script>

<style scoped>
  .staff-box,.subject-box{
    width: 80%;
    margin: 3vw auto;
  }
  .container-box{
    min-height: 530px;
  }
  .question-button{
    position: absolute;
    top:60px;
    right: 50px;
  }
</style>
