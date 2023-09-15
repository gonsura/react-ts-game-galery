import GameCards from '../components/Elements/GameCards'
import SearchGame from '../components/Elements/SearchBar'
import QuerySearchProvider from '../context/querySearchContext'

const Home = () => {
  return (
    <QuerySearchProvider>
      <main className='bg-zinc-800 space-x-5 min-h-screen'>
        <SearchGame />
        <GameCards />
      </main>
    </QuerySearchProvider>
  )
}
export default Home
