<template>
    <div class="logo">
        <img :src="logoUrl">
    </div>
</template>

<script>

export default {
    data() {
        return {
            logoUrl: require("@/assets/logo1.png")
        }
    }
}
</script>

<style scoped lang="scss">
.logo {
    width: 50px;
    height: 50px;
    img {
        width: 100%;
    }
}
</style>
