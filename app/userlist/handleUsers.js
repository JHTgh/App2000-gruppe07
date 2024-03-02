import { useState, useEffect } from 'react';
import { db } from '../database/firebase';
import { getDocs, collection, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { auth } from '../database/firebase';

export function HandleUsers() {
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

  const deleteUser = async (id) => {
    try {
      const userDocRef = doc(db, "users", id);
      await deleteDoc(userDocRef);
      console.log("User deleted successfully!");
      // Oppdaterer userList ved å fjerne den slettede brukeren fra tilstanden
      setUserList(userList.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  return (
    <div>
      {userList.map((user) => (
        <div key={user.id}>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <button onClick={() => deleteUser(user.id)}>Delete user</button>
          <p>------------</p>
        </div>
      ))}
    </div>
  );
}