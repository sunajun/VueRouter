import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/Params'
import Hi1 from '@/components/Hi1'
import Error from '@/components/Error'

Vue.use(Router) //Vue全局使用Router

export default new Router({
  mode:'history',
  routes: [
    { //每一个链接都是一个对象
      path: '/', //别名请不要用在path为’/’中，如下代码的别名是不起作用的。
      name: 'Hello', //路由名称
      component: HelloWorld //对应的组件模板
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle', //连接路径
      component:Params,
      beforeEnter:(to,from,next)=>{//在路由文件中我们只能写一个beforeEnter这个钩子函数
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
      }
    },
    {
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '/hi1',
      component: Hi1,
      alias:'/saj'
    },
    {
      path:'*',//这里的path:’*’就是找不到页面时的配置，component是我们新建的一个Error.vue的文件。
      component:Error
    }
  ]
})
