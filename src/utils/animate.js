/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr.What
 * @Date: 2020-06-19 09:58:47
 * @LastEditors: Mr.What
 * @LastEditTime: 2020-06-19 10:25:25
 */ 
class Animate {
    constructor() {
    }
    animate() {
        performance.now()
        this.cameraControls.update(this.clock.getDelta())
        this.renderer.render(this.scene, this.camera)
    }
}

export default Animate