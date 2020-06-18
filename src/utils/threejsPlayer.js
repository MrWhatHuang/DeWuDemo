/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr.What
 * @Date: 2020-06-18 19:50:45
 * @LastEditors: Mr.What
 * @LastEditTime: 2020-06-18 21:48:45
 */ 
import * as THREE from 'three' // threejs主体框架
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

class TJPlayer {
  constructor(options) {
    this.domElement = options.domElement
    this.options = options
    // 初始化相机
    this.camera = new THREE.PerspectiveCamera(45, options.width / options.height, 0.25, 10000)
    // 初始化相机控制器
    this.cameraControls = new TrackballControls(this.camera, this.domElement)
    // 初始场景
    this.scene = new THREE.Scene()
    // 初始渲染器
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      logarithmicDepthBuffer: true,
      // alpha: true // 允许背景透明
    })
    this.clock = new THREE.Clock()
    this.animate = () => {
      performance.now()
      this.cameraControls.update(this.clock.getDelta())
      this.renderer.render(this.scene, this.camera)
    }
  }
  init () {
    let loaderGltf = new GLTFLoader()
    loaderGltf.load('model/puma/scene.gltf', data => {
      this.scene.add(data.scene)
    })
    this.renderer.setAnimationLoop(this.animate)
    this.domElement.appendChild(this.renderer.domElement)
    var d_light = new THREE.DirectionalLight('#797979')
    d_light.position.set(5, 10, 7)
    this.scene.add(d_light)
  }
}
export default TJPlayer