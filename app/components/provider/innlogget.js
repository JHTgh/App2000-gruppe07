import React from "react";
import { createContext, useContext } from 'react';


// Globale variabler
const [userUId, setUserUId] = useState(null);

// set og get for globale variabler
export function getUserUId() {
    return userUId;
}
export function setUserUId(uId) {
    setUserUId = uId;
}

// lager provider

