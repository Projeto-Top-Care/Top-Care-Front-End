'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SearchContextProps {
  items: string[];
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('ultimasPesquisas');
    if (storedItems) setItems(JSON.parse(storedItems));
  }, []);

  useEffect(() => {
    localStorage.setItem('ultimasPesquisas', JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: string) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const removeItem = (itemToRemove: string) => {
    setItems(prevItems => prevItems.filter(item => item !== itemToRemove));
  };

  return (
    <SearchContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  return context!;
};

export { SearchProvider, useSearch };
