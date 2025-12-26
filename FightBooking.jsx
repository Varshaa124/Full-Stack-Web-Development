// flight ticket booking.jsx
import React from "react";

function FlightTicketBooking() {
  const bookTicket = () => {
    // Prompt for user details
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const from = prompt("Enter departure city:");
    if (!from) {
      alert("Booking cancelled: Departure city is required.");
      return;
    }

    const to = prompt("Enter destination city:");
    if (!to) {
      alert("Booking cancelled: Destination city is required.");
      return;
    }

    const seats = prompt("Enter number of seats:");
    if (!seats || isNaN(seats)) {
      alert("Booking cancelled: Please enter a valid number of seats.");
      return;
    }

    // Confirmation dialog
    const confirmBooking = confirm(
      `Please confirm your booking:\n\n` +
      `Name: ${name}\n` +
      `From: ${from}\n` +
      `To: ${to}\n` +
      `Seats: ${seats}`
    );

    if (confirmBooking) {
      alert("Flight ticket booked successfully!");
    } else {
      alert("Booking cancelled by user.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Flight Ticket Booking</h2>
      <button onClick={bookTicket}>
        Book Flight Ticket
      </button>
    </div>
  );
}

export default FlightTicketBooking;
