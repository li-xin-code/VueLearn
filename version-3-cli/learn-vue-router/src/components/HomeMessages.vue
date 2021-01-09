<template>
  <div>
    <ul>
      <li v-for="(item,index) in messages" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeMessages",
  data(){
    return {
      messages: ["message-1","message-2","message-3","message-4"],
    }
  },
}
</script>

<style>

</style>
