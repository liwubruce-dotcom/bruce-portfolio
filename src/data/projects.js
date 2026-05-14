export const projects = [
  {
    id: "ergonomic-mouse",
    title: "Custom Ergonomic Carbon Fiber Mouse",
    type: "Personal Project",
    date: "Jan 2026 – Apr 2026",
    category: "Product Design / Prototyping / CAD / Composites",
    image: "/project-images/ergonomic-mouse/final-mouse.jpg",
    imageLabel: "Mouse Project Image",
    description:
      "Designed and manufactured a fully customized ergonomic mouse tailored to hand geometry, integrating reverse-engineered electronics with a lightweight carbon fiber housing.",
    skills: ["SolidWorks", "Blender", "FDM 3D Printing", "Composite Manufacturing", "Mold Design", "Electronics Repair"],
    detailSections: [
        {
            title: "Electronics Reverse Engineering",
            points: [
                "Salvaged PCB and internal components from a Logitech M546 Wireless Mouse.",
                "Diagnosed and repaired damaged circuitry, restoring full functionality."
        ],
        },
        {
            title: "Ergonomic Design & Digitization",
            points: [
                "Sculpted a hand-fit prototype using clay to capture natural grip geometry.",
                "Converted the physical model into a 3D mesh using AI-based image-to-model tools."
            ]
        },
        {
        title: "3D Modeling & Engineering Design",
            points: [
                "Refined mesh geometry in Blender for smooth surfaces and usability.",
                "Transferred and rebuilt the model in SolidWorks as a parametric design.",
                "Designed internal mounting features, tolerances, and alignment structures based on PCB and components."
            ]
        },
        {
            title: "Iterative Prototyping",
            points: [
                "Fabricated prototypes using FDM 3D printing to validate ergonomics and internal fit.",
                "Iterated designs based on hand feel, structural integrity, and assembly constraints."
            ],
        },
        {
            title: "Composite Manufacturing",
            points: [
                "Designed and fabricated molds for carbon fiber layup.",
                "Manufactured a lightweight, high-strength mouse shell, improving durability and weight performance."
            ],
        },
],
    gallery: [
      { src: "/project-images/ergonomic-mouse/clay.jpg", caption: "Clay hand-fit model" },
      { src: "/project-images/ergonomic-mouse/clay-model.png", caption: "Blender surface refinement" },
      { src: "/project-images/ergonomic-mouse/assembly-mouse.png", caption: "SolidWorks CAD assembly" },
      { src: "/project-images/ergonomic-mouse/exploded-view-mouse.png", caption: "SolidWorks exploded view assembly" },
      { src: "/project-images/ergonomic-mouse/cf-mold-top.png", caption: "Solidworks carbon fiber mold, top part" },
      { src: "/project-images/ergonomic-mouse/cf-mold-right.png", caption: "Solidworks carbon fiber mold, right part" },
      { src: "/project-images/ergonomic-mouse/cf-mold-left.png", caption: "Solidworks carbon fiber mold, left part" },
      { src: "/project-images/ergonomic-mouse/final-mouse.jpg", caption: "Final carbon fiber mouse" }
    ],
  },
  {
    id: "airpods-case",
    title: "Carbon Fiber AirPods Pro 2 Case",
    type: "Personal Project",
    date: "Jun 2025 – Aug 2025",
    category: "Composite Manufacturing / Mold Design",
    image: "/project-images/airpods-case/final-case.jpg",
    imageLabel: "AirPods Case Image",
    description:
      "Designed and manufactured a carbon fiber AirPods Pro 2 case, focusing on CAD mold design, tolerance modeling, and composite fabrication.",
    skills: ["Creo", "SLA / FDM 3D Printing", "Composite Manufacturing", "Mold Design", "Vacuum Bagging", "Hand Layup", "Composite Finishing"],
    details: [
      "Modeled 2 mold versions in Creo, referencing Apple’s official accessory design guidelines to ensure accurate geometry and curvature.",
      "Applied surface offsets and tolerances for 3–4 carbon-fiber layers, and transitioned from a single-block to a modular split-mold to improve release efficiency by ~50%.",
      "Fabricated using SLA 3D printing for refined version, which provided smoother surface finish and tighter dimensional accuracy compared to FDM (initial version), enhancing mold alignment and composite surface quality.",
      "Applied hand layup + vacuum bagging using 3K 200 g/m² twill fiber and AB epoxy resin; cured for 4 hours at 25 °C.",
      "Finished with 400 → 10 000 grit sanding, achieving a mirror-like surface and uniform fiber weave.",
    ],
    gallery: [
      { src: "/project-images/airpods-case/old-mold.jpg", caption: "Initial mold version" },
      { src: "/project-images/airpods-case/new-mold.jpg", caption: "Refined split-mold design" },
      { src: "/project-images/airpods-case/cf-initial.jpg", caption: "The demolded carbon fiber shell" },
      { src: "/project-images/airpods-case/final-case.jpg", caption: "Final polished prototype" }
    ],
  },
  {
    id: "v12-engine",
    title: "V12 Engine CAD & Simulation",
    type: "Personal Project",
    date: "May 2025 – Jun 2025",
    category: "SolidWorks Assembly / Motion Study",
    image: "/project-images/v12-engine/final-engine.jpg",
    imageLabel: "V12 Engine Image",
    description:
      "Modeled and assembled a complete V12 internal combustion engine in SolidWorks to strengthen CAD, motion analysis, and assembly proficiency.",
    skills: ["SolidWorks", "Assembly Design", "Motion Study", "Kinematic Mates"],
    details: [
      "Created and assembled 50+ individual components, including crankshaft, pistons, valves, exhaust manifold, and supercharger assembly.",
      "Applied geometric constraints and mates to replicate piston-crankshaft and valve timing kinematics.",
      "Performed motion study analysis to visualize full rotational cycles."
    ],
    gallery: [
      { src: "/project-images/v12-engine/final-engine.jpg", caption: "Assembled V12 engine" },
      { src: "/project-images/v12-engine/exploded-engine.jpg", caption: "Exploded assembly view" },
    ],
  },
  {
    id: "useless-box",
    title: "Useless Box",
    type: "Group Project, 2 Members",
    date: "Apr 2025",
    category: "Mechatronic Design / Prototyping",
    image: "/project-images/useless-box/final-box.jpg",
    imageLabel: "Useless Box Image",
    description:
      "Designed and built an interactive Useless Box powered by Arduino UNO and servo motors, focusing on mechanical design, and iteration through CAD.",
    skills: ["SolidWorks", "Arduino UNO", "Servo Motors", "Bambu Lab A1", "FDM 3D Printing"],
    details: [
      "Created 7 custom 3D-printed parts in SolidWorks, including enclosure, mounts, and internal supports.",
      "Ensured precise servo positioning and clearance.",
      "Fabricated all parts using a Bambu Lab A1 printer.",
      "Iterated 4 finger-arm versions to achieve smooth actuation and consistent return motion.",
      "Optimized internal layout to maintain a compact 120 × 80 × 60 mm footprint with proper wire routing and motor alignment.",
      "Integrate 8 servo-driven programmed reactions through the Arduino IDE, completing a fully functional prototype."
    ],
    gallery: [
      { src: "/project-images/useless-box/sw-assembly.jpg", caption: "Section view of assembly" },
      { src: "/project-images/useless-box/final-box.jpg", caption: "Final functional prototype" }
    ],
  },
  {
    id: "flappy-bird-toy",
    title: "Flappy Bird Tabletop Toy",
    type: "Team Project, 4 Members",
    date: "Sept 2024 – Dec 2024",
    category: "Mechanical Design / Prototyping",
    image: "/project-images/flappy-bird-toy/final-toy.jpg",
    imageLabel: "Flappy Bird Toy Image",
    description:
      "Developed a physical tabletop toy replicating the digital Flappy Bird game, applying mechanical design and prototyping skills to meet functional and safety requirements.",
    skills: ["SolidWorks", "FDM 3D Printing", "TT Motors", "Circuit Prototyping"],
    details: [
      "Designed 4 custom parts in SolidWorks, including gears, shafts, slider, and side panels.",
      "Applied +0.5 mm tolerance adjustments for TT-motor shaft fit.",
      "Prototyped all components using FDM 3D printing.",
      "Completed 3 design iterations to achieve smooth and reliable conveyor motion.",
      "Prototyped a pushbutton circuit wired for TT motors for collision-based auto-stop."
    ],
    gallery: [
      { src: "/project-images/flappy-bird-toy/final-toy.jpg", caption: "Final assembly photo" }
    ],
  },
  {
    id: "card-sorter",
    title: "Automated Card Sorter, Shuffler & Dealer",
    type: "Team Project, 4 Members",
    date: "Jan 2025 – Apr 2025",
    category: "Robotics / Mechanical Design / Automation",
    image: "/project-images/card-sorter/final-robot.jpg",
    imageLabel: "Card Sorter Image",
    description:
      "Designed and built an autonomous robot capable of sorting, shuffling, and dealing a 52-card deck using LEGO EV3 components, custom 3D-printed parts, and laser-cut supports.",
    skills: ["LEGO EV3", "SolidWorks", "FDM 3D Printing", "Laser Cutting", "Encoder-Based Motor Control"],
    details: [
      "Modeled custom 3D-printed parts including ramp, funnel, rollers, containers, and LEGO connectors.",
      "Integrated EV3 motors and LEGO Technic assemblies.",
      "Mounted the system on a laser-cut wooden base for rigidity and consistent card flow.",
      "Implemented modular code for sorting, shuffling, and dealing phases.",
      "Used encoder-based motor control for precision.",
      "Validated 52-card capacity, orientation accuracy, and cycle reliability."
    ],
    gallery: [
      { src: "/project-images/card-sorter/draft-robot.jpg", caption: "Initial design sketch" },
      { src: "/project-images/card-sorter/flow-chart-robot.jpg", caption: "Complete flow chart" },
      { src: "/project-images/card-sorter/final-robot.jpg", caption: "Final robot assembly" },
    ],
  },
  {
    id: "mclaren-model",
    title: "High-Fidelity 3D Modeling – McLaren 720S Spider",
    type: "Personal Project",
    date: "Apr 2025 – Present",
    category: "3D Modeling / Automotive Visualization",
    image: "/project-images/mclaren-model/front-car.jpg",
    imageLabel: "McLaren Model Image",
    description:
      "Developing a high-detail 3D model of the McLaren 720S Spider in Blender, focusing on advanced surface modeling, geometry control, and visualization.",
    skills: ["Blender", "Surface Modeling", "UV Mapping", "Shaders", "Cycles Rendering"],
    details: [
      "Created 100+ individual body objects, including panels, wheels, lights, and interior features.",
      "Referenced blueprints and images to maintain real-world proportions.",
      "Developing realistic shaders for carbon fiber, paint, glass, and metals.",
      "Working toward Cycles renders for design presentation.",
      "Strengthens spatial reasoning, surface modeling, and visual communication for CAD and product design."
    ],
    gallery: [
      { src: "/project-images/mclaren-model/front-car.jpg", caption: "Solid exterior model, front view" },
      { src: "/project-images/mclaren-model/back-car.jpg", caption: "Solid exterior model, back view" },
      { src: "/project-images/mclaren-model/interior-car.jpg", caption: "Interior model" },
      { src: "/project-images/mclaren-model/rendered.jpg", caption: "Future rendered visualization" }
    ],
  },
];
