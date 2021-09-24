import classes from '../../styles/ProjectCard.module.css';

export default function ProjectLink({ link, linkTxt }) {
  return (
    <div className={classes.LinkWrapper}>
      <a className={classes.ProjectLink} href={link} target="_blank">
        {linkTxt}
      </a>
    </div>
  );
}
