import  querySearchContext  from './createCtx'
import useGetdata from '../../hook/useGetdata'
import { useState } from 'react'


const QuerySearchProvider = ({ children } : {children: React.ReactNode}) => {
    const { data, loading, error } = useGetdata()
    const [query, setQuery] = useState('')
    const ctxValue = {
        data,
        loading,
        error,
        query,
        setQuery,
    }
    return (
        <querySearchContext.Provider value={ctxValue}>
            {children}
        </querySearchContext.Provider>
    )
}


export default QuerySearchProvider