<template>
  <div>
    <h2>{{$store.getters.doubleCounter}}</h2>
    <h2>{{$store.getters.mulCounter(3)}}</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="$store.commit('rename')">rename</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
