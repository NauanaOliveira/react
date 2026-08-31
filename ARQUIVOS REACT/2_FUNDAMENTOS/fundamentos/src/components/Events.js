const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log('Ativou o Evento');
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        }
        else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique here</button>
                <button onClick={() => console.log("Clicou!")}>Clique aqui</button>
                <button onClick={() => { 
                            if (true){
                                console.log("isso não deveria existir");
                            }
                        }
                    }>Clique aqui também!</button>
            </div>
           {renderSomething(true)}
           {renderSomething(false)}
        </div>
    );

};

export default Events;