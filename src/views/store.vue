<template>
  <div>
    <!-- <a-input v-model="inputValue"/> -->
    <a-input @input="handleInput" />
    <p>{{ inputValue }} -> lastLetter is {{ inputValueLastLetter }}</p>
    <a-show :content="inputValue" />
    <p>appName: {{ appName }}, appNameWithVersion: {{appNameWithVersion}}</p>
    <p>userName: {{ userName }}, firstLetter is: {{firstLetter}}</p>
  </div>
</template>
<script>
import AInput from '../components/AInput.vue'
import AShow from '../components/AShow.vue'
import { mapActions, mapState, mapGetters } from 'vuex'
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
  computed: {
    ...mapState({
      // 'appName'
      appName: state => state.appName,
      userName: state => state.user.userName
    }),
    ...mapGetters('user', [
      'firstLetter'
    ]),
    // firstLetter () {
    //   return this.userName.substr(0, 1)
    // },
    appNameWithVersion() {
      return this.$store.getters.appNameWithVersion
    },
    // appName() {
    //   return this.$store.state.appName
    // },
    // userName() {
    //   return this.$store.state.user.userName
    // }
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>
