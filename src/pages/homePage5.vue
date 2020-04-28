<template>
    <div id="home-page5">
        <logo />
        <menus class="menus"/>
        <div class="box">
            <div class="top"></div>
            <div class="bot"></div>
            <h4>
                <span>CONTACT</span>
                <br>
                FOR ME
            </h4>
            <div class="line"></div>
            <p>Q&nbsp;Q:1154525189</p>
            <p>邮箱:1154525189@qq.com</p>
            <p>手机:13913046324</p>
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
#home-page5 {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/bg5.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    padding: 5vh 5vw;
    position: relative;
    .box {
        width: 300px;
        height: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 50px 70px;
        box-sizing: border-box;
        background-color: rgba(0,0,0,.4);
        h4 {
            color: #fff;
            text-align: left;
            font-size: 30px;
            font-weight: bolder;
            span {
                font-weight: bolder;
                color: #C01426;
            }
        }
        .top {
            width: 120px;
            height: 120px;
            position: absolute;
            top: 0;
            right: 0;
            border: 4px solid #C01426;
            border-left: none;
            border-bottom: none;
        }
        .bot {
            width: 300px;
            height: 30px;
            box-sizing: border-box;
            border: 4px solid #C01426;
            border-top: none;
            position: absolute;
            bottom: 0;
            left: 0;
        }
        .line {
            height: 1px;
            background-color: #C01426;
            margin: 20px 0;
        }
        p {
            text-align: left;
            color: #eee;
            font-weight: normal;
            font-size: 14px;
            line-height: 30px;
            white-space:nowrap;
        }
    }
    .menus {
        position: absolute;
        right: 50px;
        top: 70px;
    }
}
</style>
