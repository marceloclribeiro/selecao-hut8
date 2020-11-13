import './styles.css'

function Task(props){
  return (
    <div className="task">
      <img src={props.image} alt=""/>
      <p className="class">{props.course}</p>
      <h1>{props.title}</h1>
      <p className="date">{props.deadline}</p>
    </div>
  )
}
export default Task