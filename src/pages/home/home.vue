<template>
    <div class="fixedLayout">
        <Header bgImg="#0F6FDE"></Header>
        <div class="wrapper-1">
            <div class="box-1" >
                <h3>停车找位占位服务专家</h3>
                <p style="text-align:center">豪位科技深圳市豪位科技有限公司总部座落于深圳市南山区，是一家深耕于车位精细化管理的高科技物联网公司。本着“停车找位服务专家”的宗旨，响应国家发改委的号召，积极参与建设和运营停车资源，推动停车智能化信息化。致力于以共享经济实践响应中国“互联网+”的创新战略，解决中国的停车交通和环保挑战，建设高效、可持续的移动出行新生态。</p>
                <a href="">了解更多></a>
            </div>
        </div>
        <div class="wrapper-2">
            <div class="box-2" :class="{isNotcenter:newsList.length>3}">
                <div class="item" v-for="(item,i) in newsList" :key="i" >
                    <div class="item_header">
                        <img :src="item.imgSrc" alt="">
                    </div>
                    <div class="item_bottom">
                        <p>{{item.title}}</p>
                        <p class="content">{{item.content}}</p>
                        <time>{{item.contentTime}}</time>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper-3">
            <h4>公司荣誉</h4>
            <div class="box-3 " :class="{isCertificate:certificateList.length>3}">
                <div class="item" v-for="(item,i) in certificateList" :key="i" >
                    <div>
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import request from "@/api/request"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default{
    data(){
        return{
            newsList:[],
            certificateList:[]
        }
    },
    methods:{
        findNews(){
            request.news('findList').then(res=>{
                this.newsList = res.data
            })
        },
        findCertificate(){
            request.certificate("findAll").then(res=>{
                this.certificateList = res.data
            })
        }
    },
    watch: {
    '$route' (to, from) {
      console.log(to)
      // 对路由变化作出响应...
    }
    },
    created(){
        this.findNews()
        this.findCertificate()
    },
    components:{
        Header,Footer
    }
}
</script>
<style lang="less" scoped>
.fixedLayout {
  padding-top: 130px;
  min-width: 1024px;
  margin:0px auto;
}
.box{
    width: 1440px;
    margin:0px auto;
}

.wrapper-1{
    height:559px;
    overflow: hidden;
    .box-1{
        text-align:center;width:1100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        h3{
            margin-top: 110px;
            // font-style:italic;
            color:#1D88FF;
            font-size:2.5rem;
            letter-spacing: .5rem;
            font-weight: 700;
        }
        p{
            margin: 0 auto;
            margin-top: 60px;
            line-height: 47px;
            font-size: 20px;
        }
        a{
            margin-top: 90px;
            font-size: 1.1rem;
            color: #1D88FF;
        }
    }
}
.wrapper-2{
   background:rgba(243,245,246,1);
   height: 590px;
   overflow: hidden;
   .box-2{
       display: flex;
       justify-content: center;
       width: 1200px;
       margin: 0 auto;
       padding-top: 67px;
       box-sizing: border-box;
       overflow-y: hidden;
       overflow-x: auto;
       .item{
           height: 432px;
           width: 369px;
           margin-right: 44px;
           flex-basis: 1;
           img{
               width: 100%;
               height: 100%;
           }
           .item_header{
               width: 369px;
               height: 234px;
               background: #ccc;
               box-sizing: border-box;
               color: #fff;
               h3{
                   font-size: 2rem;
               }
               a{
                   font-size: 0.8rem;
                   color: inherit; 
                   display: block;
                   margin-top: 60px; 
               }
           }
           .item_bottom{
               font-size: 0.9rem;
               width: 369px;
               height: 208px;
               background: #fff;
               padding: 0 34px;
               box-sizing: border-box;
               font-size: 0.9rem;
               p{
                   line-height: 32px;
                   padding-top: 8px;
                   &:first-child{
                    padding-top:20px;
                    font-weight: 700;
  
                   }
                }   
                .content{
                    overflow:hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp:3;
                    -webkit-box-orient: vertical;
                    height: 100px;
                }

               time{
                   display: block;
                   font-size:0.8rem;
                   color: #666666;
                   padding-top:10px;
               }
           }
       }
   }
    .isNotcenter{
           justify-content: left;
    }
}
.wrapper-3{
    height:567px;
    overflow: hidden;
    h4{
        font-size: 1.5rem;
        margin-top: 70px;
        margin-bottom: 60px;
        text-align: center;
    }
    .box-3{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        overflow-x: auto;
        justify-content: center;
        .item{
            margin-right: 46px;
            &:nth-child(3n+0){
                margin-right: 0;
            }
            img{
                height: 100%;
            }
            div{
                width:368px;
                height:244px;
                text-align: center;
            }
            p{
                margin-top: 40px;
                text-align: center;
            }
        }
    }
    .isCertificate{
        justify-content: left;
    }
}
</style>