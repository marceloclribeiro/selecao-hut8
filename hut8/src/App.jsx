import React from 'react'
import './App.css';
import Routes from './Routes'

function App() {


  return (
    <div className="App">
      <Routes />
      
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

//semana 3
//cosnt [count, setCount] = useState({})
//

// const [count, setCount] = useState(0)

//   const addNumber = () => {
//     setCount(count + 1)
//   }

// voce clicou {count} vezes.
//       <button onClick={addNumber}>
//         soma
//       </button>


//--
// const [menu, setMenu] = useState("dashboard")
// <ul>
//         <li><button onClick={ () => {setMenu("dashboard")}}  >dashboard</button></li>
//         <li><button onClick={ () => {setMenu("courses")}}>meus cursos</button></li>
//       </ul>
//       {menu === "dashboard" ? (
//         <h3>dashboard</h3>
//       ):(
//         <h3>meus cursos</h3>
//       )}



//use effect
//useEffect(()=>{
  //chama a requisição
  //.then(res => {
    // setBlablabla({

    // }
  // })
// })