import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [healthAlert, setHealthAlert] = useState(
    "Hello User, your medication must be taken in 45 minutes, followed by your meal."
  );

  const [schedule, setSchedule] = useState([
    "Take medication at 9:00 AM",
    "Breakfast at 9:30 AM",
    "Physical therapy at 11:00 AM",
  ]);

  const simulateAI = () => {
    setHealthAlert("Alert: Medication must be taken in 45 minutes!");
    setSchedule([
      "Take medication in 45 minutes",
      "Meal after medication",
      "Rest period at 1:00 PM",
    ]);
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <header
        style={{
          backgroundColor: "black",
          color: "white",
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 6,
        }}
      >
        <h1>Cognigo</h1>
        <span role="img" aria-label="brain" style={{ fontSize: 30 }}>
          🧠
        </span>
      </header>

      <section
        style={{
          backgroundColor: "#fff4cc",
          padding: 15,
          marginTop: 20,
          borderRadius: 8,
        }}
      >
        <h2>AI Health Monitor</h2>
        <p style={{ color: "red" }}>{healthAlert}</p>
      </section>

      <section
        style={{
          backgroundColor: "#ccf4f4",
          padding: 15,
          marginTop: 20,
          borderRadius: 8,
        }}
      >
        <h2>Today's Smart Schedule</h2>
        <ul>
          {schedule.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </section>

      <button
        onClick={simulateAI}
        style={{
          marginTop: 20,
          backgroundColor: "black",
          color: "white",
          padding: 10,
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          width: "100%",
          fontSize: 16,
        }}
      >
        Simulate AI Data
      </button>

      <nav style={{ marginTop: 30 }}>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <li>
            <Link to="/medical-records" style={{ textDecoration: "none" }}>
              Medical Records/Vitals
            </Link>
          </li>
          <li>
            <Link to="/medications" style={{ textDecoration: "none" }}>
              Medications & Alerts
            </Link>
          </li>
          <li>
            <Link to="/daily-schedule" style={{ textDecoration: "none" }}>
              Daily Schedule
            </Link>
          </li>
          <li>
            <Link
              to="/upgrade"
              style={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "black",
              }}
            >
              ↑ Upgrade your Plan ↑
            </Link>
          </li>
          <li>
            <Link to="/inbox" style={{ textDecoration: "none" }}>
              Inbox
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
