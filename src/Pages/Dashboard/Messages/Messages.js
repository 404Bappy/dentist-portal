// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const Messages = () => {
//   const [messages, setMessages] = useState([]);
//   //   useEffect(() => {
//   //     getMessages();
//   //   }, []);

//   //   const getMessages = () => {
//   //     const res = axios.get("http://localhost:9000/contact-messages");
//   //     console.log("res", res);
//   //   };

//   return (
//     <div>
//       <h3 className="text-2xl font-bold text-red-600 mt-10">All Users</h3>å
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead>
//             <tr>
//               <th></th>
//               <th>Email</th>
//               <th>Subject</th>
//               <th>Message</th>
//             </tr>
//           </thead>
//           {/* <tbody>
//             {messages.map((user, i) => (
//               <tr key={i}>
//                 <th>{i + 1}</th>
//                 <td>{user?.email}</td>
//                 <td>{user?.subject}</td>
//                 <td>{user?.message}</td>
//               </tr>
//             ))}
//           </tbody> */}
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Messages;

import React from "react";
import axios from "axios";
const Messages = () => {
  const [messages, setMessages] = React.useState([]);
  const [bookings, setBookings] = React.useState([]);
  React.useEffect(() => {
    appointmentList();
  }, [localStorage.getItem("doctormail")]);

  console.log("doctormail", localStorage.getItem("doctormail"));

  const appointmentList = async () => {
    const res = await fetch("http://localhost:9000/contact-messages", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const data = await res.json();
    console.log(
      "🚀 ~ file: MyAppointment.js:25 ~ appointmentList ~ data:",
      data
    );
    setBookings(data);
  };
  return (
    <div>
      <h3 className="text-2xl font-bold text-red-600 mt-10">All Users</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user?.email}</td>
                <td>{user?.subject}</td>
                <td>{user?.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
