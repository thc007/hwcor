<template>
    <div class="fixedLayout">
        <Header bgImg="url(/static/img2.0/图@2x.png)"></Header>
        <div class="wrapper-1">
            <img src="/static/img2.0/图@2x.png" alt="" class="content-bg-img">
            <div class="wrap">
                <div class="box-1 box">
                    <div class="item" v-for="( item ,i) in navList" :key="i">
                        <div><img :src="item.url" alt=""></div>
                        <p>{{item.label}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper-2">
            <img  class="content-bg-img" src="/static/img2.0/wrapper-2.png" alt="">
            <div class="wrap">
                <div class="box-2 box">
                    <div class="top">
                        <h3 class="big-title">产品功能</h3>
                        <p>公司自主研发的“小二占位”APP，主要为广大车主提供预约车位、找空位的服务，方便
                            车主提前规划出行时间和出行路线，实现高峰引流，平峰导流，合理化分配车位，解决广
                            大车主停车难的问题。无感支付可实现场库无人值守，减少人力成本和管理成本。基于GIS
                            地理信息技术的室内导航系统，采用前沿的路网规划算法，根据大数据分析以及人工智能
                            测算，可以实现停车场内精准导航找位及反向寻车等功能，真正解决车主寻车、找位的痛点。
                        </p>
                    </div>
                    <div class="center">
                        <div class="item">
                            <img src="/static/img2.0/peak.png" alt="">
                            <p>错峰包月</p>
                        </div>
                        <div class="item">
                            <img src="/static/img2.0/group.png" alt="">
                            <p>集团车位</p>
                        </div>
                                            <div class="item">
                            <img src="/static/img2.0/voice_reserve.png" alt="">
                            <p>语音预约</p>
                        </div>
                    </div>
                    <div class="bottom">
                        <h3 class="big-title">错峰包月</h3>
                        <p>通过APP即可办理在我们平台发布了错峰包月信息的停车场业务</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper-3 wrapper">
            <img src="/static/img2.0/wrapper-3.png" alt="" class="content-bg-img">
            <div class="wrap">
                <div class="box-3 box">
                    <div class="left">
                        <h3  class="big-title">预约停车</h3>
                        <p>提前预约车位，方便时间管控，降低出行成本</p>
                    </div>
                    <div class="center">
                        <h3 class="big-title">找空位</h3>
                        <p>提前知道停车场空位情况，并可导航车位</p>
                    </div>
                    <div class="right">
                        <h3 class="big-title">集团车位</h3>
                        <p>车位集团化管理，满足集团内部员工及外部访客停车的需求</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper" style="height:1269px">
            <img src="/static/img2.0/wrapper-4.png" alt="" class="content-bg-img">

        </div>
        <div class="wrapper" style="height:1269px;margin-top:-2px;">
            <img src="/static/img2.0/wrapper-5.png" alt="" class="content-bg-img">
            <div class="wrap-g">
                <div class="box-5 box">
                    <div class="left">
                        <h3>场内导航</h3>
                        <p>可视化的场内地图以及动态路线指引让车主快速找到车位，提升停车效率</p>
                    </div>
                    <div class="right">
                        <h3>语音预约</h3>
                        <p>说出您的目的地即可帮您预订车位，让您在行车途中时刻握紧方向盘</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper" style="height:1269px">
            <img src="/static/img2.0/wrapper-6.png" alt="" class="content-bg-img">
            <div class="wrap-g">
                <div class=" box-6 box">
                    <div class="left">
                        <h3 class="big-title">反向寻车</h3>
                        <p>车辆停入后，通过可视化的场内地图及动态路线指引，助车主快速找到爱车</p>
                    </div>
                    <div class="right">
                        <h3 class="big-title">无感支付</h3>
                        <p>车辆与账户绑定并开启自动支付，进出停车无需手动缴费，体验无感支付的便利</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper" style="height:1024px">
            <img src="/static/img2.0/wrapper-7.png" alt="" class="content-bg-img">
        </div>
        <div class="wrapper" style="height:832px">
            <img src="/static/img2.0/wrapper-8.png" alt="" class="content-bg-img">
            <div class="wrap-g">
                <div class="box-8 box">
                    <div class="top">
                        <h3 class="big-title">车位锁计费</h3>
                        <p>通过APP即可扫码缴纳停车费</p>
                    </div>
                    <div class="bottom">
                        <div class="item">
                            <img src="/static/img2.0/footer_img_01.png" alt="">
                            <p>无人值守的停车模式</p>
                        </div>
                        <div class="item">
                            <img src="/static/img2.0/footer_img_03.png" alt="">
                            <p>高强度设备锁车</p>
                        </div>
                        <div class="item">
                            <img src="/static/img2.0/footer_img_02.png" alt="">
                            <p>车主泊车后可自行离开</p>
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
export default {
    data(){
        return {
            navList:[
                {url:"/static/img2.0/reserve.png",label:"预约车位"},
                {url:"/static/img2.0/parking_nav.png",label:"场内导航"},
                {url:"/static/img2.0/reverse_nav.png",label:"反向寻车"},
                {url:"/static/img2.0/look_place.png",label:"找空位"},
                {url:"/static/img2.0/null_pay.png",label:"无感支付"},
            ]
        }
    },
    methods:{

    },
    components:{
        Header,Footer
    }
}
</script>
<style lang="less" scoped>
.big-title{
    font-size: 2.6rem;
    color: #252A50;
    margin-bottom: 50px;
     &::before{
        content: "";
        display: inline-block;
        width:19px;
        height:7px;
        background: #000;
        border-radius: 6px;
        box-shadow:-5px 12px 0px 0px rgba(203,205,217,1);
        transform: rotateZ(-30deg);
        margin: -10px 25px 0 0;
        vertical-align:middle;
    }
    &::after{
        content: "";
        display: inline-block;
        width:19px;
        height:7px;
        background: #000;
        border-radius: 6px;
        box-shadow:-5px 12px 0px 0px rgba(203,205,217,1);
        transform: rotateZ(-30deg);
        margin: -10px 25px 0;
        vertical-align:middle;
    }
}
.big-title+p{
    margin-left:40px;
    line-height: 50px;
}
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
    height: 607px;
    top: -100px;
    .wrap{
        position: relative;
        left: 0;
        top: 0;
    }
    .box-1{
        display: flex;
        color: #fff;
        justify-content: space-around;
        padding-top: 232px;

        .item{
            text-align: center;

        }
    }
}
.wrapper-2{
    position: relative;
    height: 1269px;
    margin-top: -1px;
    .wrap{
        position: relative;
        left: 0;
        top: 0;
    }
    .box-2{
        padding: 100px 30px;
        .top{
            h3{
                font-size: 2.6rem;
                color: #252A50;
            }
            p{
                line-height: 54px;
                width: 1187px;
                font-size: 1.49rem;
                color:rgba(37,42,80,.7);font-weight:400;
            }
        }
        .center{
            margin-left: 30px;
            margin-top: 20px;
            display: flex;
            justify-content: space-around;
            .item{
                width:194px;
                height:194px;
                overflow: hidden;
                border: 20px solid #ecd5fe;
                background: linear-gradient(90deg, #d587ff, #9f58ff);
                background-clip: 50%;
                border-radius:50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p{
                    text-align: center;
                    color: #fff;
                }
                &:nth-child(2){
                    border-color: #bcdefa;
                    background: linear-gradient(90deg,#2CACF1, #6160FE);
                }
                 &:nth-child(3){
                    border-color: #bae1f9;
                    background: linear-gradient(90deg, #64DCDB, #239FFD);
                }
            }
        }
        .bottom{
            margin-top: 167px;
            p{
                width:476px;
                height:83px;
                font-size:30px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(37,42,80,1);
                opacity:0.77;
            }
        }
    }
}
.wrapper-3{
    margin-top: -2px;
    .wrap{
        position: relative;
        left: 0;
        top: 0;
    }
    .box-3{
        padding-top: 700px;
        display: flex;
        .left{
            p{
                width:329px;
            height:83px;
            font-size:30px;
            font-weight:400;
            color:rgba(37,42,80,1);
            opacity:0.77;
          }
        }
        .center{
            margin-top: 230px;
            margin-right: 150px;
            margin-left: 50px;
            p{
                width:347px;
                height:83px;
                font-size:30px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(37,42,80,1);
                opacity:0.77;
            }
        }
        .right{
            margin-top: 230px;
            p{
                width:419px;
                height:83px;
                font-size:30px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(37,42,80,1);
                opacity:0.77;
            }
        }
    }
}
.box-5{
    display: flex;
    .left{
        width:480px;
        height:163px;
        font-size:48px;
        color:rgba(255,255,255,1);
        margin-top: 300px;
        h3{
            margin-bottom: 30px;

        }
        p{
            font-weight:400;
            line-height:40px;
            font-size: 1.3rem;
        }
    }
    .right{
        text-align: center;
        margin-top: 130px;
        margin-left: 236px;
        width:467px;
        height:162px;
        color:rgba(255,255,255,1);
        line-height:40px;
        h3{
            font-size: 2.4rem;
            margin-bottom: 30px;
        }
        p{
            font-weight:400;
            font-size: 1.2rem;
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