import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import Course from '../../components/Course'
function Courses(){

    return(
      <div className="courses">
        <h1>Meus cursos</h1>
        <div className="content">
          <Link to='/course'>
            <Course 
              course="Algoritmos e Programação"
              type="Graduação"
              class= "M52"
              image="https://i.imgur.com/dSG2ZLX.jpg"
            />
          </Link>
          <Course 
            course= "Projeto de Banco de Dados"
            type= "Graduação"
            class= "M72"
            image= "https://i.imgur.com/GpfCzWB.jpg"
          />
          <Course 
            course="Algoritmos e Programação"
            type="Graduação"
            class= "M52"
            image="https://i.imgur.com/dSG2ZLX.jpg"
          />
          <Course 
            course="Algoritmos e Programação"
            type="Graduação"
            class= "M52"
            image="https://i.imgur.com/dSG2ZLX.jpg"
          />
          <Course 
            course="Algoritmos e Programação"
            type="Graduação"
            class= "M52"
            image="https://i.imgur.com/dSG2ZLX.jpg"
          />
          <Course 
            course="Algoritmos e Programação"
            type="Graduação"
            class= "M52"
            image="https://i.imgur.com/dSG2ZLX.jpg"
          />
          
        </div>
      </div>
    )
  
  
  }
  
  export default Courses