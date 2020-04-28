<template>
    <div id="home-page3">
        <logo />
        <menus class="menus"/>
        <h3>工作经历</h3>
        <div class="box">
            <div class="swiper-experience">
                <div class="swiper-wrapper">
                    <template v-for="(item, index) in dataList">
                        <div class="swiper-slide"
                            :key="index"
                            :style="{backgroundImage: 'url('+item.imageUrl+')'}"
                            >
                            <div
                                :class="['contain', {'active': activeIndex == index}]"
                                @mouseenter="enter(index)"
                                @mouseleave="leave()"
                                >
                                <div class="top">
                                    <ul>
                                        <li>
                                            <h6>
                                                公司名称：
                                            </h6>
                                            <p>{{ item.name }}</p>
                                        </li>
                                        <li>
                                            <h6>
                                                工作时间：
                                            </h6>
                                            <p>{{ item.time }}</p>
                                        </li>
                                        <li>
                                            <h6>
                                                所属岗位：
                                            </h6>
                                            <p>{{ item.position }}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="bot">
                                    <h6>岗位职责：</h6>
                                    <p>{{ item.duty }}</p>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
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
                    imageUrl: require('@/assets/work1.jpg'),
                    time: '2014.07-2015.11',
                    name: '南京大地',
                    position: '设计',
                    duty: '楼盘相关海报，宣传设计工作'
                },
                {
                    imageUrl: require('@/assets/work2.jpg'),
                    time: '2015.12-2016.09',
                    name: '深度信息网络科技有限公司',
                    position: 'UI设计',
                    duty: '网页设计'
                },
                {
                    imageUrl: require('@/assets/work3.jpg'),
                    time: '2016.10-2018.05',
                    name: '紫金普惠信息咨询江苏有限公司',
                    position: 'web前端',
                    duty: '根据原型设计页面，根据设计稿切图编写静态页面，根据需求使用js或jq进行动效编写以及完成交互功能，负责部分ajax数据传输'
                },
                {
                    imageUrl: require('@/assets/work4.jpg'),
                    time: '2018.05-2019.09',
                    name: '中软国际华为南京Vmall项目组',
                    position: 'web前端',
                    duty: 'freemarker+art-template+jQuery按照SE澄清的需求以及需求文档编写业务逻辑代码'
                },
                {
                    imageUrl: require('@/assets/work5.jpg'),
                    time: '2019.10-至今',
                    name: '文思海辉南京华泰项目组',
                    position: 'web前端',
                    duty: '根据需求内容，使用react+antd进行开发'
                }
            ],
            activeIndex: -1
		}
	},
    components: {
        logo,
        menus
    },
    mounted() {
		const that = this
		this.mySwiper = new Swiper('.swiper-experience', {
			effect : 'coverflow',
            slidesPerView: 3,
            centeredSlides: true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            initialSlide: 2, // 默认展示第几屏
            coverflow: {
                rotate: 30,
                stretch: 10,
                depth: 60,
                modifier: 2,
                slideShadows : true
            }
		})
    },
    methods: {
        enter(index) {
            this.activeIndex = index
        },
        leave() {
            this.activeIndex = -1
        }
    }
}
</script>

<style scoped lang="scss">
#home-page3 {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/bg3.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    padding: 5vh 5vw;
    position: relative;
    &>h3 {
        font-size: 16px;
        color: #fff;
        position: relative;
        &::before {
            content: '';
            width: 40px;
            height: 2px;
            background-color: #C01426;
            position: absolute;
            left: 50%;
            bottom: -10px;
            transform: translateX(-20px);
        }
    }
    .box {
        width: 70vw;
        margin: 0 auto;
        padding-top: 100px;
        overflow: hidden;
        .swiper-experience {
            width: 100%;
            .swiper-button-prev {
                background: none;
                &::before {
                    content: '';
                    width: 30px;
                    height: 30px;
                    display: block;
                    box-sizing: border-box;
                    border: 3px solid #fff;
                    border-top: none;
                    border-right: none;
                    transform: rotate(45deg);
                }
            }
            .swiper-button-next {
                background: none;
                &::before {
                    content: '';
                    width: 30px;
                    height: 30px;
                    display: block;
                    box-sizing: border-box;
                    border: 3px solid #fff;
                    border-left: none;
                    border-bottom: none;
                    transform: rotate(45deg);
                }
            }
            .swiper-slide {
                background-position: center;
                background-size: cover;
                height: 300px;
                background-color: #fff;
                overflow: hidden;
                .contain {
                    background-color: rgba(0,0,0,.5);
                    height: 200%;
                    color: #fff;
                    text-align: left;
                    transition: all 1s;
                    &.active {
                        margin-top: -300px;
                    }
                    .top {
                        box-sizing: border-box;
                        height: 50%;
                        padding: 20px;
                        li {
                            padding-bottom: 20px;
                            h6 {
                                font-size: 16px;
                                line-height: 40px;
                            }
                            p {
                                font-size: 14px;
                                padding-left: 40px;
                                color: #fff;
                            }
                        }
                    }
                    .bot {
                        box-sizing: border-box;
                        height: 50%;
                        padding: 20px;
                        h6 {
                            font-size: 16px;
                            line-height: 40px;
                        }
                        p {
                            font-size: 14px;
                            line-height: 26px;
                            color: #ddd;
                            text-indent: 2em;
                        }
                    }
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
