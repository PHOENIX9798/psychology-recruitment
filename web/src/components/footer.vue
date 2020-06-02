<template>
  <footer>
    <div class="container">
      <div class="alink">
        <ul>
          <li class="li-box"><el-link type="info">网站原创</el-link></li>
          <li>|</li>
          <li class="li-box"><el-link type="info">绝非摸鱼</el-link></li>
          <li>|</li>
          <li class="li-box"><el-link type="info">关于我们</el-link></li>
          <li>|</li>
          <li class="li-box"><el-link type="info">联系我们</el-link></li>
        </ul>
        <div class="left" style="margin-top: 10px"><li class="el-icon-s-platform"></li>本网站用途为参加全国大学生创新创业大赛。</div>
        <div class="left"><li class="el-icon-s-opportunity"></li>本网站创意想法承诺为原创，拒绝剽窃。</div>
      </div>
      <img alt="" src="../assets/bottomlogo.png" class="img1"/>
      <div class="right">

        <h5>
          心理学被试招聘平台
        </h5>
        <p>
          现代化的心理学被试招聘平台<br/>用便捷回答未来！
        </p>
      </div>

    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  footer{
    background-color: rgb(40,44,48);
    width: 100%;
    margin-top: 2.3%;
  }
  .container{
    display: flex;
    height: 150px;
  }
  ul{
    display: flex;
    margin-top: 35px;
    list-style: none;
    margin-left: 100px;
    margin-bottom: 0px;
    width: 400px;
  }
  li{
    justify-content: flex-start;
  }
  .li-box{
    width: 100px;
  }
  .left{
    display: flex;
    align-items: flex-end;
    font-size: 12px;
    color: rgb(110,110,110);
    margin-left: 160px;

  }

  .alink{
    padding-top: 5px;
    width: 60%;
  }

  .right{
    display: flex;
    flex-direction: column;

  }
  .img1{
    margin-top: 40px;
    width: 70px;
    height: 70px;
  }
  h5{
    display: flex;
    margin:45px 0px 0px 15px;
    color: rgb(110,110,110);
  }
  p{
    font-size: 12px;
    margin-left: 15px;
    margin-top: 10px;
    color: rgb(110,110,110);
    text-align: left;
  }
</style>
