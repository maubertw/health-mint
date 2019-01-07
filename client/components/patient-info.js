import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { updatePatientInfo, updateLastPage } from '../store/patient-information'
import {connect} from 'react-redux'




class PatientInfoForm extends Component {

  handleChange = (e) => {
    e.preventDefault()
    this.props.updateInfo({[e.target.name]: e.target.value})
  }

  nextPage = () => {
    this.props.history.push('/walkthrough/contact')
  }

  render(){
    return(
      <>
      <div className='login-box'>
      <h3 className='teal'>First, please tell us a little about yourself</h3>
        <form className='walkthrough-form' onChange={this.handleChange}>
            <div>First name: <input type="text" name="first" /></div><br/>
            <div>Middle name (optional): <input type="text" name="middle"/></div><br/>
            <div>Last name: <input type="text" name="last"/></div><br/>
            <div>Age: <select name='age'>
              {
                new Array(100).fill('opt').map((option, i) => {
                  if(i === 0){
                    return <option key={`key${i}`} >age</option>
                  }else{
                    return <option key={`key${i}`} >{i}</option>
                  }
                })
              }
            </select>
            </div>
        </form>
        <button className='teal signup-link' onClick={this.nextPage} >Save and Continue</button>
      </div>
      </>)
  }
}


const mapDispatch = dispatch => {
  return {
    updateInfo: (change) => { dispatch(updatePatientInfo(change)) },
    changePage: (page) => dispatch(updateLastPage(page))
  }
}

export default withRouter(connect(null, mapDispatch)(PatientInfoForm))
