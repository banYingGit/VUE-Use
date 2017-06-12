/**
 * Created by banYing on 2017/6/9.
 */
import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)
Vue.use({
  install: function (Vue, options) {
    Vue.prototype.$ajax_get = function (url, fn) {
      console.log('url', url)
      this.$http.get(url).then(function (response) {
        fn && fn.call(this, response.data, 'success', response)
      }, function (response) {
        fn && fn.call(this, response.data, 'fail', response)
      })
    }
  }
})
