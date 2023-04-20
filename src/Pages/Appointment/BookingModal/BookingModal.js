import { format } from "date-fns";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name: treatmentName, Slots, price } = treatment; //treatment is just another name of appointment options with name, slots, _id//
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);
  const [cancelModal, setCancelModal] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [paymentWindow, setPaymentWindow] = useState(false);
  const navigate = useNavigate();
  const data = {
    price: price,
  };
  console.log("bokkinf modal", data);

  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
      price: 0,
      status: "awaiting for payment",
      paid: false,
    };
    //TODO : Send Data to the server & once  data is saved then close the modal and display success toast //
    fetch("http://localhost:9000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("insertedId", data?.insertedId);

        if (data.acknowledged) {
          setPaymentWindow(true);
          //   setTreatment(null);
          setBookingId(data?.insertedId);
          toast.success("Waiting for payment!", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
          //   refetch();
        } else {
          toast.error(data.message);
        }
      });
    // setTreatment(null);
  };

  const handleCancelPaymet = () => {
    alert("Bokking not Confirmed");
    setPaymentWindow(false);
  };

  const handlePaymentSubmit = () => {
    navigate(`/dashboard/payment/${bookingId}`, { state: data });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {paymentWindow
              ? `Payment Confirmation for ${bookingId}`
              : "treatmentName"}
          </h3>
          {!cancelModal && !paymentWindow && (
            <form
              onSubmit={handleBooking}
              className="grid grid-cols-1 gap-3 mt-10"
            >
              <input
                type="text"
                disabled
                value={date}
                className="input w-full input-bordered"
              />
              <select name="slot" className="select select-bordered w-full">
                {Slots.map((slot, i) => (
                  <option value={slot} key={i}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                disabled
                placeholder="Your Name"
                className="input w-full input-bordered"
              />
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                disabled
                readOnly
                placeholder="Email Address"
                className="input w-full input-bordered"
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="input w-full input-bordered"
              />
              <br />
              <input
                className="btn btn-accent w-full"
                type="submit"
                value="Submit"
              />
            </form>
          )}
          {cancelModal && !paymentWindow && (
            <div className="">
              <ul className="gap-3 uppercase">
                <li>policy 1</li>
                <li>policy 2</li>
                <li>policy 3</li>
              </ul>
              <button
                className="btn btn-primary mt-4 w-full text-white"
                onClick={() => setCancelModal(!cancelModal)}
              >
                Back
              </button>
            </div>
          )}
          {paymentWindow && !cancelModal && (
            <div className="border p-5 m-5">
              <p className="text-base font-bold my-7 text-center">
                Want to Make Payment?
              </p>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  class="text-gray-900 bg-white hover:bg-red-400 hover:text-white hover:border-white border border-red-600 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                  onClick={handleCancelPaymet}
                >
                  Don't want to pay
                </button>

                <button
                  type="button"
                  class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2"
                  onClick={handlePaymentSubmit}
                >
                  <svg
                    aria-hidden="true"
                    class="w-10 h-3 mr-2 -ml-1"
                    viewBox="0 0 660 203"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996"
                      fill="#0E4595"
                    />
                    <path
                      d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718"
                      fill="#F2AE14"
                    />
                  </svg>
                  Pay with stripe
                </button>
              </div>
            </div>
          )}

          {!cancelModal && !paymentWindow && (
            <button
              className="btn btn-primary mt-4 w-full text-white"
              onClick={() => setCancelModal(true)}
            >
              Cancelation Policy
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingModal;
