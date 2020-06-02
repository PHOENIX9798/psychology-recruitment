<template>
  <div>
    <div class="container-box">
      <index></index>

      <box class="box"></box>
      <knowledge class="knowledge-box"></knowledge>
    </div>
    <foot></foot>
  </div>
</template>

<script>
  import index from '../components/index/index'
  import box from '../components/box'
  import knowledge from '../components/knowledge'
  import foot from '../components/footer'

    export default {
      name: "index.vue",
      components:{index,box,foot,knowledge}
    }
</script>

<style scoped>
  .box{
    width: 80%;
    margin: auto;
  }
  .container-box{
    min-height: 530px;
  }

</style>
