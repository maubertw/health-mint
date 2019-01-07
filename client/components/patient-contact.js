import React, { Component } from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import { updatePatientInfo, updateLastPage } from '../store/patient-information'
import {connect} from 'react-redux'


class PatientContactForm extends Component {
  constructor(){
    super()
    this.state = {
      street: '',
      city: '',
      state: '',
      zip: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { street, city, state, zip } = this.state
    this.props.updateInfo({address: `${street} ${city} ${state} ${zip}`})
    this.props.history.push('/walkthrough/signup')
  }

  render(){
    return(
      <div className='login-box'>
        <h3>Next, we will need your contact information</h3>
        <form className='walkthrough-form' onChange={this.handleChange}>
            <div>Street Address: <input type="text" name="street" /></div><br/>
            <div>City: <input type="text" name="city"/></div><br/>
            <div>State: <input type="text" name="state"/></div><br/>
            <div>Zip: <input type="text" name="zip"/></div><br/>
        </form>
        <button className='teal signup-link' onClick={this.handleSubmit}>save and continue</button>
      </div>)
  }
}


const mapDispatch = dispatch => {
  return {
    updateInfo: (change) => { dispatch(updatePatientInfo(change)) }
  }
}

export default withRouter(connect(null, mapDispatch)(PatientContactForm))
