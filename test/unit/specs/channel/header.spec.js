import Vue from 'vue'
import ChannelHeader from '@/components/channel/header'

describe('[channel-header] component', () => {
  it('should be renderred correctly', () => {
    const Constructor = Vue.extend(ChannelHeader)
    const vm = new Constructor({
      propsData : { title: 'An awesome title'}
    }).$mount()

    const elem = vm.$el
    const leftBlock = elem.children[0]
    const middleBlock = elem.children[1]
    const rightBlock = elem.children[2]

    // check for layout composition
    expect(elem.childElementCount).toEqual(3)
    expect(leftBlock.childElementCount).toEqual(1)
    expect(middleBlock.childElementCount).toEqual(1)
    expect(rightBlock.childElementCount).toEqual(2)

    // check for content
    expect(leftBlock.children[0].getAttributeNode("class").value).toEqual('fa fa-comment')
    expect(middleBlock.children[0].textContent).toEqual('An awesome title')
    expect(rightBlock.children[0].getAttributeNode("class").value).toEqual('fa fa-link')
    expect(rightBlock.children[1].getAttributeNode("class").value).toEqual('fa fa-window-close')
  })
})
