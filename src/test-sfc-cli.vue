<template>
  <div class="test-sfc-cli" v-bind="$attrs" v-on="$listeners">
    <a-button type="primary">
      {{ userName }}
    </a-button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'TestSfcCli',
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState('user', ['userName'])
  },
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
      this.$axios.get('/').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less"></style>
