import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Default from "../views/Default/index.tsx";
import Moxs from "../views/Moxs/index.tsx";
import XlsxProject from "../views/XlsxProject/index.tsx";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}></Route>
        <Route path="/moxs" element={<Moxs />}></Route>
        <Route path="/xlsx" element={<XlsxProject />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
