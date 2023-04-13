import React, { useState } from "react";

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.toLocaleString("default", { month: "long" });

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="card shadow-md">
      <div className="card-body pt-0">
        <div className="flex justify-between items-center flex-wrap gap-4 text-black">
          <h6 className="text-2xl">Recent Booking Schedule</h6>
          <div className="flex items-center gap-6">
            <ChevronDoubleLeftIcon className="w-[24px] h-[24px]" />
            <h6 className="text-xl">
              {currentMonth} {currentYear}
            </h6>

            <ChevronDoubleRightIcon className="w-[24px] h-[24px]" />
          </div>
        </div>
        <ReactDatePicker
          inline
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
};

export default Dashboard;
