<template>
  <div>
    <div>首页</div>
    <input v-model="message"/>
    <button @click="setVuex">设置vuex</button>
    <div v-text="myName"></div>
    <button @click="getVuex">获取vuex</button>
    <button @click="setMD5">设置setMD5</button>
  </div>
</template>

<script>
  import md5 from 'js-md5'
  export default {
    data () {
      return {
        message: 'bigMan',
        myName: '',
        userInfo:{}
      }
    },
    methods: {
      setVuex() {
        this.userInfo.userName = this.message
        this.$store.dispatch('setUserInfo', this.userInfo)
      },
      getVuex() {
        this.myName = this.$store.state.userStore.userInfo.userName
      },
      setMD5() {
        this.myName = md5(this.myName)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
