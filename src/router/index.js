import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/Params'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import He from '@/components/He'
import More from '@/components/More'
import Error from '@/components/Error'

Vue.use(Router) //Vue全局使用Router

export default new Router({
  mode:'history',//当你使用 history 模式时，URL 就像正常的 url
  routes: [
    { //每一个链接都是一个对象
      path: '/', //别名请不要用在path为’/’中，如下代码的别名是不起作用的。
      name: 'Hello', //路由名称
      component: HelloWorld //对应的组件模板
      //alias:/home
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle', //连接路径
      name:'Params',
      component:Params,
      beforeEnter:(to,from,next)=>{//路由钩子函数，在路由文件中我们只能写一个beforeEnter这个钩子函数
        console.log('我进入了params模板');
        console.log(to); //to:路由将要跳转的路径信息，信息是包含在对像里边的
        console.log(from); //from:路径跳转前的路径信息，也是一个对象的形式。
        next(); //next:路由的控制参数，常用的有next(true)和next(false)。
      }
    },
    {
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'  //重定向时传递参数
    },
    {
      path: '/hi1',
      name:'Hi1',
      component: Hi1,
      alias:'/saj'  //别名的形式实现重定向
    },
    {
      path:'*',//这里的path:’*’就是找不到页面时的配置，component是我们新建的一个Error.vue的文件。
      component:Error
    },
    {
      path:'/Hi',
      component:Hi,
      children:[ //子路由
        {path:'/',component:Hi},
        {path:'Hi1',component:Hi1},
        {path:'Hi2',component:Hi2}
      ]
    },
    {
      path:'/He',
      component:He,
      name:'He'
    },
    {
      path:'/More',
      name:'More',
      components:{
        default:More,
        left:Hi1,
        right:Hi2
      }
    }
  ]
})
