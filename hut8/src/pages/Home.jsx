import '../styles/pages/home.css'
import graduationCap from '../images/graduation-cap-solid.svg'
import tasks from '../images/tasks-solid.svg'
import userGraduate from '../images/user-graduate-solid.svg'

function Home(){

    return(
        <div className="home">
            <div className="courses top-container">
                <h1>Resumo</h1>
                <div className="gray-container">
                    <h1>02</h1>
                    <p>Cursos matriculados</p>
                    

                    <img src={graduationCap} alt="Chapéu de formando"/>
                    

                </div>
            </div>
            <div className="activities top-container">
                <div className="gray-container">
                    <h1>02</h1>
                    <p>Atividades próximas</p>
                    <img src={tasks} alt="Chapéu de formando"/>

                </div>
            </div>
            <div className="students top-container">
                <div className="gray-container">
                    <h1>785</h1>
                    <p>Alunos online</p>
                    <img src={userGraduate} alt="Chapéu de formando"/>

                </div>
            </div>

            <div className="tasks">

            </div>

        </div>
    )


}

export default Home