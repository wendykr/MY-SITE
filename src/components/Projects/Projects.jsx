import './Projects.scss';
import { projectsData } from '../../constants/projects';
import { Project } from '../Project/Project';

export const Projects = () => {
  return (
    <section id="projects" className="projects">
        <h2 className="title">Projekty</h2>
        <p className="description">... na kterých získávám praktické zkušenosti.</p>
        {
          projectsData
            .sort((a, b) => b.id - a.id)
            .map(project => (
              <Project
                key={project.id}
                name={project.name}
                skills={project.skills}
                description={project.description}
                linkWeb={project.linkWeb}
                linkGH={project.linkGH}
                screen={project.screen}
                order={project.id % 2 === 0}
              />
            ))
        }
    </section>
  )
}