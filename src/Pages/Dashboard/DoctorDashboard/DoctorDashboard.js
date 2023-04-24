import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Mapper from "../../../Components/Mapper";

const DoctorDashboard = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    appointmentList();
  }, [localStorage.getItem("doctormail")]);
  if (localStorage.getItem("doctormail")) {
  }

  console.log("doctormail", localStorage.getItem("doctormail"));

  const appointmentList = async () => {
    const res = await fetch(
      `http://localhost:9000/doctor-bookings?email=${localStorage.getItem(
        "doctormail"
      )}`,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    const data = await res.json();
    console.log(
      "🚀 ~ file: MyAppointment.js:25 ~ appointmentList ~ data:",
      data
    );
    setBookings(data);
  };

  const cancelBooking = async (value) => {
    fetch(`http://localhost:9000/cancel-booking/${value}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.modifiedCount > 0) {
          toast.success("Booking Cancelled!");
          appointmentList();
        }
      });
  };

  return (
    <div className="p-6 h-screen ">
      <h3 className="text-2xl font-bold text-red-600 mb-2 mt-7">
        My Appointments
      </h3>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full shadow-md border">
          <thead>
            <tr>
              <th></th>
              <th className="text-center">Name</th>
              <th className="text-center">Phone No.</th>
              <th className="text-center">Treatment</th>
              <th className="text-center">Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th className="text-center">{i + 1}</th>
                <td className="text-center">{booking.patient}</td>
                <td className="text-center">{booking.phone}</td>
                <td className="text-center">{booking.treatment}</td>
                <td className="text-center">{booking.appointmentDate}</td>
                <td className="text-center">{booking.slot}</td>
                <td className="capitalize text-center">
                  <Mapper value={booking?.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorDashboard;
// import React, { useEffect } from "react";

// const DoctorDashboard = () => {
//   useEffect(() => {
//     appointmentList();
//   }, [localStorage.getItem("doctormail")]);

//   const appointmentList = async () => {
//     const res = await fetch(
//       `http://localhost:9000/bookings?email=${localStorage.getItem(
//         "doctormail"
//       )}`,
//       {
//         headers: {
//           authorization: `bearer ${localStorage.getItem("accessToken")}`,
//         },
//       }
//     );
//     const data = await res.json();
//     console.log(
//       "🚀 ~ file: MyAppointment.js:25 ~ appointmentList ~ data:",
//       data
//     );
//   };
//   return (
//     <div>
//       <h1>Hey</h1>
//     </div>
//   );
// };

// export default DoctorDashboard;
