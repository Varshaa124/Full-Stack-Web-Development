// CabBooking.jsx
import React from "react";

function CabBooking() {
  const bookCab = () => {
    // Taking user input
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const pickup = prompt("Enter pickup location:");
    if (!pickup) {
      alert("Booking cancelled: Pickup location is required.");
      return;
    }

    const drop = prompt("Enter drop location:");
    if (!drop) {
      alert("Booking cancelled: Drop location is required.");
      return;
    }

    const cabType = prompt("Enter cab type (Mini / Sedan / SUV):");
    if (!cabType) {
      alert("Booking cancelled: Cab type is required.");
      return;
    }

    // Confirmation dialog
    const confirmBooking = confirm(
      `Please confirm your cab booking:\n\n` +
      `Name: ${name}\n` +
      `Pickup: ${pickup}\n` +
      `Drop: ${drop}\n` +
      `Cab Type: ${cabType}`
    );

    if (confirmBooking) {
      alert("Cab booked successfully!");
    } else {
      alert("Cab booking cancelled.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Online Cab Booking Application</h2>
      <button onClick={bookCab}>
        Book Cab
      </button>
    </div>
  );
}

export default CabBooking;
