import  querySearchContext  from './createCtx'
import useGetdata from '../../hook/useGetdata'
import { useState } from 'react'
import useDebounce from '../../hook/useDebounce'



const QuerySearchProvider = ({ children } : {children: React.ReactNode}) => {
    const { data, loading, error } = useGetdata()
    const [query, setQuery] = useState('')
    const debouncedQuery = useDebounce(query, 500)
    const ctxValue = {
        data,
        loading,
        error,
        query: debouncedQuery,
        setQuery,
    }
    return (
        <querySearchContext.Provider value={ctxValue}>
            {children}
        </querySearchContext.Provider>
    )
}


export default QuerySearchProvider