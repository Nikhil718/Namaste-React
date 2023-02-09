import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TitleLeft = () => {
  return (
    <a href="/">
      <img className="h-24 pl-2 py-2" alt="logo" src={Logo}></img>
    </a>
  );
};
const Header = () => {
  const [loggedUser, setLoggedUser] = useState(true);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between  bg-white sm:p-6 dark:bg-gray-600 ">
      <TitleLeft />
      <div className="flex">
        <ul className="flex py-5 ">
          <li className="px-2">
            <Link
              className=" py-2 px-2 bg-gray-400 rounded-2xl text-white  hover:bg-gray-500"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link
              className=" py-2 px-2 bg-gray-400 rounded-2xl text-white  hover:bg-gray-500"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="px-2">
            <Link
              className=" py-2 px-2 bg-gray-400 rounded-2xl text-white hover hover:bg-gray-500"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className=" px-2">
            <Link
              className=" py-2 px-2 bg-gray-400 rounded-2xl text-white  hover:bg-gray-500"
              to="/cart"
            >
              Cart-
              <span className=" rounded-full bg-red-600 p-2 text-sm ">
                {cartItems.length} items
              </span>
            </Link>
          </li>
          <li className="px-2">
            <Link
              className=" py-2 px-2 bg-gray-400 rounded-2xl text-white hover hover:bg-gray-500"
              to="/help"
            >
              Help
            </Link>
          </li>
          <li className=" px-2">
            {loggedUser ? (
              <button
                className="pr-4"
                onClick={() => {
                  setLoggedUser(false);
                }}
              >
                <span className="py-2 px-2  bg-red-400 rounded-2xl text-white  ">
                  Logout
                </span>
              </button>
            ) : (
              <button
                className="pr-4"
                onClick={() => {
                  setLoggedUser(true);
                }}
              >
                <span className="py-2 px-2 pr-2 bg-green-400 rounded-2xl text-white ">
                  Login
                </span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
