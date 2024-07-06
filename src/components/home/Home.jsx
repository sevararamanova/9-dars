//Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

const Home = () => {
  const { users, dispatch } = useUserContext();

  const handleDelete = (user) => {
    dispatch({ type: 'DELETE_USER', payload: user });
  };

  return (
    <div className="container">
      <h1 className="title">Users</h1>
      <div className="grid">
        {users.map(user => (
          <div key={user.id} className="card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="avatar" />
            <h3 className="name">{user.first_name} {user.last_name}</h3>
            <p className="email">{user.email}</p>
            <button onClick={() => handleDelete(user)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
      <Link to="/deleted" className="view-deleted-link">View Deleted Users</Link>
    </div>
  );
};

export default Home;
