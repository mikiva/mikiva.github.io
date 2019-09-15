import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/form',
            component: () => import('./views/Game.vue'),
            children: [
                {
                    path: '',
                    name: 'one',
                    component: () => import('./components/Forms/form1.vue')
                },
                {
                    path: 'd-_-b',
                    name: 'two',
                    component: () => import('./components/Forms/form2.vue')
                }
            ]
        },
        {
            path: '/finish',
            name: 'finished',
            component: () => import ('./views/Finish.vue')
        }
    ]
})
