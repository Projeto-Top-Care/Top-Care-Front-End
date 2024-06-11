'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CarrinhoContextProps {
  items: string[];
  addProduct: (item: string) => void;
  removeProduct: (item: string) => void;
}

const CarrinhoContext = createContext<CarrinhoContextProps | undefined>(undefined);

const CarrinhoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('carrinho');
    if (storedItems) setItems(JSON.parse(storedItems));
  }, []);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(items));
  }, [items]);

  const addProduct = (newItem: string) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const removeProduct = (itemToRemove: string) => {
    setItems(prevItems => prevItems.filter(item => item !== itemToRemove));
  };

  return (
    <CarrinhoContext.Provider value={{ items, addProduct, removeProduct }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

const useCarrinho = (): CarrinhoContextProps => {
  const context = useContext(CarrinhoContext);
  return context!;
};

export { CarrinhoProvider, useCarrinho };
