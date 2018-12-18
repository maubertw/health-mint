import React, { Component } from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import { updatePatientInfo, updateLastPage } from '../store/patient-information'
import {connect} from 'react-redux'


class Contact extends Component {
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
    console.log(this.props.history)
    const { street, city, state, zip } = this.state
    this.props.updateInfo({address: `${street} ${city} ${state} ${zip}`})
  }

  render(){
    return(
      <div>
        <h3>Next we will need your contact information</h3>
        <form onChange={this.handleChange}>
            Street Address: <input type="text" name="street" /><br/>
            City: <input type="text" name="city"/><br/>
            State: <input type="text" name="state"/><br/>
            Zip: <input type="text" name="zip"/><br/>
        </form>
        <NavLink exact to="/signup"><button onSubmit={this.handleSubmit}>save and continue</button></NavLink>
        <button onClick={this.props.changePage}>back</button>
      </div>)
  }
}


const mapDispatch = dispatch => {
  return {
    updateInfo: (change) => { dispatch(updatePatientInfo(change)) },
    changePage: page => { dispatch(updateLastPage('info'))}
  }
}

export default withRouter(connect(null, mapDispatch)(Contact))
