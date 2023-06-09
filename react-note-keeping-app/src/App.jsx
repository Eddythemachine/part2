// import { useState } from "react";
import AddNotes from "./components/AddNotes";
import Home from "./components/Home";
import ImportantNotes from "./components/ImportantNotes";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" index element={<Home />} />
          <Route path="/imp" element={<ImportantNotes />} />
          <Route path="/addnote" element={<AddNotes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
