import { createContext } from 'react'
import { Game } from '../../hook/useGetdata'

interface QuerySearchContext {
    data: Game[]
    loading: boolean
    error: boolean
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
}


const querySearchContext = createContext<QuerySearchContext | null>(null)
export default querySearchContext