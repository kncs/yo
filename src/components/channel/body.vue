<template>
  <div class="body">
    <message  v-for='(message, index) in messages' :key='index' :message='message'></message>
  </div>
</template>

<script>
import message from './message'

export default {
  name: 'channel-body',
  props: ['messages'],
  components: {
    message
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
