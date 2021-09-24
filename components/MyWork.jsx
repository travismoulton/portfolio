import classes from '../styles/MyWork.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

export default function MyWork() {
  return (
    <section className={classes.MyWork} id="MyWork">
      <h2 className={classes.Header}>My work</h2>
      <ProjectCard img="MTGPowerSearch" title="MTG Power Search" />
    </section>
  );
}
