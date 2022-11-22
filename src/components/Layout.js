import Nav from "./Nav";
import ContainerBox from "./ContainerBox";
import Half from "./Half";
import myImage from "./img/me4.png";
import "./Layout.css";
import { useState } from "react";
const Layout = ({ children }) => {
  const [isOverlay, setIsOverlay] = useState(false);
  return (
    <div className="App flex-cent">
    <div style={{display: isOverlay ? "flex": "none"}} className="overlay">
      <div className="overlayForm flex-cent-col">
        <div className="closeMe">
          <h3 onClick={()=>{setIsOverlay(false)}}>X</h3>
        </div>
        <div className="formContainer flex-cent-col">
          <form></form>
        </div>
      </div>
    </div>
      <ContainerBox>
        <Half customClasses="half image-side">
          <div
            className="image-display flex-cent"
            style={{
              background: `url('${myImage}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
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
          </div>
        </Half>
        <Half customClasses="half portfolio-side flex-cent-col">
          <Nav />
          <div className="display-box flex-cent-col">{children}</div>
        </Half>
      </ContainerBox>
    </div>
  );
};

export default Layout;


//<div className="bottom-frame">
//<div className="hire-me" onClick={()=>{setIsOverlay(!isOverlay)}}>
//  <div className="black-wire flex-cent">
//    <h3>HIRE ME</h3>
//  </div>
//</div>
//</div>