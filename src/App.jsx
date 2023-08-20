import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import UserDetails from "./Components/UserDEtails";

function App() {
  return (
    <>
      <Navbar />
      <UserDetails/>
    </>
  );
}

export default App;
