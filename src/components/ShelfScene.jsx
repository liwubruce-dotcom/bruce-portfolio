import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Float, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef, useMemo, useState } from "react";
import * as THREE from "three";

function createWoodTexture(baseColor = "#5a3f2e", lineColor = "#8a6245") {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;

  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, baseColor);
  gradient.addColorStop(0.5, "#6b4a35");
  gradient.addColorStop(1, "#3f2a20");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Main long wood grain
  for (let y = 0; y < canvas.height; y += 4) {
    ctx.beginPath();

    const alpha = 0.08 + Math.random() * 0.18;
    ctx.strokeStyle = lineColor;
    ctx.globalAlpha = alpha;
    ctx.lineWidth = 0.8 + Math.random() * 1.4;

    for (let x = 0; x <= canvas.width; x += 10) {
      const wave =
        Math.sin(x * 0.018 + y * 0.08) * 10 +
        Math.sin(x * 0.045 + y * 0.02) * 4 +
        Math.sin(y * 0.12) * 3;

      if (x === 0) {
        ctx.moveTo(x, y + wave);
      } else {
        ctx.lineTo(x, y + wave);
      }
    }

    ctx.stroke();
  }

  // Darker grain streaks
  for (let i = 0; i < 35; i++) {
    const y = Math.random() * canvas.height;

    ctx.beginPath();
    ctx.strokeStyle = "#2d1c14";
    ctx.globalAlpha = 0.12;
    ctx.lineWidth = 1.5 + Math.random() * 2.5;

    ctx.moveTo(0, y);
    ctx.bezierCurveTo(
      240,
      y + Math.random() * 35 - 18,
      620,
      y + Math.random() * 35 - 18,
      1024,
      y + Math.random() * 35 - 18
    );

    ctx.stroke();
  }

  ctx.globalAlpha = 1;

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2.2, 0.75);
  texture.colorSpace = THREE.SRGBColorSpace;

  return texture;
}

function WoodMaterial({ dark = false }) {
  const texture = useMemo(() => {
    return dark
      ? createWoodTexture("#3a2419", "#6f4b34")
      : createWoodTexture("#5a3a28", "#9a6b48");
  }, [dark]);

  return (
    <meshStandardMaterial
      map={texture}
      roughness={0.58}
      metalness={0.04}
    />
  );
}

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (size.width < 600) {
      camera.position.set(0, 0.2, 11.5);
      camera.fov = 52;
    } else if (size.width < 900) {
      camera.position.set(0, 0.25, 9.2);
      camera.fov = 48;
    } else {
      camera.position.set(0, 0.35, 9);
      camera.fov = 42;
    }

    camera.lookAt(0, 0.05, 0);
    camera.updateProjectionMatrix();
  }, [camera, size.width]);

  return null;
}

function WoodBoard({ position, size }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <WoodMaterial />
    </mesh>
  );
}

function Support({ position, size }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <WoodMaterial dark />
    </mesh>
  );
}

function WallShelf() {
  return (
    <group>
      {/* Wall */}
      <mesh position={[0, 3, -0.62]} receiveShadow>
        <planeGeometry args={[50, 15]} />
        <meshStandardMaterial color="#c9c5b8" roughness={0.96} />
      </mesh>

      {/* Very subtle lower floor / base shadow plane */}
      <mesh position={[0, -4, 4]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 10]} />
        <meshStandardMaterial color="#bdb6a7" roughness={0.92} />
      </mesh>

      {/* Shelf boards */}
      <WoodBoard position={[0, -2.2, 0.2]} size={[7.5, 0.14, 1.5]} />
      <WoodBoard position={[0.7, -0.82, -0.1]} size={[6.5, 0.14, 0.9]} />
      <WoodBoard position={[-0.7, 0.5, 0.05]} size={[4, 0.14, 1.2]} />
      <WoodBoard position={[0, 1.55, -0.1]} size={[3.5, 0.14, 0.85]} />

      {/* Vertical supports, like a wall-mounted display shelf */}
      {/*<Support position={[-3.25, -1.5, -0.2]} size={[0.1, 1.3, 0.78]} />*/}
      <Support position={[3.25, -1.5, -0.2]} size={[0.1, 1.3, 0.78]} />

      <Support position={[-2, -0.2, -0.2]} size={[0.1, 1.3, 0.78]} />
      {/*<Support position={[2.65, 0.15, -0.2]} size={[0.1, 1.15, 0.78]} />*/}

      {/*<Support position={[-1.15, 1.14, -0.2]} size={[0.1, 0.82, 0.75]} />*/}
      <Support position={[0.9, 1, -0.2]} size={[0.1, 1.1, 0.75]} />

      {/* Small wall brackets 
      <Support position={[-3.45, -1.55, -0.25]} size={[0.1, 0.08, 0.12]} />
      <Support position={[3.45, -1.55, -0.25]} size={[0.1, 0.08, 0.12]} />
      <Support position={[-3.7, -0.42, -0.25]} size={[0.1, 0.08, 0.12]} />
      <Support position={[3.7, -0.42, -0.25]} size={[0.1, 0.08, 0.12]} />
      */}
    </group>
  );
}

