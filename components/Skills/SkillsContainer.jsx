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
      {skills.map((skill) => (
        <SkillCard skill={skill} />
      ))}
    </div>
  );
}
