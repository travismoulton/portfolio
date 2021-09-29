import classes from '../styles/AboutMe.module.css';
import AboutMePic from './AboutMePic';

export default function AboutMe() {
  return (
    <section className={classes.About} id="About">
      <h2 className={classes.Header}>About me</h2>
      <AboutMePic />
      <div className={classes.TextContainer}>
        <p className={classes.Text}>
          I'm a self taught front-end web developer with the goal of learning
          the backend and being able to contribute on the full stack. I love
          solving problems with Javascirpt and building beautiful front ends. I
          am excited at the prospect of working along side other excellent
          developers and taking my skills to the next level. My 10 years of
          exerpience in retail management have given me the opprotunity to
          develop exceptional communication, interpersonal, and orginizational
          skills, and make me an excellent addition to your team.
        </p>
      </div>
    </section>
  );
}