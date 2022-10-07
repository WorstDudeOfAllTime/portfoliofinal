import "./App.css";
import Nav from "./components/Nav";
import ContainerBox from "./components/ContainerBox";
import Half from "./components/Half";
import { useState } from "react";
import myImage from "./me4.png";
import apiDulette from "./components/img/apiDulette.PNG";
import restaurantLarge from "./components/img/restaurantLarge.png";
import idiot from "./components/img/idiot.png";
import {Routes, Route} from 'react-router-dom';
import ProjectBox from "./components/ProjectBox";

function App() {
  const [portfolio, setPortfolio] = useState(false);
  const projectArray = [
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
        "A simple API grabber designed to grab two random APIs from GitHub's Popular API list. The intent is to provide a challenge for user to build an app combining those two APIs.",
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
    <div className="App flex-cent">
      <ContainerBox>
        <Half customClasses="half image-side">
          <div
            className="image-display flex-cent"
            style={{
              background: `url('${myImage}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "none",
            }}
          >
            <div className="name-display">
              <h1>KRIS BERTOLINO</h1>
            </div>
            <div className="what-where flex-cent">
              <div className="what half">
                <h2>FULL-STACK WEB DEVELOPER</h2>
              </div>
              <div className="where half">
                <h2>PHILADELPHIA</h2>
              </div>
            </div>
            <div className="bottom-frame">
              <div className="hire-me">
                <div className="black-wire flex-cent">
                  <h3>HIRE ME</h3>
                </div>
              </div>
            </div>
          </div>
        </Half>
        <Half customClasses="half portfolio-side flex-cent-col">
          <Nav setPortfolio={setPortfolio} />
          <div className="display-box flex-cent-col">
            <Routes>
              <Route path="/"></Route>
              <Route path="/portfolio"></Route>
              <Route path="/resume"></Route>
              <Route path="/about"></Route>
              <Route path="/contact"></Route>
            </Routes>
          </div>
        </Half>
      </ContainerBox>
    </div>
  );
}

export default App;
