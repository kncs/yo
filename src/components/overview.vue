<template>
  <div class="overview">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'overview',
  data () {
    return {
      msg: 'A simple first Vue component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
