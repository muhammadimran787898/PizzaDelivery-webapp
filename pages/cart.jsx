import Image from "next/image";
import React from "react";
import img from "../public/image/pizza3.jpg";

export const cart = () => {
  return (
    <div className="grid mb-16 ml-12  md:mb-12 md:grid-cols-2 my-10 ">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-black">
          <thead class="text-xs text-black uppercase ">
            <tr>
              <th scope="col" class="text-lg px-6 py-3 rounded-l-lg">
                Product
              </th>
              <th scope="col" class="text-lg px-6 py-3">
                Name
              </th>
              <th scope="col" class="text-lg px-6 py-3 rounded-r-lg">
                Extras
              </th>
              <th scope="col" class="text-lg px-6 py-3 rounded-r-lg">
                Price
              </th>
              <th scope="col" class="text-lg px-6 py-3 rounded-r-lg">
                Quantity
              </th>
              <th scope="col" class="text-lg px-6 py-3 rounded-r-lg">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
              >
                <Image src={img} width={100} height={100} alt="..." />
              </th>
              <td class="px-6 py-4  text-black">1</td>
              <td class="px-6 py-4 text-black">$2999</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>

              <td class="px-6 py-4  text-black  ">1</td>
              <td class="px-6 py-4  text-black">$1999</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4  text-black">1</td>
              <td class="px-6 py-4  text-black">$99</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="font-semibold text-black dark:text-white">
              <th scope="row" class="px-6 py-3 text-base">
                Total
              </th>
              <td class="px-6 py-3">3</td>
              <td class="px-6 py-3">21,000</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex-1  lg:flex-row ml-28 mt-24 justify-center sm:flex-col items-start ">
        <div class="block max-w-sm p-6 bg-slate-800 border border-gray-200 rounded-lg shadow ">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            CART TOTAL
          </h5>

          <div className="flex">
            <p class="font-normal text-white ">Subtotal</p>
            <span className="font-normal ml-4 text-white ">${20.19}</span>
          </div>
          <div className="flex">
            <p class="font-normal text-white ">Discount</p>
            <span className="font-normal ml-4 text-white ">${20.19}</span>
          </div>
          <div className="flex">
            <p class="font-normal text-white ">Total</p>
            <span className="font-normal ml-4 text-white ">${20.19}</span>
          </div>
          <div className="flex justify-center  text-orange-700 hover:bg-yellow-500 bg-white mt-10 w-30 h-10">
            <button className="font-bold  ">Checkout Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
