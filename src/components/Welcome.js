import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import savegamemodeActions from "../redux/actions/savegamemodeActions";

function Welcome () {

  let dispatch = useDispatch();
  
  const [selectedval,setSelectedval] = useState("");

    let navigate = useNavigate();

    const gamepage = (e)=>{
      e.preventDefault();
      dispatch(savegamemodeActions(selectedval))
      navigate("/gamepage");
    }

    return (<div style={{textAlign:"center",backgroundColor:"blue",margin:"0"}}>
        <h1>Welcome!</h1>
        <form onSubmit={gamepage}>
        <input name="mode" type="radio" id="easy" value="easy" onChange={(e)=>{setSelectedval(e.target.value)}}/>
        <label htmlFor="easy">Easy</label>
        <input name="mode" type="radio" id="medium" value="medium" onChange={(e)=>{setSelectedval(e.target.value)}}/>
        <label htmlFor="medium">Medium</label>
        <input name="mode" type="radio" id="hard" value="hard" onChange={(e)=>{setSelectedval(e.target.value)}}/>
        <label htmlFor="hard">Hard</label> <br/>
        <button type="submit">Start</button>
        </form>
    </div>)
}

export default Welcome;