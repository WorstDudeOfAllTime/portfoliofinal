import './Nav.css';
import { Link } from 'react-router-dom';
const Nav = ({ portfolio }) => {
  return (
    <div className="navBox flexCent">
      <nav>
        <ul className="flexCent">
          <li
            style={{ textDecoration: portfolio ? 'underline' : 'none' }}
          >
            <Link to="/portfolio"> PORTFOLIO</Link>
          </li>
          <li><Link to="/resume">RESUME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
