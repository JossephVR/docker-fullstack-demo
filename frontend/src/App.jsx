import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import NewUserPage from "./pages/NewUserPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />}/>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/users/new" element={<NewUserPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;