import './App.css';
import Hydros from "./assets/hydros2.jpg";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
        <div>
          <img src="/hydros.jpg" alt="Paisagem"/>
        </div>

      {/*Imagem em public*/}
        <div>
          <img src={Hydros} alt="Cidade"/>
        </div>

    </div>
  );
}

export default App;
