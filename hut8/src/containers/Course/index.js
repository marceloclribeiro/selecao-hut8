import './styles.css'
import graduationCap from '../../assets/Dashboard/graduation-cap-solid.svg'
import tasks from '../../assets/Dashboard/tasks-solid.svg'
import userGraduate from '../../assets/Dashboard/user-graduate-solid.svg'
import Task from '../../components/Task'
import Graybox from '../../components/Graybox'

function Course(props) {
  return (
    <div className='course'>
      <div className='info'>
        <div className='course-info'>
          <h1>{props.course}</h1>
          <p>{props.class}</p>
        </div>
        <div className='teacher'>
          <img src={props.teacher.avatar} alt='' />
          <div>
            <h2>{props.teacher.name}</h2>
            <p>Professor responsável</p>
          </div>
        </div>
      </div>
      <div className='summary'>
        <Graybox
          number={props.overview.nextActivities}
          text={'Atividades próximas'}
          img={graduationCap}
          alt={'Chapéu de formatura'}
        />
        <Graybox number={props.overview.credits} text={'Créditos'} img={tasks} alt={'Tarefas'} />
        <Graybox
          number={props.overview.enrolledStudents}
          text={'Alunos matrículados'}
          img={userGraduate}
          alt={'Usuário com chapéu de formatura'}
        />
      </div>
      <h1>Próximas atividades</h1>
      <div className='tasks'>
        {console.log(props.nextActivities.course)}

        {props.nextActivities.map(task => (
          <Task
            course={task.course}
            title={task.title}
            image={task.image}
            deadline={task.deadline}
          />
        ))}
      </div>
    </div>
  )
}
export default Course
