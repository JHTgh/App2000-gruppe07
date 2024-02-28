import { useState, useEffect } from 'react';
import { db } from '../database/firebase';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'

// Denne funksjonen tar imot en referanse til databasen og returnerer en liste med brukeropplysninger.

export function SearchUsers() {
  const [userList, setUserList] = useState([]);
  // Oppretter en referanse til dokumentene i databasen
  const userCollectionRef = collection(db, "users");
    // Funksjon for å gå gjennom alle dokumentene i databasen
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
  // Bruker useEffect for å laste inn dokumentene i databasen.
  useEffect(() => {
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
  // Returnerer en div med brukerinformasjon hentet fra databasen.
  return (
    <div>
    {userList.map((users) => (
      <div key={users.id}>
        <p>Email: {users.email}</p>
        <p>Name: {users.name}</p>
        <p>Username: {users.username}</p>
        <button onClick={() => deleteUser(users.id)}>Delete user</button>
        <p>------------</p>
      </div>  
    ))}
    </div>
  )
}

