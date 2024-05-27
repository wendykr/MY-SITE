import './Projects.scss';
import { projectsData } from '../../constants/projects';
import { Project } from '../Project/Project';

export const Projects: React.FC = () => {
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
        <p className="projects__footer">Neusínám na vavřínech a věnuji se i menším projektům. Podívejte se na můj <a className="link-anchor" href='https://github.com/wendykr/'>GitHub</a>, kde mám tyto projekty připnuté.</p>
    </section>
  )
}