function GLBModel({ path, scale = 1, rotation = [0, 0, 0], position = [0, 0, 0] }) {
  const { scene } = useGLTF(path);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={scale}
      rotation={rotation}
      position={position}
    />
  );
}

function ProjectModel() {
  return (
    <group>
      <mesh position={[0, -0.18, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.15, 0.16, 0.75]} />
        <meshStandardMaterial color="#2563eb" roughness={0.35} metalness={0.2} />
      </mesh>

      <mesh position={[-0.22, 0.15, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.42, 0.5, 0.42]} />
        <meshStandardMaterial color="#64748b" roughness={0.3} metalness={0.45} />
      </mesh>

      <mesh position={[0.28, 0.13, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.22, 0.22, 0.5, 32]} />
        <meshStandardMaterial color="#111827" roughness={0.25} metalness={0.55} />
      </mesh>

      <mesh position={[0.28, 0.13, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.8, 32]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.2} metalness={0.8} />
      </mesh>

      <mesh position={[0.02, 0.42, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.85, 0.08, 0.12]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.25} />
      </mesh>
    </group>
  );
}

function CameraModel() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.95, 0.55, 0.35]} />
        <meshStandardMaterial color="#020617" roughness={0.35} metalness={0.18} />
      </mesh>

      <mesh position={[0.26, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.22, 32]} />
        <meshStandardMaterial color="#030712" roughness={0.25} metalness={0.4} />
      </mesh>

      <mesh position={[0.26, 0, 0.38]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.05, 32]} />
        <meshStandardMaterial color="#334155" roughness={0.2} metalness={0.55} />
      </mesh>

      <mesh position={[-0.25, 0.36, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.28, 0.16, 0.25]} />
        <meshStandardMaterial color="#1f2937" roughness={0.3} metalness={0.2} />
      </mesh>
    </group>
  );
}

function PaperModel() {
  return (
    <group>
      <mesh rotation={[0, 0, -0.08]} castShadow receiveShadow>
        <boxGeometry args={[0.72, 0.95, 0.06]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.55} />
      </mesh>

      <mesh position={[0, 0.18, 0.04]} rotation={[0, 0, -0.08]} castShadow>
        <boxGeometry args={[0.45, 0.035, 0.02]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>

      <mesh position={[0, 0.02, 0.04]} rotation={[0, 0, -0.08]} castShadow>
        <boxGeometry args={[0.5, 0.035, 0.02]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>

      <mesh position={[0, -0.14, 0.04]} rotation={[0, 0, -0.08]} castShadow>
        <boxGeometry args={[0.38, 0.035, 0.02]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
    </group>
  );
}

function NotebookModel() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.72, 0.95, 0.12]} />
        <meshStandardMaterial color="#1e3a8a" roughness={0.5} />
      </mesh>

      <mesh position={[-0.39, 0, 0.08]} castShadow>
        <boxGeometry args={[0.06, 0.95, 0.05]} />
        <meshStandardMaterial color="#93c5fd" />
      </mesh>
    </group>
  );
}

function ToolboxModel() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.95, 0.45, 0.45]} />
        <meshStandardMaterial color="#b91c1c" roughness={0.42} metalness={0.1} />
      </mesh>

      <mesh position={[0, 0.33, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.13, 0.16]} />
        <meshStandardMaterial color="#7f1d1d" roughness={0.35} />
      </mesh>

      <mesh position={[0, 0.02, 0.24]} castShadow>
        <boxGeometry args={[0.65, 0.06, 0.04]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.22} metalness={0.3} />
      </mesh>
    </group>
  );
}

function EnvelopeModel() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.58, 0.06]} />
        <meshStandardMaterial color="#f3f4f6" roughness={0.55} />
      </mesh>

      <mesh position={[0, -0.02, 0.05]} rotation={[0, 0, 0.78]} castShadow>
        <boxGeometry args={[0.48, 0.035, 0.02]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>

      <mesh position={[0, -0.02, 0.05]} rotation={[0, 0, -0.78]} castShadow>
        <boxGeometry args={[0.48, 0.035, 0.02]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
    </group>
  );
}

