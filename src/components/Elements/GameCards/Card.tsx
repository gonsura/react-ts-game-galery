import { Game } from '../../../hook/useGetdata'
import { Link } from 'react-router-dom'
const Card: React.FC<Game> = ({ id, name, background_image, rating }) => {
  return (
    <div className='flex flex-col items-center w-60 h-80 rounded-md bg-slate-300 p-2'>
      <div className='flex flex-col w-full text-zinc-700 text-sm'>
        <Link to={`/game/${id}`}>
          <h1 className='font-semibold hover:text-blue-500'>{name}</h1>
        </Link>
        <p className=' italic'>{rating}</p>
      </div>
      <img
        className='w-full h-full object-cover rounded-md'
        src={background_image}
        alt={`${name} ${id}`}
      />
    </div>
  )
}
export default Card
