import { useContext } from 'react'
import querySearchContext from '../../../context/querySearchContext/createCtx'
import Card from './Card'
import { ClipLoader } from 'react-spinners'
const GameCards = () => {
  const ctx = useContext(querySearchContext)
  const resultSearch = ctx?.data.filter((game) => {
    if (!ctx?.query) return game
    return game.name.toLowerCase().includes(ctx?.query.toLowerCase())
  })
  return (
    <div className='flex flex-wrap justify-center gap-10 p-4'>
      {ctx?.loading && (
        <div className='flex items-center justify-center h-[50vh]'>
          <ClipLoader color='#dddd' loading={ctx?.loading} size={150} />
        </div>
      )}
      {resultSearch && resultSearch.map((game) => {
        return <Card key={game.id} {...game} />
      })}
      {ctx?.error && <p>Error...</p>}
    </div>
  )
}
export default GameCards
