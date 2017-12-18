<template>
  <div class="body">
    <message  v-for='(message, index) in messagesOrdered' :key='index' :message='message'></message>
  </div>
</template>

<script>
import moment from 'moment'
import message from './message'

export default {
  name: 'channel-body',
  props: ['messages'],
  components: {
    message
  },
  computed: {
    messagesOrdered: function() {
      return this.messages.sort((a, b) => {
        return moment(a.at).diff(moment(b.at))
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .body {
    border-style: none solid;
    border-color: inherit;
    border-width: 2px;

    background : #fff;
    flex: 1;
    border-width: 2px;
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
  }
</style>
