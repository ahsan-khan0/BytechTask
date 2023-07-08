import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Counter from "./components/counter";
import ListComponent from "./components/list";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/list" element={<ListComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
