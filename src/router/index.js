import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/Home'
import List from '@/view/List'
import Tools from '@/view/Tools'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title:'helloWorld',
        showTabbar: false,
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title:'首页',
        showTabbar: true,
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      meta: {
        title: 'list',
        showTabbar: true,
      }
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools,
      meta: {
        title: 'tools',
        showTabbar: true,
      }
    }
  ]
})
