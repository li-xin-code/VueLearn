<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="icon" ></slot>
    </div>
    <div v-else>
      <slot name="icon-active" ></slot>
    </div>
    <div :style="activeStyle">
      <slot name="label"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "#1296db",
      require: false
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) != -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  data(){
    return {
      // isActive: true
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link)
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  .active {
    color: #1296db;
  }
</style>
