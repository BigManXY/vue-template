<template>
  <div>
    <div>首页</div>
    <input v-model="message"/>
    <button ng-click="setVuex">设置vuex</button>
    <div>{{ myName }}</div>
    <button ng-click="getVuex">获取vuex</button>
  </div>
</template>

<script>
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
