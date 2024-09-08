import axios from "axios"
import store from "@/store"
const http = {}

var instance = axios.create({
  timeout: 5000,
  validateStatus(status) {
    switch(status) {
      case 400:
        break
      case 401:
        break
      case 403:
        break
      case 404:
        break
      case 500:
        break
    }
    return status >= 200 && status < 300
  }
})

instance.interceptors.request.use(
  function(config) {
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

http.get = function(url, options) {
  let loading
  return new Promise((resolve, reject) => {
    instance
      .get(url, options)
      .then(response => {
        
      })
  })
}

export default http