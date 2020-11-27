import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import Course from '../../components/Course'
function Courses(props){

    return(
      <div className="courses">
        <h1>Meus cursos</h1>
        <div className="content">
          {props.courses.map((course) =>
          <Link to={`/course/${course.class}`}>
            <Course 
              course={course.course}
              type={course.type}
              class= {course.class}
              image={course.image}
            />
          </Link>
          )}
        </div>
      </div>
    )
  
  
  }
  
  export default Courses