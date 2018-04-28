import Vue from 'vue'
import Router from 'vue-router'

const header = () => import('../view/header')

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'header',
        component: header
    }]
})
