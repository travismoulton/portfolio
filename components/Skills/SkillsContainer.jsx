import classes from '../../styles/Skills.module.css';
import SkillCard from './SkillCard';

const skills = [
  'html',
  'css',
  'sass',
  'javascript',
  'react',
  'rest api',
  'git',
  'firebase',
];

export default function SkillsContainer() {
  return (
    <div className={classes.SkillsContainer}>
      <div className={classes.SkillsRow}>
        <SkillCard skill="html" />
        <SkillCard skill="css" />
        <SkillCard skill="sass" />
        <SkillCard skill="javascript" />
      </div>
      <div className={classes.SkillsRow}>
        <SkillCard skill="react" />
        <SkillCard skill="rest api" />
        <SkillCard skill="git" />
        <SkillCard skill="firebase" />
      </div>
    </div>
  );
}
