<template>
  <div class="overview">
    <h1>{{ msg }}</h1>
    <message></message>
  </div>
</template>

<script>
import message from '@/components/message'

export default {
  name: 'overview',
  data () {
    return {
      msg: 'A simple first Vue component'
    }
  },
  components: {
    'message': message
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
