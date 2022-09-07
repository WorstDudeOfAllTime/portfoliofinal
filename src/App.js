import "./App.css";
import Nav from "./components/Nav";
import ContainerBox from "./components/ContainerBox";
import Half from "./components/Half";
import { useState } from "react";
import myImage from "./me4.png";
import Resume from "./components/Resume/Resume";
import ReactImageGallery from "react-image-gallery";

function App() {
  const [portfolio, setPortfolio] = useState(false);
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="App flex-cent">
      <ContainerBox>
        <Half customClasses="half">
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
          <div className="display-box">
            <ReactImageGallery items={images} />
          </div>
        </Half>
      </ContainerBox>
    </div>
  );
}

export default App;
