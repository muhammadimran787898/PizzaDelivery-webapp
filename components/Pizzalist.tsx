import React from "react";
import { Pizzacard } from "./Pizzacard";
const Pizzalist = () => {
  return (
    <>
      <h1 className=" font-bold text-4xl text-center mt-28 mb-6 md:text-wrap">
        THE BEST PIZZA IN TOWN
      </h1>

      <p className="flex flex-row justify-center my-5  text-xl sm:flex-wrap mx-1 text-gradient-to-r from-orange-500 to-pink-300 ">
        The most exciting part about ordering pizza is when it comes knocking on
        your door at the middle of the night there’s eights beautiful yummy slic
      </p>

      <div className="container lg:w-full  mb-3 px-4 py-4 mx-auto flex md:items-center lg:flex-row md:flex-col md:flex-nowrap ">
        <div className="flex flex-wrap justify-center  order-first">
          <Pizzacard />
          <Pizzacard />
          <Pizzacard />
          <Pizzacard />
          <Pizzacard />
          <Pizzacard />
          <Pizzacard />
          <Pizzacard />
          <Pizzacard />
          <Pizzacard />
          <Pizzacard />
          <Pizzacard />
          <Pizzacard />
        </div>
      </div>
    </>
  );
};

export default Pizzalist;
