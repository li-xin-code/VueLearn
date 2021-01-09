<template>
  <div>
    <h2>首页</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">新闻</router-link>
     <router-view/>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>

</style>
