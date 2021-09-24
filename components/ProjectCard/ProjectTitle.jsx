import classes from '../../styles/ProjectCard.module.css';

export default function ProjectTitle({ title }) {
  return <h3 className={classes.ProjectTitle}>{title}</h3>;
}
