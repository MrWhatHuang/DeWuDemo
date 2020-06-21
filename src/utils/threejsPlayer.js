/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr.What
 * @Date: 2020-06-18 19:50:45
 * @LastEditors: Mr.What
 * @LastEditTime: 2020-06-19 10:23:44
 */ 
import * as THREE from 'three' // threejs主体框架
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import Animate from './animate'

class TJPlayer {
  constructor(options) {
    this.domElement = options.domElement
    this.options = options
    // 初始渲染器
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      logarithmicDepthBuffer: true,
      outputEncoding: true
      // alpha: true // 允许背景透明
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(options.width, options.height)
    // 初始化相机
    this.camera = new THREE.PerspectiveCamera(45, options.width / options.height, 0.25, 1000)
    this.camera.position.set( - 1.8, 0.9, 2.7 )
    // 初始化相机控制器
    this.cameraControls = new TrackballControls(this.camera, this.renderer.domElement)
    // 初始场景
    this.scene = new THREE.Scene()
    this.clock = new THREE.Clock()
  }
  init () {
    this.domElement.appendChild(this.renderer.domElement)
    
    let ani = new Animate()
    this.renderer.setAnimationLoop(ani.animate.bind(this))

    // let loaderGltf = new GLTFLoader()
    // loaderGltf.load('model/puma/scene.gltf', data => {
    //   this.scene.add(data.scene)
    // })

    var d_light = new THREE.DirectionalLight('#797979')
    d_light.position.set(5, 10, 7)
    this.scene.add(d_light)

    var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var cube = new THREE.Mesh( geometry, material );
    this.scene.add( cube );
    
    window.scene = this.scene
  }
}
export default TJPlayer