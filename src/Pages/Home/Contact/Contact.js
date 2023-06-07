import React from "react";
import toast from "react-hot-toast";
import appointment from "../../../assets/images/appointment.png";

const Contact = () => {
  const [email, setEmail] = React.useState();
  const [subject, setSubject] = React.useState();
  const [message, setMessage] = React.useState();

  const handleSubmit = () => {
    const booking = {
      email,
      subject,
      message,
    };

    console.log("booking", booking);
    //TODO : Send Data to the server & once  data is saved then close the modal and display success toast //
    fetch("http://localhost:9000/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("insertedId", data);
        setEmail("");
        setSubject("");
        setMessage("");
        toast.success("You Request Sent Successfully!");
      });
    // setTreatment(null);
  };
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="justify-center items-center rounded"
    >
      <div className="form-control items-center gap-5 rounded ">
        <h2 className="text-xl text-primary font-bold mt-5">Contact Us</h2>
        <h1 className="text-white">Stay Connected With Us</h1>
        <label>
          <input
            className="rounded"
            type="text"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            className="rounded"
            type="text"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <textarea
            className="textarea textarea-info"
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <button
          className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mb-5"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Contact;
