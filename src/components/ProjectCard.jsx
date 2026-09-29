function ProjectCard({title, description, technologies, github}){
    return (
        <article className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>

            <div className="technologies">
                {technologies.map((technology) => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>

            <a href={github}>
                View Project
            </a>
        </article>
    );
}

export default ProjectCard;