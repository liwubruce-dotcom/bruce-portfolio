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
    skills: ["Product Design", "Prototyping","SolidWorks", "Blender", "FDM 3D Printing", "Composite Manufacturing", "Mold Design", "Electronics Repair"],
    detailSections: [
      {
        title: "Project Overview",
        points: [
          "This project focused on designing and manufacturing a fully customized ergonomic wireless mouse. The goal was to create a mouse shell tailored to my hand geometry while reusing and integrating electronics from an existing Logitech M546 wireless mouse.",
           "Instead of only changing the external shape, I approached this project as a full-cycle product development process. I repaired the original electronics, generated an ergonomic shape, refined the design digitally, engineered the internal mounting structure, tested multiple prototypes, and fabricated a final carbon fiber composite shell. The final design reduced weight by approximately 20% compared to the original mouse while improving the custom fit and product feel."
        ],
      },
      {
        title: "Project Goals",
        points: [
          "Create an ergonomic mouse shape customized to my hand.",
          "Repair and reuse electronics from a Logitech M546 wireless mouse.",
          "Convert an organic hand-fit shape into a manufacturable CAD model.",
          "Design internal mounting features for the PCB, scroll wheel, switches, and other components.",
          "Validate the design through multiple 3D-printed prototypes.",
          "Manufacture a lightweight carbon fiber shell with improved strength and appearance."
        ]
      },
      {
        title: "Electronics Repair and Reverse Engineering",
        points: [
          "I started by disassembling a Logitech M546 wireless mouse and salvaging the PCB, scroll wheel, switches, and internal components. Before designing the new shell, I had to restore the electronics to working condition.",
          "The original mouse had several issues, including broken solder joints, scroll wheel problems, and damaged internal parts. I repaired the solder joints, fixed the scroll wheel issue, and replaced broken components to restore full functionality. After confirming that the electronics worked, I used the original PCB and internal layout as the foundation for the new mechanical design.",
          "This step was important because the new shell had to be designed around real electronic components rather than a simplified placeholder model. The position of the PCB, switches, scroll wheel, battery area, and mounting points directly influenced the internal structure of the mouse."
        ]
      },
      {
        title: "Ergonomic Shape Development",
        points: [
          "The external shape was developed around real hand geometry and natural grip comfort. I first used clay to physically capture my hand position and grip shape, including palm support, finger placement, and the overall contact areas between my hand and the mouse body.",
          "After creating the clay model, I used AI-based image-to-3D tools to generate the initial digital ergonomic form. This gave me a rough 3D model based on the physical hand-fit shape. I then refined the model in Blender by adjusting surface smoothness, proportions, finger contact areas, palm support, and overall size.",
          "This process helped me convert a physical ergonomic reference into a digital model that could later be rebuilt and engineered for manufacturing. The main challenge was balancing external comfort with internal packaging, because the shell still needed enough space for the PCB, buttons, scroll wheel, battery components, mounting features, and assembly clearances."
        ],
      },
      {
        title: "CAD Design and Internal Packaging",
        points: [
          "After refining the exterior form, I transferred the design into SolidWorks to create the engineering features needed for assembly. The internal structure was designed around the reused Logitech electronics, including PCB supports, internal mounts, scroll wheel clearance, button alignment, and shell assembly features.",
          "A key focus was internal fit accuracy. I designed the internal mounting features with approximately 0.4 mm fit accuracy for the PCB and related components. This required multiple checks between the physical electronics and the CAD model to ensure the components could fit securely without interfering with button movement or scroll wheel function.",
          "This stage helped connect the ergonomic exterior design with the practical mechanical requirements inside the product."
        ],
      },
      {
        title: "Prototype Iteration and Validation",
        points: [
          "I used FDM 3D printing to test the design before manufacturing the final carbon fiber shell. Over the project, I completed more than 10 prototype iterations.",
          "Each prototype was used to test different aspects of the design, including hand feel, ergonomic comfort, PCB fit, button alignment, scroll wheel clearance, structural rigidity, and assembly feasibility. Some prototypes helped identify clearance issues, while others were used to refine the exterior surface and improve the overall grip.",
          "The iterative prototyping process was one of the most important parts of the project. It allowed me to quickly test design assumptions, identify problems, and improve the model before committing to the final composite version."
        ],
      },
      {
        title: "Carbon Fiber Shell Manufacturing",
        points: [
          "After the 3D-printed prototypes confirmed the fit and ergonomics, I designed and fabricated molds for the final carbon fiber shell. The carbon fiber version was intended to reduce weight while improving stiffness, strength, and surface appearance compared to the original plastic mouse shell.",
          "The final carbon fiber composite shell reduced the overall weight by approximately 20% compared to the original Logitech mouse. It also gave the product a more rigid and premium feel while preserving the custom ergonomic shape developed through the earlier design iterations."
        ],
      },
      {
        title: "Key Challenges",
        points: [
          "One of the biggest challenges was integrating real electronics into a completely new shell. The internal components were not designed for this custom shape, so I had to carefully design mounting features, clearances, and alignment structures around the existing PCB and scroll wheel.",
          "Another challenge was converting the ergonomic shape into a manufacturable model. The AI-generated form provided a useful starting point, but it required significant refinement in Blender and further engineering in SolidWorks before it could become a functional product.",
          "Prototype iteration was also essential. Small changes in button position, scroll wheel clearance, or shell thickness could affect the feel and function of the mouse. By testing more than 10 prototypes, I was able to improve the design step by step before moving to carbon fiber fabrication."
        ],
      },
      {
        title: "Final Outcome",
        points: [
          "The final result was a functional custom ergonomic wireless mouse with repaired Logitech M546 electronics, a custom-designed internal structure, and a carbon fiber composite shell. The project combined product design, electronics repair, CAD modeling, tolerance planning, rapid prototyping, and composite manufacturing.",
          "This project helped me understand the full connection between design intent and physical product performance. I learned how ergonomic shape, internal packaging, tolerances, prototype testing, material selection, and manufacturing method all affect whether a product can be successfully built and used."
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
    detailSections: [
        {
            title: "Project Overview",
            points: [
                "This project focused on designing and manufacturing a custom carbon fiber case for the AirPods Pro 2. My goal was to practice the full process of CAD mold design, tolerance planning, composite hand layup, and surface finishing on a small consumer product with curved geometry and tight fit requirements.",
                "Unlike a regular 3D-printed case, this project required designing a mold that could account for carbon fiber thickness, resin buildup, mold release, and final surface quality. The challenge was not only making the case look good, but also making sure the final carbon fiber part could fit properly after curing and finishing."
        ],
        },
        {
            title: "Design Goals",
            points: [
                "Create a carbon fiber shell that closely matched the AirPods Pro 2 case geometry.",
                "Design molds with enough clearance for 3–4 layers of carbon fiber.",
                "Ensure the final case could open and close properly with the internal components.",
                "Produce a smooth final surface with a visible and uniform carbon fiber weave."
            ]
        },
        {
        title: "CAD Mold Design",
            points: [
                "I modeled the mold geometry in Creo using Apple’s official accessory design guidelines as a reference for the case shape, curvature, and overall proportions. Since carbon fiber layup adds material thickness, I could not directly copy the outside geometry of the AirPods case. Instead, I applied surface offsets and tolerance allowances to account for the carbon fiber layers and resin."
            ]
        },
        {
            title: "Mold Release Challenge and Iteration",
            points: [
                "One of the main challenges in this project was mold release. During the first version, the carbon fiber part was difficult to remove from the mold after curing because the FDM-printed mold surface had visible layer lines, which increased friction and made the cured composite more likely to catch during demolding.",
                "My first improvement was to change the FDM print orientation so the layer lines were aligned with the mold release direction. This reduced the tendency for the carbon fiber part to mechanically lock against the printed surface and made the release process smoother.",
                "However, the FDM mold still had surface roughness that affected both mold release and final surface quality. To improve this, I changed the refined mold from FDM printing to SLA printing. The SLA mold provided a smoother surface finish and higher dimensional accuracy, which reduced friction during demolding and improved the final composite surface.",
                "I also redesigned the mold from a single-piece structure into a multi-piece split mold. This made the mold easier to open after curing, reduced the risk of damaging the carbon fiber part during removal, and improved the overall repeatability of the manufacturing process.",
                "Through these iterations, I learned that mold release is strongly affected by print orientation, surface roughness, mold geometry, and release direction. The final SLA split-mold design made the layup and demolding process much more practical while also improving the surface quality of the finished carbon fiber case."
            ],
        },
        {
            title: "Composite Manufacturing",
            points: [
                "For the final part, I used 3K 200 g/m² twill carbon fiber with AB epoxy resin. I cut the carbon fiber sheets to fit the mold geometry and placed them into the mold using a hand layup process. After applying resin, I used vacuum bagging to compact the layers, improve resin distribution, and reduce excess resin.",
                "The part was cured for approximately 4 hours at 25°C. After curing, I removed the part from the mold and completed surface finishing through progressive sanding from 400 grit to 10,000 grit. This process helped smooth the surface, improve gloss, and bring out the carbon fiber weave pattern."
            ],
        },
        {
            title: "Final Outcome",
            points: [
                "The final prototype was a lightweight carbon fiber AirPods Pro 2 case with a smooth glossy finish and visible twill weave pattern. Through this project, I gained hands-on experience in mold design, tolerance planning, composite layup, vacuum bagging, and surface finishing.",
                "More importantly, this project helped me understand how CAD decisions affect real manufacturing results. Mold structure, offsets, surface finish, release direction, and material thickness all had a direct impact on whether the final part could be successfully manufactured and assembled."
            ],
        },
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
    skills: ["Mechatronic Design", "Prototyping", "SolidWorks", "Arduino UNO", "Servo Motors", "Bambu Lab A1", "FDM 3D Printing"],
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
    skills: ["Mechanical Design", "Prototyping", "SolidWorks", "FDM 3D Printing", "TT Motors", "Circuit Prototyping"],
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
    skills: ["Robotics", "Mechanical Design", "Automation", "LEGO EV3", "SolidWorks", "FDM 3D Printing", "Laser Cutting", "Encoder-Based Motor Control"],
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
    skills: ["Blender", "Automotive Visualization", "Surface Modeling", "UV Mapping", "Shaders", "Cycles Rendering"],
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
