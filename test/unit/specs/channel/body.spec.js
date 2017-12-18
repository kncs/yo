import Vue from 'vue'
import moment from 'moment'
import { mount } from 'avoriaz'
import ChannelBody from '@/components/channel/body'
import ChannelMessage from '@/components/channel/message'

const messages = [
  {
    "from": "kncs",
    "at": "2017-12-08 21:04:45",
    "text": "hum ... anybody is here ?"
  },
  {
    "from": "kncs",
    "at": "2017-12-08 20:52:26",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]
describe('[channel-body] component', () => {
  it('should be renderred correctly', () => {

    const wrapper = mount(ChannelBody, {
      propsData : { messages: messages}
    });

    expect(wrapper.hasClass('body')).toEqual(true);

    messages.sort((a, b) => {
      return moment(a.at).diff(moment(b.at))
    }).forEach((message, index) => {
      const wmessage = wrapper.find(ChannelMessage)[index];
      expect(wmessage.isVueComponent).toEqual(true);
      expect(wmessage.getProp('message')).toEqual(message);
    })
  })
})
