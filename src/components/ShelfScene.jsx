import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Float, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useState } from "react";
import * as THREE from "three";

function createWoodTexture(baseColor = "#5a3f2e", lineColor = "#7a563e") {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;

  const ctx = canvas.getContext("2d");

  // Base wood color
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Long horizontal grain lines
  for (let y = 0; y < canvas.height; y += 6) {
    const wave = Math.sin(y * 0.08) * 12;
    ctx.strokeStyle = lineColor;
    ctx.globalAlpha = 0.18 + Math.random() * 0.18;
    ctx.lineWidth = 1 + Math.random() * 1.5;

    ctx.beginPath();

    for (let x = 0; x <= canvas.width; x += 12) {
      const offset =
        Math.sin(x * 0.025 + y * 0.05) * 8 +
        Math.sin(x * 0.055) * 3 +
        wave;

      if (x === 0) {
        ctx.moveTo(x, y + offset);
      } else {
        ctx.lineTo(x, y + offset);
      }
    }

    ctx.stroke();
  }

  // Subtle lighter streaks
  for (let y = 0; y < canvas.height; y += 22) {
    ctx.strokeStyle = "#b08968";
    ctx.globalAlpha = 0.1;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(
      140,
      y + Math.sin(y) * 18,
      300,
      y - Math.cos(y) * 14,
      512,
      y + Math.sin(y * 0.5) * 12
    );
    ctx.stroke();
  }

  ctx.globalAlpha = 1;

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 1);
  texture.colorSpace = THREE.SRGBColorSpace;

  return texture;
}

function WoodMaterial({ dark = false }) {
  const texture = useMemo(() => {
    return dark
      ? createWoodTexture("#3b261c", "#5c4030")
      : createWoodTexture("#5a3f2e", "#7a563e");
  }, [dark]);

  return (
    <meshStandardMaterial
      map={texture}
      roughness={0.68}
      metalness={0.03}
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
      camera.position.set(0, 0.35, 7.4);
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
        <meshStandardMaterial color="#d8d3c4" roughness={0.92} />
      </mesh>

      {/* Very subtle lower floor / base shadow plane */}
      <mesh position={[0, -4, 4]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 10]} />
        <meshStandardMaterial color="#c8c0ad" roughness={0.9} />
      </mesh>

      {/* Shelf boards */}
      <WoodBoard position={[0, -2.2, 0.1]} size={[6.9, 0.14, 1.5]} />
      <WoodBoard position={[0, -0.82, -0.1]} size={[7.4, 0.14, 0.9]} />
      <WoodBoard position={[0, 0.32, -0.2]} size={[6.4, 0.14, 1.5]} />
      <WoodBoard position={[0, 1.55, -0.2]} size={[4.2, 0.14, 0.85]} />

      {/* Vertical supports, like a wall-mounted display shelf */}
      {/*<Support position={[-3.25, -1.5, -0.2]} size={[0.1, 1.3, 0.78]} />*/}
      <Support position={[3.25, -1.5, -0.2]} size={[0.1, 1.3, 0.78]} />

      <Support position={[-2, -0.25, -0.2]} size={[0.1, 1.15, 0.78]} />
      {/*<Support position={[2.65, 0.15, -0.2]} size={[0.1, 1.15, 0.78]} />*/}

      {/*<Support position={[-1.15, 1.14, -0.2]} size={[0.1, 0.82, 0.75]} />*/}
      <Support position={[1.15, 0.94, -0.2]} size={[0.1, 1.2, 0.75]} />

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
    scale: 6,
    rotation: [0, Math.PI + 3, 0],
    position: [0, -0.3, 0],
    fallback: <ProjectModel />,
  },
  camera: {
    path: "/models/camera.glb",
    scale: 8,
    rotation: [0, Math.PI + 0.35, 0],
    position: [0, -0.1, 0.02],
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
    position: [0, 0.9, 0],
    fallback: <NotebookModel />,
  },
  toolbox: {
    path: "/models/toolbox.glb",
    scale: 0.32,
    rotation: [0, Math.PI + 3, 0],
    position: [-0.5, -0.8, 0],
    fallback: <ToolboxModel />,
  },
  envelope: {
    path: "/models/envelope.glb",
    scale: 0.15,
    rotation: [4, Math.PI, 0],
    position: [0, 0.2, 0.2],
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
      scale={hovered ? 1.1 : 1}
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
      <Float
        speed={hovered ? 2.2 : 0.8}
        rotationIntensity={hovered ? 0.22 : 0.03}
        floatIntensity={hovered ? 0.18 : 0.02}
      >
        {renderObject()}
      </Float>

      {hovered && (
        <Html position={[0, 0.9, 0]} center>
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
        camera={{ position: [0, 0.35, 7.4], fov: 42 }}
      >
        <color attach="background" args={["#d8d3c4"]} />

        <ambientLight intensity={0.55} />

        <directionalLight
          position={[-3.5, 4.8, 5]}
          intensity={1.65}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <pointLight position={[3.5, 2.2, 3.5]} intensity={0.45} color="#fff1d6" />
        <pointLight position={[-3, -1, 3]} intensity={0.25} color="#93c5fd" />

        <ResponsiveCamera />

        <WallShelf />

        <ShelfItem
          position={[-2, -1.8, 0.2]}
          label="Projects"
          description="Engineering projects including CAD design, FDM prototypes, carbon fiber fabrication, and product development."
          type="project"
          target="projects"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[-0.4, -0.65, -0.1]}
          label="Gallery"
          description="Photos, CAD screenshots, process images, prototypes, and final build results."
          type="camera"
          target="gallery"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[2, -0.65, 0.3]}
          label="Resume"
          description="My resume, technical skills, work experience, and downloadable PDF."
          type="paper"
          target="resume"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[-0, 2.1, -0.38]}
          label="About Me"
          description="My background, engineering interests, career direction, and design philosophy."
          type="notebook"
          target="about"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[1.3, -1.28, 0.8]}
          label="Skills"
          description="CAD, SolidWorks, CATIA, manufacturing, prototyping, testing, QA, and engineering tools."
          type="toolbox"
          target="skills"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[-1, 1, 0.05]}
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
          enableZoom={false}
          enablePan={false}
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