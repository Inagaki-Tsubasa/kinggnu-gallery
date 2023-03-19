import '../App.css';
import { Image, Scroll, ScrollControls, useScroll } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import Image2 from "../Images/image2.jpg";
import Image3 from "../Images/image3.jpg";
import Image4 from "../Images/image4.jpg";
import Image5 from "../Images/image5.png";
import Image6 from "../Images/image6.jpg";
import Image7 from "../Images/image7.jpg";
import Image8 from "../Images/image8.jpg";
import Image9 from "../Images/image9.jpg";
import Image10 from "../Images/image10.webp";
import Image11 from "../Images/image11.jpg";
import Image12 from "../Images/image12.jpg";
import Image13 from "../Images/image13.jpg";





const Images = () => {
    const { width, height } = useThree((state) => state.viewport);
    const data = useScroll();
    const group = useRef();

  useFrame(() => {
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(0, 1 / 3) / 3;
  });

  return(
      <group ref={group}>[
          {/* メインの画像 */}
          <Image url={Image5} scale={[7, 5, 1]} position={[0, 0, 1]} />
          {/* タイトルの画像 */}
          <Image url={Image2} scale={[7, 5, 1]} position={[1.8, -height * 2.8, 1]}/>
          <Image url={Image4} scale={[7, 5, 1]} position={[-1.8, -height * 5.4, 1]}/>
          {/* musicの画像 */}
          <Image url={Image6} scale={[5, 3, 1]} position={[3.0, -height * 3.6, 1]}/>
          <Image url={Image7} scale={[5, 3, 1]} position={[-3.0, -height * 3.9, 1]}/>
          <Image url={Image8} scale={[5, 3, 1]} position={[3.0, -height * 4.2, 1]}/>
          <Image url={Image9} scale={[5, 3, 1]} position={[-3.0, -height * 4.5, 1]}/>
          {/* memberの画像 */}
          <Image url={Image3} scale={[5, 3, 1]} position={[-3.0, -height * 6.2, 1]}/>
          <Image url={Image11} scale={[5, 3, 1]} position={[3.0, -height * 6.5, 1]}/>
          <Image url={Image12} scale={[5, 3, 1]} position={[-3.0, -height * 6.8, 1]}/>
          <Image url={Image13} scale={[5, 3, 1]} position={[3.0, -height * 7.1, 1]}/>
          {/* 最後の画像 */}
          <Image url={Image10} scale={[12, 5, 1]} position={[0, -height * 8, 1]}/>
      ];
      </group>
  );
};

function Three() {

   return (
    <>
    
    <Canvas>
    
      <ScrollControls pages={9} damping={0.4}>
        <Scroll>
           <Images />
        </Scroll>
        <Scroll html>
          <div className="textbox">
            <h2 style={{position:"absolute", top:"130vh", left:"45vw"}}>
              僕が大好きなバンドを紹介します。。    
            </h2>
            <h1 style={{position:"absolute", top:"300vh", left:"15vw"}}>
              # MUSIC
            </h1>
            <h1 style={{position:"absolute", top:"560vh", left:"40vw"}}>
              # MEMBER
            </h1>
          </div>
         </Scroll>
      </ScrollControls>
    </Canvas>
    </>

  );
}

export default Three;