const modelSettings = {
  project: {
    path: "/models/project-assembly.glb",
    scale: 2,
    rotation: [0, Math.PI + 4, 1.55],
    position: [0, -1, 0],
    fallback: <ProjectModel />,
  },
  camera: {
    path: "/models/camera.glb",
    scale: 8,
    rotation: [0, Math.PI + 0.35, 0],
    position: [0, -0.6, 0.02],
    fallback: <CameraModel />,
  },
  paper: {
    path: "/models/resume-folder.glb",
    scale: 0.5,
    rotation: [0, Math.PI + 2, 0],
    position: [0, -0.08, 0],
    fallback: <PaperModel />,
  },
  notebook: {
    path: "/models/notebook.glb",
    scale: 0.03,
    rotation: [1.2, Math.PI + 3.05, 0.3],
    position: [2, 1.6, 0],
    fallback: <NotebookModel />,
  },
  toolbox: {
    path: "/models/toolbox.glb",
    scale: 0.3,
    rotation: [0, Math.PI + 3.1, 0],
    position: [-0.5, -0.8, 0],
    fallback: <ToolboxModel />,
  },
  envelope: {
    path: "/models/envelope.glb",
    scale: 0.15,
    rotation: [4, Math.PI, 0],
    position: [0, 0.5, 0.2],
    fallback: <EnvelopeModel />,
  },
};

function ShelfItem({
  position,
  label,
  description,
  type,
  target,
  onNavigate,
}) {
  const [hovered, setHovered] = useState(false);

  const floatingObjectRef = useRef();

  useFrame(() => {
    if (!floatingObjectRef.current) return;

    const targetY = hovered ? 0.22 : 0;
    const targetScale = hovered ? 1.05 : 1;

    floatingObjectRef.current.position.y = THREE.MathUtils.lerp(
      floatingObjectRef.current.position.y,
      targetY,
      0.14
    );

    const currentScale = floatingObjectRef.current.scale.x;
    const nextScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.14);

    floatingObjectRef.current.scale.set(nextScale, nextScale, nextScale);
  });

  function handleClick() {
    onNavigate(target);
  }

  function renderObject() {
  const model = modelSettings[type];

  if (!model) return null;

  return (
    <Suspense fallback={model.fallback}>
      <GLBModel
        path={model.path}
        scale={model.scale}
        rotation={model.rotation}
        position={model.position}
      />
    </Suspense>
  );
}

  return (
    <group
      position={position}
      onPointerEnter={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
      onClick={handleClick}
    >
      <group ref={floatingObjectRef}>
        <Float
          speed={hovered ? 2.2 : 0.8}
          rotationIntensity={hovered ? 0.18 : 0.03}
          floatIntensity={hovered ? 0.12 : 0.02}
        >
          {renderObject()}
        </Float>
      </group>

      {hovered && (
        <Html position={[0, 1.25, 0]} center>
          <div className="item-tooltip">
            <h3>{label}</h3>
            <p>{description}</p>
          </div>
        </Html>
      )}
    </group>
  );
}

function ShelfScene({ onNavigate }) {
  return (
    <div className="shelf-scene">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0.35, 7.4], fov: 42 }}
      >
        <color attach="background" args={["#d8d3c4"]} />

        <ambientLight intensity={0.85} />

        <directionalLight
          position={[-3.8, 5.2, 4.5]}
          intensity={1.15}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0005}
          shadow-radius={6}
        />

        <pointLight
          position={[3.4, 2.4, 3.8]}
          intensity={0.38}
          color="#fff1d6"
        />

        <pointLight
          position={[-3.2, -0.8, 3]}
          intensity={0.18}
          color="#93c5fd"
      />

        <ResponsiveCamera />

        <WallShelf />

        <ShelfItem
          position={[1.6, 0.25, 0]}
          label="Projects"
          description="Engineering projects including CAD design, FDM prototypes, carbon fiber fabrication, and product development."
          type="project"
          target="projects"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[-0.5, -0.15, -0.1]}
          label="Gallery"
          description="Photos, CAD screenshots, process images, prototypes, and final build results."
          type="camera"
          target="gallery"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[-1.9, -2, 0.3]}
          label="Resume"
          description="My resume, technical skills, work experience, and downloadable PDF."
          type="paper"
          target="resume"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[-1.8, 1.4, -0.38]}
          label="About Me"
          description="My background, engineering interests, career direction, and design philosophy."
          type="notebook"
          target="about"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[1.3, -1.28, 1.1]}
          label="Skills"
          description="CAD, SolidWorks, CATIA, manufacturing, prototyping, testing, QA, and engineering tools."
          type="toolbox"
          target="skills"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[-1, 0.9, 0.06]}
          label="Contact"
          description="Email, LinkedIn, and contact information for co-op and engineering opportunities."
          type="envelope"
          target="contact"
          onNavigate={onNavigate}
        />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
        />

        {/*<OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5.8}
          maxDistance={11}
          minPolarAngle={Math.PI / 2.7}
          maxPolarAngle={Math.PI / 2.05}
          minAzimuthAngle={-0.35}
          maxAzimuthAngle={0.35}
        />*/}
      </Canvas>
    </div>
  );
}

export default ShelfScene;