import SkillImg from './SkillImg';
import classes from '../../styles/Skills.module.css';

export default function SkillCard({ skill }) {
  return (
    <div className={classes.SkillCard}>
      <SkillImg skill={skill} />
      <p className={classes.text}>{skill}</p>
    </div>
  );
}
