import axios from 'axios'
import 'babel-polyfill'
export default {
  postData (url, params, callback, token) {
    axios.post(url, params, {headers: {'Authorization': token}}).then((response) => {
      console.log(response.data)
      callback(response.data)
    }).catch((error) => {
      console.log(error)
    })
  },
  getData (url, params, callback) {
    axios.get(url, { params: params }).then((response) => {
      console.log(response.data)
      callback(response.data)
    })
  }
}
