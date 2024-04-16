"use client";
import React, { useState } from 'react';
import UserList from '../api/userlist1/userinfo'; // Adjust the import based on your file structure

function SammenligneBrukere () {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSelectUser = (user) => {
    // Check if the user is already selected
    const isUserSelected = selectedUsers.some(selectedUser => selectedUser.id === user.id);

    if (isUserSelected) {
      // Deselect the user if already selected
      setSelectedUsers(selectedUsers.filter(selectedUser => selectedUser.id !== user.id));
    } else {
      // Add the user to the selection if not already selected and if less than 7 users are selected
      if (selectedUsers.length < 7) {
        setSelectedUsers([...selectedUsers, user]);
      } else {
        // Optional: Alert the user that no more than 7 can be selected
        alert('You can select no more than 7 users for comparison.');
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column" }}>
      <h2>Select Users for Comparison</h2>
      <UserList onSelectUser={handleSelectUser} />
      <div style={{ marginTop: "20px", border: "1px solid gray", padding: "20px", width: "60%" }}>
        <h3>Selected Users</h3>
        {selectedUsers.map(user => (
          <p key={user.id}>
            {user.name}
            {/* You can add a button or link here to remove the user directly from this list if desired */}
          </p>
        ))}
      </div>
    </div>
  );
};
export default SammenligneBrukere;