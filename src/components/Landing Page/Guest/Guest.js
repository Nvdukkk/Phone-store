import GuestList from "./GuestList";
import GuestReview from "./GuestReview";
import React from "react";

function Guest() {
  return (
    <div className="mb-5 p-6">
      <GuestList />
      <GuestReview />
    </div>
  );
}

export default Guest;
