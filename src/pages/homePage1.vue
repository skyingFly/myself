<template>
    <div id="home-page1">
        <logo />
        <menus class="menus"/>
        <div class="box">
            <div class="top"></div>
            <div class="mid">
                <p>SMILING TREAT LIFE</p>
                <p>一个人的爱好兴趣，微笑对待，就如微笑的对待生活</p>
            </div>
            <div class="bot"></div>
        </div>
    </div>
</template>

<script>
import logo from '../components/logo'
import menus from '../components/menus'
export default {
    components: {
        logo,
        menus
    },
}
</script>

<style scoped lang="scss">
#home-page1 {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/bg1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    padding: 5vh 5vw;
    position: relative;
    .menus {
        position: absolute;
        right: 50px;
        top: 70px;
    }
    .box {
        width: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        .top {
            border: 2px solid #C01426;
            border-bottom: none;
            height: 80px;
        }
        .mid {
            color: #fff;
            p {
                display: block;
                width: 80vw;
                margin-left: calc(-40vw + 150px);
                &:first-child {
                    font-size: 30px;
                    line-height: 60px;
                    font-weight: lighter;
                }
                &:last-child {
                    font-size: 18px;
                    font-weight: lighter;
                    padding-bottom: 16px;
                    color: #eee;
                }
            }
        }
        .bot {
            border: 2px solid #C01426;
            border-top: none;
            height: 80px;
        }
    }
    
}
</style>
