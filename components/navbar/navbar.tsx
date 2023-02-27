import Image from "next/image";
import cart from "../../public/image/cart.png";
import pizza from "../../public/image/pza.png";
import { useRouter } from "next/router";
import { resolveHref } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function Navbar() {
  const route = useRouter();

  return (
    <>
      <header className="w-full h-max first-letter:  text-gray-600 body-font  right-0 top-0 bg-gradient-to-r from-orange-500 to-pink-300 h-26  ">
        <div className="container static mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center">
          <div>
            <Image
              src={pizza}
              className="rounded-full"
              alt="piz"
              width={80}
              height={80}
            />
          </div>

          <nav className="md:ml-auto flex flex-wrap  items-center text-base   text-yellow-100 justify-center ">
            <Link href="/" className="mr-5  hover:text-gray-800 ">
              Homepage
            </Link>
            <Link
              href="/products"
              onClick={() => route.push("/products")}
              className="mr-5   hover:text-gray-800 "
            >
              Product
            </Link>
            <Link href="/manue" className="mr-5  hover:text-gray-800    ">
              Manue
            </Link>

            {/* <Link href="/blog" className="mr-5   hover:text-gray-800  ">
              Blog
            </Link> */}
            <Link href="/contact" className="mr-5   hover:text-gray-800">
              Contact
            </Link>
          </nav>

          <div className="inline-flex relative items-centerborder-0 py-1 px-4 focus:outline-none  rounded text-base mt-2 ml-6 md:mt-0">
            {/* <Image className='flex-end' src="./cart.png" width={10} height={10} alt="" /> */}
            <Image
              src={cart}
              className="ml-2 mb-3"
              width={40}
              height={40}
              alt="basket logo"
            />
            <div className=" text-white font-bold text-center h-6 w-6 bg-black rounded-full   absolute  top-0  right-4 ">
              2
            </div>
            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> */}
          </div>
        </div>
      </header>
    </>
  );
}
