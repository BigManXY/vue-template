<template>
  <div>
    <div>首页</div>
    <input v-model="message"/>
    <button @click="setVuex">设置vuex</button>
    <div v-text="myName"></div>
    <button @click="getVuex">获取vuex</button>
    <button @click="setMD5">设置setMD5</button>
    <button @click="getWeather">请求天气接口</button>
    <table>
      <thead>
        <tr>
          <th>城市</th>
          <th>日期</th>
          <th>温度</th>
          <th>天气</th>
        </tr>
      </thead>
      <tbody>
      <tr v-if="weather" v-for="(we, index) in weather" :key="index">
        <td v-text="message"></td>
        <td v-text="we.date"></td>
        <td v-text="we.info.day[2] + '℃'"></td>
        <td v-text="we.info.day[1]"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import md5 from 'js-md5'
import httpSerice from '../service/httpService'
import * as API from '../service/api'
export default {
  data () {
    return {
      message: 'bigMan',
      myName: '',
      userInfo: {},
      weather: null
    }
  },
  methods: {
    setVuex () {
      this.userInfo.userName = this.message
      this.$store.dispatch('setUserInfo', this.userInfo)
    },
    getVuex () {
      this.myName = this.$store.state.userStore.userInfo.userName
    },
    setMD5 () {
      this.myName = md5(this.myName)
    },
    getWeather () {
      let params = 'cityname=' + this.message + '&dtype=&key=ab31314ab61bee18767c64b8723757d1'
      httpSerice.postData(API.WEATHER, params, (res) => {
        console.log(res)
        if (res.error_code === 0) {
          this.weather = res.result.data.weather
          console.log(this.weather)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
