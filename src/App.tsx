import React from 'react';
import './App.css';
import UsersPage from "./components/user pages/UsersPage";
import {Routes, Route,Navigate} from "react-router-dom";
import CurrentUserPage from "./components/user pages/CurrentUserPage";

function App() {
  return (
    <div className="container">
        <Routes>
            <Route path={"/"} element={<UsersPage/>}/>
            <Route path={":id"} element={<CurrentUserPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
