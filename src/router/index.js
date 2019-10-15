import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/mainPage'
import WorkFlow from '@/components/WorkFlow'
import ReportPage from '@/components/ReportPage'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'',
      redirect:'/mainPage/home',
    },
    {
      path:'/HelloWorld',
      name:'HelloWorld',
      component: HelloWorld,
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
          path: 'ReportPage',
          name: 'ReportPage',
          component: ReportPage
        },
      ],
    },
  ]
})
