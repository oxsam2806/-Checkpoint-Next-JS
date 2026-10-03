import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="page-section">

      <div className="page-container">

        <h1>My Projects</h1>

        <p className="section-intro">
          Here are some of the projects I have worked on.
        </p>

        <div className="projects-grid">

          <ProjectCard
            title="E-Commerce Website"
            description="A modern e-commerce application with product listings, shopping cart and API integration."
            image="/project1.jpg"
            technologies={[
              "React",
              "TypeScript",
              "Redux",
              "Axios",
            ]}
          />

          <ProjectCard
            title="Todo Application"
            description="A task management application built to practice Redux state management."
            image="/project2.jpg"
            technologies={[
              "React",
              "Redux",
              "JavaScript",
            ]}
          />

          <ProjectCard
            title="Blog API"
            description="A backend API for creating and managing blog posts and users."
            image="/project3.jpg"
            technologies={[
              "Node.js",
              "Express",
              "MongoDB",
            ]}
          />

        </div>

      </div>

    </section>
  );
}