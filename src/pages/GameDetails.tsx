import { Link, useParams } from 'react-router-dom'
import useGetdata from '../hook/useGetdata'
import Card from '../components/Elements/GameCards/Card'


const GameDetails = () => {
  const { id } = useParams()
  const {data} = useGetdata()
  return (
    <div className='flex justify-center items-center h-screen bg-zinc-800'>
        <div>
            <Link to={'/'}>
                <i className='ri-arrow-left-s-line text-4xl absolute top-4 left-4 font-semibold text-slate-300'></i>
            </Link>
        </div>
      {data?.filter((game) => game.id === Number(id)).map((game) => (
        <Card key={game.id} {...game} />
      ))}
    </div>
  )
}
export default GameDetails
