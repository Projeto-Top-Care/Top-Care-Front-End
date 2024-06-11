'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserIDProps {
  userID: string | undefined;
  setUserId: (item: string) => void;
}

const UserIDContext = createContext<UserIDProps | undefined>(undefined);

const UserIDProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [userID, setUserID] = useState<string | undefined>(undefined);

  useEffect(() => {
    const storedItem = localStorage.getItem('idUser');
    if (storedItem) setUserID(storedItem);
  }, []);

  useEffect(() => {
    if (userID !== undefined) {
      localStorage.setItem('idUser', userID);
    }
  }, [userID]);

  const setUserId = (newItem: string) => {
    setUserID(newItem);
  };

  return (
    <UserIDContext.Provider value={{ userID, setUserId}}>
      {children}
    </UserIDContext.Provider>
  );
};

const useUserID = (): UserIDProps => {
  const context = useContext(UserIDContext);
  if (context === undefined) {
    throw new Error('useUserID must be used within a UserIDProvider');
  }
  return context;
};

export { UserIDProvider, useUserID };