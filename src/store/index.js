import Vue from 'vue'
import Vuex from 'vuex'
import mockChannels from '../../mockups/channels.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    channels: mockChannels
  }
})
