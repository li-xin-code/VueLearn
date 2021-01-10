import Vue from 'vue'
import Router from 'vue-router'

const Hmoe = () => import("@/views/home/Home")
const Menu = () => import ("@/views/menu/Menu")
const Cart = () => import ("@/views/cart/Cart")
const Profile = () => import ("@/views/profile/Profile")

Vue.use(Router)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Hmoe
  },
  {
    path: "/menu",
    component: Menu
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  },
]

const router = new Router({
  routes,
  mode: "history",
})

export default router

// 避免重复路由跳转时报错
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const originalReplace = Router.prototype.replace

Router.prototype.replace = function replace(location) {
   return originalReplace.call(this, location).catch(err => err)
}
