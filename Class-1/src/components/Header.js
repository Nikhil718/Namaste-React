import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const TitleLeft = () => {
  return (
    <a href="/">
      <img className="logo-item" alt="logo" src={Logo}></img>
    </a>
  );
};
const Header = () => {
  const [loggedUser, setLoggedUser] = useState(true);

  return (
    <div className="header">
      <TitleLeft />
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
        {loggedUser ? (
          <button
            onClick={() => {
              setLoggedUser(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setLoggedUser(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
