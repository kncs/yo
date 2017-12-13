<template>
  <div class="header">
      <div class="header-block-left">
        <i class="fa fa-comment" aria-hidden="true"></i>
      </div>
      <div class="header-block-middle">
        <div>{{ title }}</div>
      </div>
      <div class="header-block-right">
          <i class="fa fa-link" aria-hidden="true"></i>
          <i class="fa fa-window-close" aria-hidden="true"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'channel-header',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header {
    height: 35px;
    border-style: inherit;
    border-color: inherit;
    border-radius: 50px 0 0 0;
    border-width: 2px;
    background-color: #0084FF;
    display: flex;
    align-items: center;
    color: #fff;
    .header-block-left {
      i.fa {
        margin-left: 20px;
        font-size :25px;
        color: inherit;
      }
    }
    .header-block-middle {
      flex: 1;
      margin-left: 15px;
      font-size :18px;
      color: inherit;
    }
    .header-block-right {
      display: flex;
      margin-right: 8px;
      i.fa {
        margin:8px;
        font-size :25px;
        color: inherit;
      }
    }
  }
</style>
