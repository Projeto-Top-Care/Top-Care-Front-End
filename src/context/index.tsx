import React from 'react'
import { CarrinhoProvider } from './CarrinhoContext'
import { ConfirmacaoProvider } from './confirmacaoContext'
import { ErrorProvider} from './ErrorContext'
import { SearchProvider } from './SearchContext'
import { UserIDProvider } from './UserIDContext'

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <UserIDProvider>
      <ErrorProvider>
        <ConfirmacaoProvider>
          <CarrinhoProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </CarrinhoProvider>
        </ConfirmacaoProvider>
      </ErrorProvider>
    </UserIDProvider>
  )
}
