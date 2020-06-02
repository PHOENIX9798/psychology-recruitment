<template>
  <div>
    <div class="container-box">
      <Nav></Nav>
      <subjectPerson class="subject-box"></subjectPerson>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import subjectPerson from '../components/person/subjectPerson'
  import Nav from '../components/nav'
  import Footer from '../components/footer'
  export default {
    name: "personSubject",
    components:{subjectPerson,Nav,Footer}
  }
</script>

<style scoped>
  .subject-box{
    width: 80%;
    margin: 3vw auto;
  }
  .container-box{
    min-height: 530px;
  }

</style>
