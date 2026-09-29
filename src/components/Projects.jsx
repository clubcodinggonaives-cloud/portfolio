import {useState} from 'react';
import {projects} from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects(){

    const [showAll, setShowAll] = useState(false);

    const visibleProjects = showAll
    ? projects
    : projects.slice(0, 2);

    return (
        <section className="section">
            <div className="section-header">
                <p className="section-label">
                    MY WORK
                </p>
                <h2>Featured Projects</h2>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      github={project.github}
                      />
                ))}
            </div>

            <div className="projects-action">
  <a href="#projects" className="view-more-projects">
    <span>View More Projects</span>
    <span className="button-arrow">→</span>
  </a>
</div>
        </section>
    );
}

export default Projects;