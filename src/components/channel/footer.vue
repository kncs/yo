<template>
  <form class="footer">
    <input class="footer-response" type="textarea" name="response" :placeholder="placeholder">
  </form>
</template>

<script>
export default {
  name: 'channel-footer',
  data () {
    return {
      placeholder: 'Ecrivez un message...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .footer {
     height: 40px;
     border-style: inherit;
     border-color: inherit;
     border-width: 2px;
     border-top-width: 1px;
     border-top-color: rgba(0, 0, 0, .10);
     border-radius: 0 0 40px 0;
     background-color: #fff;

     display: flex;
     .footer-response {
       flex: 1;
       border-style: none;
       padding-left: 70px;
       padding-right: 20px;
       border-radius: inherit;
       &::placeholder {
         color : #90949c;
         font-size :15px;
       }
     }
  }

</style>
