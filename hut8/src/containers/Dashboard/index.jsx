import './styles.css'
import graduationCap from '../../assets/Dashboard/graduation-cap-solid.svg'
import tasks from '../../assets/Dashboard/tasks-solid.svg'
import userGraduate from '../../assets/Dashboard/user-graduate-solid.svg'
import Task from '../../components/Task'
import Graybox from '../../components/Graybox'

function Home(props){

  return(
    <div className="dashboard">
      <h1>Resumo</h1>
      <div className="summary">
        <Graybox number={props.enrolledCourses} text={"Cursos matriculados"} img={graduationCap} alt={"Chapéu de formatura"}/>
        <Graybox number={props.nextActivities} text={"Atividades próximas"} img={tasks} alt={"Tarefas"}/>
        <Graybox number={props.onlineStudents} text={"Alunos online"} img={userGraduate} alt={"Usuário com chapéu de formatura"}/>
      </div>
      
      <h1>Próximas atividades</h1>
      <div className="next-tasks">
        <Task 
          course="Algoritmos e programação"
          title="Enviar arquivo Peter Smokes"
          image="https://i.imgur.com/aadwyfC.jpg" 
          deadline="10/10/2020"
          />
          <Task 
          course="Projeto de Banco de Dados"
          title="Enviar o esquema MySQL"
          image="https://i.imgur.com/RgQrlAS.jpeg" 
          deadline="10/10/2020"
          />
          <Task 
          course="Algoritmos e programação"
          title="Enviar arquivo Peter Smokes"
          image="https://i.imgur.com/aadwyfC.jpg" 
          deadline="10/10/2020"
          />
          <Task 
          course="Algoritmos e programação"
          title="Enviar arquivo Peter Smokes"
          image="https://i.imgur.com/aadwyfC.jpg" 
          deadline="10/10/2020"
          />
          
      </div>
    </div>
  )


}

export default Home