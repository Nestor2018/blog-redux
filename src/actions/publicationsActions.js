import axios from 'axios'

import {GET_PUBLICATION_USER, LOADING, ERROR} from '../types'

export const getPublicationUser = (id) => async(dispatch, getState) => {
  /* dispatch({
    type: LOADING
  }) */
  try {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
    /* const { publications } = getState().publicationsReducer
    const publications_updated = [
      ...publications,
      response.data
    ] */
  dispatch({
    type: GET_PUBLICATION_USER,
    payload: response.data,
  })
  } catch (error) {
    dispatch({
			type: ERROR,
			payload: 'Publicaciones no disponibles'
		});
  }
}