'use client'
import { createContext, useState, useContext, ReactNode } from 'react';

interface Error{
  id: number
  message: string
}

interface ErrorContextType {
  errors: Error[];
  addError: (message: string) => void;
}

interface ErrorProviderProps {
  children: ReactNode;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
  const [errors, setErrors] = useState<Error[]>([]);

  const addError = (message: string) => {
    const id = Date.now();
    let erros = [...errors, { id, message }]
    setErrors(erros);
    setTimeout(() => {
      setErrors((errors) => errors.filter((error) => error.id !== id));
    }, 4000);
  };

  return (
    <ErrorContext.Provider value={{ errors, addError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);