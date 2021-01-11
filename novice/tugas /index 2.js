import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: [{
            name: '',
            alamat: '',
            program: '',
            status: false

        }],

    },

    mutations: {
        getUser(state, data) {
            // menambahkan data dari array
            state.user.push(data)
        },
        getAkun(state, data) {
            state.akun.push(data)
        },


    },
    actions: {
        getUser(status) {
            status.commit('getUser')
        }

    },
    modules: {}
})