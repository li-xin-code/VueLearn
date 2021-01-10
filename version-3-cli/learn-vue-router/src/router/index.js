import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'

// 路由懒加载
const User = () => import('@/components/User')
const HomeNews = () => import('@/components/HomeNews')
const HomeMessages = () => import('@/components/HomeMessages')
const Profile = () => import('@/components/Profile')

Vue.use(Router)
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "首页"
    },
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
    component: User,
    meta: {
      title: "用户"
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      title: "个人信息"
    }
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于"
    }
  }
]

const router = new Router({
  routes,
  mode: "history",
  linkActiveClass: 'active',
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})


export default router


// 避免重复路由跳转时报错
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
