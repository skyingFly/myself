<template>
    <div id="home-page4">
        <logo />
        <menus class="menus"/>
        <div class="box clearfix">
            <div class="left">
                <div class="top"></div>
                <p>PROJECT EXPRIENCE</p>
                <div class="bot">
                    项目经验
                </div>
            </div>
            <div class="right">
                <div class="swiper-project" @mouseenter="enter" @mouseleave="leave">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in dataList" :key="index">
                            <h6>{{index + 1}}、{{ item.title }}</h6>
                            <p :title= "item.desc">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logo from '../components/logo'
import menus from '../components/menus'
export default {
    data() {
        return {
            mySwiper: null,
            dataList: [
                {
                    title: '紫金普惠微信积分商城',
                    desc: '页面设计，用html、css3、媒体查询和rem编写响应式页面，用swiper完成轮播图，用jq完成交互操作'
                },
                {
                    title: '紫金所官网修改',
                    desc: '根据设计稿切图，css样式编写，根据需求用jq进行相关交互及动效编写，最后调试修改相关浏览器兼容性问题'
                },
                {
                    title: '紫金普惠渠道战队',
                    desc: '根据设计稿切图，编写html，并用less编写样式，jq完成动效及交互操作'
                },
                {
                    title: '业务系统',
                    desc: '使用vue+axios完成，安卓pad端应用内嵌页面，供业务人员在外录入相关信息以及处理业务使用'
                },
                {
                    title: '迪瑞特官网',
                    desc: '整体使用html,css3以及jq，使用swiper完成轮播效果，使用animate.css完成网站动效，以及高德地图完成公司地址定位'
                },
                {
                    title: '校园二手书交易网',
                    desc: '使用Vue+ElementUI+axios+scss完成页面功能以及样式编写，使用Mock.js模拟数据，与后台同步开发'
                },
                {
                    title: '华为商城',
                    desc: '华为商城appH5部分功能业务实现'
                },
                {
                    title: '华泰内部系统',
                    desc: '根据需求使用react+antd+axios实现前端页面开发以及业务逻辑实现'
                }
            ]
        }
    },
    components: {
        logo,
        menus
    },
    mounted() {
        this.mySwiper = new Swiper('.swiper-project', {
            direction : 'vertical',
            autoplayDisableOnInteraction : false,
            autoplay: 3000,
            loop : true,
            slidesPerView: 4,
            spaceBetween: 1,
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 1
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 1
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 1
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 1
                }
            }
        })
    },
    methods: {
        enter() {
            this.mySwiper.stopAutoplay()
        },
        leave() {
            this.mySwiper.startAutoplay()
        }
    }
}
</script>

<style scoped lang="scss">
#home-page4 {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/bg4.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    padding: 5vh 5vw;
    position: relative;
    .box {
        .left {
            float: left;
            width: 30%;
            padding-top: 10vh;
            .top {
                box-sizing: border-box;
                width: 80px;
                height: 80px;
                border: 2px solid #C01426;
                border-bottom: none;
                margin: 0 auto;
            }
            p {
                font-size: 20px;
                line-height: 40px;
                color: #fff;
            }
            .bot {
                box-sizing: border-box;
                width: 80px;
                height: 120px;
                border: 2px solid #C01426;
                border-top: none;
                border-right: none;
                margin: 0 auto;
                font-size: 30px;
                white-space: nowrap;
                color: #fff;
                padding-left: 20px;
                line-height: 40px;
                position: relative;
                &::before {
                    content: '';
                    width: 2px;
                    height: 70px;
                    background-color: #C01426;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                }
            }
        }
        .right {
            float: left;
            width: calc(70% - 170px);
            height: calc(100vh - 120px);
            background-color: rgba(0,0,0,.5);
            padding-left: 10px;
            .swiper-project {
                width: 100%;
                height: 100%;
                overflow: hidden;
                .swiper-slide {
                    h6 {
                        font-size: 16px;
                        color: #fff;
                        line-height: 30px;
                        position: relative;
                        &::before {
                            content: '';
                            height: 20px;
                            width: 4px;
                            background-color: #C01426;
                            position: absolute;
                            top: 4px;
                            left: -10px;
                        }
                    }
                    p {
                        font-size: 14px;
                        color: #eee;
                        line-height: 20px;
                        padding-top: 4px;
                        text-indent: 2em;
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                    }
                    box-sizing: border-box;
                    text-align: left;
                    padding: 20px;
                }
            }
        }
    }
    .menus {
        position: absolute;
        right: 50px;
        top: 70px;
    }
}
</style>
