<template>
<div class="footer_">
       <div class="wrapper-4">
            <div class="box-4">
                <div class="left">
                    <div>          <img
            src="../../static/img/hw_weixin_account.png"
            style="width:100%;"
            alt
          /></div>
                    <p>扫一扫关注公众号</p>
                </div>
                <div class="center">
                    <p>深圳市豪位科技有限公司</p>
                    <p>电话：400-100-1313</p>
                    <p>邮箱：billy.zhang@hwcor.com</p>
                    <p>地址：深圳市南山区深圳湾科技生态园二区9栋A2409～A2414</p>
                </div>
                <div class="right">
                    <div>         <img
            src="../../static/img2.0/xiaoerzhanweiapk.png"
            style="width:100%;"
            alt
          /></div>
                    <p>APP下载</p>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>© 2019 Shenzhen Haowei Technology Co.,Ltd.All rights reserved &nbsp;&nbsp;&nbsp;粤ICP备19046392号</p>
        </div>
</div>
</template>
<style lang="less" scoped>
.footer_{
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
}
.wrapper-4{
    background:rgba(40,46,58,1);
    height: 238px;
    .box-4{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        padding-top: 55px;
        .left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 120px;
            div{
                width:114px;
                height:114px;
                background:rgba(255,255,255,1);
            }
            p{
                color: #85929F;
                font-size: 0.8rem;
                margin-top:19px;
                text-align: center;
            }
        }
        .center{
            margin-left: 10px;
            p{
                margin-bottom: 19px;
                color: #ffffff;font-size: 0.8rem;
                line-height: 16px;
            }
        }
        .right{
            margin-left:252px;font-size: 0.8rem;
            div{
                width:114px;
                height:114px;
                background:rgba(255,255,255,1);
            }
            p{
                color: #85929F;
                margin-top:19px;
                text-align: center;
            }
        }
    }
}
.footer{
    height:58px;
    background:rgba(31,35,44,1);
    color: rgba(255,255,255,.4);
    p{
        width: 1200px;
        text-align: right;
        line-height: 58px;
        margin: 0 auto;
        font-size: .7rem;
    }
}
</style>