import { useContext, useRef, useState } from 'react'
import querySearchContext from '../../../context/querySearchContext/createCtx'
const InputSearch = () => {
  const ctx = useContext(querySearchContext)
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div className='p-2 relative'>
      <input
      onChange={e => ctx?.setQuery(e.target.value)}
        onFocus={() => setIsSearchOpen(true)}
        ref={inputRef}
        className='placeholder:opacity-10 p-2 w-80 outline-none bg-zinc-800 border-b-2 border-slate-300 text-slate-300 text-xl'
        type='text'
        placeholder='Search...'
      />
      <button
        onClick={() => {
          if (inputRef.current) inputRef.current.value = ''
          setIsSearchOpen(false)
        }}
        className='absolute right-2 top-1/2 -translate-y-1/2 opacity-10'
      >
        <i
          className={`${
            isSearchOpen ? 'ri-close-line text-3xl' : 'ri-search-line text-2xl'
          } font-semibold text-slate-300`}
        ></i>
      </button>
    </div>
  )
}
export default InputSearch
