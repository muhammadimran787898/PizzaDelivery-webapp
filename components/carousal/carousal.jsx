import Image from "next/image";
import { useState } from "react";
import pizzaone from "../../public/image/pizza1.jpg";
import pizzatwo from "../../public/image/pizza2.jpg";
import pizzathree from "../../public/image/pizza3.jpg";
import pizzafour from "../../public/image/pizza4.jpg";
import pizzafive from "../../public/image/oo.jpg";
import Link from "next/link";

// import pizza from "../../public/image/pizza.mp4";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function Carousal() {
  return (
    <div className="relative items-center flex flex-row justify-center ">
      <Image
        className="w-full h-full  "
        src={pizzafive}
        alt="..."
        width={0}
        height={0}
      />
      <div className="absolute sm:bottom-20 left-16  lg:bottom-3/4">
        <p className="  font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-700 to-white ">
          Sliced or Whole, Take It All!
        </p>
        <p className="ont-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-black to-slate-800 ">
          <Link href={""}>you wana try!!!</Link>
        </p>
      </div>
    </div>
  );
}
