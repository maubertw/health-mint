import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { getAllUsersThunk } from '../store/patient-list'
import PatientRow from './patient-row'

/**
 * COMPONENT
 */
class UserHome extends Component {


  componentDidMount(){
    this.props.getUsersList()
  }


  render(){
    const {email, isAdmin } = this.props.user
    const { patientList, user } = this.props
    return (
      <div>
        <h3>Welcome, {email}</h3>
        <table>
          <thead>
            <tr>
              <td>NAME</td>
              <td>EMAIL</td>
              <td>ADDRESS</td>
              <td>AGE</td>
            </tr>
          </thead>
          <tbody>
              {
                isAdmin && patientList.length ? patientList.map(patient => {
                  return <PatientRow key={patient.id} patient={patient} />
                }) :
                <PatientRow patient={user} />
              }
          </tbody>
        </table>
      </div>
    )
  }
}


const mapState = state => {
  return {
    user: state.user,
    patientList: state.patientList.patients
  }
}

const mapDispatch = dispatch => {
  return {
    getUsersList: () => dispatch(getAllUsersThunk())
  }
}

export default connect(mapState, mapDispatch)(UserHome)


UserHome.propTypes = {
  email: PropTypes.string
}
