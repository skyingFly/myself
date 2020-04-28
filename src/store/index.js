import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    pageNum: 1
}

const mutations = {
    pageChange(state, pageNum) {
        state.pageNum = pageNum
    }
}

export default new Vuex.Store({
    state,
    mutations
})
