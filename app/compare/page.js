"use client";

import React from "react";
import BarChart from "../components/chart";
import { db } from "../database/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const ComparePage = () => {
  
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




  return (
    <div>
      <h1>Compare Page</h1>
      <div> 
      {userList.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>uID: {user.uid}</p>
          <p>------------</p>
        </div>
        ))}
      </div>
      <div>
        <BarChart />
      </div>
    </div>
  );
};

export default ComparePage;
