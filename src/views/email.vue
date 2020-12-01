<template>
  <div class="email">
    <button @click="handleClick">按我</button>
    email: 407671107@qq.com
  </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  },
  mouted () {
    console.log(this.$bus)
  }
}
</script>

<style scoped>
.email {
  border: 1px solid green;
}
</style>
