import classes from '../styles/MyWork.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

const mtgDesc =
  "This project is built using Flask and Python on the backend with vanilla JS, html, and SASS on the front. I used BEM for naming classes. The databse is postgres with SQLAlchemy used in flask as an ORM. User passwords are encrypted by sha_256 to keep them secure. The app is deployed on heroku, and the SSL is through cloudflare. It also features a built by hand webpack config. The backend uses celery to update the user's inventory value once per day (only if they login) asynchronously upon arrival to the site.";

const workoutDesc =
  'This project is built using React Hooks, and Redux for state management using the redux toolkit. I used Firebase for the database and Auth system. There are robust rules inside the database to properly protect the data. I also used React-Select, React-Icons, and React-Transition-Group. I used "CSS" modules for styling, with custom properties inside of index.css. There is extensive testing using Jest and react-testing-library';

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
  siteLink: 'https::/the-workout-planner.com',
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
