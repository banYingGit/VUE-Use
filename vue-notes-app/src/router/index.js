import Vue from 'vue'
import Router from 'vue-router'
import Iview from 'iview'
import 'iview/dist/styles/iview.css'
import '../assets/css/newIview.css'
import Index from '@/components/index/Index'
import ListPage from '@/components/listPage/ListPage'

Vue.use(Iview)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/ListPage.html',
      name: 'ListPage',
      component: ListPage
    }
  ]
})
