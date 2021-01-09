<template>
  <div>
    <h2>用户:{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      // console.log(this.$route);
      return this.$route.params.userId
    }
  },
}
</script>

<style>

</style>
