/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr.What
 * @Date: 2020-06-18 19:50:45
 * @LastEditors: Mr.What
 * @LastEditTime: 2020-06-19 10:23:44
 */ 
/* eslint-disable no-unused-vars */
import * as THREE from 'three' // threejs主体框架
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js'

class TJPlayer {
  constructor(options) {
    this.domElement = options.domElement
    this.options = options
    // 创建渲染器
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      logarithmicDepthBuffer: true,
      alpha: true // 允许背景透明
    })
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 0.8
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(options.width, options.height)
    this.renderer.shadowMap.enabled = true
    this.domElement.appendChild(this.renderer.domElement)
    // 创建相机
    this.camera = new THREE.PerspectiveCamera(45, this.options.width / this.options.height, 0.01, 1000)
    this.camera.position.set( 0, 0, 0.8 )
    // 创建相机控制器
    this.cameraControls = new TrackballControls(this.camera, this.renderer.domElement)
    this.cameraControls.rotateSpeed = 8.0 // 旋转速度
    this.cameraControls.zoomSpeed = 2.0 // 缩放速度
    this.cameraControls.panSpeed = 0 // 平移速度
    // 创建场景
    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 )
    // 后处理
    this.composer = null
    // 相机是否旋转
    this.cameraRotate = false
  }
  init () {
    // 相机旋转参数
    let q = new THREE.Quaternion()
    let center = new THREE.Vector3(0,0,0)
    let axisY = new THREE.Vector3(0,1,0)
    // 帧渲染
    const animate = () => {
      this.cameraControls.update()
      if (this.composer) {
        this.composer.render()
      } else {
        this.renderer.render(this.scene, this.camera)
      }
      if (this.cameraRotate) { // 是否开启旋转
        q.setFromAxisAngle(axisY, 0.01)
        this.camera.applyQuaternion(q)
        this.camera.position.sub(center)
        this.camera.position.applyQuaternion(q)
        this.camera.position.add(center)
      }
    }
    this.renderer.setAnimationLoop(animate)
    // 加载模型
    let loaderGltf = new GLTFLoader()
    if (window.shoe) {
      this.scene.add(window.shoe)
    } else {
      loaderGltf.load('model/puma.glb', data => {
        data.scene.rotation.y = 0.45 * Math.PI
        data.scene.position.x = -0.028
        data.scene.position.y = 0.02
        window.shoe = data.scene
        this.scene.add(data.scene)
      })
    }
    // 初始化灯光
    let light_1 = new THREE.DirectionalLight( 0xffffff, 1 )
    light_1.position.set( 2, 2, 2 )
    this.scene.add( light_1 )
    let light_2 = new THREE.DirectionalLight( 0xffffff )
    light_2.position.set( - 2, - 2, - 2 )
    this.scene.add( light_2 )
    let light_3 = new THREE.AmbientLight( 0xffffff, 1 )
    light_3.position.set( 0, 0, 0 )
    this.scene.add( light_3 )
    let light_4 = new THREE.DirectionalLight( 0xffffff )
    light_4.position.set( 0, 2, 2 )
    this.scene.add( light_4 )
    let light_5 = new THREE.DirectionalLight( 0xffffff )
    light_5.position.set( 0, 2, -2 )
    this.scene.add( light_5 )
  }
  openPostProcessing () { // 开启后处理
    let renderScene = new RenderPass( this.scene, this.camera )

    // let pass = new AfterimagePass()
    let pass = new GlitchPass()

    this.composer = new EffectComposer( this.renderer )
    this.composer.addPass( renderScene )
    this.composer.addPass( pass )
  }
}
export default TJPlayer