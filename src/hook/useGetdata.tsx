import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { ActionType, INITIAL_STATE, dataReducer } from '../utils/initialGetData'

interface Res {
  id: number
  slug: string
  name: string
  released: string
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  ratings: unknown
  ratings_count: number
  reviews_text_count: number
  added: number
  added_by_status: unknown
  metacritic: number
  playtime: number
  suggestions_count: number
  updated: string
  user_game: unknown
  reviews_count: number
  saturated_color: string
  dominant_color: string
  platforms: unknown
  parent_platforms: unknown
  genres: unknown
  stores: unknown
  clip: unknown
  tags: unknown
  esrb_rating: unknown
  short_screenshots: unknown
}

export interface Game {
  id: number
  name: string
  background_image: string
  rating: number
}

const useGetdata = () => {
  const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE)

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    ;(async () => {
      try {
        dispatch({ type: ActionType.START })
        const data = await axios.get(import.meta.env.VITE_BASE_URL, {
          cancelToken: cancelToken.token,
        })
        const results = data.data.results
        if (
          'id' in results[0] &&
          'name' in results[0] &&
          'background_image' in results[0] &&
          'rating' in results[0]
        ) {
          const games: Game[] = results.map((game: Res) => {
            return {
              id: game.id,
              name: game.name,
              background_image: game.background_image,
              rating: game.rating,
            }
          })

          dispatch({ type: ActionType.SUCCESS, payload: games })
        }
      } catch (error) {
        if (axios.isCancel(error)) return
        dispatch({ type: ActionType.ERROR })
        console.log(error)
      }
    })()
    return () => cancelToken.cancel()
  }, [])

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
  }
}

export default useGetdata
