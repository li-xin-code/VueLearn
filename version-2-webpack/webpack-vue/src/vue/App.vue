<template>
  <div>
    <h2 class="title">
      {{message}}
    </h2>  
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
   return {
     message: "芜湖~",
   }
  },
}
</script>

<style scoped>
  .title {
    color: cadetblue;
  }
</style>