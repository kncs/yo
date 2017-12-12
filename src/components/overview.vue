<template>
  <div class="overview">
    <h1>{{ msg }}</h1>
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
      msg: 'A simple first Vue component',
      channels: mockChannels
    }
  },
  components: {
    'channel': channel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
