import Vue from 'vue'
import Router from 'vue-router'
import Add from '../components/Add.vue'
import Show from '../components/Show.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/show'
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
