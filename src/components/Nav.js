import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = ({ portfolio }) => {
  return (
    <div className="navBox flexCent">
      <nav>
        <ul className="flexCent">
          <li style={{ textDecoration: portfolio ? "underline" : "none" }}>
            <Link className="link" to="/">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <a style={{textDecoration:'none', color:'black'}} target="_blank" href="https://drive.google.com/file/d/1D8__GuYFWGnNwuUs9oK_IIr9ZdPzcMh5/view">
              RESUME
            </a>
          </li>
          <li>
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Nav;