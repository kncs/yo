<template>
  <div class="overview">
    <channel v-for='(channel, index) in channels' :key='index' :channel='channel'></channel>
  </div>
</template>

<script>
import mockChannels from '../../mockups/channels.json'
import channel from '@/components/channel'

export default {
  name: 'overview',
  data () {
    return {
      channels: mockChannels
    }
  },
  components: {
    'channel': channel
  }
}
</script>
