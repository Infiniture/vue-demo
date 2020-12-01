<template>
  <div class="tel">
    <p>{{message}}</p>
    tel: 16666666666
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  }
}
</script>

<style scoped>
.tel {
  border: 1px solid red;
}
</style>
