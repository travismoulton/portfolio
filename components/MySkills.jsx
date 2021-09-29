import classes from '../styles/MySkills.module.css';
import SkillsContainer from './Skills//SkillsContainer';

export default function MySkills() {
  return (
    <section className={classes.MySkills} id="MySkills">
      <h2 className="Header">My Skills</h2>
      <SkillsContainer />
    </section>
  );
}
