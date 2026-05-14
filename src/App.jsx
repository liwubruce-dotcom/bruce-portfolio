import { useState } from "react";
import "./App.css";
import ShelfScene from "./components/ShelfScene";
import { projects } from "./data/projects";

function HomePage({ onNavigate }) {
  return (
    <section className="shelf-homepage">
      <div className="intro-panel">
        <p className="eyebrow">Mechanical Engineering Portfolio</p>
        <h1>Bruce Shi</h1>
        <p>
          Explore my work through an interactive engineering shelf. Each object
          represents a different part of my portfolio.
        </p>
      </div>

      <ShelfScene onNavigate={onNavigate} />
    </section>
  );
}

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <img
        className="project-card-image"
        src={project.image}
        alt={project.title}
      />
    );
  }

  return (
    <div className="project-card-image project-image-placeholder">
      <span>{project.imageLabel}</span>
    </div>
  );
}

function ProjectsPage({ onBack, onOpenProject }) {
  return (
    <section className="page">
      <button className="back-button" onClick={onBack}>
        ← Back to Shelf
      </button>

      <div className="page-header">
        <p className="eyebrow">Engineering Work</p>
        <h1>Projects</h1>
        <p>
          A collection of my engineering projects involving CAD, prototyping,
          composite manufacturing, mechatronics, robotics, and automotive
          visualization.
        </p>
      </div>

      <div className="project-card-grid">
        {projects.map((project) => (
          <article className="portfolio-project-card" key={project.id}>
            <ProjectImage project={project} />

            <div className="project-card-content">
              <p className="project-card-meta">
                {project.type} · {project.date}
              </p>

              <h2>{project.title}</h2>

              <p className="project-card-category">{project.category}</p>

              <p className="project-card-description">
                {project.description}
              </p>

              <div className="skill-list">
                {project.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <button
                className="more-button"
                onClick={() => onOpenProject(project.id)}
              >
                More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GalleryImage({ image, projectTitle }) {
  if (image.src) {
    return (
      <figure className="gallery-item">
        <div className="gallery-image-frame">
          <img
            src={image.src}
            alt={`${projectTitle} - ${image.caption}`}
          />
        </div>
        <figcaption>{image.caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="gallery-item gallery-placeholder">
      <div className="gallery-image-frame placeholder-frame">
        <span>Image Placeholder</span>
        <p>{image.caption}</p>
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

function ProjectDetailPage({ project, onBackToProjects }) {
  return (
    <section className="page">
      <button className="back-button" onClick={onBackToProjects}>
        ← Back to Projects
      </button>

      <div className="project-detail-layout">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="project-detail-meta">
            {project.type} · {project.date}
          </p>
          <p className="project-detail-summary">{project.description}</p>

          <div className="skill-list detail-skills">
            {project.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <ProjectImage project={project} />
      </div>

      <div className="detail-section">
  <h2>Project Details</h2>

  {project.detailSections ? (
    <div className="detail-section-list">
      {project.detailSections.map((section) => (
        <div className="detail-subsection" key={section.title}>
          <h3>{section.title}</h3>
          <ul>
            {section.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ) : (
    <ul>
      {project.details.map((detail) => (
        <li key={detail}>{detail}</li>
      ))}
    </ul>
  )}
</div>

      <div className="project-gallery-section">
        <div className="gallery-header">
          <p className="eyebrow">Visual Process</p>
          <h2>Project Gallery</h2>
          <p>
            Photos, CAD screenshots, prototypes, process images, and final
            results for this project.
          </p>
        </div>

        <div className="project-gallery-grid">
          {project.gallery.map((image) => (
            <GalleryImage
              key={image.caption}
              image={image}
              projectTitle={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsPage({ onBack }) {
  const skillCategories = [
    {
      title: "CAD, FEA & 3D Modeling",
      description:
        "Tools used for mechanical design, assembly modeling, simulation, surfacing, and visualization.",
      skills: [
        "SolidWorks",
        "AutoCAD",
        "Creo",
        "CATIA",
        "Ansys",
        "Blender",
        "FEA",
        "Motion Study",
        "Surface Modeling",
        "Assembly Design",
        "Engineering Drawings",
      ],
    },
    {
      title: "Engineering Tools & Standards",
      description:
        "Engineering documentation, design management, manufacturing standards, and design-for-manufacturing knowledge.",
      skills: [
        "Windchill PLM",
        "BOM Management",
        "GD&T",
        "DFM",
        "ISO Standards",
        "Root Cause Analysis",
        "Failure Analysis",
        "Manufacturing Validation",
        "Engineering Change Tracking",
      ],
    },
    {
      title: "Prototyping & Fabrication",
      description:
        "Hands-on manufacturing and prototyping skills used to turn CAD designs into physical parts.",
      skills: [
        "FDM 3D Printing",
        "SLA 3D Printing",
        "CNC Machining",
        "Laser Cutting",
        "Composite Manufacturing",
        "Carbon Fiber Hand Layup",
        "Carbon Fiber Vacuum Bagging",  
        "Machine Shop Tools (Drill Press, Lathe, Mill)",
        "Fixture Design",
        "Mold Design",
      ],
    },
    {
      title: "Quality, Inspection & Testing",
      description:
        "Inspection and validation skills developed through manufacturing and quality assurance experience.",
      skills: [
        "CMM Inspection",
        "Calipers",
        "Micrometers",
        "Height Gauges",
        "Dimensional Inspection",
        "Metallurgical Inspection",
        "Weld Quality Evaluation",
        "Heat Treatment Evaluation",
        "Tolerance Checking",
        "Quality Documentation",
      ],
    },
    {
      title: "Programming & Electronics",
      description:
        "Programming, robotics, embedded systems, and technical computing tools used in design projects.",
      skills: [
        "Python",
        "Java",
        "C++",
        "MATLAB",
        "ROBOTC",
        "Arduino",
        "Arduino IDE",
        "LEGO EV3",
        "Servo Motors",
        "Circuit Prototyping",
      ],
    },
    {
      title: "General & Professional Skills",
      description:
        "General tools and communication skills that support engineering work, documentation, and design presentation.",
      skills: [
        "MS Office",
        "Excel",
        "Word",
        "PowerPoint",
        "Digital Drawing",
        "Sketching",  
        "Team Collaboration",
        "Design Presentation",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section className="page">
      <button className="back-button" onClick={onBack}>
        ← Back to Shelf
      </button>

      <div className="page-header">
        <p className="eyebrow">Technical Toolkit</p>
        <h1>Skills</h1>
        <p>
          A summary of my CAD, engineering, prototyping, programming,
          manufacturing, and quality-related skills developed through co-op
          experience, design projects, and personal engineering work.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article className="skill-card" key={category.title}>
            <div className="skill-card-header">
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>

            <div className="skill-chip-list">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResumePage({ onBack }) {
  const resumes = [
    {
      title: "English Resume",
      description:
        "CAD-focused mechanical engineering resume for co-op, design, R&D, manufacturing, and product development roles.",
      file: "/resumes/bruce-shi-resume-en.pdf",
    },
    {
      title: "Chinese Resume",
      description:
        "Chinese version of my resume for employers, recruiters, and engineering opportunities requiring Chinese-language materials.",
      file: "/resumes/bruce-shi-resume-cn.pdf",
    },
  ];

  return (
    <section className="page">
      <button className="back-button" onClick={onBack}>
        ← Back to Shelf
      </button>

      <div className="page-header">
        <p className="eyebrow">Professional Summary</p>
        <h1>Resume</h1>
        <p>
          Download or view my English and Chinese resumes. These documents
          summarize my mechanical engineering education, co-op experience,
          CAD skills, prototyping experience, and project work.
        </p>
      </div>

      <div className="resume-grid">
        {resumes.map((resume) => (
          <article className="resume-card" key={resume.title}>
            <div className="resume-preview">
              <iframe
                src={`${resume.file}#toolbar=0&navpanes=0`}
                title={resume.title}
              />
            </div>

            <div className="resume-card-content">
              <h2>{resume.title}</h2>
              <p>{resume.description}</p>

              <div className="resume-button-row">
                <a
                  className="resume-button primary-resume-button"
                  href={resume.file}
                  target="_blank"
                  rel="noreferrer"
                >
                  View PDF
                </a>

                <a
                  className="resume-button secondary-resume-button"
                  href={resume.file}
                  download
                >
                  Download
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionPage({ title, subtitle, description, onBack }) {
  return (
    <section className="page">
      <button className="back-button" onClick={onBack}>
        ← Back to Shelf
      </button>

      <div className="page-header">
        <p className="eyebrow">{subtitle}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const pages = {
    gallery: {
      title: "Photo Gallery",
      subtitle: "Visual Work",
      description:
        "This page will include project photos, CAD screenshots, prototypes, manufacturing process images, and final build photos.",
    },
    resume: {
      title: "Resume",
      subtitle: "Professional Summary",
      description:
        "This page will contain my resume, downloadable PDF, technical skills, work experience, and contact information.",
    },
    about: {
      title: "About Me",
      subtitle: "Background",
      description:
        "This page will explain my engineering background, interests in automotive systems, product design, CAD, prototyping, and future career direction.",
    },
    skills: {
      title: "Skills",
      subtitle: "Technical Toolkit",
      description:
        "This page will summarize my technical skills, including SolidWorks, CATIA, CAD drawings, FDM 3D printing, composites, QA, manufacturing, and engineering documentation.",
    },
    contact: {
      title: "Contact",
      subtitle: "Get in Touch",
      description:
        "This page will include my email, LinkedIn, resume link, and other professional contact information.",
    },
  };

  if (currentPage === "projects") {
    return (
      <ProjectsPage
        onBack={() => setCurrentPage("home")}
        onOpenProject={(projectId) => setCurrentPage(`project-${projectId}`)}
      />
    );
  }

  if (currentPage.startsWith("project-")) {
    const projectId = currentPage.replace("project-", "");
    const selectedProject = projects.find((project) => project.id === projectId);

    return (
      <ProjectDetailPage
        project={selectedProject}
        onBackToProjects={() => setCurrentPage("projects")}
      />
    );
  }

if (currentPage === "skills") {
  return <SkillsPage onBack={() => setCurrentPage("home")} />;
}

if (currentPage === "resume") {
  return <ResumePage onBack={() => setCurrentPage("home")} />;
}

if (currentPage !== "home") {
  const page = pages[currentPage];

  return (
    <SectionPage
      title={page.title}
      subtitle={page.subtitle}
      description={page.description}
      onBack={() => setCurrentPage("home")}
    />
  );
}

  return (
    <main>
      <HomePage onNavigate={setCurrentPage} />
    </main>
  );
}

export default App;