import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {NavLink} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className='splash'>
      <div className='login-box'>
      <div className='splash-header'>
      <h1 className='splash-title teal'>Welcome to HealthMint!</h1>
      </div>
      <h1 className='teal'>Login</h1>
      <form className='login-form' onSubmit={name === 'login' ? handleSubmit : (e) => handleSubmit(e, props.newPatient)} name={name}>
      <div>
        {
          name === 'signup' && <p>Please choose an email and password for this account.  Your email will be used as the username for this account</p>
        }
      </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>

          <button type="submit">{displayName}</button>

        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <NavLink to='/walkthrough/info' className='teal signup-link'><h1> or SignUp!</h1></NavLink>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  const { email, password, address, age, first, last, middle } = state.patientInfo
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
    newPatient: {
      email,
      address,
      age,
      first,
      last,
      middle,
      password
    }
  }
}

const mapDispatchSignup = dispatch => {
  return {
    handleSubmit(evt, patient) {
      evt.preventDefault()
      console.log('patient', patient)
      const email = evt.target.email.value
      const password = evt.target.password.value
      const formName = evt.target.name
      dispatch(auth(email, password, formName, patient))
    }
  }
}

const mapDispatchLogin = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatchLogin)(AuthForm)
export const Signup = connect(mapSignup, mapDispatchSignup)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
