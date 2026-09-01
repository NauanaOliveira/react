import './App.css';
import Hydros from "./assets/hydros2.jpg";
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
        <div>
          <img src="/hydros1.jpg" alt="Paisagem"/>
        </div>

      {/*Imagem em public*/}
        <div>
          <img src={Hydros} alt="Cidade"/>
        </div>

      <ManageData/>

      <ListRender/>

      <ConditionalRender/>

      {/* props */}
      <ShowUserName name="Nauana"/>

      {/* Destructuring */}
      <CarDetails brand="BMW" km={12525} color="Prata" newCar={true}/>

      {/* Reaproveitando */}
      <CarDetails brand="Ford" color="Preto" km={78989} newCar={false}/>
      <CarDetails brand="Fiat" color="Vermelho" km={54368} newCar={false}/>

    </div>
  );
}

export default App;
