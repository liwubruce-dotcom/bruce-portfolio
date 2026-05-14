import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Float } from "@react-three/drei";
import { useEffect, useState } from "react";

function Shelf() {
  return (
    <group>
      {/* Back panel */}
      <mesh position={[0, 0, -0.38]}>
        <boxGeometry args={[7.6, 4.2, 0.18]} />
        <meshStandardMaterial color="#2a1d18" />
      </mesh>

      {/* Shelves */}
      <mesh position={[0, -1.4, 0]}>
        <boxGeometry args={[7.8, 0.18, 1.25]} />
        <meshStandardMaterial color="#6b4f3f" />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[7.8, 0.18, 1.25]} />
        <meshStandardMaterial color="#6b4f3f" />
      </mesh>

      <mesh position={[0, 1.4, 0]}>
        <boxGeometry args={[7.8, 0.18, 1.25]} />
        <meshStandardMaterial color="#6b4f3f" />
      </mesh>

      {/* Side panels */}
      <mesh position={[-3.9, 0, 0]}>
        <boxGeometry args={[0.18, 4.35, 1.25]} />
        <meshStandardMaterial color="#4a3328" />
      </mesh>

      <mesh position={[3.9, 0, 0]}>
        <boxGeometry args={[0.18, 4.35, 1.25]} />
        <meshStandardMaterial color="#4a3328" />
      </mesh>
    </group>
  );
}

function ProjectModel() {
  return (
    <group>
      {/* Base plate */}
      <mesh position={[0, -0.18, 0]}>
        <boxGeometry args={[1.15, 0.16, 0.75]} />
        <meshStandardMaterial color="#2563eb" roughness={0.35} metalness={0.2} />
      </mesh>

      {/* Main mechanical block */}
      <mesh position={[-0.22, 0.15, 0]}>
        <boxGeometry args={[0.42, 0.5, 0.42]} />
        <meshStandardMaterial color="#64748b" roughness={0.3} metalness={0.45} />
      </mesh>

      {/* Cylindrical component */}
      <mesh position={[0.28, 0.13, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.5, 32]} />
        <meshStandardMaterial color="#1e293b" roughness={0.25} metalness={0.55} />
      </mesh>

      {/* Shaft */}
      <mesh position={[0.28, 0.13, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.8, 32]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Small bracket */}
      <mesh position={[0.02, 0.42, 0]}>
        <boxGeometry args={[0.85, 0.08, 0.12]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.25} />
      </mesh>
    </group>
  );
}

function CameraModel({ color }) {
  return (
    <group>
      <mesh>
        <boxGeometry args={[0.95, 0.55, 0.35]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0.26, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.22, 32]} />
        <meshStandardMaterial color="#020617" />
      </mesh>

      <mesh position={[0.26, 0, 0.38]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.05, 32]} />
        <meshStandardMaterial color="#334155" />
      </mesh>

      <mesh position={[-0.25, 0.36, 0]}>
        <boxGeometry args={[0.28, 0.16, 0.25]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
    </group>
  );
}

function PaperModel() {
  return (
    <group>
      <mesh rotation={[0, 0, -0.08]}>
        <boxGeometry args={[0.72, 0.95, 0.06]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>

      <mesh position={[0, 0.18, 0.04]} rotation={[0, 0, -0.08]}>
        <boxGeometry args={[0.45, 0.035, 0.02]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>

      <mesh position={[0, 0.02, 0.04]} rotation={[0, 0, -0.08]}>
        <boxGeometry args={[0.5, 0.035, 0.02]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>

      <mesh position={[0, -0.14, 0.04]} rotation={[0, 0, -0.08]}>
        <boxGeometry args={[0.38, 0.035, 0.02]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
    </group>
  );
}

function NotebookModel() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[0.72, 0.95, 0.12]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>

      <mesh position={[-0.39, 0, 0.08]}>
        <boxGeometry args={[0.06, 0.95, 0.05]} />
        <meshStandardMaterial color="#93c5fd" />
      </mesh>
    </group>
  );
}

function ToolboxModel() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[0.95, 0.45, 0.45]} />
        <meshStandardMaterial color="#b91c1c" />
      </mesh>

      <mesh position={[0, 0.33, 0]}>
        <boxGeometry args={[0.5, 0.13, 0.16]} />
        <meshStandardMaterial color="#7f1d1d" />
      </mesh>

      <mesh position={[0, 0.02, 0.24]}>
        <boxGeometry args={[0.65, 0.06, 0.04]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </group>
  );
}

