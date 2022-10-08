import Nav from './Nav';
import ContainerBox from './ContainerBox';
import Half from './Half';
import myImage from './img/me4.png';
import './Layout.css'
const Layout = ({children}) => {
  return (
    <div className="App flex-cent">
      <ContainerBox>
        <Half customClasses="half image-side">
          <div
            className="image-display flex-cent"
            style={{
              background: `url('${myImage}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'none',
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
          <Nav />
          <div className="display-box flex-cent-col">{children}</div>
        </Half>
      </ContainerBox>
    </div>
  );
};

export default Layout;
