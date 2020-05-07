<template>
    <div class="fixedLayout">
        <Header bgImg="url(/static/img2.0/图@2x.png)"></Header>
        <div class="wrapper-1">
            <div class="box-1 box">
                <div class="item" v-for=" item in navList" :key="item">
                    <div><img :src="item.url" alt=""></div>
                    <p>{{item.label}}</p>
                </div>
            </div>
        </div>
        <div class="wrapper-2">
            <div class="box box-2">
                <div class="top">
                    <h3>产品功能</h3>
                    <p>公司自主研发的“小二占位”APP，主要为广大车主提供预约车位、找空位的服务，方便
                        车主提前规划出行时间和出行路线，实现高峰引流，平峰导流，合理化分配车位，解决广
                        大车主停车难的问题。无感支付可实现场库无人值守，减少人力成本和管理成本。基于GIS
                        地理信息技术的室内导航系统，采用前沿的路网规划算法，根据大数据分析以及人工智能
                        测算，可以实现停车场内精准导航找位及反向寻车等功能，真正解决车主寻车、找位的痛点。
                    </p>
                </div>
                <div class="center">
                    <div class="item">
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
.fixedLayout {
  padding-top: 100px;
  min-width: 1024px;
  margin:0px auto;
}
.box{
    width: 1200px;
    margin: 0 auto;
}
.wrapper-1{
    height: 607px;
    background: url(/static/img2.0/图@2x.png);
    background-position:0 -100px;
    .box-1{
        display: flex;
        color: #fff;
        justify-content: space-around;
        padding-top: 132px;
        .item{
            text-align: center;
        }
    }
}
.wrapper-2{
    height: 1269px;
    background: url(/static/img2.0/wrapper-2.png);
    .box-2{
        padding: 100px 30px;
        .top{
            h3{
                font-size: 2.6rem;
                color: #252A50;
            }
            p{
                margin-top: 60px;
                line-height: 54px;
                width: 1187px;
                font-size: 1.5rem;
                color:rgba(37,42,80,.7);font-weight:400;
            }
        }
    }
}
</style>