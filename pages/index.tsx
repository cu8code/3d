import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import styles from "../styles/Home.module.css";

function Box(props: any) {
  return (
    <mesh
      {...props}
      scale={1}
      onClick={(e: any) => {
        console.log(e);
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}

function Circle(props: any) {
  return (
    <mesh
      {...props}
      scale={1}
      onClick={(e: any) => {
        console.log(e);
      }}
    >
      <circleGeometry args={[1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}

function Planate(props: any) {
  return (
    <mesh
      {...props}
      scale={1}
      onClick={(e: any) => {
        console.log(e);
      }}
    >
      <sphereGeometry args={[15]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Canvas>
          <ambientLight />
          <pointLight />
          <Box position={[1.5, 0, 0]} />,
          <Planate position={[-1.5, 0, 0]} />,
        </Canvas>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
