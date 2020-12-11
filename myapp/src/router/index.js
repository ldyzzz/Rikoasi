import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Layout from "../pages/Layout"
import Free from "../pages/Free"
import Msg from "../pages/Msg"
import My from "../pages/My"
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path:"/",
      name:"layout",
      component:Layout,
      children:[
        {
          path:"/msg",
          component:Msg,
        },{
          path:"/my",
          component:My,
        },{
          path:"/free",
          component:Free,
        }
      ]
    }
  ]
})
