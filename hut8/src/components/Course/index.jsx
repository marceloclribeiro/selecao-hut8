import './styles.css'
function Course(props){
  return (
    <div className="course">
      <img src={props.image} alt=""/>
      <p className="type">{props.type}</p>
      <h1>{props.course}</h1>
      <p className="class">{props.class}</p>
    </div>
  )
}

export default Course