import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,

    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
        children: [{
                path: 'future',
                component: () =>
                    import ( /* webpackChunkName: "future" */ '../views/about/future.vue'),
            },
            {
                path: 'now',
                component: () =>
                    import ( /* webpackChunkName: "now" */ '../views/about/now.vue')
            }
        ]
    }, {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ( /* webpackChunkName: "contact" */ '../views/contact.vue'),

    }, {
        path: '/contact/:phoneis',
        name: 'contact',
        component: () =>
            import ( /* webpackChunkName: "contact" */ '../views/contact.vue'),
    },
    {
        path: '/call/:idUser',
        name: 'call',
        component: () =>
            import ( /* webpackChunkName: "call" */ '../views/call.vue')
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router