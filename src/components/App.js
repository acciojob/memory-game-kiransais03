
import React from "react";
import './../styles/App.css';
import Welcome from "./Welcome";
import {Routes,Route} from "react-router-dom";
import Gamepage from "./Gamepage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import dataContext from "../context/dataContext";

const App = () => {
  let navigate = useNavigate();

  let reduxdata = useSelector((state)=>{return state.gamemodeReducer1});

  console.log(reduxdata);
  
  const home = ()=>{
    navigate("/");
  }

  let contextDataobj = useContext(dataContext);

  console.log(contextDataobj);

  return (
    <div>
        {/* Do not remove the main div */}
        <Routes>
          <Route path="" element={<Welcome/>}/>
          <Route path="/gamepage" element={<Gamepage/>}/>
          <Route path="*" element={<div>"404 Error Page Not Found<button onClick={home}>Home</button></div>}/>
        </Routes>
    </div>
  )
}

export default App
