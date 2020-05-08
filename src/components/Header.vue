<template>
    <div class="header" :style="{backgroundImage:bgImg}">
      <div height="100" class="header-box">
        <el-row class="box">
          <el-col :span="5" class="logo">
              <a href="http://www.hwcor.com">
                <img src="/static/img2.0/www.hwcor.com.png"  />
              </a>
          </el-col>
          <el-col :span="19" class="nav-wrap">
            <el-row class="nav-box">
                <div>公司简介</div>
                <div>解决方案</div>
                <div>产品功能介绍</div>
                <div>社会价值</div>
                <div>联系我们</div>
              <!-- <el-col :span="4.8"><div  @click="scroll_detail">公司简介 </div></el-col>
              <el-col :span="4.8"><div  @click="scroll_reject"> 解决方案</div></el-col>
              <el-col :span="4.8"><div  @click="scroll_kills">产品功能介绍</div></el-col>
              <el-col :span="4.8"><div  @click="scroll_footer">社会价值</div></el-col>
              <el-col :span="4.8"><div  @click="Contact_Us">联系我们</div></el-col> -->
            </el-row>
            <div>服务热线 400-100-1313</div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>
<script>
export default{
    props:["bgImg"]
}
</script>
<style lang="less" scoped>
.header-box {
  width: 1200px;
  margin: auto;
  height: 100px;
}
.nav-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box{
    width: 1200px;
    margin:o auto ;
}
.header {
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 0;
  color:  #fff;
  width: 100%;
  max-width: 1920px;
  transform: translateX(-50%);
//   margin: 0 auto;
  .nav-box {
    width: 684px;
    height: 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    }
    .nav-box div:hover {
        background: #c3dcf5;
        color: #fff;
    }
    .nav-box div {
        height: 100px;
        line-height: 100px;
        font-size: .9rem;
        cursor: pointer;
    }
    .logo {
        display: inline-block;
        padding-top: 24px;
    }
}

</style>