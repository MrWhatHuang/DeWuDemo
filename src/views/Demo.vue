<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr.What
 * @Date: 2020-06-18 19:43:26
 * @LastEditors: Mr.What
 * @LastEditTime: 2020-06-18 21:40:47
--> 
<template>
  <div class="demo-container" ref="mapContent"></div>
</template>

<script>
import TJPlayer from '@/utils/threejsPlayer'
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  computed: {},
  watch: {},
  methods: {
    init() {
        let player = new TJPlayer({
            domElement: this.$refs.mapContent,
            width: 300,
            height: 300
        })
        player.init()
    }
  }
}
</script>

<style lang="scss">
.demo-container {
    width: 300px;
    height: 300px;
}
</style>
