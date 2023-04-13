import React from "react";

import Rooms from "./Rooms";
import Bookings from "./Bookings";
import Datepicker from "./DatePicker";
import ReservationStats from "./ReservationStats";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Datepicker />
      <ReservationStats />
      <Bookings />
      <Rooms />
    </div>
  );
};

export default Dashboard;
