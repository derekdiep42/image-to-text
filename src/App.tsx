import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideNav from "./components/SideNav";
import Recognition from "./components/Recognition/Recognition";
import Records from "./components/Records";
import HomePage from "./components/HomePage";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight={"100vh"}
      bgcolor={"#E1E1E1"}
    >
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path="/recognition" element={<Recognition />}></Route>
          <Route path="/records" element={<Records />}></Route>
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
