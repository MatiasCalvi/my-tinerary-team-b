import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/layout";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/index" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signiup" element={<SignUp />} />
      </Routes>
   </Layout>
  );
}

export default App;
