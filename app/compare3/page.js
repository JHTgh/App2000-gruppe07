"use client";
import React, { useState, useEffect } from 'react';
import { db } from "../database/firebase";
import { query, collection, where, getDocs } from "firebase/firestore";

const ComparePage = ({ companyID }) => {
  const [userID, setUserID] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        // Fetch existing employees based on companyID
        if(companyID === undefined) {
          throw new Error("companyID is undefined");
        }

        const usersQuery = query(collection(db, "ansatte"), where("bedriftID", "==", companyID));
        const data = await getDocs(usersQuery);

        if (data === null) {
          throw new Error("getDocs returned null");
        }

        const filteredData = data.docs.map((doc) => {
          if (doc === null) {
            throw new Error("doc is null");
          }

          if (doc.data() === null) {
            throw new Error("doc.data is null");
          }

          return {
            ...doc.data(),
            id: doc.id,
          };
        });

        setUserList(filteredData);

      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
  }, [companyID]);

  const addUId = (uid) => {
    try {
      if (uid === null) {
        throw new Error("uid is null");
      }

      setUserID([...userID, uid]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Compare Page</h1>
      <div className="flex-side"> 
        {userList.map((user) => {
          if (user === null) {
            throw new Error("user is null");
          }

          return (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <button onClick={() => addUId(user.uid)}>Add</button>
              <p>------------</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparePage;