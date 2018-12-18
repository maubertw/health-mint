import React, { Component } from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import Info from './patient-info.js'
import Contact from './patient-contact.js'
import {connect} from 'react-redux'
import { updateLastPage } from '../store/patient-information'


class Walkthrough extends Component {


  // changeView = (e, page) => {
  //   e.preventDefault()
  //   this.setState({
  //     page
  //   })
  // }

  render (){
    const { page } = this.props
    return (
      <div>
        <h1>HealthMint Sign Up</h1>
        {
          page === 'info' ? <Info changeView={this.changeView}/> : <Contact changeView={this.changeView}/>
        }
      </div>
    )
  }
}

const mapState = state => {
  return {
    page: state.patientInfo.page
  }
}



export default  withRouter(connect(mapState)(Walkthrough))
