<template>
  <div>
    <!-- {{name}} -->
    {{$route.params.name}}
  </div>
</template>

<script>
export default {
  //
  props: {
    name: {
      type: String,
      default: 'lison'
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
  }
}
</script>
