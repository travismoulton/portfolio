import classes from '../styles/MyWork.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

const mtgDesc =
  'A search engine for Magic The Gathering Cards. Allows the user to search for cards based on multpile card attributes. The user can view a list of cards, or view details on a single card. The user also has the ability to create an account and manage their inventory and track the dollar value of their cards. More information found in the README on the Github Repo';

const workoutDesc =
  "An app that allows the user to search through a database of exercises, track their favorites for easy access, and assemble workouts made up of those exercises. The user can also create a routine and record workouts. The app will suggest the days workout based on the settings in the user's routine. More information can be found the in the README on the Github Repo";

const MTGDetails = {
  img: 'MTGImage',
  title: 'MTG Power Search',
  desc: mtgDesc,
  siteLink: 'https://mtgpowersearch.com',
  siteLinkTxt: 'Live Site',
  repoLink: 'https://github.com/travismoulton/magic',
  repoLinkTxt: 'Github Repo',
};

const workoutPlannerDetails = {
  img: 'WorkoutImg',
  title: 'The Workout Planner',
  desc: workoutDesc,
  siteLink: 'https:/the-workout-planner.com',
  siteLinkTxt: 'Live Site',
  repoLink: 'https://github.com/travismoulton/workout-rebuild',
  repoLinkTxt: 'Github Repo',
};
export default function MyWork() {
  return (
    <section className={classes.MyWork} id="MyWork">
      <h2 className={classes.Header}>My work</h2>
      <ProjectCard {...MTGDetails} />
      <ProjectCard {...workoutPlannerDetails} />
    </section>
  );
}
