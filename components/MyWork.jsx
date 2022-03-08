import classes from '../styles/MyWork.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

const mtgDesc =
  'A search engine for Magic The Gathering Cards. Allows the user to search for cards based on one or multpile card attributes. The user can view a list of cards, or view details on a single card. The user also has the ability to create an account and manage their inventory and track the dollar value of their cards. More information found in the README on the Github Repo';

const workoutDesc =
  "An app that allows the user to search through a database of exercises, track their favorites for easy access, and assemble workouts made up of those exercises. The user can also create a routine and record workouts. The app will suggest the days workout based on the settings in the user's routine. More information can be found the in the README on the Github Repo";

const threadedChatDesc =
  "A simple reddit clone built as a full stack MERN app. This app features an authentication system built with JWT utilizing cookies. This app features a threaded comment structure, gives users the ability to create groups, post threads, and comment on other user's comments and threads More information can be found the in the README on the Github Repo";
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
  siteLink: 'https://the-workout-planner.com',
  siteLinkTxt: 'Live Site',
  repoLink: 'https://github.com/travismoulton/workout-rebuild',
  repoLinkTxt: 'Github Repo',
};

const threadedChatDetails = {
  img: 'thredditImg',
  title: 'Threaded Chat',
  desc: threadedChatDesc,
  siteLink: 'https://www.threddit.win',
  siteLinkTxt: 'Live Site',
  repoLink: 'https://github.com/travismoulton/social-media-frontend',
  repoLinkTxt: 'Github Repo',
};
export default function MyWork() {
  return (
    <section className={classes.MyWork} id="MyWork">
      <h2 className="Header">My work</h2>
      <ProjectCard {...MTGDetails} />
      <ProjectCard {...workoutPlannerDetails} />
      <ProjectCard {...threadedChatDetails} />
    </section>
  );
}
