// HotelReservation.jsx
import React from "react";

function HotelReservation() {
  const reserveRoom = () => {
    // User input using prompt
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Reservation cancelled: Name is required.");
      return;
    }

    const roomType = prompt("Enter room type (Single / Double / Deluxe):");
    if (!roomType) {
      alert("Reservation cancelled: Room type is required.");
      return;
    }

    const days = prompt("Enter number of days to stay:");
    if (!days || isNaN(days)) {
      alert("Reservation cancelled: Enter a valid number of days.");
      return;
    }

    // Confirmation dialog
    const confirmReservation = confirm(
      `Please confirm your reservation:\n\n` +
      `Name: ${name}\n` +
      `Room Type: ${roomType}\n` +
      `Days: ${days}`
    );

    if (confirmReservation) {
      alert("Hotel room reserved successfully!");
    } else {
      alert("Reservation cancelled by user.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hotel Reservation System</h2>
      <button onClick={reserveRoom}>
        Reserve Room
      </button>
    </div>
  );
}

export default HotelReservation;
