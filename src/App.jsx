import { lazy, Suspense, useState } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import "./App.css";

const ShelfScene = lazy(() => import("./components/ShelfScene"));
import { projects } from "./data/projects";
import { travelCountries } from "./data/travelGallery";

function QuickMenu({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", page: "" },
    { label: "About Me", page: "about" },
    { label: "Projects", page: "projects" },
    { label: "Gallery", page: "gallery" },
    { label: "Resume", page: "resume" },
    { label: "Skills", page: "skills" },
    { label: "Contact", page: "contact" },
  ];

  function handleNavigate(page) {
    onNavigate(page);
    setIsOpen(false);
  }

  return (
    <div className="quick-menu">
      <button
        className="quick-menu-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰ Menu
      </button>

      {isOpen && (
        <div className="quick-menu-panel">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="quick-menu-item"
              onClick={() => handleNavigate(item.page)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function HomePage({ onNavigate }) {
  return (
    <section className="shelf-homepage">
      <QuickMenu onNavigate={onNavigate} />

      <div className="intro-panel">
        <p className="eyebrow">Mechanical Engineering Portfolio</p>
        <h1>Bruce Shi</h1>

        <p>
          Explore my engineering work through an interactive 3D shelf. Each
          object represents a different part of my portfolio, including projects,
          skills, resume, gallery, and contact information.
        </p>

        <div className="homepage-tags">
          <span>CAD Design</span>
          <span>Prototyping</span>
          <span>Manufacturing</span>
          <span>Automotive</span>
        </div>

        <p className="shelf-instruction">
          Hover over an object to preview it. Click an object to open that
          section.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="shelf-scene shelf-loading">
            <p>Loading 3D shelf...</p>
          </div>
        }
      >     
        <ShelfScene onNavigate={onNavigate} />
      </Suspense>
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

function ProjectRoutePage() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const selectedProject = projects.find((project) => project.id === projectId);

  if (!selectedProject) {
    return (
      <SectionPage
        title="Project Not Found"
        subtitle="Error"
        description="The project you are looking for does not exist."
        onBack={() => navigate("/projects")}
      />
    );
  }

  return (
    <ProjectDetailPage
      project={selectedProject}
      onBackToProjects={() => navigate("/projects")}
    />
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

function AboutPage({ onBack }) {
  return (
    <section className="page">
      <button className="back-button" onClick={onBack}>
        ← Back to Shelf
      </button>

      <div className="about-layout">
        <div className="about-photo-card">
          <img
            src="/profile/selfie.jpg"
            alt="Bruce Shi"
            className="about-selfie"
          />

          <div className="about-profile-info">
            <h2>Bruce Shi</h2>
            <p>Mechanical Engineering Student</p>
            <span>University of Waterloo</span>
          </div>
        </div>

        <div className="about-content">
          <p className="eyebrow">About Me</p>
          <h1>Designing, building, and improving mechanical systems.</h1>

          <p>
            I am a Mechanical Engineering student at the University of Waterloo,
            focused on CAD design, product development, prototyping,
            manufacturing, and engineering problem-solving. I enjoy taking an
            idea from concept to physical prototype through modeling, testing,
            iteration, and hands-on fabrication.
          </p>

          <p>
            My work combines engineering design with practical manufacturing
            experience. Through co-op experience, design projects, and personal
            builds, I have worked with CAD modeling, engineering drawings,
            GD&T, BOM management, quality inspection, 3D printing, composite
            manufacturing, and mechanical assembly.
          </p>

          <p>
            I am especially interested in automotive engineering and product
            design. I love cars, and my dream car is the Bugatti Chiron. Outside
            of coursework and projects, I regularly follow automotive technology
            news to learn how new vehicles, powertrains, materials, aerodynamics,
            manufacturing methods, and intelligent systems are developing.
          </p>

          <div className="about-highlight-grid">
            <div className="about-highlight">
              <h3>Engineering Focus</h3>
              <p>CAD, product design, prototyping, manufacturing, and R&D.</p>
            </div>

            <div className="about-highlight">
              <h3>Hands-On Style</h3>
              <p>Build, test, evaluate, and improve through iteration.</p>
            </div>

            <div className="about-highlight">
              <h3>Automotive Interest</h3>
              <p>Cars, vehicle technology, performance engineering, and design.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage({ onBack, onNavigate }) {
  return (
    <section className="page">
      <button className="back-button" onClick={onBack}>
        ← Back to Shelf
      </button>

      <div className="contact-layout">
        <div className="contact-main">
          <p className="eyebrow">Get in Touch</p>
          <h1>Let’s connect.</h1>

          <p>
            I am open to mechanical engineering co-op opportunities related to
            CAD design, product development, R&D, prototyping, manufacturing,
            quality engineering, and automotive systems.
          </p>

          <p>
            If you are interested in my projects, resume, or engineering
            experience, feel free to contact me by email or connect with me on
            LinkedIn.
          </p>

          <div className="contact-button-row">
            <a
              className="contact-button primary-contact-button"
              href="mailto:liwubruce@gmail.com"
            >
              Email Me
            </a>

            <a
              className="contact-button secondary-contact-button"
              href="https://www.linkedin.com/in/xubin-shi-1bb935329"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>

            <button
              className="contact-button secondary-contact-button"
              onClick={() => onNavigate("resume")}
            >
              View Resume
            </button>
          </div>
        </div>

        <div className="contact-card-column">
          <article className="contact-info-card">
            <span>Email</span>
            <h2>liwubruce@gmail.com</h2>
            <p>Best way to reach me for co-op and engineering opportunities.</p>
          </article>

          <article className="contact-info-card">
            <span>LinkedIn</span>
            <h2>Bruce Shi</h2>
            <p>Connect with me professionally and view my engineering updates.</p>
          </article>

          <article className="contact-info-card">
            <span>Availability</span>
            <h2>Open to Co-op Roles</h2>
            <p>
              Seeking mechanical design, R&D, CAD, manufacturing, and automotive
              engineering opportunities.
            </p>
          </article>

          <article className="contact-info-card">
            <span>Location</span>
            <h2>Worldwide</h2>
            <p>
              Available for in-person, hybrid, or commute-based opportunities
              depending on the role.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function GalleryPage({ onBack, onNavigate, onOpenCountry }) {
  return (
    <section className="page">
      <button className="back-button" onClick={onBack}>
        ← Back to Shelf
      </button>

      <div className="page-header">
        <p className="eyebrow">Photo Gallery</p>
        <h1>Visual Work & Travel</h1>
        <p>
          A visual space for engineering project photos, CAD screenshots,
          prototypes, travel memories, and interactive map-based photo
          collections.
        </p>
      </div>

      <div className="gallery-feature-grid">
        <article className="gallery-feature-card engineering-gallery-card">
          <div className="gallery-feature-content">
            <p className="gallery-card-label">Engineering Gallery</p>
            <h2>Project Photos</h2>
            <p>
              Browse CAD screenshots, prototypes, fabrication process images,
              final builds, and detailed project galleries.
            </p>

            <button
              className="gallery-action-button"
              onClick={() => onNavigate("projects")}
            >
              View Projects →
            </button>
          </div>
        </article>

        <article className="gallery-feature-card travel-gallery-card">
          <div className="gallery-feature-content">
            <p className="gallery-card-label">Travel Gallery</p>
            <h2>Map-Based Travel Photos</h2>
            <p>
              Explore travel photos by country, map pins, locations, and photo
              albums.
            </p>

            <button
              className="gallery-action-button"
              onClick={() =>
                document.getElementById("travel-maps")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              View Travel Maps →
            </button>
          </div>
        </article>
      </div>

      <div className="country-section" id="travel-maps">
        <div className="gallery-header">
          <p className="eyebrow">Travel Maps</p>
          <h2>Countries</h2>
          <p>
            Select a country to open an interactive map. Hover over a red pin to
            see the location name, then click it to open that location’s photos.
          </p>
        </div>

        <div className="country-grid">
          {travelCountries.map((country) => (
            <article
              className="country-card clickable-country-card"
              key={country.id}
              onClick={() => onOpenCountry(country.id)}
            >
              <div className="country-map-placeholder">
                {country.mapImage ? (
                  <img
                    className="country-card-map-image"
                    src={country.mapImage}
                    alt={`${country.name} map`}
                  />
                ) : (
                  <span>{country.coverLabel}</span>
                )}
              </div>

              <div className="country-card-content">
                <p className="country-status">{country.status}</p>
                <h3>{country.name}</h3>
                <p>{country.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TravelCountryRoutePage() {
  const navigate = useNavigate();
  const { countryId } = useParams();

  const country = travelCountries.find((item) => item.id === countryId);

  if (!country) {
    return (
      <SectionPage
        title="Country Not Found"
        subtitle="Travel Gallery"
        description="The country map you are looking for does not exist."
        onBack={() => navigate("/gallery")}
      />
    );
  }

  return (
    <section className="page">
      <button className="back-button" onClick={() => navigate("/gallery")}>
        ← Back to Gallery
      </button>

      <div className="page-header">
        <p className="eyebrow">Travel Map</p>
        <h1>{country.name}</h1>
        <p>{country.description}</p>
      </div>

      <div className="travel-map-card">
        <div className="travel-map-area">
        {country.mapImage ? (
          <img
            className="travel-map-image"
            src={country.mapImage}
            alt={`${country.name} map`}
          />
        ) : (
          <div className="travel-map-placeholder">
            <span>{country.name}</span>
          </div>
        )}

        {country.locations.map((location) => (
          <button
            className="map-pin"
            key={location.id}
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
            }}
            onClick={() => navigate(`/gallery/${country.id}/${location.id}`)}
            aria-label={location.name}
          >
            <span className="pin-dot"></span>
            <span className="pin-tooltip">{location.name}</span>
          </button>
        ))}
      </div>

      {country.mapCredit && (
        <p className="map-credit">
          {country.mapCredit.includes("Vemaps") ? (
            <a
              href="https://vemaps.com"
              target="_blank"
              rel="noreferrer"
            >
              {country.mapCredit}
            </a>
          ) : (
            country.mapCredit
          )}
        </p>
      )}
    </div>

      <div className="location-list-section">
        <h2>Locations</h2>
        <div className="location-card-grid">
          {country.locations.map((location) => (
            <article
              className="location-card"
              key={location.id}
              onClick={() => navigate(`/gallery/${country.id}/${location.id}`)}
            >
              <h3>{location.name}</h3>
              <p>{location.description}</p>
              <span>View photos →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TravelLocationRoutePage() {
  const navigate = useNavigate();
  const { countryId, locationId } = useParams();

  const country = travelCountries.find((item) => item.id === countryId);
  const location = country?.locations.find((item) => item.id === locationId);

  if (!country || !location) {
    return (
      <SectionPage
        title="Location Not Found"
        subtitle="Travel Gallery"
        description="The travel location you are looking for does not exist."
        onBack={() => navigate("/gallery")}
      />
    );
  }

  return (
    <section className="page">
      <button
        className="back-button"
        onClick={() => navigate(`/gallery/${country.id}`)}
      >
        ← Back to {country.name} Map
      </button>

      <div className="page-header">
        <p className="eyebrow">{country.name}</p>
        <h1>{location.name}</h1>
        <p>{location.description}</p>
      </div>

      <div className="travel-masonry-gallery">
        {location.photos.map((photo, index) => {
          const photoSrc = typeof photo === "string" ? photo : photo.src;

          return (
            <figure
              className="travel-masonry-item"
              key={`${location.id}-photo-${index}`}
            >
              {photoSrc ? (
                <img
                  src={photoSrc}
                  alt={`${location.name} travel photo ${index + 1}`}
                  loading="lazy"
                />
              ) : (
                <div className="travel-photo-placeholder">
                  <span>Photo Placeholder</span>
                </div>
              )}
            </figure>
          );
        })}
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
  const navigate = useNavigate();

  function goToPage(page) {
    navigate(`/${page}`);
  }

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<HomePage onNavigate={goToPage} />}
        />

        <Route
          path="/projects"
          element={
            <ProjectsPage
              onBack={() => navigate("/")}
              onOpenProject={(projectId) => navigate(`/projects/${projectId}`)}
            />
          }
        />

        <Route
          path="/projects/:projectId"
          element={<ProjectRoutePage />}
        />

        <Route
          path="/skills"
          element={<SkillsPage onBack={() => navigate("/")} />}
        />

        <Route
          path="/resume"
          element={<ResumePage onBack={() => navigate("/")} />}
        />

        <Route
          path="/about"
          element={<AboutPage onBack={() => navigate("/")} />}
        />

        <Route
          path="/contact"
          element={
            <ContactPage
              onBack={() => navigate("/")}
              onNavigate={goToPage}
            />
          }
        />

        <Route
          path="/gallery"
          element={
            <GalleryPage
              onBack={() => navigate("/")}
              onNavigate={goToPage}
              onOpenCountry={(countryId) => navigate(`/gallery/${countryId}`)}
            />
          }
        />

        <Route path="/gallery/:countryId" element={<TravelCountryRoutePage />} />

        <Route
          path="/gallery/:countryId/:locationId"
          element={<TravelLocationRoutePage />}
        />

        <Route
          path="*"
          element={
            <SectionPage
              title="Page Not Found"
              subtitle="404"
              description="The page you are looking for does not exist."
              onBack={() => navigate("/")}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;