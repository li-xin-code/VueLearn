import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'

// 路由懒加载
const User = () => import('@/components/User')
const HomeNews = () => import('@/components/HomeNews')
const HomeMessages = () => import('@/components/HomeMessages')

Vue.use(Router)
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/",
        redirect: "/home/news"
      },
      {
        path: "messages",
        component: HomeMessages
      },
      {
        path: "news",
        component: HomeNews
      }
    ]
  },
  {
    path: "/user/:userId",
    name: "user",
    component: User
  },
  {
    path: "/about",
    component: About
  }
]

export default new Router({
  routes,
  mode: "history",
  linkActiveClass: 'active',
})


// 避免重复路由跳转时报错
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
