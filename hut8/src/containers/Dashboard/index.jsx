import './styles.css'
import graduationCap from '../../assets/Dashboard/graduation-cap-solid.svg'
import tasks from '../../assets/Dashboard/tasks-solid.svg'
import userGraduate from '../../assets/Dashboard/user-graduate-solid.svg'
import Task from '../../components/Task'

function Home(props){

  return(
    <div className="home">
      <h1>Resumo</h1>
      <div className="summary">
        <div className="gray-container">
          <h1>{props.enrolledCourses}</h1>
          <p>Cursos matriculados</p>
          <img src={graduationCap} alt="Chapéu de formando"/>
        </div>
        <div className="gray-container">
          <h1>{props.nextActivities}</h1>
          <p>Atividades próximas</p>
          <img src={tasks} alt="Chapéu de formando"/>
        </div>
        <div className="gray-container">
          <h1>{props.onlineStudents}</h1>
          <p>Alunos online</p>
          <img src={userGraduate} alt="Chapéu de formando"/>
        </div>
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
          course="Projeto de Banco de Dados"
          title="Enviar o esquema MySQL"
          image="https://i.imgur.com/RgQrlAS.jpeg" 
          deadline="10/10/2020"
          />
          
      </div>
    </div>
  )


}

export default Home