<template>
    <div class="fixedLayout">
        <Header bgImg="#0F6FDE"></Header>
        <div class="wrapper-1">
            <img src="../../../static/img2.0/mine-01.png" alt="" class="content-bg-img">
        </div>
        <div class="wrapper-2">
            <div class="wrap">
                <div class="box-2 box">
                    <h3>公司简介</h3>
                    <div v-html="introText" class="intro">
                        <p>
                                深圳市豪位科技有限公司，是一家深耕于车位精细化管理的高科技物联网公司。本着“停车找位服务专家”的宗旨，响应国家发改委的号召，积极参与建设和运营停车资源，推动停车智能化信息化。致力于以共享经济实践响应中国“互联网+”的创新战略，解决中国的停车交通和环保挑战，建设高效、可持续的移动出行新生态。</p>
       <p>公司注册商标“小二占位”，意寓着我们是专注为车主提供停车找位占位服务的服务商。公司技术团队经过数年的自主研发，运用大数据驱动的深度学习技术，开发了人车位智联互通系统，完美实现了与停车场信息管理系统的互联互通，并以车位锁作为切入点，打造以车位为核心切入点的停车产品链，主要包含预约停车、找空位两大业务功能，运用了前沿的室内导航技术用以支撑室内导航和反向寻车，提升车主停车体验。</p>
       <p>技术团队内还有一批具有二十年无线通信技术研发经验，深耕于解决信号覆盖问题的细分领域的专家。经过迅速发展，NB-IOT物联网和4G/5G移动通信网络覆盖方面的产品已初具规模，并得到了众多合作伙伴的一致认可。根据业界的需要，成功研制了国内第一款具有自主知识产权的可实现自动选频的NB-IOT无线直放站、4G无线直放站以及NB-IOT和4G的双模无线直放站，以解决智慧三表及地磁等物联网产品在地下室或弱电井等场景下无信号覆盖的问题以及4G物联网设备的信号问题。随着5G的普及，我们还推出了5G系列设备和支持5G高频段的新型无源覆盖系统。与此同时，我们还提供物联网和4G/5G信号覆盖工程的交钥匙工程，包括勘测、方案设计、材料准备、施工、开通调试和维护等一条龙服务。
                            </p>
                    </div>
                    <div class="bottom">
                        <p>
                            <span>hao</span><i></i><span>wei</span>
                        </p>
                    <div class="position_box">
                        <div>
                            <h4>企业文化</h4>
                            <p>热情&nbsp;&nbsp;&nbsp;&nbsp;创新&nbsp;&nbsp;&nbsp;&nbsp;专业&nbsp;&nbsp;&nbsp;&nbsp;执着</p>
                        </div>
                        <div>
                            <h4>企业愿景</h4>
                            <p>开启车位物联标签化新时代</p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="wrapper-3 ">
            <div class="box-3 box">
                <h3>核心专利</h3>
                <div class="content_box">
                    <div class="item" v-for="(item,i) in patentList" :key="i">
                        <div>
                            <p>{{item.title}}</p>
                          <img :src="item.imgUrl" alt="核心专利">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  style="height:999px">
            <div class="box-4 box">
                <h3>成长历程</h3>
                <div class="content_box">
                    <div class="top"></div>
                    <div class="center">
                        <div class="item_wrap">

                            <!-- <div class="item" v-for="item in 5" :key="item" :style="{top:84*item+'px',left:item%2==1?-55+'px':10+'px',flexDirection:item%2==1?'row-reserse':'row'}">
                                <div class="dot">22</div>
                                <div class="circle">{{item>10?('0'+(item+1)):item}}</div>
                            </div> -->
                            <div class="item" v-for="(o,item) in list" :key="item" :style="{transform:item%2==1?'':'translateX(-100%)',flexDirection:item%2==1?'row':'row-reverse'}">
                                <div class="dot"></div>
                                <div class="circle">{{item<10?('0'+(item+1)):item}}</div>
                                <div class="text">
                                    <p class="time">{{o.time}}</p>
                                    <p class="txt">{{o.txt}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import request from "@/api/request"
export default {
    data(){
        return {
            list:[
                {time:"2018/12",txt:"项目规划"},
                {time:"2019/01",txt:"公司成立"},
                {time:"2019/03",txt:"部分种子轮资金到位"},
                {time:"2019/04",txt:"测试版上线"},
                {time:"2019/07",txt:"正式版发布，数百种轮资金到位"},
                {time:"2019/08",txt:"深圳湾科技生态园项目落地"},
                {time:"2019/12",txt:"万象城、海岸城天河城、徐家汇启动天使轮融资"},
                
            ],
            introText:"",
            patentList:[]
        }
    },
    methods:{
        findIntro(){
            request.intro("findOneIntro").then(res=>{
                this.introText = res.data.introText
            })
        },
        getPatentList(){
            request.patent("getList").then(res=>{
                console.log(res)
                this.patentList = res.data
            })
        },

    },
    components:{
        Header,Footer
    },
    created(){
        this.findIntro()
        this.getPatentList()
    }
}
</script>
<style lang="less" >
.intro{

    p{
        line-height: 42px;
        width: 1187px;
        color:#333333;
        text-indent: 2rem;
        &:first-child{
            text-indent: 0rem;
        }
    }
}
</style>
<style lang="less" scoped>
.fixedLayout {
  padding-top: 100px;
  min-width: 1024px;
  margin:0px auto;
}
.box{
    width: 1200px;
    margin: 0 auto;
}
.content-bg-img{
        position: absolute;
        left: 50%;
        top: 0;
        margin-left: -960px;
}
.wrapper{
    position: relative;
    margin-top: -1px;
    .wrap-g{
        position: relative;
        left: 0;
        top: 0;
    }
}
.wrapper-1{
    position: relative;
    height: 602px;
}
.wrapper-2{
    position: relative;
    height: 1180px;
    margin-top: -1px;
    .wrap{
        position: relative;
        left: 0;
        top: 0;
    }
    .box-2{
        padding: 100px 30px;
            h3{
                font-size: 1.8rem;
                color: #333333;
                font-weight: 700;
                margin-bottom: 40px;
            }

            .bottom{
                position: relative;
                width:1199px;
                height:317px;
                background:rgba(251,251,251,1);
                margin-top: 87px;
                padding-top:90px ;
                box-sizing: border-box;
                padding-left: 230px;
                &>p{
                     font-size: 10rem;
                     line-height: 10rem;
                     font-weight:400;
                    color:rgba(234,241,255,1);
                    opacity:0.4;
                }
                i{
                    width:1px;
                    height:191px;
                    background:rgba(216,217,220,1);
                    display: inline-block;
                    vertical-align: middle;
                }
                .position_box{
                    width: 100%;
                    height: 100%;;
                    position: absolute;
                    left: 0;
                    top: 0;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    &>div{
                        text-align: center;
                        h4{
                            color: #333333;
                            font-size: 1.6rem;
                            line-height: 52px;
                        }
                        p{
                            font-size: 0.9rem;
                            color:#4C4C4C;
                            font-weight: 400;
                        }
                    }
                }
            }
        
       
    }
}
.wrapper-3{
    height: 860px;
    background:rgba(251,251,251,1);
    .box-3{
        padding-top: 65px;
        
        h3{
            font-size: 1.8rem;
            color: #333333;
        }
        .content_box{
          display: flex;
          padding-top: 65px;
          overflow-x: auto;
          width: 1200px;
          box-sizing: border-box;
          overflow-y: hidden;
          .item{
              flex-basis: 1;
              div
              {
                  width: 390px;
                line-height: 585px;
                height: 585px;
                position: relative;
                p{
                    position: absolute;
                    top: 20px;
                    width: 100%;
                    text-align: center;
                }
              }
              img{
                  width: 100%;
              }
          }
        }
    }
}
.box-4{
    padding-top: 60px;
    h3{
        font-size: 1.8rem;
        color: #333333;
    }
    .content_box{
        margin-top: 40px;
        width: 100%;
        .top{
            border:7px solid #B7D8FA;
            width:24px;
            height:23px;
            background:rgba(16,125,238,1);
            border-radius:50%;
            margin: 0 auto;
        }
        .center{
            width: 6px;
            height: 880px;
            margin: -2px auto 0;
            background: #B7D8FA;
            position: relative;
            .item_wrap{
                position: absolute;
                top: 60px;
            }
            .item{
                height: 85px;
                display: flex;
                align-items: center;
                .dot{
                    width:50px;
                    height: 4px;
                    background-image: linear-gradient(to right, #107DEE 0%, #107DEE 80%, transparent 50%);
                    background-size: 14px 2px;
                    background-repeat: repeat-x;
                }
                .circle{
                    width:61px;
                    height:61px;
                    background:rgba(16,125,238,1);
                    font-size: 1.8rem;
                    border-radius:50%;
                    color: #ffffff;
                    border: 4px solid #b7d8fa;
                    line-height: 61px;
                    text-align:center;
                }
                .text{
                    margin-left: 30px;
                    width:246px;
                    // display: flex;
                    // flex-direction: column;
                    // align-items: center;
                    .time{
                        font-size:1.3rem;
                        color:#787878;
                    }
                    .txt{
                        font-size:20px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:#787878;
                        line-height:29px;
                    }

                }
                &:nth-child(2n+1){
                    .text{
                        text-align: left;
                        margin-left: 0px;
                        margin-right: 30px;
                    }
                    .time{
                        width: 100%;
                        text-align: right;
                    }
                    .txt{
                        text-indent: 2rem;
                        text-align: right;
                    }
                }
                 &:nth-child(5){
                    .txt{
                        text-indent: 6rem;
                        // width:160px;
                        // height:48px;
                        // font-size:20px;
                        // font-weight:400;
                        // line-height:28px;
                    }
                 }
            }
        }
    }
   
}
.box-6{
    display: flex;
    .left{
        margin-top:605px;        
        p{
            width:420px;
            height:135px;
            font-size:1.5rem;
            font-weight:400;
            color:rgba(37,42,80,1);
            opacity:0.77;
        }

    }
    .right{
        margin-top: 380px;
        margin-left: 230px;
        P{
            width:437px;
            height:136px;
            font-size:30px;
            font-weight:400;
            color:rgba(37,42,80,1);
            opacity:0.77;
        }
    }
}
.box-8{
    padding-top: 85px;
    .top{
        h3{
            color: #fff;
            &::before{
                background: #fff;
            }
            &::after{
                background: #fff;
            }
        }
        p{
            color: #fff;
            font-size: 1.5rem;
        }
    }
    .bottom{
        position: relative;
        top: 254px;
        display: flex;
        justify-content: space-around;
        .item{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                position: absolute;
            }
            p{
                width:120px;
                font-size:1.2rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:38px;
                text-align: center;
            }
        }
    }
}
</style>
