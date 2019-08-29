import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/mainPage'
import WorkFlow from '@/components/WorkFlow'
import seller from '@/components/seller'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'',
      redirect:'/mainPage/home',
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage,
      children:[
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'WorkFlow',
          name: 'WorkFlow',
          component: WorkFlow
        },
        {
          path: 'seller',
          name: 'seller',
          component: seller
        },
      ],
    },
  ]
})
