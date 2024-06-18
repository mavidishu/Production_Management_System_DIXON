import React from "react";
import "./container.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.jsx";

function Container() {
  return (
    <div className="contaienr">
      <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Dashboard/>}
            ></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default Container;
