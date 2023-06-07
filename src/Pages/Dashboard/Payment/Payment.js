import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import mc from "../../../assets/images/mc.png";
import vi from "../../../assets/images/vi.png";
import pp from "../../../assets/images/pp.png";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);

const Payment = () => {
  const location = useLocation();
  const data = location.state;
  console.log("price", data?.price);
  const booking = useLoaderData();
  console.log("booking", booking);
  const { treatment, appointmentDate, slot } = booking;
  booking.price = data?.price;

  return (
    <div>
      <div>
        <body
          style={{
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            backgroundColor: "azure",
          }}
        >
          <div
            style={{
              width: "750px",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              padding: "40px",
              justifyContent: "space-around",
            }}
          >
            <h1 className="font-bold text-2xl text-center mb-6">
              Confirm Your Payment for{" "}
              <span className="text-green-600">{treatment}</span>
            </h1>
          </div>
          <div
            style={{
              width: "750px",
              height: "500px",
              border: "1px solid",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              padding: "40px",
              justifyContent: "space-around",
            }}
          >
            <h1 className="font-bold text-2xl text-center mb-4">
              Confirm Your Payment for{" "}
              <span className="text-green-600">{treatment}</span>
            </h1>

            <div
              style={{ display: "flex", gap: "80px", justifyContent: "center" }}
            >
              <div
                style={{
                  border: "1px solid",
                  width: "200px",
                  borderRadius: "4px",
                }}
              >
                <h1 className="font-bold text-center text-green-600 mt-4">
                  Total Amount
                </h1>
                <br />
                <h2 className="text-center">
                  <strong> ${data?.price}</strong>
                </h2>
              </div>

              <div
                style={{
                  border: "1px solid",
                  width: "200px",
                  borderRadius: "4px",
                }}
              >
                <h1 className="font-bold text-center text-green-600 mt-2 ">
                  Appointment On
                </h1>

                <div
                  style={{
                    border: "1px solid",
                    width: "200px",
                    borderRadius: "4px",
                  }}
                >
                  <h1 className="font-bold text-center text-green-600 mt-2">
                    Appointment On
                  </h1>

                  <br />
                  <h2 className="text-center">
                    {" "}
                    <span className="font-bold">{appointmentDate}</span>{" "}
                  </h2>
                  <h4 className="text-center">at </h4>

                  <h3 className="text-blue-600 font-bold text-center mb-4">
                    {slot}
                  </h3>
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="w-96 my-12">
                    <Elements stripe={stripePromise}>
                      <CheckoutForm booking={booking} />
                    </Elements>
                  </div>

                  <div
                    style={{ display: "flex", marginTop: "70px", gap: "5px" }}
                  >
                    <img style={{ width: "100px" }} src={mc} alt="" />
                    <img style={{ width: "100px" }} src={vi} alt="" />
                    <img style={{ width: "100px" }} src={pp} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="w-96 my-12">
                  <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                  </Elements>
                </div>

                <div style={{ display: "flex", marginTop: "90px" }}>
                  <img style={{ width: "100px" }} src={mc} alt="" />
                  <img style={{ width: "100px" }} src={vi} alt="" />
                  <img style={{ width: "100px" }} src={pp} alt="" />
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
};

export default Payment;
