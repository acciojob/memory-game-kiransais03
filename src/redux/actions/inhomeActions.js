import { IN_HOME } from "./actionTypes";
import React from 'react';


function inhomeActions(data) {
  return ({
    action:IN_HOME,
    payload:data,
  })
}

export default inhomeActions;
