import Image from "next/image";
import checked from "../../public/image/checked.png";
import bike from "../../public/image/bike.png";
import bake from "../../public/image/bake.png";
import delivered from "../../public/image/deliver.png";
import paid from "../../public/image/paid.png";
import styles from "../../styles/Order.module.css";

export default function Oreder() {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <>
      <div className="container grid mb-16 md:mb-12 md:grid-cols-2 my-10">
        <div class="flex flex-col w-auto p-6 ">
          <div className="flex flex-row md:items-center h-auto  lg:items-start md:flex-row md:flex-nowrap flex-wrap ">
            <div className="ml-10 mt-4">
              <h1 className="font-bold  ">Order Id</h1>
              <span>1376347186</span>
            </div>
            <div className="ml-10 mt-4 ">
              <h1 className="font-bold">Order Id</h1>
              <span>1376347186</span>
            </div>
            <div className="ml-10 mt-4">
              <h1 className="font-bold">Order Id</h1>
              <span>1376347186</span>
            </div>
            <div className="ml-10 mt-4">
              <h1 className="font-bold">Order Id</h1>
              <span>1376347186</span>
            </div>
          </div>
          <div className="flex flex-row md:items-center h-auto mt-10   lg:items-start md:flex-row md:flex-nowrap flex-wrap ">
            <div className="ml-10 mt-4">
              <div className={statusClass(1)}>
                <Image src={paid} width={30} height={30} alt="" />
                <span>Payment</span>
                <div className="">
                  <Image
                    className=""
                    src={checked}
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="ml-10 mt-4 ">
              <div className={statusClass(2)}>
                <Image
                  className={styles.checkedicon}
                  src={bake}
                  width={30}
                  height={30}
                  alt=""
                />
                <span>Preparing</span>

                <Image
                  className={styles.checkedicon}
                  src={checked}
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>

            <div className="ml-10 mt-4">
              <div className={statusClass(2)}>
                <Image src={bike} width={30} height={30} alt="" />
                <span>On the way</span>

                <Image
                  //   className={styles.checkedicon}
                  src={checked}
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>

            <div className="ml-10 mt-4">
              <Image
                className={styles.undone}
                src={delivered}
                width={30}
                height={30}
                alt=""
              />
              <span>Delivered</span>
              <Image
                className={styles.undone}
                src={checked}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex-1  lg:flex-row ml-28 mt-8 justify-center sm:flex-col items-start ">
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
            <div className="flex justify-center  text-green-600 hover:bg-yellow-500 bg-white mt-10 w-30 h-10">
              <button className="font-bold  ">PAID</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
