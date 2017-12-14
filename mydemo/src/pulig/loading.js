import loading from '@/components/loading'
export default {
  install (Vue, oprions) {
    let LoadingComponent = Vue.extend(loading)
    let LoadingVm = ''
    Vue.prototype.$loading = {
      show () {
        if (!LoadingVm) {
          LoadingVm = new LoadingComponent()
          LoadingVm.$mount('#loading-box')
        }
        LoadingVm.show()
      },
      hide () {
        LoadingVm.hide()
      }
    }
  }
}
