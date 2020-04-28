<template>
    <div id="home-page4">
        <logo />
        <menus class="menus"/>
        第四屏
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
    .menus {
        position: absolute;
        right: 50px;
        top: 70px;
    }
}
</style>
