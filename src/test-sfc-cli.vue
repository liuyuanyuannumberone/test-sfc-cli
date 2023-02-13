<template>
  <div class="test-sfc-cli" v-bind="$attrs" v-on="$listeners">
    <button>
      按钮
    </button>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'TestSfcCli',
  mounted() {
    this.getList()
  },
  methods: {
    /**
     * 手动刷新列表数据，选项的默认值为: { loading: true }
     * @public
     * @param {object} options 方法选项
     */
    getList() {
      console.log($)
    }
  }
}
</script>

<style lang="less"></style>
