import React from 'react'
import { ErrorProvider } from './ErrorContext'

export default function AppProvider({children}: {children: React.ReactNode}) {
  return (
    <ErrorProvider>
        {children}
    </ErrorProvider>
  )
}
