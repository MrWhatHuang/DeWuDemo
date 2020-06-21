<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr.What
 * @Date: 2020-06-18 19:43:26
 * @LastEditors: Mr.What
 * @LastEditTime: 2020-06-18 21:40:47
--> 
<template>
  <div class="demo-container" ref="mapContent">
    <div class="back"></div>
    <div class="shop"></div>
    <div class="share"></div>
  </div>
</template>

<script>
const closeRotate = () => {
  window.player.cameraRotate = false
}
import TJPlayer from '@/utils/threejsPlayer'
export default {
  components: {},
  data () {
    return {}
  },
  created () { },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  computed: {},
  watch: {},
  methods: {
    init () {
      let domElement = this.$refs.mapContent
      let player = new TJPlayer({
        domElement,
        width: domElement.offsetWidth,
        height: domElement.offsetHeight
      })
      player.init()
      player.cameraRotate = true
      player.openPostProcessing()
      window.player = player
      player.renderer.domElement.addEventListener('mousedown', closeRotate)
    }
  },
  beforeDestroy () {
    window.player.renderer.domElement.removeEventListener('mousedown', closeRotate)
  }
}
</script>

<style lang="scss">
.demo-container {
  width: 100%;
  height: 100%;
  background: no-repeat center 30%/contain url("~@/assets/dewu.png"),no-repeat center 88%/50% url("~@/assets/text.png"),linear-gradient(180deg, #aeb0bd 0%, #c1c4d2 50%, #aeb0bd 100%);
  // background-image: url("~@/assets/dewu.png"),linear-gradient(180deg, #aeb0bd 0%, #c1c4d2 50%, #aeb0bd 100%);
  // background-repeat: no-repeat;
  // background-position-x: center;
  // background-position-y: 30%;
  // background-size: contain;
  position: relative;
  .back {
    position: absolute;
    top: 15px;
    left: 8px;
    background-image: url("~@/assets/arrow-ios-back-outli.png");
    height: 40px;
    width: 40px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .shop {
    position: absolute;
    top: 14px;
    right: 65px;
    background-image: url("~@/assets/shopping-bag-outline.png");
    height: 37px;
    width: 37px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .share {
    position: absolute;
    top: 16px;
    right: 10px;
    background-image: url("~@/assets/external-link-outlin.png");
    height: 34px;
    width: 34px;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
