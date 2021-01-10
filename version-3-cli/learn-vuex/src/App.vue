<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <hello-vue-x></hello-vue-x>
  </div>
</template>

<script>
import HelloVueX from "@/components/HelloVueX"

export default {
  name: 'App',
  data() {
    return {
      message: "hello",
    }
  },
  components: {
    HelloVueX
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
</style>
