import React from "react";

const Mapper = ({ value }) => {
  console.log("valuessss", value);
  return (
    <div>
      {value === "confirmed" && (
        <h1 className="bg-[#ECFDF3] text-[#12B76A]    mr-2 px-2 py-1 rounded-lg">
          {value}
        </h1>
      )}
      {value === "canceled" && (
        <h1 className="bg-[#FEF3F2] text-[#F04438]   mr-2 px-2 py-1 rounded-lg">
          {value}
        </h1>
      )}
    </div>
  );
};

export default Mapper;
