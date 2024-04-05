"use client";

import React from "react";
import BarChart from "../components/chart";
import { db } from "../database/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const ComparePage = () => {
  const [userID, setUserID] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getDocs(collection(db, "users"));
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserList(filteredData);
        
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
  }, []);


  const addUId = async (uid) => {
    try {
      console.log('uID: ' + uid);
      setUserID([...userID, uid]);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>
      <h1>Compare Page</h1>
      <div className="flex-side"> 
      {userList.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <button onClick={() => addUId(user.uid)}>Add</button>
          <p>------------</p>
        </div>
        ))}
      </div>
      <div className="flex-side">
        <BarChart uIdTab={userID} />
      </div>
    </div>
  );
};

export default ComparePage;
