import './styles.css'

function Task(props) {
  return (
    <div className='task'>
      <img src={props.image} alt='' />
      <p className='class'>{props.course}</p>
      <p className='task-title'>{props.title}</p>
      <p className='date'>{props.deadline}</p>
    </div>
  )
}
export default Task
