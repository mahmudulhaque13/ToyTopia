import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { pictureURL, rating, toyName, availableQuantity, price, toyId } = toy;
  return (
    <div>
      <div>
        <div className="card bg-base-100 w-82 shadow-sm hover:scale-105 transition ease-in-out">
          <figure className="m-auto">
            <img className="h-66 w-120" src={pictureURL} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">{toyName}</h2>

            <div className="flex justify-between">
              <span className="flex justify-center items-center px-1 text-green-600 font-bold border-1 border-gray-200 bg-gray-100 rounded-sm">
                <FiDownload />
                {availableQuantity}M
              </span>
              <span className="p-1 flex justify-center items-center text-[#FF8811] border-1 border-gray-100 rounded-sm bg-[#FFF0E1]  ">
                <FaStar />
                {rating}
              </span>
              <Link to={`/toy/${toyId}`} className="btn">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
