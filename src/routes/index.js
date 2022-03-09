import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Films from "../pages/Films";
import Peoples from "../pages/Peoples";
import PeopleDetail from "../pages/PeopleDetail";

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/films/" element={<Films />} />
    <Route path="/peoples/" element={<Peoples />} />
    <Route path="/people-detail/:peopleName" element={<PeopleDetail />} />
  </Routes>
);

export default AllRoutes;
