import MyComponent from "./MyComponent";
const FirstComponent = () => {
    return (
        <div>
            <h1>Meu primeiro Componente</h1>
            <p className="teste">Hello</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent