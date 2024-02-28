import { useState, useEffect } from 'react';
import { db } from '../database/firebase';
import { getDocs, collection } from 'firebase/firestore'

export function SearchUsers() {
  const [userList, setUserList] = useState([]);

  const userCollectionRef = collection(db, "users");

    const getUsers = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserList(filteredData);
      console.log({});
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
  getUsers();
  }, []);

  return (
    <div>
    {userList.map((users) => (
      <div key={users.id}>
        <p>Email: {users.email}</p>
        <p>Name: {users.name}</p>
        <p>Username: {users.username}</p>
        <p>------------</p>
      </div>  
    ))}
    </div>
  )
}

