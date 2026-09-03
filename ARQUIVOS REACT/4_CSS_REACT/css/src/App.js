import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from './components/Title';

function App() {
    const n=15;
    const [name] = useState("Matheus")
    const redTitle = false
  return (
    <div className="App">
        {/*CSS global */}
          <h1>React com CSS</h1>
        {/*CSS de componente*/}
          <MyComponent />
          <p>Este paragrafo é do app.js</p>
        {/* Inline CSS */}
          <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}> Este elemento foi estilizado de forma inline </p>
        
        {/* Inline CSS dinâmico*/}   
          <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}> CSS dinâmico </h2>
          <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}> CSS dinâmico </h2>
          <h2 style={
            name === "Matheus" 
            ? {color : "green", background: "#B0E0E6"}
            : null }> Teste Nome </h2>

        {/* Classe dinâmica*/}
            <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

        {/* CSS Modules */}
        <Title/>
        <h2 className="my-title">Testando</h2>

    </div>
  );
}

export default App;