function EnvelopeModel() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[0.9, 0.58, 0.06]} />
        <meshStandardMaterial color="#f3f4f6" />
      </mesh>

      <mesh position={[0, -0.02, 0.05]} rotation={[0, 0, 0.78]}>
        <boxGeometry args={[0.48, 0.035, 0.02]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>

      <mesh position={[0, -0.02, 0.05]} rotation={[0, 0, -0.78]}>
        <boxGeometry args={[0.48, 0.035, 0.02]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
    </group>
  );
}

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
    if (type === "project") return <ProjectModel />;
    if (type === "camera") return <CameraModel color="#111827" />;
    if (type === "paper") return <PaperModel />;
    if (type === "notebook") return <NotebookModel />;
    if (type === "toolbox") return <ToolboxModel />;
    if (type === "envelope") return <EnvelopeModel />;
    return null;
  }

  return (
    <group
      position={position}
      scale={hovered ? 1.12 : 1}
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
        speed={hovered ? 2.2 : 1}
        rotationIntensity={hovered ? 0.35 : 0.08}
        floatIntensity={hovered ? 0.25 : 0.08}
      >
        {renderObject()}
      </Float>

      {hovered && (
        <Html position={[0, 1.05, 0]} center>
          <div className="item-tooltip">
            <h3>{label}</h3>
            <p>{description}</p>
          </div>
        </Html>
      )}
    </group>
  );
}

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (size.width < 600) {
      camera.position.set(0, 1.1, 11);
      camera.fov = 55;
    } else if (size.width < 900) {
      camera.position.set(0, 1.1, 9);
      camera.fov = 50;
    } else {
      camera.position.set(0, 1.15, 7);
      camera.fov = 43;
    }

    camera.updateProjectionMatrix();
  }, [camera, size.width]);

  return null;
}

function ShelfScene({ onNavigate }) {
  return (
    <div className="shelf-scene">
      <Canvas
        shadows
        camera={{ position: [0, 1.15, 7], fov: 43 }}
      >
        <color attach="background" args={["#0f172a"]} />
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[4, 6, 5]}
          intensity={1.6}
          castShadow
        />
        <pointLight position={[-3, 2.5, 3]} intensity={0.9} />
        <pointLight position={[3, -1, 2]} intensity={0.35} color="#60a5fa" />

        <ResponsiveCamera />

        <Shelf />

        <ShelfItem
          position={[-2.45, -0.85, 0.55]}
          label="Projects"
          description="Engineering projects including CAD design, FDM prototypes, carbon fiber fabrication, and product development."
          type="project"
          target="projects"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[0, -0.85, 0.55]}
          label="Gallery"
          description="Photos, CAD screenshots, process images, prototypes, and final build results."
          type="camera"
          target="gallery"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[2.45, -0.85, 0.55]}
          label="Resume"
          description="My resume, technical skills, work experience, and downloadable PDF."
          type="paper"
          target="resume"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[-2.45, 0.55, 0.55]}
          label="About Me"
          description="My background, engineering interests, career direction, and design philosophy."
          type="notebook"
          target="about"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[0, 0.55, 0.55]}
          label="Skills"
          description="CAD, SolidWorks, CATIA, manufacturing, prototyping, testing, QA, and engineering tools."
          type="toolbox"
          target="skills"
          onNavigate={onNavigate}
        />

        <ShelfItem
          position={[2.45, 0.55, 0.55]}
          label="Contact"
          description="Email, LinkedIn, and contact information for co-op and engineering opportunities."
          type="envelope"
          target="contact"
          onNavigate={onNavigate}
        />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default ShelfScene;