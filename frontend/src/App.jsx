import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewUserPage from "./pages/UsersPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />}/>
        <Route path="/users" element={<NewUserPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;