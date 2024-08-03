"use client";
import { FaUser, FaUserMinus, FaUsers } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import { BiSolidDollarCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
type Props = {
  title: string;
  amount: string | number;
  invoice: number;
  money?: boolean;
};

export const OvierViewItem = ({ title, amount, invoice, money }: Props) => {
  const [data, setData] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      if (data <= Number(amount)) {
        setData((prev) => prev + 1);
      }
    }, 40);
  }, [amount, data]);

  return (
    <>
      <div className="w-80 mx-auto space-y-4  text-center sm:text-start  px-5 py-5">
        <h3 className="font-montserrat flex gap-1 justify-center  items-center uppercase  text-slate-800 font-semibold">
          <span className="xl:text-2xl text-lg">{title}</span>
          <span>
            {title === "Total Users" ? (
              <FaUserMinus className="xl:text-3xl text-lg" />
            ) : title === "Total Posts" ? (
              <MdOutlinePostAdd className="xl:text-3xl text-lg" />
            ) : (
              <BiSolidDollarCircle className="xl:text-3xl text-lg" />
            )}
          </span>
        </h3>
        <h1 className=" font-semibold font-metropolis text-3xl text-textColor  text-center">
          {money ? "$ " : ""}
          {data}
          {money ? "k" : ""}
        </h1>
      </div>
    </>
  );
};
