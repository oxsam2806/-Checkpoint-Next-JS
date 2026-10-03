import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="project-card">

      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
      />

      <div className="project-content">

        <h2>{title}</h2>

        <p>{description}</p>

        <div className="technology-list">

          {technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}