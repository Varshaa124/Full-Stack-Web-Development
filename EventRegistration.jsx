// EventRegistration.jsx
import React from "react";

function EventRegistration() {
  const registerEvent = () => {
    // Taking user input
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Registration cancelled: Name is required.");
      return;
    }

    const email = prompt("Enter your email:");
    if (!email) {
      alert("Registration cancelled: Email is required.");
      return;
    }

    const eventName = prompt("Enter event name:");
    if (!eventName) {
      alert("Registration cancelled: Event name is required.");
      return;
    }

    // Confirmation dialog
    const confirmRegistration = confirm(
      `Please confirm your registration:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Event: ${eventName}`
    );

    if (confirmRegistration) {
      alert("Event registered successfully!");
    } else {
      alert("Event registration cancelled.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Registration</h2>
      <button onClick={registerEvent}>
        Register for Event
      </button>
    </div>
  );
}

export default EventRegistration;
