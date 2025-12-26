import React, { useState } from "react";

function UserProfileEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (name.trim() === "" || email.trim() === "") {
      alert("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Profile updated successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile </h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email:</label><br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default UserProfileEdit;
