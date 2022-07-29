# an repo for my 3js skills

### An basic scean

- Scenes;
- Perspective Camera;
- Renderers;
- Geometry; apply material on it;
- Add to the scean obj

## References

### An basic scean

```ts
import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";

function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>
);
```

### what is what

copy -> plese copy the link and past into your browser, the links dont work directly
or they do i dont know, it not working localy!!

- [useFrame and animations](https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations)
- [mesh - a collection of material and geometer](https://threejs.org/docs/#api/en/objects/Mesh) copy
- [circle geomtery](https://threejs.org/docs/#api/en/geometries/CircleGeometry) copy
- [sphere](https://threejs.org/docs/#api/en/geometries/SphereGeometry) copy
- [canvas - mix of THREE.camera and THREE.Renderer](https://docs.pmnd.rs/react-three-fiber/api/canvas)
- [create custom geomtery](https://r105.threejsfundamentals.org/threejs/lessons/threejs-custom-geometry.html)
