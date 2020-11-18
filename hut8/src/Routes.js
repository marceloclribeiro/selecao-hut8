import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Dashboard from './containers/Dashboard'
import Courses from './containers/Courses'
import Course from './containers/Course'

function Routes(){
    const data = useState([
        {
            name: "Carlos Calage",
            course: "Ciência da Computação",
            avatar:"https://i.imgur.com/aU48TWI.jpg"
        }
    ])
    return (
        <BrowserRouter>
            <Sidebar 
                name="Fausto Silva"
                course="Ciência da Computação"
                avatar="https://i.imgur.com/aU48TWI.jpg"
            />
            <Switch>
                <Route exact path= '/' 
                    render={(props) => 
                    <Dashboard 
                        enrolledCourses="02"
                        nextActivities="02"
                        onlineStudents="785"
                    />}
                />
                
                <Route path= '/courses' component={Courses}/>
                <Route path= '/course' 
                    render={(props) =>
                        <Course 
                            course= "Projeto de Banco de Dados"
                            type= "Graduação"
                            class="M72"
                            image= "https://i.imgur.com/GpfCzWB.jpg"
                            teacher = {{
                              name: 'Ana Maria Braga',
                              avatar: "https://i.imgur.com/Cq92E0k.jpg"
                            }}
                            overview= {{
                              nextActivities: 1,
                              credits: 4,
                              enrolledStudents: 53
                            }}
                            nextActivities= {{
                              course: "Projeto de Banco de Dados",
                              title: "Enviar o esquema MySQL",
                              image: "https://i.imgur.com/RgQrlAS.jpg",
                              deadline: "10/10/20"
                            }} 
                        />}
                        
                        
                />
            </Switch>
        
        
        
        
        </BrowserRouter>
    )
}
export default Routes