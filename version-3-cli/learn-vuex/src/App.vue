<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="refresh">refresh</button>

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
    },
    refresh() {
      this.$store.dispatch('refresh', 20)
      .then(res => console.log(res))
    }
  }
}
</script>

<style>
</style>
