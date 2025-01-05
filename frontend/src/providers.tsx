import {QueryClientProvider} from '@tanstack/react-query'
import {queryClient} from '@/lib/react-query'
import { ReactNode } from 'react'

export function Providers({children}: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}