'use client'
import { createContext, useState, useContext, ReactNode } from 'react';

interface Confirmacao{
  id: number
  message: string
}

interface ConfirmacaoContextType {
  confirmacoes: Confirmacao[];
  addConfirmacao: (message: string) => void;
}

interface ConfirmacaoProviderProps {
  children: ReactNode;
}

const ConfirmacaoContext = createContext<ConfirmacaoContextType | undefined>(undefined);

export const ConfirmacaoProvider: React.FC<ConfirmacaoProviderProps> = ({ children }) => {
  const [confirmacoes, setConfirmacoes] = useState<Confirmacao[]>([]);

  const addConfirmacao = (message: string) => {
    const id = Date.now();
    let confirmacoesT = [...confirmacoes, { id, message }]
    setConfirmacoes(confirmacoesT);
    setTimeout(() => {
      setConfirmacoes((confirmacoes) => confirmacoes.filter((confirmacao) => confirmacao.id !== id));
    }, 4000);
  };

  return (
    <ConfirmacaoContext.Provider value={{ confirmacoes, addConfirmacao }}>
      {children}
    </ConfirmacaoContext.Provider>
  );
};

export const useConfirmacao = () => useContext(ConfirmacaoContext);