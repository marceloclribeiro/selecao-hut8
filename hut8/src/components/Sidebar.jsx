import '../styles/components/sidebar.css'
function Sidebar(){

    return (
        <div className="sidebar">
            <img src="https://i.imgur.com/aU48TWI.jpg" className="icon" alt="OLOCO BIXO"/>
            <h2 className="user-name">Fausto Silva</h2>
            <p>Ciência da Computação</p>

            <h1 className="dashboard">Dashboard</h1>
            <h1 className="courses">Meus cursos</h1>

        </div>
    )
}

export default Sidebar