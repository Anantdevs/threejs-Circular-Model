import { Canvas } from '@react-three/fiber'
import "./style.css"
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import * as THREE from "three"

 import Scene from './Scene'
 const App = () => {
   return <Canvas camera={{fov:35}}>
    <OrbitControls/>
    <ambientLight/>
    <Scene/>
   </Canvas>
 }
 
 export default App 