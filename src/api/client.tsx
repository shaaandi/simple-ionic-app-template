import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

// Create a client
export const apiClient = new QueryClient()

export const APIClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={apiClient}>{children}</QueryClientProvider>
  )
}
