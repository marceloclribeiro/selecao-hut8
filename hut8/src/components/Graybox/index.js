import './styles.css'
function Graybox(props){
  return(
  <div className="gray-box">
    <p>{props.number}</p>
    <p className="text">{props.text}</p>
    <div>
      <img src={props.img} alt={props.alt}/>
    </div>
  </div>
  )
}
export default Graybox