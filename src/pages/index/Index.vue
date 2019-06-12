<template>
  <div class="wrapper" style="margin:0px auto;">
    <el-container class="header">
      <el-header height="100" class="box">
        <el-row style="width:100%;">
          <el-col :span="6" class="logo">
            <img src="../../../static/img/ic_logo.png">
          </el-col>
          <el-col :span="18">
            <ul class="nav-box">
              <li @click="scroll_detail">
                公司简介
                <!-- <a href="#hw_detail">公司简介</a> -->
              </li>
              <li @click="scroll_reject">解决方案</li>
              <li @click="scroll_kills">产品功能介绍</li>
              <li @click="scroll_footer">社会价值</li>
              <li @click="Contact_Us">联系我们</li>
            </ul>
          </el-col>
          <!-- <el-col :span="6">
            <div class="header-right">
              <div class="ic-phone">
                <img src="../../../static/img/ic_phone.png" alt>服务热线 400-100-1313
              </div>
            </div>
          </el-col> -->
        </el-row>
      </el-header>
    </el-container>
    <!-- 轮播图 -->
    <el-carousel style="width:100%;margin-top:100px;" trigger="click" height="662px">
      <el-carousel-item class="list-img">
        <img src="../../../static/img/imga.jpg" alt>
      </el-carousel-item>

      <el-carousel-item class="list-img">
        <img src="../../../static/img/imgc.jpg" alt>
      </el-carousel-item>
    </el-carousel>
    <div class="clearfix" id="hw-detail">
      <div class="box">
        <el-row :gutter="20">
          <el-col :span="12">
            <img src="../../../static/img/hw_detail.png" style="width:100%; height:100%;float: right">
          </el-col>
          <el-col :span="12">

            <p>
              深圳市豪位科技有限公司公司本着为人民停车服务的宗旨，响应国家发改委的号召，积极参与建设和运营停车资源，推动停车智能化信息化。
              公司总部座落于深圳市南山区，是一家深耕于共享停车垂直领域的互联网企业。创始团队拥有原世界500强企业高管、全球名校毕业海归硕士博士、停车行业市场精英、以及原华为、电信、富士康等知名企业的资深通信领域技术专家。室内导航技术在国内国际领先，已获10多项专利、6项软著。<br/>
         
            公司技术团队经过数年的自主研发，利用人车位智能协同系统，运用大数据驱动的深度学习技术，完美实现了停车管理信息系统的互联互通。这套人·车·位智联互通平台，主要包含停车位预约、充电桩预约两大功能，平台还在拓展，相信会给用户不断带来更贴心更周到的停车服务体验。<br/>
           除深圳总部外，公司在上海、广州、重庆、成都均布局了市场运营团队。公司将陆续签约超过1万家停车场资源，车位500万个以上。<br/>
           
            公司注册商标“人·车·位”，意誉着为人们提供更便利的停车位预约服务，致力于以共享经济实践响应中国“互联网+”的创新战略，解决中国的交通停车和环保挑战，提升用户停车体验，创造社会价值，建设高效、可持续的移动出行新生态</p>
          </el-col>
        </el-row>
      </div>
      <div class="triangle"></div>
    </div>
    <div class="clearfix" style="box-sizing:box-border;height:400pt;padding-top:70px;">
      <div class="box" id="reject">
        <el-row :gutter="20" style="height:400pt;">
          <el-col :span="12">
            <p style="font-size: 20px;font-weight:700;color:#0E83F1;margin-top:60px;">我们是做什么的？</p>
            <br>
            <h4 style="color:#666;font-weight:700; font-size: 40px ;">解决方案</h4>
            <br>
    
            <div style="width:100%;color:#717171;padding-top:10px; ">
              <p id="overflow-p1" style="width:80%;color:#717171; ">
                人车位生活APP提供停车位预约、充电桩预约服务。手机可以直接快捷语音预约车位。室外导航至停车场后，
                自动切换至蓝牙链接模式，精准导航至具体车位的位置。基于GIS地理信息技术的室内导航系统，
                采用国际领先的路网规划算法，可以精准实现室内导航找位及反向寻车，真正解决用户寻车找位的痛点需求。
                该技术在国内国际领先，已获10多项专利、6项软著，用户体验非常好。
          
              <br/>
            
                豪位科技通过自主研发搭建的人·车·位云服务平台系统，完美的实现了自动计费、预约、支付、室内导航、自动解锁等功能全自动化，
                极大的提高了停车位和充电桩资源的利用率，真正实现人·车·位·生活互联互通
              </p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="wrap">
              <div class="center txt-center">
                <img
                  src="../../../static/img/logo.png"
                  style="width:50%;height:50%;margin-top: 37px;
    margin-bottom: -31px"
                />
                <br>
                <span>人 · 车 · 位 · 生 活</span>
              </div>
              <!-- 左下角为item1 -->
              <div class="item item1">预约充电</div>
              <div class="item item2">预约车位</div>
              <div class="item item3">个性化车位</div>
              <div class="item item4">场内导航</div>
              <div class="item item5">反向寻车</div>
              <div class="item item6">无感支付</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="box">
      <div
        style=" font: bold 200px arial ,FZDHTJW--GB1-0; color:#F6F6F6; margin-bottom :-44px; 
         z-index: -1;width:1200px;
        position: relative;"
      >Parking lot</div>
    </div>
    <!-- 滚动区 -->
    <el-container>
      <el-main style="padding:0;">
        <InfiniteScroll></InfiniteScroll>
      </el-main>
    </el-container>

    <div class="txt-center" id="showsKills" style="width:100%;">
      <el-row style="padding:20px 0;width:100%;">
        <div style="font: bold 40px arial ,MicrosoftYaHei; color:#2F2F2F; ">产品功能介绍</div>
        <div style="font: 20px arial,MicrosoftYaHei;color:#9E9E9E;">专业提供为停车位服务平台</div>
      </el-row>
    </div>

    <div class="container">
      <div class="box">
        <el-row>
          <el-col :span="8">
            <div style="float:left;padding-right:30px;">
              <div class="con-item">
                <span>预约停车</span>
                <p>
                  通过“人车位.生活”APP提前预约车位，
                  <br>方便时间管控，降低出行成本
                </p>
              </div>
              <div class="con-item">
                <span>预约充电</span>
                <p>
                  通过“人车位.生活”APP提前预约充电桩
                  <br>车位，享受即停即充的便利
                </p>
              </div>
              <div class="con-item">
                <span>个性化车位</span>
                <p>可预约不同类型的车位，满足不同人士的需求</p>
              </div>
            </div>
            <div style="width:75px;overflow:hidden;float:left;">
              <div class="img-item">
                <img src="../../../static/img/about_parking.png" alt>
              </div>
              <div class="img-item">
                <img src="../../../static/img/ic_yuyue.png" alt>
              </div>
              <div class="img-item">
                <img src="../../../static/img/ic_postion_car.png" alt>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <img
              src="../../../static/img/content_mobile2.png"
              style="margin-top:-30px;width396px;height:596px;"
            >
          </el-col>
          <el-col :span="8">
            <div class="fl">
              <div class="img-item">
                <img src="../../../static/img/ic_navigation.png" alt>
              </div>
              <div class="img-item">
                <img src="../../../static/img/ic_search_car.png" alt>
              </div>
              <div class="img-item">
                <img src="../../../static/img/non_inductive_pay.png" alt>
              </div>
            </div>
            <div class="fl" style="padding-left:30px;">
              <div class="con-item txt-left">
                <span>场内导航</span>
                <p>
                  可视化的场内地图以及动态路线指引，让车
                  <br>主快速找到车位，提升停车效率
                </p>
              </div>
              <div class="con-item txt-left">
                <span>反向寻车</span>
                <p>
                  车辆停入后，通过可视化的场内地图及动态
                  <br>路线指引，助车主快速找到爱车
                </p>
              </div>
              <div class="con-item txt-left">
                <span>无感支付</span>
                <p>
                  车辆与账户绑定并开启自动支付，进出停车
                  <br>无需手动缴费，体验无感支付的便利
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="footer-hth02">
      <div class style="text-align:center;padding:50px 0 0 0;width:100%;">
        <div style="font: bold 40px arial ,MicrosoftYaHei; color:#2F2F2F; ">社会价值</div>
        <div style="font: 16px arial,MicrosoftYaHei;color:#9E9E9E;margin:0;">ET PROXY FEATURES</div>
      </div>
      <div class="runded-item runded-item01">
        <div class="runded">
          <img src="../../../static/img/ic_finger.png" alt>
        </div>
        <div class="title">错峰引流</div>
        <p>
          高峰引流，平峰时导流，
          <br>解决停车难
        </p>
      </div>
      <div class="runded-item runded-item02">
        <div class="runded">
          <img src="../../../static/img/ic_money.png" alt>
        </div>
        <div class="title">减员增效</div>
        <p>
          无人值守，减少人力成本
          <br>和管理成本
        </p>
      </div>
      <div class="runded-item runded-item03">
        <div class="runded">
          <img src="../../../static/img/ic.png" alt>
        </div>
        <div class="title">提高车位和充电桩利用率</div>
        <p>
          通过导流的方式，提高车位和充电桩
          <br>利用率,增加场库收入
        </p>
      </div>
      <div class="runded-item runded-item04">
        <div class="runded">
          <img src="../../../static/img/ic_goback.png" alt>
        </div>
        <div class="title">客户引流</div>
        <p>
          与场库合作的商家，通过代约车位
          <br>代付停车费、提供充电服务等方式
          <br>吸引客户到店消费，增加店铺收入,
        </p>
      </div>
      <div class="runded-item runded-item05">
        <div class="runded">
          <img src="../../../static/img/ic_jieneng.png" alt>
        </div>
        <div class="title">节能减排</div>
        <p>
          与售电公司合作，申请电价优惠，
          <br>减少场库成本和用户支出
        </p>
      </div>
      <div class="runded-item runded-item06">
        <div class="runded">
          <img src="../../../static/img/ic_img24.png" alt>
        </div>
        <div class="title">时间管理</div>
        <p>
          提前预约定好车位，无需找车位，
          <br>提升出行效率
        </p>
      </div>
    </div>
    <div class="footer" id="footer">
      <!-- <el-row class="footer-top clearfix">
        <div class="footer-left"></div>
        <div class="footer-center"></div>
        <div class="footer-right"></div>
      </el-row> -->
      <FooterCssCirc></FooterCssCirc>
      <el-row class="footer-container">
        <el-col class="container-left" :span="5">
          <div class="title">联系我们</div>
          <img src="../../../static/img/footer_left.png" alt>
          <p>扫一扫关注公众号</p>
        </el-col>
        <el-col :span="14" class="contaier-center">
          <el-row :gutter="60">
            <el-col :span="12" class="left">
              <div>
                <span>深圳市豪位科技有限公司</span>
              </div>
              <div>
                <span>400-100-1313</span>
              </div>
            </el-col>
            <el-col :span="12" class="right">
              <div>
                <span>joy.jiang@hwcor.com</span>
              </div>
              <div>
                <span>www.hwcor.com</span>
              </div>
            </el-col>
          </el-row>
          <el-col class="con-center-bt">
            <div>
              <span>深圳市南山区深圳湾科技生态园二区9栋A2409～A2414</span>
            </div>
          </el-col>
        </el-col>
        <el-col :span="5">
          <div class="title">APP下载</div>
          <img src="../../../static/img/logo_app.png" style="width:178px;hieght:178px;" alt>
        </el-col>
      </el-row>
      <el-row class="footer-bottom">© 2019 Shenzhen Haowei Technology Co.,Ltd.All rights reserved<br/><br/>粤ICP备19046392号 </el-row>
      
    </div>
  </div>
