import React from 'react'
import './styles.css'
function Course(props) {
  return (
    <div className='course-component'>
      <img src={props.image} alt='' />
      <p className='type'>{props.type}</p>
      <p className='course-name'>{props.course}</p>
      <p className='course-class'>{props.class}</p>
    </div>
  )
}

export default Course
