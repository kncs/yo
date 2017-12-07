import Vue from 'vue'
import Overview from '@/components/overview'

describe('Overview.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Overview)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.overview h1').textContent)
    .toEqual('A simple first Vue component')
  })
})
