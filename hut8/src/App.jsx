import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './containers/Dashboard'
import Courses from './containers/Courses'
import Course from './containers/Course'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <Routes />
      {/* <Sidebar 
        name="Fausto Silva"
        course="Ciência da Computação"
        avatar="https://i.imgur.com/aU48TWI.jpg"
      /> */}
      {/* <Dashboard 
        enrolledCourses="02"
        nextActivities="02"
        onlineStudents="785"
      /> */}
      {/* <Courses /> */}
      
      {/* <Course 
        course= "Projeto de Banco de Dados"
        type= "Graduação"
        class="M72"
        image= "https://i.imgur.com/GpfCzWB.jpg"
        teacher = {{
          name: 'Ana Maria Braga',
          avatar: "https://i.imgur.com/Cq92E0k.jpg"
        }}
        overview= {{
          nextActivities: 1,
          credits: 4,
          enrolledStudents: 53
        }}
        nextActivities= {{
          course: "Projeto de Banco de Dados",
          title: "Enviar o esquema MySQL",
          image: "https://i.imgur.com/RgQrlAS.jpg",
          deadline: "10/10/20"
        }} 
         /> */}
    </div>
  );
}

export default App;

//src
//  assets - imagens,fontes, etc
//  components - header, sidebar, navbar, menu, footer...
//    .js e .css

//  containers - paginas, etc
//    .js e .css

//  global - css global
//  services - api, requests

