import './styles.css'
function Sidebar(props){

    return (
        <div className="sidebar">
            <img src={props.avatar} className="icon" alt="OLOCO BIXO"/>
            <h2 className="user-name">{props.name}</h2>
            <p>{props.course}</p>

            <h1 className="dashboard">Dashboard</h1>
            <h1 className="courses">Meus cursos</h1>

        </div>
    )
}

export default Sidebar