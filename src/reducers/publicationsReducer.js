import { GET_PUBLICATION_USER, LOADING, ERROR } from '../types'

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case GET_PUBLICATION_USER:
      return {
        ...state, 
        publications: action.payload,
        loading: false,
        error: ''
      }

      case LOADING:
			return { ...state, loading: true };

		case ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
      };
      
    default: return state
  }
}