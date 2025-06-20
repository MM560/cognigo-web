import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Inbox from "./components/Inbox";
import MedicalRecords from "./components/MedicalRecords";
import Medications from "./components/Medications";
import DailySchedule from "./components/DailySchedule";
import Upgrade from "./components/Upgrade";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/daily-schedule" element={<DailySchedule />} />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
    </Router>
  );
}

export default App;
