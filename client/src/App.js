import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Loader from "./components/Loader";

const App = () => {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <BrowserRouter>
      {showLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
