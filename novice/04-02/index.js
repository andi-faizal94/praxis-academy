import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        user: [],
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        getUser(state, data) {
            state.user = data
        }
    },
    getters: {
        getUpUser: state => {
            return state.user.filter(item => item.id <= 2)
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        },

        decrement(context) {
            context.commit('decrement')
        },
        async user({
            commit
        }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                const data = response.data;
                commit('getUser', data);
            } catch (error) {
                console.log(error);
            }
        }
    },
    modules: {}
})