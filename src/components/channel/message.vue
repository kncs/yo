<template>
  <div class="message">
    <div class="message-icon">
        <div class="fake-icon"></div>
    </div>
    <div class="message-details">
        <div class="message-details-header">
        <span class="message-details-header-name">
            {{message.from}}
        </span>
        <span class="message-details-header-timestamp">
            {{message.at}}
        </span>
        </div>
        <div class="message-details-body">
            {{message.text}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  props: ['message']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .message {
    flex: 1;
    display: flex;
    margin: 0;
    padding:10px;
    &:nth-child(2n+2){
      background-color: #f5faff
    }

    .fa-quote-left, .fa-quote-right {
      color: #0084FF;
      opacity: 0.8;
    }
    .message-icon {
      .fake-icon {
        width: 50px;
        height: 50px;
        background-color : #FFF2CC;
        border: 2px solid #D6B656;
        border-radius: 30px;
      }
    }
    .message-details {
      flex: 1;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      .message-details-header {
        .message-details-header-name {
          font-weight: bold;
        }
        .message-details-header-timestamp {
          font-style: italic;
          font-size: 12px;
          color: #777;
        }
      }
      .message-details-body {
        flex: 1;
        margin-top: 10px;
        color: #333;
      }
    }
  }
</style>
