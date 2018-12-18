import axios from 'axios'


const UPDATE_INFO = 'UPDATE_INFO'
const ADD_PATIENT = 'ADD_PATIENT'
const UPDATE_LAST_PAGE = 'UPDATE_LAST_PAGE'


const initialState = {
  first: '',
  middle: '',
  last: '',
  age: null,
  address: '',
  email: '',
  password: '',
  isAdmin: false,
  lastPage: 'info'
}


export const updateLastPage = page => ({type: UPDATE_LAST_PAGE, page})
export const updatePatientInfo = (change) => ({type: UPDATE_INFO, change})
const addNewPatient = patient => ({type: ADD_PATIENT, patient})



export const addNewPatientThunk = (info) => async dispatch => {
  let res
  try {
    res = await axios.post('/patient/new', info)
  } catch(err) {
    console.err(err)
  }
}


export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INFO:
      return {...state, ...action.change }
    case UPDATE_LAST_PAGE:
      return {...state, page: action.page}
    case ADD_PATIENT:
      return {...initialState}
    default:
      return state
  }
}
