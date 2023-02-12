import Axios from 'axios'

export default {
  install(Vue) {
    Vue.prototype.$axios = Axios
  }
}
