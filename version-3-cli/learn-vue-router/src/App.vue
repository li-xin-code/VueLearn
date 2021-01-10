<template>
  <div id="app">
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <router-link :to="{path: '/profile', query: {name: '张三'}}" tag="button">个人信息</router-link>
    <button @click="$router.push('/about')">关于</button>
    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: "zhangsan",
    }
  },
  methods: {
  }
}
</script>

<style>
.active {
  color: red;
  font-weight: bold;
}
</style>
