import React from 'react'
import { ConfirmacaoProvider } from './confirmacaoContext'
import { ErrorProvider} from './ErrorContext'

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ErrorProvider>
      <ConfirmacaoProvider>
        {children}
      </ConfirmacaoProvider>
    </ErrorProvider>
  )
}
