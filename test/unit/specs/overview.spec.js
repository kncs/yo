import Vue from 'vue'
import { mount } from 'avoriaz'
import Overview from '@/components/overview'
import Channel from '@/components/channel'

import mockChannels from '../../../mockups/channels.json'

describe('[overview] component', () => {
  it('should be renderred correctly', () => {

    const wrapper = mount(Overview);
    expect(wrapper.hasClass('overview')).toEqual(true);

    mockChannels.forEach((channel, index) => {
      const wchannel = wrapper.find(Channel)[index];
      expect(wchannel.isVueComponent).toEqual(true);
      expect(wchannel.getProp('channel')).toEqual(channel);
    })
  })
})
