import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Dashboard from './containers/Dashboard'
import Courses from './containers/Courses'
import Course from './containers/Course'
import Loader from './components/Loader'

import { getData } from './services/requests'

function Routes() {
  const [data, setData] = useState(null)

  useEffect(() => {
    getData().then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <BrowserRouter>
      {data ? (
        <>
          <Sidebar name={data[0].name} course={data[0].course} avatar={data[0].avatar} />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Dashboard
                  enrolledCourses={data[0].overview.enrolledCourses}
                  nextActivities={data[0].overview.nextActivities}
                  onlineStudents={data[0].overview.onlineStudents}
                  nextTasks={data[0].nextActivities}
                />
              )}
            />

            <Route path='/courses' render={props => <Courses courses={data[0].courses} />} />
            <Route
              path='/course/M52'
              render={props => (
                <Course
                  course={data[0].courses[0].course}
                  type={data[0].courses[0].type}
                  class={data[0].courses[0].class}
                  image={data[0].courses[0].image}
                  teacher={{
                    name: data[0].courses[0].teacher.name,
                    avatar: data[0].courses[0].teacher.avatar
                  }}
                  overview={{
                    nextActivities: data[0].courses[0].overview.nextActivities,
                    credits: data[0].courses[0].overview.credits,
                    enrolledStudents: data[0].courses[0].overview.enrolledStudents
                  }}
                  nextActivities={data[0].courses[0].nextActivities}
                />
              )}
            />
            <Route
              path='/course/M72'
              render={props => (
                <Course
                  course={data[0].courses[1].course}
                  type={data[0].courses[1].type}
                  class={data[0].courses[1].class}
                  image={data[0].courses[1].image}
                  teacher={{
                    name: data[0].courses[1].teacher.name,
                    avatar: data[0].courses[1].teacher.avatar
                  }}
                  overview={{
                    nextActivities: data[0].courses[1].overview.nextActivities,
                    credits: data[0].courses[1].overview.credits,
                    enrolledStudents: data[0].courses[1].overview.enrolledStudents
                  }}
                  nextActivities={data[0].courses[1].nextActivities}
                />
              )}
            />
          </Switch>
        </>
      ) : (
        <Loader />
      )}
    </BrowserRouter>
  )
}
export default Routes
