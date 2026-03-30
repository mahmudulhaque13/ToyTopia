import React from "react";
import MyContainer from "./MyContainer";

import MyLink from "./MyLink";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-sky-300">
      {
        <MyContainer className="flex items-center justify-between py-2">
          <figure>
            {/* <img src="" alt="" /> */}
            <h3 className="font-bold text-lg text-orange-400">ToyTopia</h3>
          </figure>
          <ul className="flex items-center gap-3 font-semibold">
            <li>
              <MyLink to={"/"} className="">
                Home
              </MyLink>
            </li>
            <li>
              <MyLink to={"/toys"} className="">
                Toys
              </MyLink>
            </li>
            <li>
              <MyLink to={"/profile"} className="">
                Profile
              </MyLink>
            </li>
          </ul>
          <button className="btn bg-orange-400 text-white px-5 py-3 rounded-md font-semibold">
            <Link to={"/signin"}>Sign In</Link>
          </button>
        </MyContainer>
      }
    </div>
  );
};

export default Navbar;
