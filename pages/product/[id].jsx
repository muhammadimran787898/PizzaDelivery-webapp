import Image from "next/image";
import React from "react";
import pizza from "../../public/image/pizza2.jpg";
import pizzasize from "../../public/image/size.png";

export default function Product() {
  return (
    <div class="grid mb-16   md:mb-12 md:grid-cols-2 my-10 ">
      <div class="flex flex-row items-baseline justify-center p-8 text-center  ">
        <div class="flex flex-col max-w-2xl mx-auto mb-4">
          <Image
            class="rounded"
            src={pizza}
            alt="profile picture"
            widht={500}
            height={500}
          />
        </div>
      </div>
      <div class="flex flex-col items-baseline justify-start sm:flex-col my-4 ">
        <blockquote class="max-w-2xl mb-2 text-gray-500 lg:mb-2 dark:text-gray-400 sm:ml-6 ">
          <h3 class="text-4xl font-bold text-gray-900 ">FRIEDJELIPENIO</h3>
          <h1 class="my-4 font-ligh  text-gray-900">$ 4678</h1>
          <p className="sm:text-center">
            ljsdf bthw djhagbfa jhbhzydgx jkhuxghc jkbuuzxc bsdf csdhyh
            hjdsfgbsd hjbdgfus hjbuyds fhjdfb fhbsuyf hjfbsdb hysf bsdh
          </p>
        </blockquote>

        <h1 className="text-2xl font-bold text-gray-900 mb-2 mt-2 ">
          Choose the size
        </h1>
        <div className="flex flex-row justify-between sm:flex-col cursor-pointer">
          <div className="relative mx-4">
            <Image src={pizzasize} widht={30} height={30} className="" />
            <span className="bg-orange-500 text-center rounded w-10 h-6 absolute bottom-4 left-2 text-black">
              small
            </span>
          </div>
          <div className="relative ml-3">
            <Image src={pizzasize} widht={30} height={30} className="" />
            <span className="bg-orange-500 text-center rounded w-15 h-6 absolute bottom-4 left-2 text-black">
              medium
            </span>
          </div>{" "}
          <div className="relative ml-11">
            <Image src={pizzasize} widht={30} height={30} className="" />
            <span className="bg-orange-500 text-center rounded w-12 h-6 absolute bottom-4 left-2 text-black">
              large
            </span>
          </div>
          <div className="relative ml-12">
            <Image src={pizzasize} widht={30} height={30} className="" />
            <span className="bg-orange-500 text-center rounded w-20 h-6 absolute bottom-4 left-2 text-black">
              X-large
            </span>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6 mt-6">
          Choose additional ingredients
        </h1>
        <div className="flex flex-row justify-between  sm:flex-col">
          <div className="ml-1">
            <input className="" type={"checkbox"} />
            EXYTRS CHEEZE
          </div>
          <div className="ml-4">
            <input className="" type={"checkbox"} />
            EXYTRS CHEEZE
          </div>
          <div className="ml-4">
            <input className=" " type={"checkbox"} />
            EXYTRS CHEEZE
          </div>
          <div className="ml-4">
            <input className="" type={"checkbox"} />
            EXYTRS CHEEZE
          </div>
        </div>
        <div className="my-3">
          <input
            className="w-12 h-8 text-center text-black border"
            type="number"
            defaultValue="1"
          />
          <button
            type="button"
            class="text-white bg-orange-700 hover:bg-rose-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-2 py-2  text-center ml-4 mb-2 dark:bg-600 dark:hover:bg-amber-700 dark:focus:ring-orange-800"
          >
            ADD to cart
          </button>
        </div>
      </div>
    </div>
  );
}
