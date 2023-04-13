import React from "react";

const roomsArray = [
  {
    stat: "683",
    progress: 70,
    color: "#22c55e",
    title: "Rooms Available",
    progressColor: "progress-success",
  },
  {
    stat: "153",
    progress: 30,
    color: "#ef4444",
    title: "Rooms Occupied",
    progressColor: "progress-error",
  },
  {
    stat: "50",
    progress: 80,
    color: "#eab308",
    title: "Rooms Under Maintenance",
    progressColor: "progress-warning",
  },
  {
    stat: "20",
    progress: 90,
    color: "#661ae6",
    title: "Rooms Pending Maintenance",
    progressColor: "progress-primary",
  },
];

const Rooms = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {roomsArray.map(({ title, stat, color, progress, progressColor }) => {
        return (
          <div key={title} className="card shadow-md">
            <div className="card-body justify-between">
              <div className="flex items-center justify-between">
                <h6 className="text-xl" style={{ color }}>
                  {title}
                </h6>
                <p className="text-xl text-right">{stat}</p>
              </div>
              <progress
                max="100"
                value={progress}
                className={`progress ${progressColor}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rooms;
