import React from "react";
import { Link } from "react-router";
import ToyCard from "../components/ToyCard";
import MyContainer from "../components/MyContainer";
import useToys from "../hooks/useToys";

const Homepage = () => {
  const { toys, loading, error } = useToys();

  const popularToys = toys.slice(0, 6);
  return (
    <div>
      {
        <MyContainer>
          <div className="flex justify-between my-5">
            <h1 className=" font-bold text-xl">Popular Toys</h1>
            <Link className="btn btn-outline" to="/toys">
              See All Toys
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 place-items-center">
            {popularToys.map((toy) => (
              <ToyCard key={toy.toyId} toy={toy}></ToyCard>
            ))}
          </div>
        </MyContainer>
      }
    </div>
  );
};

export default Homepage;
