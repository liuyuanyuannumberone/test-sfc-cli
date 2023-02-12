<template>
  <div class="test-sfc-cli" v-bind="$attrs" v-on="$listeners">
    <span class="content">hello</span>
  </div>
</template>

<script>
export default {
  name: 'TestSfcCli',
  props: {},
  data() {
    return {}
  }
}
</script>

<style lang="less">
.test-sfc-cli {
  .content {
    color: red;
  }
}
</style>
