'use client'
import { QntProduto } from '@/types/usuarios';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CarrinhoContextProps {
  items: QntProduto[];
  addProduct: (item: QntProduto) => void;
  removeProduct: (item: QntProduto) => void;
  getCarrinho: () => QntProduto[]
}

const CarrinhoContext = createContext<CarrinhoContextProps | undefined>(undefined);

const CarrinhoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<QntProduto[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('carrinho');
    if (storedItems) setItems(JSON.parse(storedItems));
  }, []);

  useEffect(() => {
    if(items.length != 0){     
      localStorage.setItem('carrinho', JSON.stringify(items));
    }
  }, [items]);

  const addProduct = (newItem: QntProduto) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const removeProduct = (itemToRemove: QntProduto) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemToRemove.id));
  };

  const getCarrinho = () =>{
    return JSON.parse(localStorage.getItem('carrinho')!) as QntProduto[];
  }

  return (
    <CarrinhoContext.Provider value={{ items, addProduct, removeProduct, getCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

const useCarrinho = (): CarrinhoContextProps => {
  const context = useContext(CarrinhoContext);
  return context!;
};

export { CarrinhoProvider, useCarrinho };
