<template>
    <div id="menus">
        <i class="iconfont menu">&#xe605;</i>
        <ul>
            <li v-for="item in listData" :key="item.id">
                <p :class="{'active': pageNum == item.id}" @click="pageChange(item.id)">{{ item.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listData: [
                {
                    id: 1,
                    name: '首页'
                },
                {
                    id: 2,
                    name: '个人信息'
                },
                {
                    id: 3,
                    name: '工作经历'
                },
                {
                    id: 4,
                    name: '作品展示'
                },
                {
                    id: 5,
                    name: '联系方式'
                }
            ]
        }
    },
    computed: {
        pageNum () {
            return this.$store.state.pageNum
        }
    },
    methods: {
        pageChange (pageNum) {
            this.$store.commit("pageChange", pageNum)
        }
    }
}
</script>

<style scoped lang="scss">
#menus {
    width: 80px;
    text-align: left;
    .menu {
        color: #fff;
        font-size: 30px;
        cursor: pointer;
        padding-left: 10px;
    }
    ul {
        color: #fff;
        font-size: 14px;
        padding-top: 80px;
        li {
            padding: 20px 0;
            p {
                cursor: pointer;
                line-height: 20px;
                padding-left: 6px;
                &.active {
                    background-color: #C01426;
                }
            }
        }
    }
}
</style>
