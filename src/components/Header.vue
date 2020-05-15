<template>
    <div class="header" :style="{background:bgImg}">
      <div height="100" class="header-box">
        <el-row class="box">
          <el-col :span="5" class="logo">
              <a href="http://www.hwcor.com">
                <img src="../../static/img2.0/www.hwcor.com.png"  />
              </a>
          </el-col>
          <el-col :span="19" class="nav-wrap">
            <el-row class="nav-box">
                <div :class="{active:router=='/home'}"><router-link to="/home">  首页</router-link></div>
                <!-- <div>
                 <router-link to="/mine">  公司简介</router-link>
                </div> -->
                <div  :class="{active:router=='/subtoll'}"><router-link to="/subtoll">  产品功能介绍</router-link></div>
                <!-- <div><router-link to="/mine">  战略合作伙伴</router-link></div> -->
                <div :class="{active:router=='/mine'}"><router-link to="/mine">  关于我们</router-link></div>
              <!-- <el-col :span="4.8"><div  @click="scroll_detail">公司简介 </div></el-col>
              <el-col :span="4.8"><div  @click="scroll_reject"> 解决方案</div></el-col>
              <el-col :span="4.8"><div  @click="scroll_kills">产品功能介绍</div></el-col>
              <el-col :span="4.8"><div  @click="scroll_footer">社会价值</div></el-col>
              <el-col :span="4.8"><div  @click="Contact_Us">联系我们</div></el-col> -->
            </el-row>
            <div class="phone">服务热线 400-100-1313</div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>
<script>
export default{
    data(){
      return{
        router:this.$route.path
      }
    },
    props:["bgImg"],
}
</script>
<style lang="less" scoped>
.header-box {
  width: 1200px;
  margin: auto;
  height: 80px;
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
  width: 1920px;
  background-size:100%!important;
  transform: translateX(-50%);
//   margin: 0 auto;
  .nav-box {
    width: 684px;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    }
    .nav-box div:hover {
        background: #c3dcf5;
        color: #fff;
    }
    .active{
      background: #c3dcf5;
      color: #fff;
    }
    .phone{
      font-size: 20px;
    }
    .nav-box div {
        height: 80px;
        line-height: 80px;
        font-size: 0.9rem;
        min-width: 150px;
        text-align: center;
        cursor: pointer;
        a{
          color:#fff;
          width: 100%;
          height: 100%;
          display: inline-block;
        }
    }
    .logo {
        display: inline-block;
        height: 80px;
        line-height: 80px;
    }
}

</style>