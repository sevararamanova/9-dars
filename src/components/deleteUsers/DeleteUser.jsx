import React from 'react';
import { useUserContext } from '../../context/UserContext';

const DeletedUsers = () => {
  const deletedUsers = JSON.parse(localStorage.getItem('deletedUsers')) || [];

  return (
    <div className="container">
      <h1 className="title">Deleted Users</h1>
      <div className="grid">
        {deletedUsers.map(user => (
          <div key={user.id} className="card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="avatar" />
            <h3 className="name">{user.first_name} {user.last_name}</h3>
            <p className="email">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeletedUsers;
