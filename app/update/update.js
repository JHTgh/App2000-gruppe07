import { useState, useEffect } from 'react';
import { db } from '../database/firebase';
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore';


export function UpdateUser() {
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [updateFields, setUpdateFields] = useState({
      email: '',
      name: '',
      username: ''
    });
  const userCollectionRef = collection(db, "users");
    useEffect(() => {
      
  
      const getUsers = async () => {
        try {
          const data = await getDocs(userCollectionRef);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setUserList(filteredData);
        } catch (err) {
          console.error(err);
        }
      };
  
      getUsers();
    }, []);
  
    const handleUserChange = (userId) => {
        const user = userList.find(user => user.id === userId);
        setSelectedUser(user);
      }
      const handleUpdate = () => {
        if (selectedUser) {
          selectedUser.email = updateFields.email;
          selectedUser.name = updateFields.name;
          selectedUser.username = updateFields.username;
    
          // ... perform the update in your database or state management
        } else {
          // Handle case when user is not selected
        }
      }
    
/*
* Bruker navn i nedtrekkslista, for å finne ut hvem 
* bruker som skal oppdateres
*/ 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateFields(prevFields => ({
      ...prevFields,
      [name]: value
    }));
  };

  const handleUpdateUser = async (userId) => {
    const userDocRef = doc(userCollectionRef, selectedUser.id);
    await updateDoc(userDocRef, {
      email: updateFields.email,
      name: updateFields.name,
      username: updateFields.username
    });
  };

  return (
    <div>
      <select onChange={(e) => handleUserChange(e.target.value)}>
        <option value="">Velg en bruker</option>
        {userList.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <button onClick={handleUpdate}>Oppdater</button>
  
      {selectedUser && (
        <div>
          <p>Email: {selectedUser.email}</p>
          <p>Name: {selectedUser.name}</p>
          <p>Username: {selectedUser.username}</p>
          <label>Ny e-post</label>
          <input
            type="text"
            name="email"
            value={updateFields.email}
            onChange={handleInputChange}
          />
          <label>Nytt navn</label>
          <input
            type="text"
            name="name"
            value={updateFields.name}
            onChange={handleInputChange}
          />
          <label>Nytt brukernavn</label>
          <input
            type="text"
            name="username"
            value={updateFields.username}
            onChange={handleInputChange}
          />
          <button onClick={() => handleUpdateUser(selectedUser.id)}>Oppdater bruker</button>
        </div>
      )}
  
      {userList.map((user) => (
        <div key={user.id}>
          {/* Render user list without input fields */}
        </div>
      ))}
    </div>
  );
}