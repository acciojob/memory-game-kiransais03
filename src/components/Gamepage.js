import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import dataContext from '../context/dataContext';


function Gamepage() {

  let inhomeredux = useSelector((state)=>{return state.inhomeReducer1});

  let contextData = useContext(dataContext);
  let [ct,setCt] = useState(0);

  console.log(inhomeredux);
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={()=>{setCt(ct+1); contextData.setName(`kiran home ${ct+1}`)}}>Update name in context</button>
    </div>
  )
}

export default Gamepage
