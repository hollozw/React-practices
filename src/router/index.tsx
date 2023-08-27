import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Default from "../views/Default/index.tsx";
import Moxs from "../views/Moxs/index.tsx";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}></Route>
        <Route path="/moxs" element={<Moxs />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
