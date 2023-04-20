import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import Mapper from "../../../Components/Mapper";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    appointmentList();
  }, []);

  const appointmentList = async () => {
    const res = await fetch(
      `http://localhost:9000/bookings?email=${user?.email}`,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    const data = await res.json();
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
          toast.success("Make admin successful!");
          appointmentList();
        }
      });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-red-600 mb-2 mt-7">
        My Appointments
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-primary btn-sm">
                        Payment
                      </button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-green-600">Paid</span>
                  )}
                </td>

                <td className="capitalize">
                  <Mapper value={booking?.status} />
                </td>
                <td>
                  {booking.price && booking.paid && (
                    <button
                      className="btn btn-secondary btn-sm ml-5"
                      onClick={() => cancelBooking(booking._id)}
                    >
                      Cancel Booking
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
