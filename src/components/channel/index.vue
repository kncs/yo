<template>
  <div class="channel">
    <channel-header :title='channel.to'></channel-header>
    <channel-body :messages='channel.messages'></channel-body>
    <channel-footer></channel-footer>
  </div>
</template>

<script>
import channelHeader from './header'
import channelBody from './body'
import channelFooter from './footer'

export default {
  name: 'channel',
  props: ['channel'],
  components: {
    channelHeader,
    channelBody,
    channelFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .channel {
    margin-top: 30px;
    box-shadow : 3px 2px #aaa;
    font-family: 'Open Sans Condensed', sans-serif;
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-color: #0084FF;
    border-width: 0;
    border-radius: 0 0 40px 0;
  }
</style>