</template>
<script>
import FooterCssCirc from "../../utils/FooterCssCirc"
import InfiniteScroll from "../../utils/InfiniteScroll";
export default {
  name: "index",

  methods: {
    scroll_detail() {
     window.scrollTo(0,400)
    },
    scroll_reject() {
    window.scrollTo(0,1400)
    },
    scroll_kills() {
    window.scrollTo(0,2600)
    },
    scroll_footer() {
     window.scrollTo(0,3650)
    },
    Contact_Us(){
     window.scrollTo(0,5000)
    }   
  },
  components: {
    InfiniteScroll,
    FooterCssCirc
  }
};
</script>
<style scoped>

/* 页脚 */
.footer-bottom {
  width: 100%;
  text-align: center;
  color: #8997a4;
  padding: 30px 20px;
}
.footer-container {
  padding-left: 223px;
}
.footer-container .contaier-center {
  padding: 30px 0;
  font-size: 16px;
}
.con-center-bt div {
  display: inline;
}
.con-center-bt {
  width: 100%;
  border-bottom: 1px solid #384453;
  padding-top: 30px;
  color: #fff;
}
.con-center-bt:before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 23px;
  background: url(../../../static/img/ic_position.png) no-repeat;
}
.footer-container .contaier-center .left div:first-of-type:before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 23px;
  background: url(../../../static/img/ic_city.png) no-repeat;
}
.footer-container .contaier-center .left div:last-of-type:before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 23px;
  background: url(../../../static/img/ic_mobile.png) no-repeat;
}
.footer-container .contaier-center .right div:first-of-type:before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 23px;
  background: url(../../../static/img/ic_email.png) no-repeat;
}
.footer-container .contaier-center .right div:last-of-type:before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 23px;
  background: url(../../../static/img/ic_website.png) no-repeat;
}

