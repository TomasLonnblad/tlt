
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  // Use React.memo for performance optimization

  const { nodes, materials } = useGLTF('models15/19.glb')


  const modelRef = useRef();
  <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench_BenchConcreteBase_0.geometry}
        material={materials.BenchConcreteBase}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={60.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench_BenchWood_0.geometry}
        material={materials.BenchWood}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={60.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0001.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0002.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0003.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0004.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0005.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CeillingWire_CeillingWire_0006.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamp_Emissive_0.geometry}
        material={materials.Emissive}
        scale={54.411}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamp_Lamp_0.geometry}
        material={materials.Lamp}
        scale={54.411}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LampBase_CeillingWire_0.geometry}
        material={materials.CeillingWire}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LampBase_Emissive_0.geometry}
        material={materials.Emissive}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaitingsInside_001_Painting_0.geometry}
        material={materials.Painting}
        rotation={[0, 0.099, 0]}
        scale={54.411}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaitingsOutside_Painting_0.geometry}
        material={materials.Painting}
        rotation={[0, 0.099, 0]}
        scale={54.411}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_Ceilling_0.geometry}
        material={materials.Ceilling}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_Emissive_0.geometry}
        material={materials.Emissive}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_Floor_0.geometry}
        material={materials.Floor}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_Walls_0.geometry}
        material={materials.Walls}
        scale={[27.206, 12.243, 27.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_d5d7a45d-0f3d-443e-a721-a52008c88198'].geometry}
        material={materials['tripo_mat_d5d7a45d-0f3d-443e-a721-a52008c88198']}
        position={[-243.812, 123.317, 22.795]}
        rotation={[-0.005, -0.036, 0]}
        scale={[169.511, 285.253, 259.532]}
      />

      <group
        position={[126.871, 167.842, -129.781]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[39.545, 45.012, 35.114]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve001_Low_hands_0.geometry}
            material={materials.hands}
            position={[234.584, -14.213, -0.78]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve_Low_hands_0.geometry}
            material={materials.hands}
            position={[229.741, -13.865, 7.226]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Low_hands_0.geometry}
            material={materials.hands}
            position={[261.639, -31.966, 27.947]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Low_hands_0.geometry}
            material={materials.hands}
            position={[266.185, -56.876, 27.794]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Low_hands_0.geometry}
            material={materials.hands}
            position={[235.117, -144.968, 76.997]}
            rotation={[-Math.PI / 2, -0.043, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_Low_hands_0.geometry}
            material={materials.hands}
            position={[270.052, -48.806, 27.756]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_Low_hands_0.geometry}
            material={materials.hands}
            position={[207.768, -42.314, -98.775]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_Low_hands_0.geometry}
            material={materials.hands}
            position={[224.43, -32.556, 26.893]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_Low_hands_0.geometry}
            material={materials.hands}
            position={[181.01, -4.174, 62.543]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_Low_hands_0.geometry}
            material={materials.hands}
            position={[181.01, -52.906, 32.635]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_Low_body_0.geometry}
            material={materials.body}
            position={[77.946, 52.044, -22.377]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_Low_hands_0.geometry}
            material={materials.hands}
            position={[181.01, -8.818, 154.885]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_Low_hands_0.geometry}
            material={materials.hands}
            position={[155.938, 72.712, 55.124]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012_Low_body_0.geometry}
            material={materials.body}
            position={[78.975, 0, -87.23]}
            rotation={[-1.733, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013_Low_body_0.geometry}
            material={materials.body}
            position={[81.258, -27.822, 108.107]}
            rotation={[-1.149, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_Low_body_0.geometry}
            material={materials.body}
            position={[50.557, -14.316, 76.685]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_Low_body_0.geometry}
            material={materials.body}
            position={[22.494, -149.164, 127.734]}
            rotation={[-1.344, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_Low_body_0.geometry}
            material={materials.body}
            position={[-26.268, -133.71, 131.791]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017_Low_body_0.geometry}
            material={materials.body}
            position={[0, -117.459, -58.219]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018_Low_body_0.geometry}
            material={materials.body}
            position={[16.681, 86.114, -99.682]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_Low_body_0.geometry}
            material={materials.body}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_Low_body_0.geometry}
            material={materials.body}
            position={[45.502, -138.402, -4.149]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_Low_body_0.geometry}
            material={materials.body}
            position={[0, 28.481, -135.818]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_Low_body_0.geometry}
            material={materials.body}
            position={[78.54, 39.931, -124.989]}
            rotation={[-1.88, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_Low_body_0.geometry}
            material={materials.body}
            position={[91.822, 87.808, -48.623]}
            rotation={[-0.955, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024_Low_body_0.geometry}
            material={materials.body}
            position={[34.702, -28.175, -59.666]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.944, -195.118, -6.762]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_Low_body_0.geometry}
            material={materials.body}
            position={[97.936, 57.971, 10.184]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_Low_body_0.geometry}
            material={materials.body}
            position={[21.298, -94.527, 143.028]}
            rotation={[-1.155, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_Low_body_0.geometry}
            material={materials.body}
            position={[38.326, 63.512, 113.587]}
            rotation={[-1.147, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029_Low_body_0.geometry}
            material={materials.body}
            position={[53.793, 59.633, 101.324]}
            rotation={[-0.995, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_Low_body_0.geometry}
            material={materials.body}
            position={[53.793, 43.675, 125.898]}
            rotation={[-0.995, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031_Low_body_0.geometry}
            material={materials.body}
            position={[15.406, 76.8, 92.293]}
            rotation={[-1.356, 0, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_Low_body_0.geometry}
            material={materials.body}
            position={[40.161, -24.028, 160.298]}
            rotation={[-1.226, 0, -2.298]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_Low_body_0.geometry}
            material={materials.body}
            position={[50.206, -22.543, 131.74]}
            rotation={[-1.555, -0.005, 3.125]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube034_Low_body_0.geometry}
            material={materials.body}
            position={[50.525, 68.713, 59.396]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube035_Low_body_0.geometry}
            material={materials.body}
            position={[25.372, 18.825, 177.932]}
            rotation={[-1.155, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036_Low_body_0.geometry}
            material={materials.body}
            position={[0, -36.771, 93.783]}
            rotation={[-1.155, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037_Low_body_0.geometry}
            material={materials.body}
            position={[21.464, 25.633, 176.641]}
            rotation={[-1.155, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube038_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.535, -272.764, -12.406]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_Low_body_0.geometry}
            material={materials.body}
            position={[-38.048, -117.001, -50.583]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.42, -241.799, 58.752]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_Low_legs_0.geometry}
            material={materials.legs}
            position={[182.722, -132.792, -51.995]}
            rotation={[-1.253, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube042_Low_body_0.geometry}
            material={materials.body}
            position={[30.376, -74.034, 14.171]}
            rotation={[-0.747, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube043_Low_legs_0.geometry}
            material={materials.legs}
            position={[159.201, -112.762, -27.114]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube044_Low_body_0.geometry}
            material={materials.body}
            position={[21.359, -78.152, -127.293]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube045_Low_body_0.geometry}
            material={materials.body}
            position={[-41.871, -108.711, -103.434]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube046_Low_body_0.geometry}
            material={materials.body}
            position={[0, -85.345, -52.684]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube047_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.547, -154.993, -93.282]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube048_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.012, -156.164, -112.335]}
            rotation={[-2.059, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.535, -233.506, 3.262]}
            rotation={[-2.026, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.481, -327.087, -84.068]}
            rotation={[-0.993, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube051_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.661, -431.261, 35.286]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube052_Low_legs_0.geometry}
            material={materials.legs}
            position={[146.124, -344.152, -14.106]}
            rotation={[-1.021, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube053_Low_legs_0.geometry}
            material={materials.legs}
            position={[150.648, -309.371, -59.878]}
            rotation={[-1.873, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube054_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.271, -465.606, 96.79]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube055_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.481, -297.048, -50.144]}
            rotation={[-0.925, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube056_Low_legs_0.geometry}
            material={materials.legs}
            position={[142.391, -450.452, 53.783]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube057_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.481, -323.386, -29.05]}
            rotation={[-1.073, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube058_Low_legs_0.geometry}
            material={materials.legs}
            position={[121.531, -298.917, -117.76]}
            rotation={[-1.056, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube059_Low_legs_0.geometry}
            material={materials.legs}
            position={[176.444, -450.058, 29.717]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube060_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.285, -451.765, 83.143]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube061_Low_legs_0.geometry}
            material={materials.legs}
            position={[153.157, -435.44, -33.189]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube062_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.285, -461.25, 112.895]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube063_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.285, -436.766, 68.348]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube065_Low_legs_0.geometry}
            material={materials.legs}
            position={[123.017, -452.351, 29.677]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube067_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.647, -445.438, -50.559]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Low_hands_0.geometry}
            material={materials.hands}
            position={[242.854, -71.872, 28.688]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100.683, 100, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Low_hands_0.geometry}
            material={materials.hands}
            position={[243.315, -59.823, 275.637]}
            rotation={[0, 0, -Math.PI / 3]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_Low_hands_0.geometry}
            material={materials.hands}
            position={[233.541, -54.722, 275.637]}
            rotation={[0, 0, -2.094]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_Low_hands_0.geometry}
            material={materials.hands}
            position={[233.071, -43.707, 275.637]}
            rotation={[0, 0, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_Low_hands_0.geometry}
            material={materials.hands}
            position={[242.376, -37.793, 275.637]}
            rotation={[0, 0, 2.094]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_Low_hands_0.geometry}
            material={materials.hands}
            position={[252.15, -42.894, 275.637]}
            rotation={[0, 0, Math.PI / 3]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_Low_hands_0.geometry}
            material={materials.hands}
            position={[242.845, -48.808, 274.675]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_Low_hands_0.geometry}
            material={materials.hands}
            position={[242.845, -48.808, 257.385]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_Low_hands_0.geometry}
            material={materials.hands}
            position={[242.845, -48.808, 255.779]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_Low_hands_0.geometry}
            material={materials.hands}
            position={[242.846, -48.809, 279.252]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_Low_hands_0.geometry}
            material={materials.hands}
            position={[242.845, -48.808, 26.415]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_Low_hands_0.geometry}
            material={materials.hands}
            position={[242.845, -48.808, 105.716]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_Low_hands_0.geometry}
            material={materials.hands}
            position={[242.845, -48.808, 107.382]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_Low_hands_0.geometry}
            material={materials.hands}
            position={[263.71, -48.808, -18.772]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020_Low_hands_0.geometry}
            material={materials.hands}
            position={[242.845, -121.628, 28.86]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021_Low_hands_0.geometry}
            material={materials.hands}
            position={[135.897, 19.521, -0.145]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022_Low_hands_0.geometry}
            material={materials.hands}
            position={[181.01, -52.906, 236.054]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder023_Low_hands_0.geometry}
            material={materials.hands}
            position={[120.342, 75.974, 98.261]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024_Low_hands_0.geometry}
            material={materials.hands}
            position={[163.001, 44.846, 82.887]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_Low_body_0.geometry}
            material={materials.body}
            position={[112.252, 14.94, -16.163]}
            rotation={[0, -1.571, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026_Low_hands_0.geometry}
            material={materials.hands}
            position={[154.497, 48.39, 12.821]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026_Low001_hands_0.geometry}
            material={materials.hands}
            position={[154.463, 12.261, 12.783]}
            rotation={[2.335, 0, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027_Low_hands_0.geometry}
            material={materials.hands}
            position={[154.497, 33.02, 12.821]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027_Low001_hands_0.geometry}
            material={materials.hands}
            position={[154.463, 1.628, 23.88]}
            rotation={[2.335, 0, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028_Low_hands_0.geometry}
            material={materials.hands}
            position={[136.975, 70.163, -2.399]}
            rotation={[1.822, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029_Low_hands_0.geometry}
            material={materials.hands}
            position={[175.118, 116.734, -125.99]}
            rotation={[-2.924, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_Low_hands_0.geometry}
            material={materials.hands}
            position={[155.938, 86.681, -30.089]}
            rotation={[1.822, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder031_Low_hands_0.geometry}
            material={materials.hands}
            position={[155.938, 94.87, -61.967]}
            rotation={[1.822, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder032_Low_hands_0.geometry}
            material={materials.hands}
            position={[155.939, 103.064, -93.862]}
            rotation={[1.822, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder033_Low_body_0.geometry}
            material={materials.body}
            position={[97.171, -16.014, 76.868]}
            rotation={[0.54, 1.231, -0.546]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder034_Low_body_0.geometry}
            material={materials.body}
            position={[0, -133.676, 120.945]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder035_Low_body_0.geometry}
            material={materials.body}
            position={[24.979, -128.622, 140.031]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder036_Low_body_0.geometry}
            material={materials.body}
            position={[34.308, -139.231, 138.937]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder037_Low_body_0.geometry}
            material={materials.body}
            position={[56.705, -93.598, 110.931]}
            rotation={[-Math.PI / 2, -0.771, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder038_Low_body_0.geometry}
            material={materials.body}
            position={[0, -123.047, 120.742]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder039_Low_body_0.geometry}
            material={materials.body}
            position={[57.467, -93.598, 92.332]}
            rotation={[-Math.PI / 2, -0.771, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder040_Low_body_0.geometry}
            material={materials.body}
            position={[58.608, -93.598, 73.808]}
            rotation={[-Math.PI / 2, -0.771, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder041_Low_body_0.geometry}
            material={materials.body}
            position={[0, -87.939, 180.637]}
            rotation={[2.35, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder042_Low_body_0.geometry}
            material={materials.body}
            position={[89.018, 110.888, -94.926]}
            rotation={[0.616, 0, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder043_Low_body_0.geometry}
            material={materials.body}
            position={[104.373, 63.944, 42.687]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder045_Low_body_0.geometry}
            material={materials.body}
            position={[29.67, 69.111, 106.692]}
            rotation={[1.988, 0, -3.142]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder046_Low_body_0.geometry}
            material={materials.body}
            position={[33.396, -176.526, -5.177]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047_Low_body_0.geometry}
            material={materials.body}
            position={[45.053, -200.786, -50.543]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048_Low_body_0.geometry}
            material={materials.body}
            position={[19.78, -205.52, -29.103]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder049_Low_body_0.geometry}
            material={materials.body}
            position={[0, -205.414, -55.098]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder050_Low_body_0.geometry}
            material={materials.body}
            position={[41.355, -129.6, -111.778]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder051_Low_body_0.geometry}
            material={materials.body}
            position={[-75.731, -132.925, -68.101]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder052_Low_body_0.geometry}
            material={materials.body}
            position={[56.134, -89.671, -110.691]}
            rotation={[Math.PI, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder053_Low_body_0.geometry}
            material={materials.body}
            position={[0, -62.729, -78.457]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder054_Low_body_0.geometry}
            material={materials.body}
            position={[32.368, -41.806, -91.789]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder055_Low_legs_0.geometry}
            material={materials.legs}
            position={[82.109, -259.078, 24.304]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder056_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.481, -308.99, -59.546]}
            rotation={[0, -1.571, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder057_Low_body_0.geometry}
            material={materials.body}
            position={[21.622, -37.993, -85.024]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder058_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.502, -149.317, -48.09]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder059_Low_body_0.geometry}
            material={materials.body}
            position={[18.979, -35.918, -92.028]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder060_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.38, -290.438, 25.087]}
            rotation={[Math.PI, -1.57, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder061_Low_legs_0.geometry}
            material={materials.legs}
            position={[130.705, -350.235, 0.755]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder062_Low_legs_0.geometry}
            material={materials.legs}
            position={[174.259, -130.484, -58.726]}
            rotation={[-2.827, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_Low_legs_0.geometry}
            material={materials.legs}
            position={[139.836, -200.308, 86.41]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder064_Low_legs_0.geometry}
            material={materials.legs}
            position={[173.347, -125.071, -76.024]}
            rotation={[-2.827, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder065_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.338, -222.217, -21.001]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder066_Low_legs_0.geometry}
            material={materials.legs}
            position={[147.983, -406.239, 12.684]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder067_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.678, -392.781, -16.08]}
            rotation={[-1.923, -1.571, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder068_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.661, -443.257, 11.936]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder069_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.661, -441.127, 11.936]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder070_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.661, -421.274, 11.686]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder071_Low_legs_0.geometry}
            material={materials.legs}
            position={[168.677, -437.528, -2.537]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder072_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.088, -457.502, 127.135]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder073_Low_legs_0.geometry}
            material={materials.legs}
            position={[162.916, -459.846, 61.789]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder075_Low_legs_0.geometry}
            material={materials.legs}
            position={[142.476, -456.866, 99.285]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder076_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.285, -450.462, 57.697]}
            rotation={[Math.PI, -1.571, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder077_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.285, -449.093, 45.166]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder078_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.647, -460.525, -35.74]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder079_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.647, -435.338, -32.406]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_Low_hands_0.geometry}
            material={materials.hands}
            position={[252.619, -53.909, 275.637]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath001_Low_body_0.geometry}
            material={materials.body}
            position={[6.761, -33.679, 24.95]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath002_Low_body_0.geometry}
            material={materials.body}
            position={[15.066, -34.886, 37.156]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath003_Low_body_0.geometry}
            material={materials.body}
            position={[0.073, -40.184, -119.38]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath004_Low_legs_0.geometry}
            material={materials.legs}
            position={[121.727, -382.133, -28.289]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Low_body_0.geometry}
            material={materials.body}
            position={[88.726, 133.448, -82.267]}
            rotation={[-0.956, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_Low_body_0.geometry}
            material={materials.body}
            position={[78.993, 19.495, -143.214]}
            rotation={[-1.937, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_Low_body_0.geometry}
            material={materials.body}
            position={[78.993, -35, -135.704]}
            rotation={[-1.658, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_Low_body_0.geometry}
            material={materials.body}
            position={[57.506, -83.416, -37.495]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.467, -238.04, 71.415]}
            rotation={[-0.64, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.464, -274.385, -127.022]}
            rotation={[-2.189, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.464, -307.922, -139.187]}
            rotation={[2.855, 0, Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.365, -340.871, 33.616]}
            rotation={[-1.029, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.294, -427.714, 87.299]}
            rotation={[-0.258, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010_Low_legs_0.geometry}
            material={materials.legs}
            position={[122.688, -439.193, -56.556]}
            rotation={[-2.295, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Low_body_0.geometry}
            material={materials.body}
            position={[88.77, 105.104, -55.671]}
            rotation={[-0.935, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Low_body_0.geometry}
            material={materials.body}
            position={[0, 11.634, -141.737]}
            rotation={[-1.091, 0, -Math.PI]}
            scale={100}
          />
        </group>
      </group>     
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_d5d7a45d-0f3d-443e-a721-a52008c88198001'].geometry}
        material={materials['tripo_mat_d5d7a45d-0f3d-443e-a721-a52008c88198.001']}
        position={[15.875, 125.768, -244.311]}
        rotation={[-0.005, -0.036, 0]}
        scale={[169.511, 285.253, 259.532]}
      /> </group>

});


export default Wizard;
useGLTF.preload("/models15/19.glb");



