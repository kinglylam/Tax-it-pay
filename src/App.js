import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Businesses from "./Page/Businesses/Businesses";
import Individuals from "./Page/Individuals/Individuals";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/businesses" element={<Businesses />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
