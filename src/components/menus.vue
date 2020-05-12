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
            listData: []
        }
    },
    computed: {
        pageNum () {
            return this.$store.state.pageNum
        }
    },
    mounted() {
        this.http('get', `${window.domain}/lists`, {}).then(data => {
            this.listData = data.menusList
		}).catch(e => {
			console.log(e)
		})
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
