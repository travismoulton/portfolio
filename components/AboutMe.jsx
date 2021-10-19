import classes from '../styles/AboutMe.module.css';
import AboutMePic from './AboutMePic';

export default function AboutMe() {
  return (
    <section className={classes.About} id="About">
      <h2 className="Header">About me</h2>
      <div className={classes.AboutWrapper}>
        <AboutMePic />
        <div className={classes.TextContainer}>
          <p className={classes.Text}>
            I'm a self taught front-end web developer working on learning the
            backend and being able to contribute to the full stack. I love
            solving problems with Javascirpt and exploring technology. I am
            excited at the prospect of working along side other excellent
            developers and taking my skills to the next level. My 10 years of
            exerpience in retail management have given me the opprotunity to
            develop exceptional communication, interpersonal, and orginizational
            skills, and make me an excellent addition to your team.
          </p>
        </div>
      </div>
    </section>
  );
}
