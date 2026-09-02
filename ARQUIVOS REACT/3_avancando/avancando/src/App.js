import './App.css';
import Hydros from "./assets/hydros2.jpg";
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  // const name = "Rogério";
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Laranja", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "Preto", newCar: false, km: 8546},
    {id: 3, brand: "Ram", color: "Cinza", newCar: true, km: 0}
  ];

   function showMessage() {
    console.log("Evento do componete pai!");
   };

   const [message, setMessage] = useState("")

   const handleMessage = (msg) => {
    setMessage(msg);
   }

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
      <ShowUserName name={userName}/>

      {/* Destructuring */}
      <CarDetails brand="BMW" km={12525} color="Prata" newCar={true}/>

      {/* Reaproveitando */}
      <CarDetails brand="Ford" color="Preto" km={78989} newCar={false}/>
      <CarDetails brand="Fiat" color="Vermelho" km={54368} newCar={false}/>

      {/* Loop em Array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
        newCar={car.newCar}
      />
      ))}

      {/* Fregment */}
      <Fragment/>

      {/* Children */}
      <Container myValue="testing">
        <p>E este é o conteudo</p>
      </Container>
      <Container myValue="testing 2">
        <h2>testando o conteiner</h2>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFuction={showMessage} />

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />

      
      
    </div>
  );
}

export default App;
