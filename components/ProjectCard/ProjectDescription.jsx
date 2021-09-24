import classes from '../../styles/ProjectCard.module.css';

export default function ProjectDescription({ desc }) {
  return <p className={classes.ProjectDescription}>{desc}</p>;
}
