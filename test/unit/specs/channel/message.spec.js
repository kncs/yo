import Vue from 'vue'
import ChannelMessage from '@/components/channel/message'

describe('[channel-message] component', () => {
  it('should be renderred correctly', () => {
    const Constructor = Vue.extend(ChannelMessage)
    const vm = new Constructor({
      propsData : {
          message: {
          from: 'John',
          at: '2017-12-08 19:05:32',
          text: 'Hello'
        }
      }
    }).$mount()

    const elem = vm.$el
    const iconBlock = elem.children[0]
    const detailBlock = elem.children[1]
    const detailHeaderBlock = detailBlock.children[0]
    const detailBodyBlock = detailBlock.children[1]
    const detailHeaderNameBlock = detailHeaderBlock.children[0]
    const detailHeaderTimestampBlock = detailHeaderBlock.children[1]

    // check for layout composition
    expect(elem.childElementCount).toEqual(2)
    expect(iconBlock.childElementCount).toEqual(1)
    expect(detailBlock.childElementCount).toEqual(2)
    expect(detailHeaderBlock.childElementCount).toEqual(2)

    expect(iconBlock.getAttributeNode("class").value).toEqual('message-icon')
    expect(detailBlock.getAttributeNode("class").value).toEqual('message-details')
    expect(detailHeaderBlock.getAttributeNode("class").value).toEqual('message-details-header')
    expect(detailBodyBlock.getAttributeNode("class").value).toEqual('message-details-body')
    expect(detailHeaderNameBlock.getAttributeNode("class").value).toEqual('message-details-header-name')
    expect(detailHeaderTimestampBlock.getAttributeNode("class").value).toEqual('message-details-header-timestamp')

    // check for content
    expect(detailHeaderNameBlock.textContent).toEqual('John')
    expect(detailHeaderTimestampBlock.textContent).toEqual('2017-12-08 19:05:32')
    expect(detailBodyBlock.textContent).toEqual('Hello')

  })
})
