import React from "react";
import MyContainer from "./MyContainer";

import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div>
      {
        <MyContainer className="flex items-center justify-between py-2">
          <figure>
            {/* <img src="" alt="" /> */}
            <h3 className="font-bold text-lg text-orange-400">ToyTopia</h3>
          </figure>
          <ul className="flex items-center gap-2.5 font-semibold">
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
          <button className="btn bg-orange-400 text-white px-4 py-2 rounded-md font-semibold">
            Sign In
          </button>
        </MyContainer>
      }
    </div>
  );
};

export default Navbar;
