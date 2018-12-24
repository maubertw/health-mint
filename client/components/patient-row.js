import React from 'react'

const PatientRow = (props) => {
  const { first, middle, last, email, address, age} = props.patient
  const name = `${last}, ${first} ${middle}`
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{age}</td>
    </tr>
  )
}

export default PatientRow
