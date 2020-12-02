<template>
  <div>
    <!-- <a-input v-model="inputValue"/> -->
    <!-- <a-input :value="stateValue" @input="handleStateValueChange" /> -->
    <a-input @input="handleInput" />
    <p>{{ inputValue }} -> lastLetter is {{ inputValueLastLetter }}</p>
    <a-show :content="inputValue" />
    <p>appName: {{ appName }}, appNameWithVersion: {{appNameWithVersion}}</p>
    <p>userName: {{ userName }}, firstLetter is: {{firstLetter}}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
    <button @click="changeUserName">修改用户名</button>
  </div>
</template>
<script>
import AInput from '../components/AInput.vue'
import AShow from '../components/AShow.vue'
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
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
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      // stateValue: state => state.stateValue
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
    // ...是展开操作符
    ...mapMutations('user', [
      'SET_APP_NAME',
      'SET_USER_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    handleChangeAppName() {
      // this.$store.commit('SET_APP_NAME', 'newAppName')
      // this.SET_APP_NAME('newAppName')
      this.updateAppName()

      // this.$store.commit('SET_APP_VERSION')
    },
    changeUserName() {
      this.SET_USER_NAME('vue-course')
    },
    handleStateValueChange(val) {
      this.SET_STATE_VALUE(val)
    }
  }
}
</script>
