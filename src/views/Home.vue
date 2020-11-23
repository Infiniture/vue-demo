<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type) {
      // 后退一页
      // this.$router.go(-1)
      // this.$router.back()
      if (type === 'back') {
        this.$router.back()
      }

      // else if (type === 'push') {
      //   // this.$router.push('/parent')
      //   // 命名路由的方式
      //   this.$router.push({
      //     name: 'argue',
      //     params: {
      //       name: 'lison'
      //     }
      //     // query: {
      //     //   name: 'lison'
      //     // }
      //   })

        // 另外一种写法
        else if (type === 'push') {
          const name = 'lison'
          this.$router.push({
            path: `/argue/${name}`
          })
        }

       else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
    }
  }
}
</script>
