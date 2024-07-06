
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.payload;
    case 'DELETE_USER':
      const updatedUsers = state.filter(user => user.id !== action.payload.id);
      const deletedUsers = JSON.parse(localStorage.getItem('deletedUsers')) || [];
      localStorage.setItem('deletedUsers', JSON.stringify([...deletedUsers, action.payload]));
      return updatedUsers;
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userReducer, []);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'FETCH_USERS', payload: data.data });
      });
  }, []);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
