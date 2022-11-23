import ProjectBox from "./ProjectBox";
import apiDulette from "./img/apiDulette.PNG";
import restaurantLarge from "./img/restaurantLarge.png";
import idiot from "./img/idiot.png";
import fridgeapp from './img/fridgess.png';
import "./ProjectDisplay.css";
const ProjectDisplay = () => {
  const projectArray = [
    {
      name: "NEXT UP: Community Fridge Locator",
      imgSrc: fridgeapp,
      description:
        "Current work in progress: Community Fridge/Pantry aggregator with social media/web links.",
      link: "https://philly-fridge-locator.web.app/"
    },
    {
      name: "Worst Restaurant",
      imgSrc: restaurantLarge,
      description:
        "MIT xPro Capstone Project 1/2. A restaurant aggregation application utilizing NextJS and Firestore.",
      link: "https://restaurant-redux.vercel.app/",
    },
    {
      name: "API Dulette",
      imgSrc: apiDulette,
      description:
        "A simple API grabber designed to pull two APIs from GitHub's Popular API list as an app building challenge.",
      link: "https://api-dulette.vercel.app/",
    },
    {
      name: "What An Idiot",
      imgSrc: idiot,
      description:
        "Had a bad week and decided to have a little fun about it. My idiot face and a plethora of Shakespearen era insults.",
      link: "https://what-an-idiot.vercel.app/",
    },
  ];
  return (
    <div className="flex-cent-col displayBox">
      <h1 style={{ textDecoration: "underline" }}>PORTFOLIO</h1>
      <div className="contentBox flex-cent-col">
        {projectArray.map((project) => {
          return <ProjectBox project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectDisplay;
