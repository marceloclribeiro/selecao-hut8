import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Dashboard from './containers/Dashboard'
import Courses from './containers/Courses'
import Course from './containers/Course'
import Loader from './components/Loader'

import {getData} from './services/requests'


function Routes(){
    const [data, setData] = useState(null)
    const id = 0;

    useEffect(() => {
    getData()
    .then(res => {
        console.log(res.data[0].name)
        setData(res.data)})
    }, [])

    return (
        <BrowserRouter>

            {data ? (<>
                <Sidebar 
                name={data[0].name}
                course={data[0].course}
                avatar={data[0].avatar}
                />
            <Switch>
                <Route exact path= '/' 
                    render={(props) => 
                        <Dashboard 
                            enrolledCourses={data[0].overview.enrolledCourses}
                            nextActivities={data[0].overview.nextActivities}
                            onlineStudents={data[0].overview.onlineStudents}
                            nextTasks = {data[0].nextActivities}
                        />
                    }

                />
                
                <Route path= '/courses'
                    render={(props) => 
                    <Courses 
                        courses={data[0].courses}
                    
                    
                    />
                    
                    
                    
                    }/>
                {/* <Route path= '/course' 
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
                        
                        
                        /> */}
                <Route path= '/course/M52'
                    render={(props) =>
                        <Course 
                        course= {data[0].courses[0].course}
                        type= {data[0].courses[0].type}
                        class= {data[0].courses[0].class}
                        image= {data[0].courses[0].image}
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
             
        
        
        
        
            </>) : <Loader />
                    }
        </BrowserRouter>
    )
}
export default Routes