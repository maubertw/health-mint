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
      <div>
        <h3>First, please tell us a little about yourself</h3>
        <form onChange={this.handleChange}>
            First name: <input type="text" name="first" /><br/>
            Middle name (optional): <input type="text" name="middle"/><br/>
            Last name: <input type="text" name="last"/><br/>
            Age: <select name='age'>
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
        </form>
        <button onClick={this.nextPage} >Save and Continue</button>
      </div>)
  }
}


const mapDispatch = dispatch => {
  return {
    updateInfo: (change) => { dispatch(updatePatientInfo(change)) },
    changePage: (page) => dispatch(updateLastPage(page))
  }
}

export default withRouter(connect(null, mapDispatch)(PatientInfoForm))
