import classes from '../../styles/ProjectCard.module.css';
import ProjectImg from './ProjectImg';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import ProjectLink from './ProjectLink';

export default function ProjectCard({
  img,
  title,
  desc,
  siteLink,
  siteLinkTxt,
  repoLink,
  repoLinkTxt,
}) {
  return (
    <div className={classes.ProjectCard}>
      <div className={classes.CardLeft}>
        <ProjectTitle title={title} />
        <ProjectDescription desc={desc} />
        <div className={classes.ProjectLinks}>
          <ProjectLink link={siteLink} linkTxt={siteLinkTxt} />
          <ProjectLink link={repoLink} linkTxt={repoLinkTxt} />
        </div>
      </div>
      <ProjectImg img={img} />
    </div>
  );
}
