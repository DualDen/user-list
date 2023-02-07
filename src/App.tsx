import React from 'react';
import './App.css';
import UsersPage from "./components/UsersPage";
import {Routes, Route} from "react-router-dom";
import CurrentUserPage from "./components/CurrentUserPage";

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
