import './App.css';
import Sidebar from './components/Sidebar'
import Home from './containers/Dashboard'
import Courses from './containers/Courses'

function App() {
  return (
    <div className="App">
      <Sidebar 
        name="Fausto Silva"
        course="Ciência da Computação"
        avatar="https://i.imgur.com/aU48TWI.jpg"
      />
      <Home 
        enrolledCourses="2"
        nextActivities="2"
        onlineStudents="785"
      />
      <Courses />
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

