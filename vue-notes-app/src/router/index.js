import Vue from 'vue'
import Router from 'vue-router'
import Iview from 'iview'
import '../assets/iview.css'
import Hello from '@/components/Hello'
import Button from '@/components/button'

Vue.use(Iview)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/button.html',
      name: 'button',
      component: Button
    }

  ]
})
