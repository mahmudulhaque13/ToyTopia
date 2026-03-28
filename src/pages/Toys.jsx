import React from "react";

import useToys from "../hooks/useToys";
import MyContainer from "../components/MyContainer";
import ToyCard from "../components/ToyCard";

// const toyPromise = fetch("/ToyData.json").then((res) => res.json());
const Toys = () => {
  const { toys } = useToys("toys");

  return (
    <div>
      {
        <MyContainer>
          <div className="flex justify-between my-6">
            <h1 className=" font-bold text-xl">All Toys</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 place-items-center">
            {toys.map((toy) => (
              <ToyCard key={toy.toyId} toy={toy}></ToyCard>
            ))}
          </div>
        </MyContainer>
      }
    </div>
  );
};

export default Toys;
