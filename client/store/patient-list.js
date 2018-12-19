import axios from 'axios'

const GET_USERS_LIST = 'GET_USERS_LIST'

const initialState = {
  patients: []
}

const getUsersList = patients => ({type:  GET_USERS_LIST, patients})


export const getAllUsersThunk = () => async dispatch => {
  try{
    let {data} = await axios.get('/api/users')
    dispatch(getUsersList(data))
  }catch(err){
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_LIST:
      return {patients: action.patients}
    default:
      return state
  }
}



