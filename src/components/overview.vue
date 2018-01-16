<template>
  <div class="overview">
    <channel v-for='(channel, index) in channels' :key='index' :channel='channel'></channel>
  </div>
</template>

<script>
import channel from '@/components/channel'

export default {
  name: 'overview',
  data () {
    return {
      channels: this.$store.state.channels
    }
  },
  components: {
    'channel': channel
  }
}
</script>
