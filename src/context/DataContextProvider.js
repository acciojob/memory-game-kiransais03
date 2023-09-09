
import dataContext from "./dataContext";

import React, { useState } from 'react'

function DataContextProvider(props) {
 
    let [name,setName]= useState("");

  return (
    <dataContext.Provider value={{name:name,setName:setName}}>
        {props.children}
    </dataContext.Provider>
  )
}

export default DataContextProvider
