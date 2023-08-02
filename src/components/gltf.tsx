import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { a } from '@react-spring/three';
import { Group } from 'three';
import { ModelSrc } from 'src/types/ModelSrc';

type GLTFProps = ModelSrc & {
  onLoad?: (url: string) => void;
};

export const GLTF = ({ url, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1], onLoad }: GLTFProps) => {
  const { scene } = useGLTF(url, true, true, (e) => {
    e.manager.onLoad = () => {
      if (onLoad) {
        onLoad(url);
      }
    };
  });
  const ref = useRef<Group | null>(null);
  const modelRef = useRef();

  return (
    <a.group ref={ref} position={position} rotation={rotation} scale={scale}>
      <primitive ref={modelRef} object={scene} scale={scale} />
    </a.group>
  );
};