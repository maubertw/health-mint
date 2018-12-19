import React from 'react'

const PatientRow = (props) => {
  return (
    <tr>
      <td>{props.patient.first}</td>
    </tr>
  )
}

export default PatientRow
