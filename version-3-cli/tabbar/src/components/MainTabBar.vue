<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home" activeColor="pink">
        <img slot="icon" src="@/assets/img/tabbar/home.svg" alt="">
        <img slot="icon-active" src="@/assets/img/tabbar/home-active.svg" alt="">
        <span slot="label">首页</span>
      </tab-bar-item>
      <tab-bar-item link="/menu">
        <img slot="icon" src="@/assets/img/tabbar/menu.svg" alt="">
        <img slot="icon-active" src="@/assets/img/tabbar/menu-active.svg" alt="">
        <span slot="label">菜单</span>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img slot="icon" src="@/assets/img/tabbar/cart.svg" alt="">
        <img slot="icon-active" src="@/assets/img/tabbar/cart-active.svg" alt="">
        <span slot="label">购物车</span>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="icon" src="@/assets/img/tabbar/profile.svg" alt="">
        <img slot="icon-active" src="@/assets/img/tabbar/profile-active.svg" alt="">
        <span slot="label">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/tabber/TabBar"
import TabBarItem from "@/components/tabber/TabBarItem"
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
}
</script>

<style>
</style>
