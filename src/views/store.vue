<template>
  <div>
    <!-- <a-input v-model="inputValue"/> -->
    <a-input @input="handleInput" />
    <p>{{ inputValue }}</p>
    <a-show :content="inputValue" />
    <br />
  </div>
</template>
<script>
import AInput from '../components/AInput.vue'
import AShow from '../components/AShow.vue'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>
