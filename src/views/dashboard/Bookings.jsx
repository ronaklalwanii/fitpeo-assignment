import React from "react";

const bookingsArr = [
  {
    dates: ["30", "31"],
    customerName: "John Doe",
    bookingTime: "an hour ago",
    title: "Standard King Room",
    img: "/images/rooms/room-1.jpg",
    avatar: "/images/avatars/avatar-1.png",
  },
  {
    dates: ["4", "5", "6"],
    customerName: "Jane Doe",
    bookingTime: "2 Days ago",
    title: "Standard Queen Room",
    img: "/images/rooms/room-2.jpg",
    avatar: "/images/avatars/avatar-2.png",
  },
  {
    title: "Standard Room",
    bookingTime: "6 Days ago",
    dates: ["10", "11", "12"],
    img: "/images/rooms/room-3.jpg",
    customerName: "Cibrán Quintinus",
    avatar: "/images/avatars/avatar-3.png",
  },
];

const renderDates = (dates) => {
  if (dates.length) {
    return dates.map((date, index) => {
      const isLast = dates.length === index + 1;
      return `${date}${!isLast ? ", " : ""}`;
    });
  } else {
    return null;
  }
};

const BookingComponent = (params) => {
  const { dates, title, customerName, bookingTime, img, avatar } = params;

  return (
    <div className="flex justify-between flex-wrap gap-4 mb-4">
      <div className="flex gap-4">
        <img className="w-[128px] rounded-md" src={img} alt={title} />
        <div>
          <h6 className="text-2xl text-black">{title}</h6>
          <div className="flex items-center gap-4 mt-4">
            <div className="avatar">
              <div className="w-[32px] rounded-full">
                <img src={avatar} title={customerName} />
              </div>
            </div>
            <p className="text-lg">{customerName}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row sm:flex-col gap-4">
        <div className="badge badge-primary badge-lg mt-2">
          {renderDates(dates)}
        </div>
        <p className="text-md sm:mt-1">{bookingTime}</p>
      </div>
    </div>
  );
};

const Bookings = () => {
  return (
    <div className="card shadow-md">
      <div className="card-body">
        {bookingsArr.map((room) => (
          <BookingComponent key={room.title} {...room} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;
