import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'

import './plugins'

import { ENV_AGREEMENT, ENV_PINES, ENV_TM, ENV_TM_STATS, ENV_CONTRACT, ENV_CONTRACT_STAT, ENV_FEES, ENV_CEOCLINIC, ENV_AUTH, ENV_OTCSUPPORT, ENV_CONTRACT_UPDATER, ENV_COMMISION, ENV_PRESENTATION_WS, ENV_PRESENTATION_REST, ENV_ASSIST, ENV_INOUTBOUND, ENV_PANC, ENV_BIGBLUEBUTTON } from '@/../colony-vue/src/js/env'

import GlobalFilters from '@/../colony-vue/src/js/index'
import MIXSINS from './js/mixins'
import GlobalComponents from './components'
import COMMON from '@/../colony-vue/src/js/common'

Vue.use(MIXSINS)
Vue.use(GlobalComponents)
Vue.use(GlobalFilters)

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.COMMON = COMMON
Vue.prototype.ENV_AGREEMENT = ENV_AGREEMENT
Vue.prototype.ENV_OTCSUPPORT = ENV_OTCSUPPORT
Vue.prototype.ENV_PINES = ENV_PINES
Vue.prototype.ENV_CONTRACT_UPDATER = ENV_CONTRACT_UPDATER
Vue.prototype.ENV_COMMISION = ENV_COMMISION
Vue.prototype.ENV_PANC = ENV_PANC
Vue.prototype.ENV_TM = ENV_TM
Vue.prototype.ENV_CONTRACT = ENV_CONTRACT
Vue.prototype.ENV_CONTRACT_STAT = ENV_CONTRACT_STAT
Vue.prototype.ENV_TM_STATS = ENV_TM_STATS
Vue.prototype.ENV_FEES = ENV_FEES
Vue.prototype.ENV_CEOCLINIC = ENV_CEOCLINIC
Vue.prototype.ENV_AUTH = ENV_AUTH
Vue.prototype.ENV_PRESENTATION_WS = ENV_PRESENTATION_WS
Vue.prototype.ENV_PRESENTATION_REST = ENV_PRESENTATION_REST
Vue.prototype.ENV_ASSIST = ENV_ASSIST
Vue.prototype.ENV_INOUTBOUND = ENV_INOUTBOUND
Vue.prototype.ENV_BIGBLUEBUTTON = ENV_BIGBLUEBUTTON
Vue.prototype.$eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
