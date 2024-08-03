import React from "react";
import { OvierViewItem } from "./OverViewItem";

const ClientOverView = ({
  count,
  userCount,
}: {
  count: any;
  userCount: any;
}) => {
  return (
    <React.Fragment>
      <h1 className="font-metropolis font-semibold  text-textColor sm:text-3xl text-2xl  py-3">
        Overview
      </h1>
      <div className="flex   w-full  md:flex-row flex-col  sm:justify-between  items-center border border-borderColor rounded-lg">
        <OvierViewItem title="Total Users" amount={userCount} invoice={1} />
        <OvierViewItem title="Total Posts" amount={count} invoice={5} />
        <OvierViewItem
          money={true}
          title="Total Revenues"
          amount={25}
          invoice={10}
        />
      </div>
    </React.Fragment>
  );
};

export default ClientOverView;
