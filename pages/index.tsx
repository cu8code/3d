import type { NextPage } from "next";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import styles from "../styles/Home.module.css";
import { useEffect, useRef } from "react";

const HEIGHT_MAP =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDUtMjlUMTg6MDI6MTMrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDUtMjlUMTg6MDI6MTMrMDk6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA1LTI5VDE4OjAyOjEzKzA5OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4ZmI5NmRmOS02MDc3LTRiZWItODMxNi01NWUzMzVlNzhlOWQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OGZiOTZkZjktNjA3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";

function MeshGeneration(props: any) {
  const geo = useRef(null);
  useEffect(() => {
    const img = document.createElement("img") as HTMLImageElement;
    const canvas = document.createElement("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    img.src = HEIGHT_MAP;
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(0, 0, 64, 64).data;
    const celllsAcross_x = img.width - 1;
    const cellssDeep_y = img.height - 1;
    console.log("image width and height", img.width, img.height);
    for (let x = 0; x < celllsAcross_x; x++) {
      for (let y = 0; y < cellssDeep_y; y++) {
        const base0 = (y * img.width + x) * 4;
        const base1 = base0 + img.width * 4;

        const h0 = data[base0] / 32;
        const h1 = data[base1] / 32;
        const h00 = data[base0] / 32;
        const h01 = data[base0 + 4] / 32;
        const h10 = data[base1] / 32;
        const h11 = data[base1 + 4] / 32;
        const hm = (h00 + h01 + h10 + h11) / 4;
        const x0 = x;
        const x1 = x + 1;
        const z0 = y;
        const z1 = y + 1;
      }
    }
    img.remove();
    canvas.remove();
  }, []);
  return (
    <mesh {...props}>
      <bufferGeometry ref={geo} />
    </mesh>
  );
}

//  function Planate(props: any) {
//    return (
//      <mesh
//        {...props}
//        scale={1}
//        onClick={(e: any) => {
//          console.log(e);
//        }}
//      >
//        <sphereGeometry args={[1]} />
//        <meshStandardMaterial color={"hotpink"} />
//      </mesh>
//    );
//  }

const Home: NextPage = () => {
  const extraCanvas = useRef(null);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.full}>
        <Canvas>
          <ambientLight />
          <pointLight />
          <MeshGeneration />
        </Canvas>
      </main>
    </div>
  );
};

export default Home;
