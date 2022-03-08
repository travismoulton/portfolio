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
  frontEndRepo,
  backEndRepo,
}) {
  return (
    <div className={classes.ProjectCard}>
      <div className={classes.CardLeft}>
        <ProjectTitle title={title} />
        <ProjectDescription desc={desc} />
        <div className={classes.ProjectLinks}>
          <ProjectLink link={siteLink} linkTxt={siteLinkTxt} />
          {repoLink && <ProjectLink link={repoLink} linkTxt={repoLinkTxt} />}
          {frontEndRepo && (
            <ProjectLink link={frontEndRepo} linkTxt="Front End Repo" />
          )}
          {backEndRepo && (
            <ProjectLink link={backEndRepo} linkTxt="Back End Repo" />
          )}
        </div>
      </div>
      <ProjectImg img={img} />
    </div>
  );
}
