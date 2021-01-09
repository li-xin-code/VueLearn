<template>
  <div>
    <ul>
      <li v-for="(item,index) in news" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeNews",
  data(){
    return {
      news: ["new-1","new-2","new-3","new-4"],
    }
  },
}
</script>

<style>

</style>
