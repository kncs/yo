import Vue from 'vue'
import ChannelFooter from '@/components/channel/footer'

describe('[channel-footer] component', () => {
  it('should be renderred correctly', () => {
    const Constructor = Vue.extend(ChannelFooter)
    const vm = new Constructor().$mount()

    const elem = vm.$el
    const inputBlock = elem.children[0]

    expect(elem.getAttributeNode("class").value).toEqual('footer')
    expect(inputBlock.getAttributeNode("class").value).toEqual('footer-response')
  })
})
