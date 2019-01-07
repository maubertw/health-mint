import React, { Component } from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import PatientInfoForm from './patient-info.js'
import PatientContactForm from './patient-contact.js'



const Walkthrough = (props) => {
    const page = props.history.location.pathname
    return (
      <div className='walkthrough-container'>
        <h1 className='teal'>HealthMint Sign Up</h1>
        {
          page === '/walkthrough/info' ? <PatientInfoForm /> : <PatientContactForm />
        }
      </div>
    )
  }



export default  withRouter(Walkthrough)
