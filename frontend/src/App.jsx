import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewUserPage from "./pages/UsersPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewUserPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;