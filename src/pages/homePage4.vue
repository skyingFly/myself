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
            dataList: []
        }
    },
    components: {
        logo,
        menus
    },
    mounted() {
        this.http('get', `${window.domain}/projects`, {}).then(data => {
            this.dataList = data.dataList
            this.$nextTick(() => {
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
            })
		}).catch(e => {
			console.log(e)
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
