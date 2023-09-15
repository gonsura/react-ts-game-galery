import { Game } from '../hook/useGetdata'

export enum ActionType {
  START = 'START',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
}

export interface State {
  loading: boolean
  data: Game[] | []
  error: boolean
}

export interface Action {
  type: ActionType
  payload?: Game[]
}

export const dataReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.START:
      return {
        loading: true,
        error: false,
        data: [],
      }
    case ActionType.SUCCESS:
      return {
        loading: false,
        data: action.payload || [],
        error: false,
      }
    case ActionType.ERROR:
      return {
        error: true,
        loading: false,
        data: [],
      }
    default:
      return state
  }
}
