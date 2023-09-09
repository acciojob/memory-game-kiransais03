import React from 'react';
import { GAME_MODE_DATA } from './actionTypes';


function savegamemodeActions(data) {
  return ({
    type:GAME_MODE_DATA,
    payload:data,
  })
}

export default savegamemodeActions
