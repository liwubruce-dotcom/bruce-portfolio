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
    detailSections: [
      {
        title: "Project Overview",
        points: [
          "This project focused on modeling and assembling a complete V12 internal combustion engine in SolidWorks. My goal was to practice the full workflow of complex mechanical part modeling, large assembly organization, motion constraints, and CAD-based kinematic visualization.",
          "Unlike a simple static CAD model, this project required building many separate engine components and making them work together in a realistic assembly structure. The main challenge was not only creating the engine shape, but also understanding how the crankshaft, pistons, connecting rods, valves, and other moving components interact as a mechanical system."
        ],
      },
      {
        title: "Design Goals",
        points: [
          "Model a complex engine assembly with 50+ individual components.",
          "Practice SolidWorks part modeling, assembly mating, and subassembly organization.",
          "Create a mechanically understandable piston-crankshaft motion system.",
          "Use Motion Study to visualize the movement of the engine components.",
          "Produce clean rendered views and exploded assembly visuals for portfolio presentation."
        ],
      },
      {
        title: "Component Modeling",
        points: [
          "I modeled the engine components in SolidWorks from individual part files and then assembled them into a complete V12 engine system. The model included major components such as the cylinder block, pistons, connecting rods, crankshaft, valves, exhaust components, and external engine parts.",
          "Since the project involved many repeated and interacting components, I had to pay attention to part proportions, alignment references, and assembly compatibility. Each part needed to be modeled cleanly enough to fit into the final assembly without causing major interference or mating issues.",
          "This part of the project helped me improve my ability to break down a complex mechanical product into smaller parts and think about how each component should be modeled for assembly rather than only for appearance."
        ],
      },
      {
        title: "Assembly Structure and Constraints",
        points: [
          "After modeling the individual components, I built the full engine assembly using SolidWorks mates and constraints. I organized the engine into related groups of parts so that the assembly would be easier to manage and modify.",
          "The main challenge was setting up the moving parts correctly. The crankshaft, connecting rods, and pistons needed to be aligned so their motion could be understood as one connected mechanical system. I used mates to control rotation, linear movement, and part relationships while keeping the assembly stable.",
          "Through this process, I gained more experience with large assembly management, repeated components, alignment control, and interference checking. It also helped me better understand why assembly structure is important when working with complex mechanical systems."
        ],
      },
      {
        title: "Motion Study and Kinematic Simulation",
        points: [
          "I used SolidWorks Motion Study to visualize the movement of the V12 engine assembly. The simulation focused on kinematic motion, especially the relationship between crankshaft rotation and piston movement.",
          "The purpose of the motion study was not to simulate combustion, thermal behavior, or real engine performance. Instead, I used it as a CAD-based motion visualization tool to check whether the main moving components behaved in a mechanically reasonable way.",
          "This helped me connect CAD modeling with mechanical motion. By seeing the pistons, connecting rods, and crankshaft move together, I developed a stronger understanding of how reciprocating and rotating motion are linked inside an engine."
        ],
      },
      {
        title: "Exploded View and Visualization",
        points: [
          "To present the project more clearly, I created rendered views and exploded assembly visuals of the engine. The exploded view helped show the relationship between the individual components and made the internal structure easier to understand.",
          "The final rendered images were used to communicate the scale and complexity of the assembly. Since this project was mainly a CAD and visualization exercise, the presentation quality was important for showing the modeling process, part relationships, and mechanical layout.",
          "This part of the project helped me improve my visual communication skills in CAD. I learned how exploded views, render angles, and clean screenshots can make a complex mechanical system easier to understand in a portfolio."
        ],
      },
      {
        title: "Final Outcome",
        points: [
          "The final result was a complete SolidWorks V12 engine assembly with 50+ modeled components, organized mates, motion visualization, exploded views, and rendered presentation images.",
          "Through this project, I improved my ability to work with large mechanical assemblies, manage part relationships, and use CAD tools to communicate complex motion. More importantly, it helped me understand that CAD is not only about making parts look correct, but also about building assemblies that can explain how a mechanical system works.",
          "This project strengthened my foundation in SolidWorks assembly design, kinematic simulation, exploded-view presentation, and mechanical visualization, which are directly useful for future product design, automotive, and mechanical engineering work."
        ],
      },
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
    detailSections: [
    {
      title: "Project Overview",
      points: [
        "This project focused on designing and building an interactive Useless Box using Arduino UNO, servo motors, custom 3D-printed parts, and a compact enclosure. The goal was to create a small mechatronic product where the mechanical design, electronics, and programmed servo reactions worked together reliably.",
        "Although the final function of a Useless Box is simple, the design challenge came from fitting all the internal components into a limited space while still allowing the lid, switch, servo arm, and moving parts to operate smoothly. The project required careful CAD layout, mechanical clearance planning, and multiple prototype iterations."
      ],
    },
    {
      title: "Design Goals",
      points: [
        "Design a compact enclosure that could house the Arduino, servo motors, switch, wiring, and moving arm mechanism.",
        "Create a finger-arm mechanism that could reliably reach and toggle the switch.",
        "Ensure the lid could open and close smoothly without interfering with the servo arm.",
        "Design secure internal mounting features for the servo motors and mechanical supports.",
        "Develop multiple programmed reactions so the box behaved differently each time it was activated."
      ],
    },
    {
      title: "CAD and Mechanical Layout",
      points: [
        "I designed the main enclosure, lid, servo mounts, internal supports, and finger-arm mechanism in SolidWorks. Since the entire system had to fit inside a compact 120 × 80 × 60 mm footprint, the internal layout was one of the most important parts of the project.",
        "The servo motor position, switch location, arm length, and lid clearance all had to be considered together. If one component was moved, it could affect whether the arm could reach the switch or whether the lid had enough space to open properly.",
        "This part of the project helped me practice designing around packaging constraints. I had to think not only about individual part geometry, but also about how the full mechanism would fit, move, and assemble inside a small product."
      ],
    },
    {
      title: "Finger Arm Iteration",
      points: [
        "One of the main mechanical challenges was designing the finger arm. The arm needed to extend out of the box, push the switch accurately, and return smoothly without colliding with the lid, enclosure, or internal supports.",
        "I iterated through 4 finger-arm versions to improve the motion and reliability. Earlier versions had issues with reach, clearance, or return motion, so I adjusted the arm geometry, length, and contact position based on testing.",
        "Through these iterations, I learned how small geometry changes can strongly affect the behavior of a servo-driven mechanism. The final design provided smoother actuation and more consistent switch contact."
      ],
    },
    {
      title: "3D Printing and Assembly",
      points: [
        "After completing the CAD design, I fabricated the custom parts using FDM 3D printing on a Bambu Lab A1. The printed components included the enclosure, lid, servo mounts, internal supports, and finger-arm parts.",
        "During assembly, I checked how the printed parts fit together and whether the moving parts had enough clearance. Some dimensions that looked acceptable in CAD needed small adjustments after physical testing because of 3D printing tolerances and real servo motion.",
        "This process helped connect the CAD model to the physical prototype. I gained more experience understanding how printed tolerances, part stiffness, and assembly clearance affect the reliability of a small mechanical system."
      ],
    },
    {
      title: "Arduino and Servo Integration",
      points: [
        "The Useless Box was controlled using an Arduino UNO and servo motors. The servos were programmed to open the lid and move the finger arm toward the switch, creating the self-turning-off behavior.",
        "I integrated 8 servo-driven reaction patterns so the box could respond in different ways instead of repeating the same motion every time. The programmed reactions required the mechanical motion and timing to match the physical limits of the arm and lid mechanism.",
        "This part of the project helped me understand how mechanical design and control logic affect each other. The code could command a motion, but the physical mechanism still needed enough clearance, stiffness, and alignment to perform that motion reliably."
      ],
    },
    {
      title: "Final Outcome",
      points: [
        "The final prototype was a compact interactive Useless Box with a working servo-driven lid and finger-arm mechanism. The custom 3D-printed parts, Arduino control, and servo motions worked together to create multiple reaction behaviors.",
        "Through this project, I gained hands-on experience in mechatronic product design, compact mechanical packaging, servo mechanism design, 3D-printed prototyping, and Arduino-based motion control.",
        "More importantly, this project helped me understand that even a small mechanism requires careful design of clearances, mounting features, motion paths, and assembly constraints. The reliability of the final prototype depended on both the CAD design and the physical behavior of the printed parts."
      ],
    },
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
    detailSections: [
    {
      title: "Project Overview",
      points: [
        "This project focused on designing and building a physical tabletop version of the Flappy Bird game for children aged 6–12. Instead of controlling a digital bird on a screen, the player controls a physical bird mechanism and moves it up and down to avoid moving obstacles.",
        "Our team developed the toy as a mechanical and mechatronic prototype that combined conveyor-belt obstacle motion, a manually controlled bird mechanism, and an electrical stopping system. The main challenge was translating a simple mobile-game interaction into a physical product that could be played safely, reliably, and repeatedly.",
        "The project was developed for a toy design challenge in ME100, where the goal was to propose a viable toy concept for Spin Master. The design needed to be engaging for the target age group while also satisfying mechanical function, safety, and playability requirements."
      ],
    },
    {
      title: "Design Goals",
      points: [
        "Create a physical Flappy Bird-style game where the player avoids moving obstacles by controlling the vertical position of a bird.",
        "Design a conveyor-belt system that could move obstacle blocks smoothly and consistently.",
        "Hold the bird securely while allowing controlled vertical motion within the play area.",
        "Limit horizontal movement of the bird so the player interaction stayed close to the original game concept.",
        "Add a stopping mechanism so the game could stop when the bird collided with an obstacle.",
        "Consider safety requirements for children, including rounded obstacle edges, controlled moving parts, and a safer on/off control system."
      ],
    },
    {
      title: "Conveyor Belt and Obstacle System",
      points: [
        "One of the main mechanical systems in the toy was the conveyor belt that moved the obstacles toward the bird. Our team first tested the conveyor concept using a cardboard prototype, then developed a more complete version using 3D-printed gears, shafts, side panels, and a belt system.",
        "During prototyping, one issue was that the shaft opening was too small for the TT motor diameter. To improve the fit, the shaft diameter was increased by 0.2 mm, allowing the motor and gear to connect more properly through a force-fit relationship.",
        "To improve smooth rotation, bearings were added to support the rotating shafts. The bearing selection was based on measured dimensions, including an 8 mm shaft diameter and a 22 mm side-panel hole, so the parts could fit properly into the conveyor structure.",
        "The belt design also went through iteration. A standard conveyor belt was considered, but it was not practical because of cost and pitch mismatch with the gear design. The team then tested bike tubes as an alternative belt material. The first bike-tube version included ridges to catch the gear teeth, but this caused choppy motion because some ridges missed the teeth. The ridges were later removed to create smoother belt movement."
      ],
    },
    {
      title: "Bird Holding and Vertical Motion Mechanism",
      points: [
        "The bird needed to be held in the play area while still allowing the player to move it up and down. To achieve this, the bird was attached to a stick that passed through a measured vertical slit in the side of the play area.",
        "The slit was designed around the required range of motion. In the final prototype, the bird could move vertically through about a 10 cm range, matching the spacing between the upper and lower obstacle belts. This allowed the player to dodge obstacles while preventing the bird from moving too far outside the intended path.",
        "Several vertical motion ideas were considered before the final mechanism was selected. An early pulley-style concept used a spool and string to pull the bird upward, but this design was difficult to anchor properly and did not provide the responsiveness needed for gameplay.",
        "The final design used a simpler stick-and-straw sliding mechanism. A straw moved vertically through two holes while the stick supported the bird and passed through the side slit. This design limited horizontal movement, improved responsiveness, and made the player control more direct."
      ],
    },
    {
      title: "Stopping Mechanism and Electronics",
      points: [
        "The toy needed a way to stop the game when the player lost. The main concept was to attach a pushbutton near the bird so that when an obstacle collided with the bird, the button would be pressed and the conveyor motors would stop.",
        "An Arduino-based control system was initially considered and tested. The Arduino logic could detect the button state and control motor output, but the available 5 V output did not provide enough power for the TT motors driving both conveyor belts.",
        "To solve the power issue within the project constraints, the final prototype used a separate circuit powered by a 9 V battery. The two TT motors were wired in parallel so both conveyor belts could receive enough power to operate. A master on/off switch was also added so the toy could be turned on and off without requiring the user to interact directly with the battery connection.",
        "The stopping mechanism worked occasionally, but it was not fully consistent. The blocks did not always press the pushbutton with enough force, especially because attaching the blocks too tightly increased belt resistance and caused conveyor motion problems."
      ],
    },
    {
      title: "Testing and Remaining Challenges",
      points: [
        "Testing showed that the conveyor belts and bird mechanism were functional, but several performance issues remained. The moving blocks travelled at an average speed of about 0.2 m/s, which was faster than the intended constraint range of 0.05–0.1 m/s and made the toy more difficult to play.",
        "The conveyor belt also occasionally caught on the side panels, which interrupted gameplay. Timed test runs showed inconsistent running times because of this belt-catching issue.",
        "Another challenge was obstacle synchronization. Since both conveyor belts were powered at the same speed, the obstacle pattern could repeat in the same orientation, reducing variability and replay value.",
        "A potentiometer was tested as a possible speed-control solution, but it was too sensitive. Small adjustments caused the motors to stop instead of smoothly reducing belt speed. Future improvements could include a better speed-control circuit, improved motor control, or a microcontroller-based system with more reliable power delivery."
      ],
    },
    {
      title: "Final Outcome",
      points: [
        "The final prototype successfully demonstrated the core concept of a physical Flappy Bird toy. It included moving conveyor-belt obstacles, a vertically controlled bird mechanism, a compact play structure, TT motor-driven motion, a pushbutton collision concept, and a master power switch.",
        "Although some issues remained, including belt speed, belt alignment, and inconsistent stopping behavior, the project showed that the digital Flappy Bird play pattern could be translated into a physical tabletop toy.",
        "Through this project, I gained experience with early-stage product design, mechanical prototyping, conveyor mechanisms, tolerance adjustment, physical testing, and the relationship between mechanical design and electrical control. More importantly, this project helped me understand how even a simple toy concept requires iteration across mechanism design, safety, user interaction, and real-world manufacturability."
      ],
    },
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
    detailSections: [
    {
      title: "Project Overview",
      points: [
        "This project focused on designing and building an automated card sorter, shuffler, and dealer using LEGO Mindstorms EV3 components, custom 3D-printed parts, laser-cut wooden supports, sensors, and motors. The goal was to reduce the repetitive manual steps involved in card games, including sorting, shuffling, and dealing.",
        "The robot was designed to process a standard deck of playing cards by identifying card orientation, routing cards into the correct path, randomizing the deck through a shuffling mechanism, and dealing cards to multiple players based on user input.",
        "Unlike a simple single-function robot, this project required multiple subsystems to work together. The mechanical design, sensor feedback, motor control, and software logic all had to be integrated so that cards could move through the system in a controlled sequence."
      ],
    },
    {
      title: "Design Goals",
      points: [
        "Create a robot that could sort, shuffle, and deal a standard 52-card deck.",
        "Use a color sensor to detect card orientation and make sure face-up cards were reoriented before shuffling.",
        "Develop a shuffling system that could split the deck and recombine cards in a randomized pattern.",
        "Design a dealing mechanism that could distribute cards evenly to 2–6 players based on user input.",
        "Build a mechanically stable structure using LEGO EV3 components, custom 3D-printed parts, and laser-cut wooden supports.",
        "Use modular software so sorting, shuffling, and dealing could be developed and tested separately."
      ],
    },
    {
      title: "Concept Selection and System Architecture",
      points: [
        "Before building the final robot, our team considered three conceptual layouts for collecting, sorting, shuffling, and dealing cards. The final concept was selected using a decision-making matrix that compared speed, safety, design feasibility, card-handling accuracy, and shuffling randomness.",
        "The selected concept simplified the overall mechanical system by removing the automatic table collection stage. Instead, cards were manually inserted into the first sorting container, which reduced mechanical complexity and made the design more realistic to build with the available EV3 components.",
        "The final system was organized into three major phases: sorting, shuffling, and dealing. This structure made the robot easier to develop, test, and debug because each subsystem had a clear function before being integrated into the full workflow."
      ],
    },
    {
      title: "Sorting System",
      points: [
        "The sorting system began with a black 3D-printed input container where the deck was inserted. A color sensor placed beneath the container detected each card’s orientation, while a motorized wheel and gear-driven roller wheels helped feed cards out of the container.",
        "If the color sensor detected a face-up card, the program routed it through one path so it could be flipped before entering the shared container. If the card was already face-down, it was directed through the opposite path. Both paths led to a blue 3D-printed container, resulting in a more uniformly oriented deck.",
        "This subsystem required careful testing of motor power, motor run time, and wait time. Early tests showed that cards were either not being pushed out far enough or multiple cards were being pushed too quickly. Through testing, the sorting motor settings were increased and adjusted until the mechanism reached a more reliable card-feeding behavior.",
        "My main software contribution was the `sortCards()` function, which controlled the sorting phase so that cards entered the next phase face-down. The report lists `void sortCards()` as the sorting function and identifies Bruce Shi as the author of that function. " 
      ],
    },
    {
      title: "Shuffling System",
      points: [
        "After sorting, the deck moved into a dual-container shuffling module. The design used a piston mechanism to split the deck into two stacks, then used separate EV3 motors to push cards from each container into a funnel ramp.",
        "The shuffling logic used random selection to alternate the number of cards pushed from each container. This allowed the robot to simulate a randomized shuffle before the cards entered the final dealing container.",
        "One of the main mechanical challenges was the piston mechanism. The piston converted motor rotation into linear motion to push part of the deck into a parallel container, but the LEGO structure did not always provide enough stiffness. As a result, the piston could bend or misalign, causing cards to get stuck between the containers.",
        "The shuffling mechanism showed that the concept was mechanically possible, but it also revealed the importance of stiffness, alignment, and card-guiding geometry when working with thin flexible objects like playing cards."
      ],
    },
    {
      title: "Dealing System",
      points: [
        "The dealing system received shuffled cards through a 3D-printed funnel ramp and stored them in a LEGO-built final container. A medium motor powered a wheel that dispensed cards one at a time, while a large motor under the container rotated the platform to distribute cards to different players.",
        "The number of players was entered using a touch sensor. Based on that input, the program calculated the rotation angle needed between player positions and used motor encoder feedback to control the dealer’s rotation.",
        "During testing, the dealing system had to be tuned so that only one card was dispensed at a time. The final tested setting used lower motor power and a shorter motor runtime to reduce the chance of multiple cards being released together.",
        "The dealing logic also needed correction for direction changes. When the dealer reached the end player position, it had to reverse direction and continue distributing cards fairly instead of skipping or misaligning player positions."
      ],
    },
    {
      title: "Software Design and Control Logic",
      points: [
        "The software was written as a modular program with separate phases for sorting, shuffling, and dealing. This made the system easier to test because each mechanism could be debugged individually before running the full robot sequence.",
        "The program used the EV3 color sensor for card orientation detection, the touch sensor for player input, motor encoders for rotation control, and timing arrays to record performance data for the major phases.",
        "The program also included user prompts on the EV3 screen. These prompts became important because the robot used more motors than the EV3 brick could directly support, so some motor connections had to be manually changed between phases.",
        "This software structure helped connect the physical robot to a controlled operating sequence. Instead of simply running motors, the code had to coordinate sensor readings, card movement, timing delays, encoder positions, and user input."
      ],
    },
    {
      title: "Testing and Iteration",
      points: [
        "Testing was performed separately for sorting, shuffling, and dealing. The sorting mechanism was tested by changing motor power, motor run time, and wait time until cards could be pushed out reliably without dragging the previous card back into the mechanism.",
        "The final card orientation test results were consistently above the required 75% accuracy, with test values ranging from 85% to 93%. This showed that the color-sensor-based sorting system was one of the strongest parts of the prototype.",
        "The shuffling system did not fully meet the target time requirement. The average shuffling time was 61.4 seconds, slightly above the 60-second goal, mainly because some cards became stuck or motors did not always push cards out consistently.",
        "The robot was able to hold a full 52-card deck and complete core functions, but full-system reliability remained limited by card jams, motor port limitations, mechanical misalignment, and the need for manual motor switching between phases."
      ],
    },
    {
      title: "Major Challenge: Motor Port Limitation",
      points: [
        "One of the largest system-level challenges was the limited number of motor ports on the EV3 brick. The robot used 8 motors, but the EV3 brick only had 4 motor ports.",
        "Motor multiplexors were tested as a possible solution, but they introduced major issues. Motors connected through the multiplexors ran much slower, wiring became complicated, and some motor commands did not execute reliably.",
        "Because of these issues, the multiplexors were removed from the final design. The team redesigned the workflow so the user manually switched motor connections between the sorting, shuffling, and dealing phases, with on-screen prompts guiding the process.",
        "Although this reduced full automation, it made the robot more reliable during testing and allowed each phase to receive direct motor power from the EV3 brick."
      ],
    },
    {
      title: "Final Outcome",
      points: [
        "The final prototype demonstrated the core functionality of an automated card-handling robot. It could sort cards using color-sensor feedback, shuffle cards through a randomized dual-container mechanism, and deal cards to 2–6 players using a rotating platform.",
        "The robot successfully met important specifications for card orientation accuracy and card capacity. It also demonstrated two full operation cycles, though some cards still required manual assistance due to jams or inconsistent movement.",
        "Through this project, I gained experience with robotic system design, EV3 sensor integration, motor control, 3D-printed mechanism design, laser-cut structural supports, software debugging, and physical testing. More importantly, the project showed how mechanical alignment, software timing, motor power, and sensor feedback all affect the reliability of an automated system."
      ],
    },
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
    detailSections: [
    {
      title: "Project Overview",
      points: [
        "This project focused on creating a detailed automotive 3D model in Blender. The goal was to practice digital surface modeling, vehicle proportion control, material setup, and rendered presentation using a car body as the main modeling subject.",
        "Unlike a purely engineering CAD project, this project focused more on visual modeling, form development, and surface appearance. The challenge was to capture the overall shape, stance, and visual character of the vehicle while keeping the model clean enough for rendering and portfolio presentation.",
        "This project helped me develop a better understanding of automotive exterior form, body lines, reflections, and how small surface changes can strongly affect the final visual impression of a car model."
      ],
    },
    {
      title: "Design Goals",
      points: [
        "Create a visually recognizable automotive 3D model with accurate overall proportions.",
        "Practice Blender modeling tools for curved surfaces, body panels, openings, and exterior details.",
        "Develop a clean vehicle form that could be viewed from multiple angles.",
        "Apply materials and lighting to make the final render look more realistic and presentation-ready.",
        "Improve my ability to communicate automotive design ideas through digital visualization."
      ],
    },
    {
      title: "3D Modeling Process",
      points: [
        "I built the vehicle model in Blender by gradually developing the main body shape and then adding smaller exterior details. The process started with establishing the overall proportions, including the length, width, height, roofline, wheel placement, and general stance of the car.",
        "After the basic form was created, I refined the body surfaces to make the model look more like an automotive exterior rather than a simple block shape. This included adjusting the front profile, side surfaces, rear form, and major feature lines to create a more dynamic appearance.",
        "The modeling process required many small adjustments because automotive surfaces are highly sensitive to proportion and curvature. Even small changes to the hood angle, fender shape, or side profile could noticeably affect the look of the final model."
      ],
    },
    {
      title: "Surface and Proportion Refinement",
      points: [
        "A major focus of this project was controlling the vehicle’s surface flow. I worked on making the body panels visually smooth while keeping important edges and design lines clear enough to define the car’s shape.",
        "The project helped me understand how reflections reveal surface quality. If a surface was uneven or poorly shaped, it became more obvious once materials and lighting were applied. Because of this, I used rendered views to check the model and adjust surface transitions.",
        "This process improved my ability to judge form, curvature, and proportion from a visual design perspective, which is especially useful for automotive and product design work."
      ],
    },
    {
      title: "Detail Modeling",
      points: [
        "After the main body shape was developed, I added exterior details such as wheels, body openings, front and rear features, and other visible design elements. These details helped make the model feel more complete and recognizable.",
        "I balanced detail level with model cleanliness. The goal was not to create every small production detail, but to include enough features to communicate the vehicle design clearly in rendered images.",
        "This part of the project helped me practice breaking a complex object into smaller modeling tasks, including large body surfaces, functional openings, wheel geometry, and smaller styling features."
      ],
    },
    {
      title: "Materials, Lighting, and Rendering",
      points: [
        "To present the model more effectively, I applied materials and lighting in Blender and created rendered views of the final vehicle. Material choices were used to separate the body, glass, wheels, tires, and smaller exterior components.",
        "Lighting was important because it showed the surface quality of the model. By adjusting the render angle and light placement, I could better highlight the body lines, reflections, and overall shape of the vehicle.",
        "This stage helped me improve my visual communication skills. A good render does not only show the object, but also helps the viewer understand the form, surface quality, and design intent."
      ],
    },
    {
      title: "Final Outcome",
      points: [
        "The final result was a complete Blender automotive model with refined exterior surfaces, vehicle proportions, materials, and rendered presentation images.",
        "Through this project, I gained more experience in 3D modeling, surface refinement, automotive visualization, material setup, and rendering workflow.",
        "More importantly, this project helped me understand the difference between engineering CAD and visual 3D modeling. CAD focuses heavily on dimensions, constraints, and manufacturability, while Blender gave me more freedom to explore shape, styling, surface flow, and presentation quality."
      ],
    },
  ],
    gallery: [
      { src: "/project-images/mclaren-model/front-car.jpg", caption: "Solid exterior model, front view" },
      { src: "/project-images/mclaren-model/back-car.jpg", caption: "Solid exterior model, back view" },
      { src: "/project-images/mclaren-model/interior-car.jpg", caption: "Interior model" },
      { src: "/project-images/mclaren-model/rendered.jpg", caption: "Future rendered visualization" }
    ],
  },
];
