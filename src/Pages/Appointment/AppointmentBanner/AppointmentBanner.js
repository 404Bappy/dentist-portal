import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
// import "react-day-picker/lib/style.css";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  const today = new Date();

  // Disable past days
  const disabledDays = {
    before: today,
  };

  // Check if selected date is in the future

  // Callback for when a date is selected
  const handleSelectDate = (date) => {
    if (date > today) {
      setSelectedDate(date);
    } else {
      setSelectedDate(today);
    }
  };

  return (
    <header className="my-6">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20 mb-3">
          <img height={550} width={550} src={chair} alt="" />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleSelectDate}
              disabledDays={disabledDays}
              fromMonth={today}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
