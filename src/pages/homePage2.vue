<template>
    <div id="home-page2">
        <logo />
        <menus class="menus"/>
        <div class="box clearfix">
            <div class="left">
                <div class="border"></div>
                <div class="myself">
                    <p>WH</p>
                    <p>南京三江学院</p>
                    <p>前端工程师</p>
                </div>
            </div>
            <div class="right">
                <div class="title">
                    <h5>个人信息</h5>
                    <p>PERSONAL INFORMATION</p>
                </div>
                <ul>
                    <li>
                        <i class="iconfont">&#xe66c;</i>&nbsp;
                        <span>姓名</span>：周志豪
                    </li>
                    <li>
                        <i class="iconfont">&#xe66c;</i>&nbsp;
                        <span>性别</span>：男
                    </li>
                    <li>
                        <i class="iconfont">&#xe66c;</i>&nbsp;
                        <span>年龄</span>：29
                    </li>
                    <li>
                        <i class="iconfont">&#xe66c;</i>&nbsp;
                        <span>毕业院校</span>：三江学院
                    </li>
                    <li>
                        <i class="iconfont">&#xe66c;</i>&nbsp;
                        <span>学历</span>：本科
                    </li>
                </ul>
            </div>
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
#home-page2 {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/bg2.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    padding: 5vh 5vw;
    position: relative;
    .box {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        .left {
            float: left;
            width: 35%;
            position: relative;
            .border {
                position: absolute;
                height: 300px;
                width: 170px;
                border: 2px solid #C01426;
                right: 0;
                top: 100px;
            }
            .myself {
                width: 170px;
                height: 260px;
                background-image: url('../assets/myself.jpg');
                background-size: auto 100%;
                background-repeat: no-repeat;
                position: absolute;
                right: 40px;
                top: 120px;
                p:first-child {
                    position: absolute;
                    bottom: 80px;
                    left: -24px;
                    color: #fff;
                    font-size: 26px;
                    font-weight: lighter;
                }
                p:nth-child(2) {
                    position: absolute;
                    bottom: 50px;
                    left: -40px;
                    color: #ccc;
                    font-size: 14px;
                }
                p:last-child {
                    position: absolute;
                    bottom: 26px;
                    left: -20px;
                    color: #ccc;
                    font-size: 14px;
                }
            }
        }
        .right {
            float: right;
            width: 55%;
            .title {
                width: 160px;
                height: 150px;
                box-sizing: border-box;
                border: 2px solid #C01426;
                border-right: none;
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    height: 30px;
                    width: 2px;
                    background: #C01426;
                    right: 0;
                    top: 0;
                }
                &::after {
                    content: '';
                    position: absolute;
                    height: 30px;
                    width: 2px;
                    background: #C01426;
                    right: 0;
                    bottom: 0;
                }
                h5 {
                    position: absolute;
                    color: #fff;
                    font-size: 30px;
                    width: 200px;
                    left: 60px;
                    top: 50px;
                }
                p {
                    position: absolute;
                    color: #ccc;
                    font-size: 14px;
                    width: 200px;
                    left: 60px;
                    top: 90px;
                }
            }
            ul {
                padding-top: 30px;
                color: #fff;
                text-align: left;
                font-size: 16px;
                line-height: 50px;
                li {
                    i {
                        color: #C01426;
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
