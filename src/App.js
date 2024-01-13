import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Main from "./component/Main";
import Login from "./component/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
