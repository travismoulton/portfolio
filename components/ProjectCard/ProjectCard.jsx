import classes from '../../styles/ProjectCard.module.css';
import ProjectImg from './ProjectImg';
import ProjectTitle from './ProjectTitle';

export default function ProjectCard({ img, title }) {
  return (
    <div className={classes.ProjectCard}>
      <ProjectTitle title={title} />
      <ProjectImg img={img} />
    </div>
  );
}
