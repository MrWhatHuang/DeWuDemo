/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr.What
 * @Date: 2020-06-18 19:50:45
 * @LastEditors: Mr.What
 * @LastEditTime: 2020-06-18 21:06:37
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
      alpha: true // 允许背景透明
    })
  }
  init () {
  }
}
export default TJPlayer