.footer-container .contaier-center div div span {
  display: inline-block;
  padding-bottom: 10px;
  padding-left: 15px;
  line-height: 20px;
}
.footer-container .contaier-center .left div {
  border-bottom: 1px solid #384453;
  width: 405px;
  /* padding-bottom:10px; */
  padding-top: 30px;
  color: #fff;
}
.footer-container .contaier-center .right div {
  border-bottom: 1px solid #384453;
  width: 405px;
  padding-top: 30px;
  color: #fff;
}
.footer-container .title {
  font-size: 38px;
  color: #fff;
  padding-left: 15px;
  padding-bottom: 15px;
}
.footer-container .container-left p {
  width: 178px;
  padding-top: 15px;
  text-align: center;
  color: #85929f;
  font-size: 14px;
}
#footer {
  box-sizing: border-box;
  padding: 93px 0;
  width: 100%;
  height: 515px;
  background:#273341;
  /* background: url(../../../static/img/footer_img.png) no-repeat; */
}
.footer-top {
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  padding: 0 190px;
}
.footer-top > div {
  float: left;
}
.footer-top .footer-left {
  margin-top: 67px;
  width: 709px;
  height: 1px;
  background: linear-gradient(361deg, #313e4d, #525c67);
}
.footer-top .footer-right {
  margin-top: 67px;
  width: 693px;
  height: 1px;
  background: linear-gradient(361deg, #525c67, #313e4d);
}

.footer-top .footer-center {
  width: 135px;
  height: 135px;
  background: url(../../../static/img/logo.png) no-repeat;
  border-radius: 50%;
  border: 1px solid #525c67;
  background-position: center center;
  background-size: 98px 88px;
}
/* 最外层包裹 */
.wrapper {
  width: 1920px;
  position: relative;
  margin:0px auto;
  font-family: "Microsoft YaHei";
}
/* 头部定位 */
.header {
  width: 100%;
  background: #fff;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
}
/* .header{
  width:1200px;
  margin:0 auto;
	padding:0;
 
 } */
.fl {
  float: left;
}
p {
  font-size: 16px;
  color: #333;
  line-height: 30px;
}
li ,span,div{
  font-family:"Microsoft YaHei";
}

.footer-hth02 .runded-item p {
  padding-top: 5px;
  font-family: "MicrosoftYaHei";
  color: #666;
}
.footer-hth02 .runded-item .runded img {
  display: block;
  position: absolute;
  left: 25%;
  top: 24%;
  width: 50%;
}
.footer-hth02 .title {
  font-size: 22px;
  color: #258ffc;
}

.footer-hth02 .runded-item {
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  /* width: 224px; */
}
.footer-hth02 .runded-item01 {
  left: 11%;
  top: 29%;
}
.footer-hth02 .runded-item02 {
  left: 22%;
  top: 47%;
}
.footer-hth02 .runded-item03 {
  left: 35%;
  top: 32%;
}
.footer-hth02 .runded-item04 {
  left: 51%;
  top: 45%;
}
.footer-hth02 .runded-item05 {
  left: 66%;
  top: 40%;
}
.footer-hth02 .runded-item06 {
  left: 79%;
  top: 31%;
}

.footer-hth02 .runded-item .runded {
  position: relative;
  width: 100px;
  height: 100px;
  left: 19%;
  top: 50%;
  border: 8px solid #c3dcf5;
  background: linear-gradient(360deg, #215af6, #66c6ef);
  border-radius: 50%;
  line-height: 100px;
  margin-bottom: 10px;
}
.footer-hth02 .runded-item04 .runded {
  border: 8px solid #f5d69c;
  background: linear-gradient(360deg, #f67b0d, #fcaf07);
}
.footer-hth02 {
  position: relative;
  width: 100%;
  height: 850px;
  background: url(../../../static/img/wavy_lines.png) no-repeat;
  background-position: center center;
  background-size: contain;
}
.footer {
  position: relative;
  min-width: 1200px;
}
.footer .last-img {
  position: absolute;
  right: 10%;
  top: 535%;
}
.footer .last-img img {
  width: 66%;
}
/* 功能介绍 */
.container {
  box-sizing: border-box;
  padding: 168px 0 70px 0;
  height: 895px;
  background: #f4f4f4;
}
* {
  margin: 0;
  padding: 0;
}
.txt-center {
  text-align: center;
}
ul,
li {
  padding: 0px;
  margin: 0px;
}
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.list-img {
  width: 100%;
  float: right;
  height: 662px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
ul,
li {
  list-style: none;
  /* background: #a9a9a9; */
}
.img-item {
  padding-bottom: 118px;
}
.con-item {
  width: 291px;
  height: 40pt;
  /* float: left; */
  text-align: right;
  padding-bottom: 120px;
  /* padding-right: 30px; */
}
.con-item span {
  font: bold 26px arial;
  color: #666;
}
.con-item p {
  padding-top: 10px;
  color: #666;
}
.txt-left {
  text-align: left;
}
/* 头部样式 */
.header-right {
  box-sizing: border-box;
  text-align:right;
  height: 100px;
  line-height: 100px;
}

.ic-phone img {
  width: 15px;
  height: 15px;
}
.ic-phone {
  height: 100px;
  line-height: 100px;
  font-size: 18px;
  color: #0e83f1;

  padding: 0 10px;
  font-weight: bold;
}
.nav-box {
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.nav-box li:hover {
  background: #ccc;
}
.nav-box li {

  height: 100px;
  line-height: 100px;
  font-size: 20px;
  cursor: pointer;
}

.box {
  margin: 0 auto;
  width: 1200px;
  box-sizing: border-box;
}

.logo {
  display: inline-block;

  padding-top: 24px;
}
/* css 园 */
.wrap {
  margin: 60px 30px;
  position: relative;
  width: 554px;
  height: 554px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.center {
  width: 276px;
  height: 276px;
  /* line-height: 276px; */
  box-sizing: border-box;
  font-weight: 700;
  font-family: FZZDHJW--GB1-0;
  font-size: 28px;
  color: #3080ff;
  border-radius: 50%;
  border: 1px solid #d8edf4;
  box-shadow: 0px 0px 59px #d0eefa;
}
.item {
  position: absolute;
  width: 139px;
  height: 139px;
  border-radius: 50%;
  line-height: 139px;
  font-size: 20px;
  text-align: center;
  color: #ffffff;

  box-shadow: 1px 10px 10px 0px #8389e24a;
}
.item6 {
  right: 23%;
  bottom: -6%;
  transform: translateX(50%);
  background: linear-gradient(45deg, #008aff, #00d8ff);
}
.item5 {
  right: 0%;
  top: 33.33%;
  transform: translateX(50%);
  background: linear-gradient(45deg, #3bb5b6, #42e397);
}

.item4 {
  right: 23%;
  top: -6%;
  transform: translateX(50%);
  background: linear-gradient(45deg, #907de4, #21dfd1);
}
.item3 {
  left: 0%;
  top: -6%;
  transform: translateX(50%);
  background: linear-gradient(45deg, #e47d87, #f95169);
}
.item2 {
  left: 0%;
  top: 33.33%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #fac534, #ffa944);
}
.item1 {
  left: 0%;
  bottom: -6%;
  transform: translateX(50%);
  background: linear-gradient(45deg, #ee727d, #fda23f);
  box-shadow: 1px 10px 10px 0px #f17d6f52;
}
  #hw-detail{
    height: 682px; 
    box-sizing: border-box;
    padding: 6% 0px;
    background:#f7f9fc;
  }

/* 媒体查询 */
/* @media screen and (max-width: 1200px){
    .nav-box li{
  
    padding: 0 15px
  }

  .ic-phone{
    padding: 0;
  }
  #overflow-p1{
    width: 443px;
     overflow: hidden;
    height:320px;
  }
   #hw-detail p{
     width:615px;
     height:380px;
     text-overflow: ellipsis;
   }

} */
  #hw-detail .triangle{
    position: absolute;
    left:47.5%;
    bottom:0px;
    border:35px solid #fff;
    border-top:none;
    border-left-color:#f7f9fc;
    border-right-color:#f7f9fc;
  }
  #hw-detail{
    position:relative;
  }
 @media all
and (-moz-min-device-pixel-ratio: 0.5) and (-moz-max-device-pixel-ratio: 0.5),
  (-webkit-min-device-pixel-ratio: 0.5) and (-webkit-max-device-pixel-ratio: 0.5),
  (min-resolution: 0.5dppx) and (max-resolution: 0.5dppx) {
  :root {
      font-size: 14px;
  }

  #overflow-p1{
    width: 443px;
    overflow: hidden;
    height:400px;
  } 
  .nav-box li{
    font-size:14px;
    padding: 0 15px
  }
  .ic-phone{
    padding: 0;
  }
  .box{
    width:1440px;
  }
 
   #hw_detail p{
     line-height: 30px;
   
   }


} 
/* @media all
and (-moz-min-device-pixel-ratio: 1.09) and (-moz-max-device-pixel-ratio: 1.18),
  (-webkit-min-device-pixel-ratio: 1.09) and (-webkit-max-device-pixel-ratio: 1.18),
  (min-resolution: 1.09dppx) and (max-resolution: 1.18dppx) {
  :root {
      font-size: 14px;
  }
}
@media all
and (-moz-min-device-pixel-ratio: 1.19) and (-moz-max-device-pixel-ratio: 1.28),
  (-webkit-min-device-pixel-ratio: 1.19) and (-webkit-max-device-pixel-ratio: 1.28),
  (min-resolution: 1.19dppx) and (max-resolution: 1.28dppx) {
  :root {
      font-size: 13px;
  }
}
@media all
and (-moz-min-device-pixel-ratio: 1.29) and (-moz-max-device-pixel-ratio: 1.4),
  (-webkit-min-device-pixel-ratio: 1.29) and (-webkit-max-device-pixel-ratio: 1.4),
  (min-resolution: 1.29dppx) and (max-resolution: 1.4dppx) {
  :root {
      font-size: 12px;
  }
}
@media all
and (-moz-min-device-pixel-ratio: 1.41) and (-moz-max-device-pixel-ratio: 1.6),
  (-webkit-min-device-pixel-ratio: 1.41) and (-webkit-max-device-pixel-ratio: 1.6),
  (min-resolution: 1.41dppx) and (max-resolution: 1.6dppx) {
  :root {
    background:pink;
      font-size: 10px;
  }
}
@media all
and (-moz-min-device-pixel-ratio: 1.61) and (-moz-max-device-pixel-ratio: 1.8),
  (-webkit-min-device-pixel-ratio: 1.61) and (-webkit-max-device-pixel-ratio: 1.8),
  (min-resolution: 1.61dppx) and (max-resolution: 1.8dppx) {
  :root {
      font-size: 9px;

      background:blue;
  }
}
@media all
and (-moz-min-device-pixel-ratio: 1.81) and (-moz-max-device-pixel-ratio: 2.1),
  (-webkit-min-device-pixel-ratio: 1.81) and (-webkit-max-device-pixel-ratio: 2.1),
  (min-resolution: 1.81dppx) and (max-resolution: 2.1dppx) {
  :root {
      font-size: 8px;
  }
} */
</style>

